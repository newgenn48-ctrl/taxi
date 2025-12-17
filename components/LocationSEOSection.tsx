import Link from 'next/link'

interface Location {
  slug: string
  name: string
  description: string
  metaTitle: string
  metaDescription: string
  heroText: string
  highlights: string[]
  popularRoutes: { from: string; to: string; price: string }[]
  neighborhoods?: string[]
}

interface LocationSEOSectionProps {
  locations: Location[]
  showAll?: boolean
}

export default function LocationSEOSection({
  locations,
  showAll = false,
}: LocationSEOSectionProps) {
  // Prioriteit locaties - belangrijkste steden/wijken eerst voor SEO
  const priorityOrder = ['scheveningen', 'wassenaar', 'rijswijk', 'voorburg', 'leidschendam', 'centrum-den-haag', 'benoordenhout', 'kijkduin']

  const sortedLocations = [...locations].sort((a, b) => {
    const aIndex = priorityOrder.indexOf(a.slug)
    const bIndex = priorityOrder.indexOf(b.slug)
    if (aIndex === -1 && bIndex === -1) return 0
    if (aIndex === -1) return 1
    if (bIndex === -1) return -1
    return aIndex - bIndex
  })

  // Toon 8 belangrijkste locaties op homepage
  const displayLocations = showAll ? sortedLocations : sortedLocations.slice(0, 8)

  return (
    <section id="locaties" className="relative py-16 bg-accent-50">
      <div className="container-luxury">
        {/* Compact Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-accent-900 mb-3">
            Taxi in Den Haag & Omgeving
          </h2>
          <p className="text-accent-600">
            Wij rijden in heel de Haagse regio — klik voor tarieven per locatie
          </p>
        </div>

        {/* Compact Locations Grid - 4 kolommen */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {displayLocations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="group bg-white rounded-xl p-4 shadow-sm border border-accent-100 hover:shadow-md hover:border-primary-200 transition-all duration-200"
            >
              <h3 className="font-semibold text-accent-900 group-hover:text-primary-600 transition-colors mb-1">
                Taxi {location.name}
              </h3>
              <p className="text-xs text-accent-500 mb-2 line-clamp-1">
                Vaste tarieven, 24/7 beschikbaar
              </p>
              <div className="flex items-center text-primary-600 text-sm font-medium">
                <span>Bekijk tarieven</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        {!showAll && locations.length > 8 && (
          <div className="text-center">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              <span>Bekijk alle {locations.length} locaties</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
