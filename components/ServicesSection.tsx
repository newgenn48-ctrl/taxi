const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    title: 'Luchthavenvervoer Den Haag',
    description: 'Altijd op tijd, met vluchtmonitoring en vaste tarieven naar Schiphol, Rotterdam Airport en Eindhoven.',
    features: ['Vaste prijs vanaf €55,-', 'Vlucht monitoring', '30 min gratis wachten'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Zakelijk Vervoer Den Haag',
    description: 'Representatief vervoer voor bedrijven. Altijd op tijd bij uw meeting of zakenafspraak met een professionele chauffeur.',
    features: ['Representatief vervoer', 'Factuur mogelijk', 'Vaste chauffeur optie'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Groepsvervoer Den Haag',
    description: 'Ruime taxibusjes voor families en groepen tot 7 personen. Ideaal voor uitjes, familiebezoek of delegaties.',
    features: ['Tot 7 personen', 'Ruime bagageruimte', 'Vaste prijs'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Zorgvervoer Den Haag',
    description: 'Comfortabel vervoer naar ziekenhuis of huisarts. Geduldige chauffeurs die u helpen bij het in- en uitstappen.',
    features: ['Hulp bij instappen', 'Geduldige chauffeurs', 'Flexibele wachttijd'],
  },
]

export default function ServicesSection() {
  return (
    <section id="diensten" className="relative bg-accent-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-primary-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container-luxury section-padding">
        {/* Section Header - Compacter */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
            <div className="w-2 h-2 bg-primary-500 rounded-full" />
            <span className="text-primary-700 text-sm font-semibold">Onze Diensten</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-accent-900 mb-4">
            Taxi Den Haag voor{' '}
            <span className="text-gradient-orange">Elke Gelegenheid</span>
          </h2>
          <p className="text-accent-600 max-w-xl mx-auto">
            Of u nu naar Schiphol moet, een zakelijke afspraak heeft of zorgvervoer nodig heeft — wij staan voor u klaar.
          </p>
        </div>

        {/* Services Grid - Compacter */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services.map((service) => (
            <article
              key={service.title}
              className="group bg-white rounded-2xl p-6 shadow-luxury border border-accent-100 hover:shadow-luxury-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-accent-900 mb-2">
                {service.title}
              </h3>

              <p className="text-accent-600 text-sm mb-4">{service.description}</p>

              <ul className="space-y-1.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs text-accent-500">
                    <div className="w-1 h-1 rounded-full bg-primary-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Subtle CTA */}
        <div className="text-center pb-8">
          <p className="text-accent-500 text-sm mb-3">Vragen over onze diensten?</p>
          <a
            href="https://wa.me/31702042200?text=Hallo, ik heb een vraag over jullie diensten."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Stuur ons een bericht via WhatsApp
          </a>
        </div>

      </div>

      {/* Subtle curve to next section */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-8 md:h-12"
          viewBox="0 0 1440 48"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48L60 44C120 40 240 32 360 28C480 24 600 24 720 28C840 32 960 40 1080 42C1200 44 1320 40 1380 38L1440 36V48H0Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  )
}
