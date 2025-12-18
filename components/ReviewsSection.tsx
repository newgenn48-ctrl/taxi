const reviews = [
  {
    name: 'Peter van der Berg',
    location: 'Den Haag Centrum',
    rating: 5,
    text: 'Uitstekende service! De chauffeur was op tijd en zeer vriendelijk. De auto was schoon en comfortabel. Zeker aanrader voor iedereen die een betrouwbare taxi nodig heeft.',
    date: '2 weken geleden',
  },
  {
    name: 'Maria Jansen',
    location: 'Scheveningen',
    rating: 5,
    text: 'Al meerdere keren gebruik gemaakt voor ritten naar Schiphol. Altijd op tijd, vaste prijs en vriendelijke chauffeurs. Top service!',
    date: '1 maand geleden',
  },
  {
    name: 'Ahmed El Amrani',
    location: 'Rijswijk',
    rating: 5,
    text: 'Zeer tevreden over de service. Boeken via WhatsApp ging super makkelijk en de prijs was precies zoals afgesproken. Geen verrassingen achteraf.',
    date: '3 weken geleden',
  },
  {
    name: 'Sandra de Vries',
    location: 'Wassenaar',
    rating: 5,
    text: 'Professionele taxiservice met nette auto\'s. De chauffeur hielp zelfs met mijn bagage. Aanrader voor luchthavenvervoer!',
    date: '1 week geleden',
  },
  {
    name: 'Jan Bakker',
    location: 'Voorburg',
    rating: 5,
    text: 'Betrouwbaar en betaalbaar. Gebruik deze taxi al jaren voor zakelijke ritten. Nooit teleurgesteld.',
    date: '2 maanden geleden',
  },
  {
    name: 'Lisa Vermeer',
    location: 'Leidschendam',
    rating: 5,
    text: 'Snelle service, binnen 10 minuten stond de taxi voor de deur. Chauffeur was beleefd en reed veilig. Zeker weer!',
    date: '1 maand geleden',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-accent-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-16 md:py-24 bg-accent-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container-luxury px-4 md:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
            <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-primary-700 text-sm font-semibold">Klantervaringen</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent-900 mb-4">
            Wat Onze Klanten <span className="text-gradient-orange">Zeggen</span>
          </h2>
          <p className="text-accent-600 max-w-2xl mx-auto">
            Lees de ervaringen van tevreden klanten die onze taxiservice in Den Haag hebben gebruikt.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-accent-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-lg">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-accent-900">{review.name}</p>
                    <p className="text-sm text-accent-500">{review.location}</p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-accent-600 mb-4 leading-relaxed">{review.text}</p>
              <p className="text-xs text-accent-400">{review.date}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-semibold text-accent-900">4.9/5</span>
            <span className="text-accent-500">gemiddelde score</span>
          </div>
          <div className="h-8 w-px bg-accent-200 hidden sm:block" />
          <div className="text-accent-600">
            <span className="font-semibold text-accent-900">500+</span> tevreden klanten
          </div>
          <div className="h-8 w-px bg-accent-200 hidden sm:block" />
          <div className="text-accent-600">
            <span className="font-semibold text-accent-900">25 jaar</span> ervaring
          </div>
        </div>
      </div>
    </section>
  )
}
