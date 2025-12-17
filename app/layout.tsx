import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'

export const metadata: Metadata = {
  metadataBase: new URL('https://haagsetaxiapp.nl'),
  title: {
    default: 'Taxi Den Haag | Schiphol vanaf €79,50 | 070-204 2200',
    template: '%s',
  },
  description:
    'Taxi Den Haag bestellen? ✓ Schiphol vanaf €79,50 ✓ Vaste prijzen ✓ 24/7 beschikbaar ✓ Geen nachttoeslag. Bel 070-204 2200 of boek direct online.',
  keywords: [
    'taxi Den Haag',
    'taxi bestellen Den Haag',
    'taxi Den Haag Schiphol',
    'taxi Scheveningen',
    'taxi Wassenaar',
    'taxi Rijswijk',
    'taxi Voorburg',
    'taxi Leidschendam',
    'taxi centrale Den Haag',
    'taxi 24 uur Den Haag',
    'taxi Den Haag vaste prijs',
    'Schiphol taxi Den Haag',
    'luchthavenvervoer Den Haag',
    'taxi Rotterdam Airport',
  ],
  authors: [{ name: 'HaagseTaxiApp' }],
  creator: 'HaagseTaxiApp',
  publisher: 'HaagseTaxiApp',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://haagsetaxiapp.nl',
    siteName: 'HaagseTaxiApp',
    title: 'Taxi Den Haag | Schiphol vanaf €79,50 | 070-204 2200',
    description:
      'Taxi Den Haag bestellen? ✓ Schiphol vanaf €79,50 ✓ Vaste prijzen ✓ 24/7 beschikbaar ✓ Geen nachttoeslag. Bel 070-204 2200 of boek direct online.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HaagseTaxiApp - Taxicentrale Den Haag',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taxi Den Haag | Schiphol vanaf €79,50 | 070-204 2200',
    description:
      'Taxi Den Haag bestellen? ✓ Schiphol vanaf €79,50 ✓ Vaste prijzen ✓ 24/7 beschikbaar ✓ Geen nachttoeslag. Bel 070-204 2200 of boek direct online.',
    images: ['/images/og-image.jpg'],
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
  alternates: {
    canonical: 'https://haagsetaxiapp.nl',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        {/* Inline Webbooker */}
        <link rel="stylesheet" href="https://yourwebbooker.com/inline-webbooker/styles.css" />
        <meta name="theme-color" content="#f97316" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
        <meta name="msapplication-TileColor" content="#f97316" />
        {/* Geo Meta Tags for Local SEO */}
        <meta name="geo.region" content="NL-ZH" />
        <meta name="geo.placename" content="Den Haag" />
        <meta name="geo.position" content="52.0799;4.3386" />
        <meta name="ICBM" content="52.0799, 4.3386" />
        {/* TaxiService + LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['TaxiService', 'LocalBusiness'],
              '@id': 'https://haagsetaxiapp.nl/#organization',
              name: 'HaagseTaxiApp',
              alternateName: ['Taxi Den Haag', 'Haagse Taxi App', 'Taxi Den Haag 24/7'],
              description:
                'Betrouwbare taxiservice in Den Haag en omgeving. Vaste prijzen, 24/7 beschikbaar, professionele chauffeurs. Direct online boeken of bel 070-204 2200.',
              url: 'https://haagsetaxiapp.nl',
              logo: {
                '@type': 'ImageObject',
                url: 'https://haagsetaxiapp.nl/images/logo.png',
                width: 200,
                height: 60,
              },
              image: [
                'https://haagsetaxiapp.nl/images/og-image.jpg',
                'https://haagsetaxiapp.nl/images/Taxi.webp',
              ],
              telephone: '+31-70-204-2200',
              email: 'info@haagsetaxiapp.nl',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Cartesiusstraat 186',
                addressLocality: 'Den Haag',
                addressRegion: 'Zuid-Holland',
                postalCode: '2562 SP',
                addressCountry: 'NL',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 52.0799,
                longitude: 4.3386,
              },
              areaServed: [
                { '@type': 'City', name: 'Den Haag', '@id': 'https://www.wikidata.org/wiki/Q36600' },
                { '@type': 'City', name: 'Wassenaar' },
                { '@type': 'City', name: 'Voorburg' },
                { '@type': 'City', name: 'Rijswijk' },
                { '@type': 'City', name: 'Leidschendam' },
                { '@type': 'Neighborhood', name: 'Scheveningen', containedInPlace: { '@type': 'City', name: 'Den Haag' } },
                { '@type': 'State', name: 'Zuid-Holland' },
              ],
              priceRange: '€€',
              currenciesAccepted: 'EUR',
              paymentAccepted: ['Cash', 'Credit Card', 'Debit Card', 'PIN', 'iDEAL'],
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                  opens: '00:00',
                  closes: '23:59',
                },
              ],
              slogan: 'Betrouwbaar, comfortabel, vaste tarieven',
              knowsLanguage: ['nl', 'en', 'de'],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Taxi Diensten Den Haag',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'TaxiReservation',
                      name: 'Taxi Den Haag naar Schiphol',
                      description: 'Betrouwbare taxi van Den Haag naar Schiphol Airport met vaste prijs',
                    },
                    price: '79.50',
                    priceCurrency: 'EUR',
                    availability: 'https://schema.org/InStock',
                    priceValidUntil: '2026-12-31',
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'TaxiReservation',
                      name: 'Taxi Den Haag naar Rotterdam Airport',
                      description: 'Taxi van Den Haag naar Rotterdam The Hague Airport',
                    },
                    price: '55',
                    priceCurrency: 'EUR',
                    availability: 'https://schema.org/InStock',
                    priceValidUntil: '2026-12-31',
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'TaxiReservation',
                      name: 'Taxi Den Haag naar Amsterdam',
                      description: 'Comfortabele taxi van Den Haag naar Amsterdam Centrum',
                    },
                    price: '125',
                    priceCurrency: 'EUR',
                    availability: 'https://schema.org/InStock',
                    priceValidUntil: '2026-12-31',
                  },
                ],
              },
              potentialAction: {
                '@type': 'ReserveAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://haagsetaxiapp.nl',
                  actionPlatform: [
                    'http://schema.org/DesktopWebPlatform',
                    'http://schema.org/MobileWebPlatform',
                  ],
                },
                result: {
                  '@type': 'TaxiReservation',
                  name: 'Taxi Reservering',
                },
              },
            }),
          }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://haagsetaxiapp.nl/#website',
              name: 'HaagseTaxiApp - Taxi Den Haag',
              url: 'https://haagsetaxiapp.nl',
              publisher: { '@id': 'https://haagsetaxiapp.nl/#organization' },
              inLanguage: 'nl-NL',
            }),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        {/* Skip link voor accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded-lg focus:font-semibold"
        >
          Ga naar hoofdinhoud
        </a>
        <Script
          src="https://yourwebbooker.com/inline-webbooker/webbooker.js"
          type="module"
          strategy="beforeInteractive"
        />
        <Header />
        <main id="main-content" className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  )
}
