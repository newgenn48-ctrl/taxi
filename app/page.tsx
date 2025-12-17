import HeroWithIframe from '@/components/HeroWithIframe'
import ServicesSection from '@/components/ServicesSection'
import PricingSection from '@/components/PricingSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import LocationSEOSection from '@/components/LocationSEOSection'
import {
  SchipholTaxiSchema,
  ZakelijkVervoerSchema,
  RolstoelTaxiSchema,
  LuchthavenVervoerSchema,
} from '@/components/ServiceSchema'
import locationsData from '@/data/locations.json'

export default function HomePage() {
  return (
    <>
      {/* Service Schemas for SEO */}
      <SchipholTaxiSchema />
      <ZakelijkVervoerSchema />
      <RolstoelTaxiSchema />
      <LuchthavenVervoerSchema />

      {/* 1. Hero met boekingsformulier */}
      <HeroWithIframe />

      {/* 2. Tarieven - direct na hero want dit is wat mensen zoeken */}
      <PricingSection />

      {/* 3. Diensten - kort overzicht */}
      <ServicesSection />

      {/* 4. Waarom wij */}
      <WhyChooseUs />

      {/* 5. Locaties - compact */}
      <LocationSEOSection locations={locationsData.locations} />

      {/* 6. FAQ Section for SEO */}
      <section className="py-16 bg-white">
        <div className="container-luxury">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
              <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-primary-700 text-sm font-semibold">Veelgestelde Vragen</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-accent-900 mb-3">
              Taxi Den Haag — <span className="text-gradient-orange">FAQ</span>
            </h2>
            <p className="text-accent-600 max-w-2xl mx-auto">
              Antwoorden op de meest gestelde vragen over onze taxiservice in Den Haag
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            <details className="group bg-accent-50 rounded-xl border border-accent-100 overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none p-5">
                <h3 className="font-semibold text-accent-900 pr-4">
                  Hoe kan ik een taxi in Den Haag bestellen?
                </h3>
                <svg className="w-5 h-5 text-accent-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-accent-600">
                  Een taxi bestellen in Den Haag kan via ons online boekingsformulier, WhatsApp of telefonisch.
                  Onze taxicentrale in Den Haag is 24/7 bereikbaar. Na uw boeking ontvangt u direct een bevestiging
                  met de exacte ritprijs. Snel, eenvoudig en betrouwbaar.
                </p>
              </div>
            </details>

            <details className="group bg-accent-50 rounded-xl border border-accent-100 overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none p-5">
                <h3 className="font-semibold text-accent-900 pr-4">
                  Wat zijn de taxi tarieven in Den Haag?
                </h3>
                <svg className="w-5 h-5 text-accent-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-accent-600">
                  Onze taxi Den Haag tarieven zijn vast en transparant. Taxi Den Haag naar Schiphol: vanaf €79,50.
                  Taxi Den Haag naar Rotterdam Airport: vanaf €55,-. Taxi Den Haag naar Amsterdam: vanaf €125,-.
                  Vul uw route in voor een directe prijsopgave. De prijs die u ziet is inclusief BTW.
                </p>
              </div>
            </details>

            <details className="group bg-accent-50 rounded-xl border border-accent-100 overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none p-5">
                <h3 className="font-semibold text-accent-900 pr-4">
                  Betaal ik extra voor nachtritten of bagage?
                </h3>
                <svg className="w-5 h-5 text-accent-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-accent-600">
                  <strong>Nee, absoluut niet.</strong> Bij onze taxiservice in Den Haag betaalt u geen nachttoeslag,
                  geen bagagetoeslag en geen extra kosten voor koffers. De prijs die u bij het boeken ziet is de prijs
                  die u betaalt. All-in, inclusief BTW. Of u nu om 3 uur &apos;s nachts naar Schiphol moet of met 4 koffers
                  reist — dezelfde eerlijke prijs.
                </p>
              </div>
            </details>

            <details className="group bg-accent-50 rounded-xl border border-accent-100 overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none p-5">
                <h3 className="font-semibold text-accent-900 pr-4">
                  Hoe snel is er een taxi in Den Haag beschikbaar?
                </h3>
                <svg className="w-5 h-5 text-accent-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-accent-600">
                  Wij zijn 24 uur per dag, 7 dagen per week beschikbaar in Den Haag en omgeving.
                  U kunt ook vooraf reserveren voor een specifiek tijdstip, bijvoorbeeld voor een
                  vroege vlucht naar Schiphol. Onze chauffeurs zijn snel ter plaatse.
                </p>
              </div>
            </details>

            <details className="group bg-accent-50 rounded-xl border border-accent-100 overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none p-5">
                <h3 className="font-semibold text-accent-900 pr-4">
                  In welke gebieden rond Den Haag rijden jullie?
                </h3>
                <svg className="w-5 h-5 text-accent-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-accent-600">
                  Wij rijden door heel Den Haag en de regio: Wassenaar, Voorburg, Leidschendam, Rijswijk,
                  Scheveningen en alle Haagse wijken. Ook verzorgen wij luchthavenvervoer naar Schiphol
                  en Rotterdam The Hague Airport. Voor zakelijk vervoer en groepsvervoer kunt u ook buiten de regio
                  bij ons terecht.
                </p>
              </div>
            </details>

            <details className="group bg-accent-50 rounded-xl border border-accent-100 overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none p-5">
                <h3 className="font-semibold text-accent-900 pr-4">
                  Kan ik gratis annuleren?
                </h3>
                <svg className="w-5 h-5 text-accent-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-accent-600">
                  Ja, u kunt uw taxirit in Den Haag kosteloos annuleren tot 1 uur voor de geplande ophaaltijd.
                  Plannen veranderd? Geen probleem. Neem contact met ons op via WhatsApp of telefoon en wij
                  regelen het direct voor u.
                </p>
              </div>
            </details>
          </div>

          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Hoe kan ik een taxi in Den Haag bestellen?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Een taxi bestellen in Den Haag kan via ons online boekingsformulier, WhatsApp of telefonisch. Onze taxicentrale in Den Haag is 24/7 bereikbaar. Snel, eenvoudig en betrouwbaar.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Wat zijn de taxi tarieven in Den Haag?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Onze taxi Den Haag tarieven zijn vast en transparant. Taxi Den Haag naar Schiphol: vanaf €79,50. Taxi Den Haag naar Rotterdam Airport: vanaf €55,-. Taxi Den Haag naar Amsterdam: vanaf €125,-. Inclusief BTW.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Betaal ik extra voor nachtritten of bagage?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Nee, absoluut niet. Bij onze taxiservice in Den Haag betaalt u geen nachttoeslag, geen bagagetoeslag en geen extra kosten. De prijs die u ziet is de prijs die u betaalt, all-in inclusief BTW.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Hoe snel is er een taxi in Den Haag beschikbaar?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Wij zijn 24/7 beschikbaar in Den Haag en omgeving. U kunt direct boeken of vooraf reserveren voor snelle service.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'In welke gebieden rond Den Haag rijden jullie?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Wij rijden door heel Den Haag en de regio: Wassenaar, Voorburg, Leidschendam, Rijswijk, Scheveningen en alle Haagse wijken. Ook luchthavenvervoer naar Schiphol en Rotterdam Airport.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Kan ik gratis annuleren?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Ja, u kunt kosteloos annuleren tot 1 uur voor de geplande ophaaltijd.',
                    },
                  },
                ],
              }),
            }}
          />
        </div>
      </section>

    </>
  )
}
