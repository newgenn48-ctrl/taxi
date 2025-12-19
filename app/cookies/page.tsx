import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookiebeleid | HaagseTaxiApp',
  description: 'Cookiebeleid van HaagseTaxiApp - Informatie over het gebruik van cookies op onze website',
}

export default function CookiesPage() {
  return (
    <main className="pt-32 pb-20 bg-white">
      <div className="container-luxury px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-accent-900 mb-8">
            Cookiebeleid
          </h1>

          <div className="prose prose-lg max-w-none text-accent-700">
            <p className="text-accent-500 mb-8">
              Laatst bijgewerkt: december 2024
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">1. Wat zijn cookies?</h2>
              <p>
                Cookies zijn kleine tekstbestanden die op uw computer, tablet of smartphone worden
                opgeslagen wanneer u onze website bezoekt. Deze cookies helpen ons om de website
                goed te laten functioneren en om uw gebruikerservaring te verbeteren.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">2. Welke cookies gebruiken wij?</h2>
              <p className="mb-4">Op onze website gebruiken wij de volgende soorten cookies:</p>

              <h3 className="text-lg font-semibold text-accent-800 mt-6 mb-3">Noodzakelijke cookies</h3>
              <p className="mb-4">
                Deze cookies zijn essentieel voor het functioneren van de website. Zonder deze
                cookies kan de website niet goed werken. Deze cookies verzamelen geen persoonlijke
                informatie.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Sessie cookies voor het boekingsformulier</li>
                <li>Beveiligingscookies</li>
              </ul>

              <h3 className="text-lg font-semibold text-accent-800 mt-6 mb-3">Analytische cookies</h3>
              <p className="mb-4">
                Wij gebruiken analytische cookies om te begrijpen hoe bezoekers onze website
                gebruiken. Dit helpt ons om de website te verbeteren.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google Analytics (geanonimiseerd)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">3. Cookies van derden</h2>
              <p>
                Onze website maakt gebruik van diensten van derden die ook cookies kunnen plaatsen:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>YourWebBooker:</strong> voor het boekingsformulier</li>
                <li><strong>Google Analytics:</strong> voor websitestatistieken</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">4. Cookies beheren</h2>
              <p className="mb-4">
                U kunt zelf bepalen of u cookies accepteert. U kunt uw browser zo instellen dat
                deze geen cookies accepteert of u waarschuwt wanneer er cookies worden geplaatst.
              </p>
              <p className="mb-4">
                Hieronder vindt u links naar instructies voor de meest gebruikte browsers:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/nl/kb/cookies-verwijderen-gegevens-wissen-websites-opgeslagen" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/nl-nl/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/nl-nl/microsoft-edge/cookies-verwijderen-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">Microsoft Edge</a></li>
              </ul>
              <p className="mt-4">
                Let op: het uitschakelen van cookies kan de functionaliteit van de website beperken.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">5. Bewaartermijn</h2>
              <p>
                Cookies worden bewaard voor verschillende periodes, afhankelijk van het type cookie:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Sessie cookies:</strong> worden verwijderd wanneer u de browser sluit</li>
                <li><strong>Analytische cookies:</strong> maximaal 2 jaar</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">6. Contact</h2>
              <p>
                Heeft u vragen over ons cookiebeleid? Neem dan contact met ons op:
              </p>
              <p className="mt-4">
                HaagseTaxiApp<br />
                E-mail: info@haagsetaxiapp.nl<br />
                Telefoon: 070-204 2200
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">7. Wijzigingen</h2>
              <p>
                Wij kunnen dit cookiebeleid van tijd tot tijd aanpassen. De meest actuele versie
                vindt u altijd op deze pagina. Wij raden u aan om dit beleid regelmatig te
                raadplegen.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
