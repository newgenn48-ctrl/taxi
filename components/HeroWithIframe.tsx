import Image from 'next/image'
import InlineWebbooker from './InlineWebbooker'

const contact = {
  whatsapp: '31702042200',
  phone: '+31702042200',
  phoneDisplay: '070-204 2200',
}

export default function HeroWithIframe() {
  return (
    <section className="relative min-h-screen bg-accent-900 overflow-x-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/Taxi.webp"
          alt="Taxi Den Haag - Betrouwbare taxiservice met vaste tarieven 24/7 beschikbaar"
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Mobile: Booking Widget - FIRST on mobile */}
          <div className="lg:hidden animate-fade-in order-1 w-full overflow-hidden">
            <div className="w-full max-w-[calc(100vw-32px)] mx-auto">
              <p className="text-center text-white mb-3 text-sm">
                Boek online of bel{' '}
                <a href={`tel:${contact.phone}`} className="text-primary-400 font-semibold hover:underline">
                  {contact.phoneDisplay}
                </a>
              </p>
              <InlineWebbooker />
            </div>
          </div>

          {/* Left Column - Content (Second on mobile, First on desktop) */}
          <div className="text-center lg:text-left animate-slide-up order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-4 lg:mb-6 tracking-tight">
              Taxi Den Haag
              <br />
              <span className="text-gradient-orange">24/7 Beschikbaar</span>
            </h1>

            <p className="text-lg md:text-xl text-accent-200 mb-5 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              <strong className="text-white">Taxi Den Haag</strong> nodig? Boek snel uw taxi met{' '}
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
                href={`https://wa.me/${contact.whatsapp}?text=Hallo, ik wil graag een taxi boeken.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-bold rounded-xl transition-all duration-300 hover:bg-green-600 hover:scale-105 shadow-lg text-lg"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Nu
              </a>
              <a href={`tel:${contact.phone}`} className="inline-flex items-center justify-center px-6 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel {contact.phoneDisplay}
              </a>
            </div>

            {/* Mobile CTAs */}
            <div className="lg:hidden mt-6 flex flex-col gap-3">
              <a href={`tel:${contact.phone}`} className="btn-primary w-full justify-center text-lg group">
                <svg className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel {contact.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${contact.whatsapp}?text=Hallo, ik wil graag een taxi boeken.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-6 py-4 bg-green-500 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-green-600"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Bericht
              </a>
            </div>
          </div>

          {/* Right Column - Booking Widget (Desktop) */}
          <div className="animate-fade-in hidden lg:block order-2">
            <p className="text-center text-white mb-3">
              Boek online of bel{' '}
              <a href={`tel:${contact.phone}`} className="text-primary-400 font-semibold hover:underline">
                {contact.phoneDisplay}
              </a>
            </p>
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
        <div className="absolute bottom-[84px] md:bottom-[100px] lg:bottom-[120px] left-0 right-0 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  )
}
