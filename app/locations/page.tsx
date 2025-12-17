import { Metadata } from 'next'
import Link from 'next/link'
import locationsData from '@/data/locations.json'

export const metadata: Metadata = {
  title: 'Taxi Den Haag & Omgeving | Alle Locaties | 070-204 2200',
  description:
    'Taxi nodig in Den Haag, Wassenaar, Scheveningen of Rijswijk? ✓ Vaste prijzen ✓ 24/7 beschikbaar ✓ 17 locaties. Bel 070-204 2200!',
  keywords: [
    'taxi Den Haag',
    'taxi Scheveningen',
    'taxi Wassenaar',
    'taxi Rijswijk',
    'taxi Voorburg',
    'taxi Leidschendam',
    'taxi Zuid-Holland',
    'taxiservice Den Haag',
    'luchthavenvervoer Den Haag',
  ],
  openGraph: {
    title: 'Taxi Den Haag & Omgeving | Alle Locaties',
    description: 'Betrouwbare taxiservice in heel Zuid-Holland. Vaste prijzen, 24/7 beschikbaar.',
    url: 'https://haagsetaxiapp.nl/locations',
    siteName: 'HaagseTaxiApp',
    locale: 'nl_NL',
    type: 'website',
  },
  alternates: {
    canonical: 'https://haagsetaxiapp.nl/locations',
  },
}

export default function LocationsPage() {
  // Structured data voor locations overzicht
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Taxi locaties in Den Haag en omgeving',
    description: 'Alle locaties waar HaagseTaxiApp taxiservice biedt in Zuid-Holland',
    numberOfItems: locationsData.locations.length,
    itemListElement: locationsData.locations.map((location, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'TaxiService',
        name: `Taxi ${location.name}`,
        url: `https://haagsetaxiapp.nl/locations/${location.slug}`,
        description: location.description,
        areaServed: location.name,
      },
    })),
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative bg-accent-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative container-luxury px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Taxi Den Haag & Omgeving <span className="text-gradient-orange">24/7</span>
          </h1>

          <p className="text-lg text-accent-300 max-w-2xl mx-auto">
            Betrouwbare taxiservice met vaste prijzen in heel Zuid-Holland.
            Van Scheveningen tot Wassenaar, van Rijswijk tot Voorburg — bekijk tarieven per locatie.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locationsData.locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                title={`Taxi ${location.name} - 24/7 beschikbaar, vaste prijzen`}
                className="group bg-white rounded-2xl p-6 shadow-luxury border border-accent-100 hover:shadow-luxury-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-accent-900 group-hover:text-primary-600 transition-colors">
                      Taxi {location.name}
                    </h2>
                    <p className="text-sm text-accent-500">
                      24/7 beschikbaar
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-primary-100 group-hover:bg-primary-500 rounded-xl flex items-center justify-center transition-colors">
                    <svg
                      className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>

                <p className="text-accent-600 mb-4 text-sm">{location.description}</p>

                {/* Highlights */}
                {location.highlights && location.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {location.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 py-1 bg-accent-50 text-accent-600 text-xs rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}

                {/* Popular Route Preview */}
                {location.popularRoutes && location.popularRoutes[0] && (
                  <div className="pt-4 border-t border-accent-100">
                    <p className="text-sm text-accent-500 mb-1">
                      Populaire route:
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-accent-700">
                        {location.popularRoutes[0].from} →{' '}
                        {location.popularRoutes[0].to}
                      </span>
                      <span className="text-primary-600 font-bold">
                        {location.popularRoutes[0].price}
                      </span>
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 mt-4">
                  <span>Bekijk tarieven</span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Uw Locatie Niet Gevonden?
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Wij rijden door heel Zuid-Holland. Neem contact op voor een prijsopgave.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/31702042200?text=Hallo, ik wil graag een prijsopgave voor mijn route."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-bold rounded-xl shadow-lg hover:bg-green-600 transition-all"
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
    </>
  )
}
