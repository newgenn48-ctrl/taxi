import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import locationsData from '@/data/locations.json'
import InlineWebbooker from '@/components/InlineWebbooker'

interface Location {
  slug: string
  name: string
  type: 'city' | 'neighborhood'
  parentCity?: string
  description: string
  metaTitle: string
  metaDescription: string
  heroText: string
  highlights: string[]
  popularRoutes: { from: string; to: string; price: string; duration?: string }[]
  neighborhoods?: string[]
  // Legacy content structure
  seoContent?: {
    intro: string
    extendedContent?: string
    services: string[]
    uniquePoints: string[]
    landmarks?: string[]
    transportTips?: string
  }
  // New SEO-optimized content structure
  hero?: {
    headline: string
    subheadline: string
  }
  content?: {
    intro: string
    whyTaxi?: string
    whyUs?: string
    howItWorks?: string
    serviceArea?: string
    destinations?: { name: string; travelTime: string; description: string }[]
    practicalInfo?: string
  }
  // Modern modular structure
  usps?: {
    icon: string
    title: string
    text: string
  }[]
  steps?: {
    number: number
    title: string
    text: string
  }[]
  pricing?: {
    local: { distance: string; price: string }[]
    includes: string[]
  }
  localServices?: {
    name: string
    description: string
    icon: string
  }[]
  faq?: {
    question: string
    answer: string
  }[]
  // Areas can be string[] or { name: string; description: string }[]
  areas?: string[] | { name: string; description: string }[]
  keywords?: string[]
  coordinates?: { lat: number; lng: number }
}

interface Props {
  params: Promise<{ slug: string }>
}

function getLocation(slug: string): Location | undefined {
  return locationsData.locations.find((loc) => loc.slug === slug) as Location | undefined
}

export async function generateStaticParams() {
  return locationsData.locations.map((location) => ({
    slug: location.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const location = getLocation(slug)

  if (!location) {
    return {
      title: 'Locatie niet gevonden',
    }
  }

  // Use custom keywords if available, otherwise generate default ones
  const keywords = location.keywords || [
    `taxi ${location.name}`,
    `taxi ${location.name} bestellen`,
    `taxi ${location.name} Schiphol`,
    `taxiservice ${location.name}`,
    `goedkope taxi ${location.name}`,
    `taxi ${location.name} prijs`,
    `${location.name} taxi 24 uur`,
    location.parentCity ? `taxi ${location.parentCity}` : '',
    'taxi Den Haag',
    'Schiphol taxi',
    'luchthavenvervoer Den Haag',
    'taxi vaste prijs',
  ].filter(Boolean) as string[]

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords,
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `https://haagsetaxiapp.nl/locations/${location.slug}`,
      siteName: 'HaagseTaxiApp',
      locale: 'nl_NL',
      type: 'website',
      images: [
        {
          url: 'https://haagsetaxiapp.nl/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `Taxi ${location.name} - Betrouwbare taxiservice 24/7`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: location.metaTitle,
      description: location.metaDescription,
    },
    alternates: {
      canonical: `https://haagsetaxiapp.nl/locations/${location.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params
  const location = getLocation(slug)

  if (!location) {
    notFound()
  }

  const relatedLocations = locationsData.locations
    .filter((loc) => loc.slug !== slug)
    .slice(0, 6) as Location[]

  // Structured Data - TaxiService + LocalBusiness
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['TaxiService', 'LocalBusiness'],
    '@id': `https://haagsetaxiapp.nl/locations/${location.slug}#taxiservice`,
    name: `Taxi ${location.name} - HaagseTaxiApp`,
    alternateName: `HaagseTaxiApp ${location.name}`,
    description: `Betrouwbare taxi in ${location.name}. 24/7 beschikbaar met vaste prijzen. ${location.description}`,
    url: `https://haagsetaxiapp.nl/locations/${location.slug}`,
    telephone: '+31702042200',
    email: 'info@haagsetaxiapp.nl',
    image: [
      'https://haagsetaxiapp.nl/images/og-image.jpg',
    ],
    logo: 'https://haagsetaxiapp.nl/images/logo.png',
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: ['Cash', 'Credit Card', 'Debit Card', 'iDEAL', 'PIN'],
    areaServed: [
      {
        '@type': location.type === 'city' ? 'City' : 'Neighborhood',
        name: location.name,
        ...(location.parentCity && {
          containedInPlace: {
            '@type': 'City',
            name: location.parentCity,
          },
        }),
      },
      {
        '@type': 'City',
        name: 'Den Haag',
      },
      {
        '@type': 'State',
        name: 'Zuid-Holland',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Grote Marktstraat 1',
      addressLocality: 'Den Haag',
      addressRegion: 'Zuid-Holland',
      postalCode: '2511 BH',
      addressCountry: 'NL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates?.lat || 52.0705,
      longitude: location.coordinates?.lng || 4.3007,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Taxi tarieven ${location.name}`,
      itemListElement: location.popularRoutes.map((route) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'TaxiReservation',
          name: `Taxi ${route.from} - ${route.to}`,
          description: `Taxi rit van ${route.from} naar ${route.to}. Vaste prijs, geen verrassingen.`,
        },
        price: route.price.replace('€', ''),
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      })),
    },
    slogan: 'Betrouwbaar, comfortabel, vaste tarieven',
    knowsLanguage: ['nl', 'en', 'de'],
  }

  // Breadcrumb structured data
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://haagsetaxiapp.nl',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Locaties',
        item: 'https://haagsetaxiapp.nl/locations',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `Taxi ${location.name}`,
        item: `https://haagsetaxiapp.nl/locations/${location.slug}`,
      },
    ],
  }

  // FAQ structured data - use custom FAQ if available, otherwise use defaults
  const schipholPrice = location.popularRoutes.find(r => r.to.toLowerCase().includes('schiphol'))?.price || '€79,50'

  const defaultFaqItems = [
    {
      '@type': 'Question',
      name: `Wat kost een taxi van ${location.name} naar Schiphol?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Een taxi van ${location.name} naar Schiphol kost bij HaagseTaxiApp ${schipholPrice}. Dit is een vaste prijs - u betaalt nooit meer, ook niet bij files of omrijden.`,
      },
    },
    {
      '@type': 'Question',
      name: `Hoe bestel ik een taxi in ${location.name}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Een taxi bestellen in ${location.name} kan via ons online boekingsformulier, WhatsApp of telefonisch via 070-204 2200. Wij zijn 24/7 bereikbaar.`,
      },
    },
    {
      '@type': 'Question',
      name: `Hoe snel kan een taxi in ${location.name} bij mij zijn?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `In ${location.name} streven wij ernaar zo snel mogelijk bij u te zijn. Voor belangrijke afspraken adviseren wij om vooraf te reserveren.`,
      },
    },
    {
      '@type': 'Question',
      name: `Werkt HaagseTaxiApp met vaste prijzen?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Ja, HaagseTaxiApp biedt transparante prijzen. Bij de meeste ritten weet u vooraf wat u betaalt - geen verrassingen achteraf.`,
      },
    },
  ]

  const customFaqItems = location.faq?.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })) || []

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: customFaqItems.length > 0 ? customFaqItems : defaultFaqItems,
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      {/* Hero Section - Same style as homepage */}
      <section className="relative min-h-[80vh] lg:min-h-screen overflow-hidden bg-accent-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/Taxi.webp"
            alt={`Taxi ${location.name} - Betrouwbare taxiservice met vaste tarieven 24/7 beschikbaar`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent-900/95 via-accent-900/80 to-accent-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-accent-900 via-transparent to-transparent" />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative container-luxury section-padding pt-24 md:pt-32 lg:pt-40 pb-32">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-primary-300" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" className="hover:text-white transition-colors" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/locations" className="hover:text-white transition-colors" itemProp="item">
                  <span itemProp="name">Locaties</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span className="text-white" itemProp="name">{location.name}</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Mobile: Booking Widget - FIRST on mobile */}
            <div className="lg:hidden animate-fade-in order-1 w-full overflow-hidden">
              <div className="w-full max-w-[calc(100vw-32px)] mx-auto">
                <InlineWebbooker />
              </div>
            </div>

            {/* Left Column - Content (Second on mobile, First on desktop) */}
            <div className="text-center lg:text-left animate-slide-up order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-4 lg:mb-6 tracking-tight">
                {location.hero?.headline || `Taxi ${location.name}`}
                <br />
                <span className="text-gradient-orange">24/7 Beschikbaar</span>
              </h1>

              <p className="text-lg md:text-xl text-accent-200 mb-5 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                <strong className="text-white">Taxi {location.name}</strong> nodig? Boek snel uw taxi met{' '}
                <strong className="text-white">vaste tarieven</strong> en professionele chauffeurs.
              </p>

              {/* USP Bullets */}
              <ul className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 mb-6 text-sm md:text-base">
                <li className="flex items-center gap-2 text-accent-200">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  TX-Keurmerk gecertificeerd
                </li>
                <li className="flex items-center gap-2 text-accent-200">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Comfortabele voertuigen
                </li>
                <li className="flex items-center gap-2 text-accent-200">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Vaste tarieven, geen verrassingen
                </li>
                <li className="flex items-center gap-2 text-accent-200">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  24/7 bereikbaar
                </li>
              </ul>

              {/* Desktop CTAs */}
              <div className="hidden lg:flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href={`https://wa.me/31702042200?text=Hallo, ik wil graag een taxi boeken in ${location.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-bold rounded-xl transition-all duration-300 hover:bg-green-600 hover:scale-105 shadow-lg text-lg"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Nu
                </a>
                <a href="tel:+31702042200" className="inline-flex items-center justify-center px-6 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Bel 070-204 2200
                </a>
              </div>

              {/* Mobile CTAs - REMOVED: Using Sticky CTA Bar instead */}
            </div>

            {/* Right Column - Booking Widget (Desktop) */}
            <div className="animate-fade-in hidden lg:block order-2">
              <InlineWebbooker />
            </div>
          </div>
        </div>

        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-24 md:h-32 lg:h-40"
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              className="fill-primary-600/20"
            />
            <path
              d="M0 120L60 108C120 96 240 72 360 60C480 48 600 48 720 54C840 60 960 72 1080 78C1200 84 1320 84 1380 84L1440 84V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              className="fill-accent-50"
            />
          </svg>
        </div>
      </section>

      {/* Sticky Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-lg border-t border-accent-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="container-luxury py-3">
          <div className="flex gap-3">
            <a
              href="tel:+31702042200"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bellen
            </a>
            <a
              href={`https://wa.me/31702042200?text=Hallo, ik wil graag een taxi boeken in ${location.name}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>


      {/* Waarom HaagseTaxiApp - With Image */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                {/* 3D Card Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="/images/chauffeur.jpg"
                    alt={`Professionele taxichauffeur in ${location.name}`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-accent-900">TX-Keurmerk</p>
                        <p className="text-xs text-accent-600">Gecertificeerde kwaliteit</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
                <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-primary-700 text-sm font-semibold">Waarom Wij</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-accent-900 mb-6">
                Waarom Kiezen voor HaagseTaxiApp in {location.name}?
              </h2>

              <p className="text-lg text-accent-600 mb-8">
                Wij combineren professionele service met lokale kennis. Onze chauffeurs kennen {location.name} op hun duimpje en brengen u veilig en comfortabel naar uw bestemming.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-accent-900">Transparante Tarieven</h3>
                    <p className="text-accent-600">U weet vooraf wat u betaalt. Geen verborgen kosten of verrassingen achteraf.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-accent-900">Lokale Kennis</h3>
                    <p className="text-accent-600">Onze chauffeurs kennen elke straat in {location.name} en de snelste routes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-accent-900">Betrouwbaar & Veilig</h3>
                    <p className="text-accent-600">TX-Keurmerk gecertificeerd met professionele, ervaren chauffeurs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zo Werkt Het - Modern 3 Steps with Connection Line */}
      <section className="py-16 bg-gradient-to-br from-accent-900 to-accent-800 text-white overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl" />
        </div>

        <div className="container-luxury relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
              <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
              <span className="text-primary-300 text-sm font-semibold">Simpel & Snel</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Zo Werkt Het
            </h2>
            <p className="text-accent-300 max-w-2xl mx-auto">
              In 3 simpele stappen een taxi bestellen in {location.name}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary-500/50 via-primary-400/50 to-primary-500/50" />

            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/30 transform hover:scale-110 transition-transform">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Bel of WhatsApp</h3>
              <p className="text-accent-300">070-204 2200</p>
              <div className="mt-4 flex justify-center gap-3">
                <a href="tel:+31702042200" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <a href={`https://wa.me/31702042200`} className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center hover:bg-green-500/30 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/30 transform hover:scale-110 transition-transform">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Geef Uw Locatie</h3>
              <p className="text-accent-300">Ophaaladres & bestemming</p>
              <div className="mt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-sm">
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {location.name}
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center relative">
              <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/30 transform hover:scale-110 transition-transform">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Uw Taxi Komt</h3>
              <p className="text-accent-300">Wij zijn snel bij u</p>
              <div className="mt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/20 rounded-full text-sm text-green-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Bevestiging per SMS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-accent-50">
        <div className="container-luxury">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
              <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
              <span className="text-primary-700 text-sm font-semibold">Vaste Tarieven</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-accent-900 mb-3">
              Taxi Tarieven vanaf {location.name}
            </h2>
            <p className="text-accent-600 max-w-2xl mx-auto">
              Transparante, vaste prijzen zonder verrassingen. Geen nacht-, weekend- of bagagetoeslag.
            </p>
          </div>

          {/* Distance-based Pricing Table */}
          <div className="max-w-3xl mx-auto mb-10">
            <div className="bg-white rounded-2xl shadow-lg border border-accent-100 overflow-hidden">
              <div className="bg-primary-500 text-white px-6 py-4">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Lokale Tarieven {location.name} & Omgeving
                </h3>
              </div>
              <div className="divide-y divide-accent-100">
                <div className="flex items-center justify-between px-6 py-4 hover:bg-accent-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-sm">1-4</span>
                    </div>
                    <div>
                      <p className="font-semibold text-accent-900">1 tot 4 kilometer</p>
                      <p className="text-sm text-accent-500">Korte ritten in de buurt</p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-primary-600">€14,50</p>
                </div>
                <div className="flex items-center justify-between px-6 py-4 hover:bg-accent-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-sm">4-7</span>
                    </div>
                    <div>
                      <p className="font-semibold text-accent-900">4 tot 7 kilometer</p>
                      <p className="text-sm text-accent-500">Middellange afstanden</p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-primary-600">€24,50</p>
                </div>
                <div className="flex items-center justify-between px-6 py-4 hover:bg-accent-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-sm">7-10</span>
                    </div>
                    <div>
                      <p className="font-semibold text-accent-900">7 tot 10 kilometer</p>
                      <p className="text-sm text-accent-500">Langere ritten in de regio</p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-primary-600">€34,50</p>
                </div>
                <div className="flex items-center justify-between px-6 py-4 bg-accent-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">10+</span>
                    </div>
                    <div>
                      <p className="font-semibold text-accent-900">Meer dan 10 kilometer</p>
                      <p className="text-sm text-accent-500">Per extra kilometer</p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-primary-600">€1,75<span className="text-sm font-normal text-accent-500">/km</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Airport Pricing Section with Photo */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-lg font-bold text-accent-900 text-center mb-6">Luchthaven Tarieven</h3>

            <div className="grid lg:grid-cols-2 gap-6 items-stretch">
              {/* Pricing Cards */}
              <div className="flex flex-col gap-4 order-2 lg:order-1">
                {/* Schiphol */}
                <div className="bg-accent-900 rounded-xl p-5 flex items-center justify-between hover:bg-accent-800 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">Schiphol Airport</p>
                      <p className="text-primary-300 text-sm">Meest geboekt • ca. 35 min</p>
                    </div>
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-white">€79,50</p>
                </div>

                {/* Rotterdam */}
                <div className="bg-white rounded-xl p-5 flex items-center justify-between border-2 border-accent-100 hover:border-primary-200 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-accent-900 text-lg">Rotterdam Airport</p>
                      <p className="text-accent-500 text-sm">The Hague Airport • ca. 20 min</p>
                    </div>
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-primary-600">€55,-</p>
                </div>

                {/* Amsterdam */}
                <div className="bg-white rounded-xl p-5 flex items-center justify-between border-2 border-accent-100 hover:border-primary-200 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-accent-900 text-lg">Amsterdam Centrum</p>
                      <p className="text-accent-500 text-sm">Vaste prijs • ca. 50 min</p>
                    </div>
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-primary-600">€125,-</p>
                </div>

              </div>

              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-64 lg:h-auto lg:min-h-[400px] order-1 lg:order-2">
                <Image
                  src="/images/taxi naar schiphol.webp"
                  alt={`Taxi ${location.name} naar Schiphol - Comfortabel en betrouwbaar`}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-accent-900/90 to-transparent p-6">
                  <p className="text-white font-bold text-lg">Taxi naar Schiphol</p>
                  <p className="text-white/80 text-sm">Comfortabel & op tijd</p>
                </div>
              </div>
            </div>
          </div>

          {/* Price Guarantees */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm">
            <span className="flex items-center gap-2 text-accent-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Geen nachttoeslag
            </span>
            <span className="flex items-center gap-2 text-accent-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Geen bagagetoeslag
            </span>
            <span className="flex items-center gap-2 text-accent-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Gratis wachttijd luchthaven
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding bg-white" itemScope itemType="https://schema.org/Article">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <article>
              <h2 className="text-3xl font-bold text-accent-900 mb-6" itemProp="headline">
                Taxi Bestellen in {location.name} - Vaste Prijzen, 24/7 Service
              </h2>

              <div className="prose prose-lg max-w-none" itemProp="articleBody">
                {/* NEW CONTENT STRUCTURE */}
                {location.content ? (
                  <>
                    {/* Introduction - Service focused */}
                    <p className="text-lg text-accent-600 leading-relaxed mb-6">
                      {location.content.intro}
                    </p>

                    {/* Why Us - REMOVED: Already shown in dedicated "Waarom HaagseTaxiApp" section with image */}

                    {/* How It Works - REMOVED: Already shown in dedicated "Zo Werkt Het" section */}

                    {/* Popular Destinations (old structure) */}
                    {location.content.destinations && location.content.destinations.length > 0 && (
                      <div className="bg-accent-50 rounded-2xl p-6 mb-8 not-prose">
                        <h3 className="text-xl font-bold text-accent-900 mb-4 flex items-center gap-2">
                          <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Populaire Bestemmingen vanuit {location.name}
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {location.content.destinations.map((dest) => (
                            <div key={dest.name} className="bg-white rounded-xl p-4 border border-accent-100">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold text-accent-900">{dest.name}</span>
                                <span className="text-sm text-primary-600 font-medium">{dest.travelTime}</span>
                              </div>
                              <p className="text-sm text-accent-600">{dest.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Service Area Section (new SEO structure) */}
                    {location.content.serviceArea && (
                      <div className="bg-accent-50 rounded-2xl p-6 mb-8 not-prose">
                        <h3 className="text-xl font-bold text-accent-900 mb-4 flex items-center gap-2">
                          <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Ons Werkgebied
                        </h3>
                        <p className="text-accent-600">{location.content.serviceArea}</p>
                      </div>
                    )}

                    {/* Practical Info (old structure) */}
                    {location.content.practicalInfo && (
                      <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6 mb-8 not-prose">
                        <h3 className="text-lg font-bold text-accent-900 mb-3 flex items-center gap-2">
                          <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Praktische Informatie
                        </h3>
                        <p className="text-accent-600">{location.content.practicalInfo}</p>
                      </div>
                    )}
                  </>
                ) : location.seoContent ? (
                  /* LEGACY CONTENT STRUCTURE */
                  <>
                    {/* Introduction */}
                    <p className="text-lg text-accent-600 leading-relaxed mb-6">
                      {location.seoContent.intro}
                    </p>

                    {/* Extended Content */}
                    {location.seoContent.extendedContent && (
                      <div className="text-accent-600 leading-relaxed mb-8 space-y-4">
                        {location.seoContent.extendedContent.split('\n\n').map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    )}

                    {/* Landmarks Section */}
                    {location.seoContent.landmarks && location.seoContent.landmarks.length > 0 && (
                      <div className="bg-accent-50 rounded-2xl p-6 mb-8 not-prose">
                        <h3 className="text-xl font-bold text-accent-900 mb-4 flex items-center gap-2">
                          <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Bezienswaardigheden & Bestemmingen in {location.name}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {location.seoContent.landmarks.map((landmark) => (
                            <span
                              key={landmark}
                              className="px-4 py-2 bg-white text-accent-700 text-sm font-medium rounded-full border border-accent-200 shadow-sm"
                            >
                              {landmark}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* "Waarom Kiezen" - REMOVED: Already shown in dedicated "Waarom HaagseTaxiApp" section with image */}

                    {/* Transport Tips Section */}
                    {location.seoContent.transportTips && (
                      <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6 mb-8 not-prose">
                        <h3 className="text-lg font-bold text-accent-900 mb-3 flex items-center gap-2">
                          <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Vervoerstip
                        </h3>
                        <p className="text-accent-600">{location.seoContent.transportTips}</p>
                      </div>
                    )}
                  </>
                ) : (
                  /* FALLBACK CONTENT - Simplified, "Waarom Kiezen" is in dedicated section */
                  <>
                    <p className="text-lg text-accent-600 mb-6">
                      Zoekt u een betrouwbare taxi in {location.name}?
                      HaagseTaxiApp is uw taxiservice voor alle ritten in
                      en rondom {location.name}. Met onze professionele chauffeurs
                      en comfortabele voertuigen brengen wij u veilig naar uw bestemming.
                    </p>
                  </>
                )}

                {/* Local Services - NEW */}
                {location.localServices && location.localServices.length > 0 && (
                  <>
                    <h3 className="text-xl font-bold text-accent-900 mt-8 mb-4">
                      Onze Taxidiensten in {location.name}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4 mb-8 not-prose">
                      {location.localServices.map((service, index) => (
                        <div key={index} className="bg-accent-50 rounded-xl p-4 hover:bg-accent-100 transition-colors">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              {service.icon === 'plane' && (
                                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                              )}
                              {service.icon === 'train' && (
                                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 4h8m-4 8v-4m-6 4h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                              )}
                              {service.icon === 'hospital' && (
                                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                              )}
                              {service.icon === 'briefcase' && (
                                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                              )}
                              {service.icon === 'moon' && (
                                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                              )}
                              {service.icon === 'hotel' && (
                                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                              )}
                              {service.icon === 'beach' && (
                                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              )}
                              {service.icon === 'shopping' && (
                                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                              )}
                              {service.icon === 'government' && (
                                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                </svg>
                              )}
                              {service.icon === 'event' && (
                                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              )}
                              {!['plane', 'train', 'hospital', 'briefcase', 'moon', 'hotel', 'beach', 'shopping', 'government', 'event'].includes(service.icon) && (
                                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <div>
                              <span className="font-semibold text-accent-900">{service.name}</span>
                              <p className="text-sm text-accent-600 mt-1">{service.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Legacy Services - Only show if no localServices */}
                {!location.localServices && location.seoContent?.services && (
                  <>
                    <h3 className="text-xl font-bold text-accent-900 mt-8 mb-4">
                      Onze Taxidiensten in {location.name}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4 mb-8 not-prose">
                      {location.seoContent.services.map((service, index) => (
                        <div key={index} className="flex items-start gap-3 bg-accent-50 rounded-xl p-4">
                          <svg className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-accent-700 font-medium">{service}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Areas Section - Supports both string[] and object[] */}
                {location.areas && location.areas.length > 0 && (
                  <>
                    <h3 className="text-xl font-bold text-accent-900 mt-8 mb-4">
                      Gebieden in {location.name}
                    </h3>
                    <p className="text-accent-600 mb-4">
                      Onze taxi&apos;s bedienen alle gebieden in {location.name}. Waar u ook bent, wij komen u ophalen:
                    </p>
                    {/* Check if areas is string[] or object[] */}
                    {typeof location.areas[0] === 'string' ? (
                      /* String array - render as tags */
                      <div className="flex flex-wrap gap-2 not-prose mb-8">
                        {(location.areas as string[]).map((area) => (
                          <span
                            key={area}
                            className="px-4 py-2 bg-primary-50 text-primary-700 text-sm font-medium rounded-full border border-primary-100"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    ) : (
                      /* Object array - render as cards */
                      <div className="grid sm:grid-cols-2 gap-4 not-prose mb-8">
                        {(location.areas as { name: string; description: string }[]).map((area) => (
                          <div key={area.name} className="bg-accent-50 rounded-xl p-4">
                            <span className="font-semibold text-accent-900">{area.name}</span>
                            <p className="text-sm text-accent-600 mt-1">{area.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {/* Legacy Neighborhoods - Only show if no areas */}
                {!location.areas && location.neighborhoods && location.neighborhoods.length > 0 && (
                  <>
                    <h3 className="text-xl font-bold text-accent-900 mt-8 mb-4">
                      Buurten en Wijken in {location.name}
                    </h3>
                    <p className="text-accent-600 mb-4">
                      Onze taxi&apos;s bedienen alle wijken en buurten in {location.name}. Waar u ook bent, wij komen u ophalen:
                    </p>
                    <div className="flex flex-wrap gap-2 not-prose">
                      {location.neighborhoods.map((neighborhood) => (
                        <span
                          key={neighborhood}
                          className="px-4 py-2 bg-primary-50 text-primary-700 text-sm font-medium rounded-full border border-primary-100"
                        >
                          {neighborhood}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* FAQ Section - Dynamic */}
              <div className="mt-12" itemScope itemType="https://schema.org/FAQPage">
                <h2 className="text-2xl font-bold text-accent-900 mb-6">
                  Veelgestelde Vragen over Taxi {location.name}
                </h2>
                <div className="space-y-4">
                  {location.faq && location.faq.length > 0 ? (
                    /* Custom FAQ from location data */
                    location.faq.map((item, index) => (
                      <details key={index} className="group bg-accent-50 rounded-xl p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                        <summary className="flex items-center justify-between cursor-pointer list-none">
                          <span className="font-semibold text-accent-900" itemProp="name">{item.question}</span>
                          <svg className="w-5 h-5 text-primary-500 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="mt-4 text-accent-600" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                          <p itemProp="text">{item.answer}</p>
                        </div>
                      </details>
                    ))
                  ) : (
                    /* Default FAQ */
                    <>
                      <details className="group bg-accent-50 rounded-xl p-6">
                        <summary className="flex items-center justify-between cursor-pointer list-none">
                          <span className="font-semibold text-accent-900">Wat kost een taxi van {location.name} naar Schiphol?</span>
                          <svg className="w-5 h-5 text-primary-500 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="mt-4 text-accent-600">
                          <p>
                            Een taxi van {location.name} naar Schiphol kost bij HaagseTaxiApp een <strong>vaste prijs van {schipholPrice}</strong>. U betaalt nooit meer dan de afgesproken prijs, ook niet bij files of omrijden.
                          </p>
                        </div>
                      </details>

                      <details className="group bg-accent-50 rounded-xl p-6">
                        <summary className="flex items-center justify-between cursor-pointer list-none">
                          <span className="font-semibold text-accent-900">Hoe snel kan een taxi in {location.name} bij mij zijn?</span>
                          <svg className="w-5 h-5 text-primary-500 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="mt-4 text-accent-600">
                          <p>
                            Wij streven ernaar <strong>zo snel mogelijk</strong> bij u te zijn in {location.name}. Voor vroege vluchten of belangrijke afspraken adviseren wij om vooraf te reserveren.
                          </p>
                        </div>
                      </details>

                      <details className="group bg-accent-50 rounded-xl p-6">
                        <summary className="flex items-center justify-between cursor-pointer list-none">
                          <span className="font-semibold text-accent-900">Hoe bestel ik een taxi in {location.name}?</span>
                          <svg className="w-5 h-5 text-primary-500 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="mt-4 text-accent-600">
                          <p>
                            U kunt op 3 manieren een taxi bestellen: <strong>1)</strong> Direct online via ons boekingsformulier, <strong>2)</strong> Via WhatsApp, <strong>3)</strong> Telefonisch via 070-204 2200. Wij zijn 24/7 bereikbaar.
                          </p>
                        </div>
                      </details>

                      <details className="group bg-accent-50 rounded-xl p-6">
                        <summary className="flex items-center justify-between cursor-pointer list-none">
                          <span className="font-semibold text-accent-900">Kan ik met PIN of creditcard betalen?</span>
                          <svg className="w-5 h-5 text-primary-500 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="mt-4 text-accent-600">
                          <p>
                            Ja, in onze taxi&apos;s kunt u betalen met <strong>PIN, creditcard, contant of iDEAL</strong> (vooraf). Al onze voertuigen zijn uitgerust met moderne betaalterminals.
                          </p>
                        </div>
                      </details>
                    </>
                  )}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="container-luxury text-center relative">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Direct een Taxi Nodig in {location.name}?
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Boek nu en onze taxi is binnen enkele minuten bij u. 24/7 beschikbaar, altijd vaste prijzen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/31702042200?text=Hallo, ik wil graag een taxi boeken in ${location.name}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-bold rounded-xl shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Nu
            </a>
            <a
              href="tel:+31702042200"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bel 070-204 2200
            </a>
          </div>
        </div>
      </section>

      {/* Related Locations */}
      <section className="section-padding bg-accent-50">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 shadow-sm">
              <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span className="text-primary-700 text-sm font-semibold">Meer Locaties</span>
            </div>
            <h2 className="text-3xl font-bold text-accent-900 mb-4">
              Taxi Service in de Regio
            </h2>
            <p className="text-accent-600 max-w-2xl mx-auto">
              Betrouwbare taxiservice in heel Den Haag en Zuid-Holland. Ontdek onze service bij u in de buurt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                title={`Taxi ${loc.name} - 24/7 beschikbaar met vaste prijzen`}
                className="group bg-white rounded-2xl p-6 shadow-lg border border-accent-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-accent-900 group-hover:text-primary-600 transition-colors">
                      Taxi {loc.name}
                    </h3>
                    <p className="text-sm text-accent-500">
                      {loc.type === 'city' ? 'Gemeente' : 'Wijk'}
                      {loc.parentCity && ` - ${loc.parentCity}`}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-primary-50 group-hover:bg-primary-500 rounded-xl flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-accent-600 text-sm line-clamp-2 mb-4">
                  {loc.description}
                </p>
                <div className="flex items-center text-primary-600 font-semibold text-sm">
                  <span>Bekijk tarieven</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/locations"
              className="btn-secondary"
              title="Alle taxi locaties in Den Haag en omgeving"
            >
              Bekijk Alle Locaties
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
