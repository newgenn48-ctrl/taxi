import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden | HaagseTaxiApp',
  description: 'Algemene voorwaarden van HaagseTaxiApp - Taxiservice Den Haag',
}

export default function VoorwaardenPage() {
  return (
    <main className="pt-32 pb-20 bg-white">
      <div className="container-luxury px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-accent-900 mb-8">
            Algemene Voorwaarden
          </h1>

          <div className="prose prose-lg max-w-none text-accent-700">
            <p className="text-accent-500 mb-8">
              Laatst bijgewerkt: december 2024
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">1. Algemeen</h2>
              <p>
                Deze algemene voorwaarden zijn van toepassing op alle diensten van HaagseTaxiApp,
                gevestigd te Cartesiusstraat 186, 2562 SP Den Haag, ingeschreven bij de Kamer van
                Koophandel onder nummer 67194346.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">2. Definities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>HaagseTaxiApp:</strong> de onderneming die taxivervoer aanbiedt.</li>
                <li><strong>Klant:</strong> de natuurlijke of rechtspersoon die gebruik maakt van onze diensten.</li>
                <li><strong>Rit:</strong> het vervoer van de klant van ophaaladres naar bestemming.</li>
                <li><strong>Boeking:</strong> de reservering van een taxirit via telefoon, WhatsApp of online.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">3. Boekingen en Reserveringen</h2>
              <p className="mb-4">
                Een boeking kan worden gemaakt via:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Telefonisch: 070-204 2200</li>
                <li>WhatsApp: 070-204 2200</li>
                <li>Online via onze website</li>
              </ul>
              <p>
                Na bevestiging van de boeking is er sprake van een overeenkomst. De klant ontvangt
                een bevestiging met de ritgegevens en de vaste prijs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">4. Tarieven en Betaling</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Alle prijzen zijn vaste prijzen en inclusief BTW.</li>
                <li>Er gelden geen nachttoeslagen of bagagetoeslagen.</li>
                <li>De prijs die bij boeking wordt opgegeven is de definitieve prijs.</li>
                <li>Betaling kan contant, per pin, creditcard of iDEAL.</li>
                <li>Bij zakelijke ritten kan op factuur worden betaald na goedkeuring.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">5. Annulering</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Annuleren is kosteloos tot 1 uur voor de geplande ophaaltijd.</li>
                <li>Bij annulering binnen 1 uur voor ophaaltijd kan 50% van de ritprijs in rekening worden gebracht.</li>
                <li>Bij no-show (niet verschijnen) wordt de volledige ritprijs in rekening gebracht.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">6. Wachttijd</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bij luchthavenpick-ups is 60 minuten wachttijd inbegrepen vanaf de geplande landingstijd.</li>
                <li>Bij overige ritten is 10 minuten wachttijd inbegrepen.</li>
                <li>Extra wachttijd wordt berekend tegen €0,50 per minuut.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">7. Verplichtingen van de Klant</h2>
              <p>De klant dient:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Op tijd aanwezig te zijn op het afgesproken ophaaladres.</li>
                <li>Correcte contactgegevens te verstrekken.</li>
                <li>Zich te gedragen volgens de normale fatsoensnormen.</li>
                <li>Geen schade toe te brengen aan het voertuig.</li>
                <li>Niet te roken in het voertuig.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">8. Aansprakelijkheid</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>HaagseTaxiApp is verzekerd voor personenvervoer conform wettelijke eisen.</li>
                <li>Wij zijn niet aansprakelijk voor vertragingen door overmacht (files, weersomstandigheden, etc.).</li>
                <li>Verloren voorwerpen worden 14 dagen bewaard. Neem contact op via 070-204 2200.</li>
                <li>Aansprakelijkheid is beperkt tot het bedrag dat door onze verzekering wordt gedekt.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">9. Klachten</h2>
              <p>
                Klachten kunnen worden ingediend via info@haagsetaxiapp.nl of telefonisch via
                070-204 2200. Wij streven ernaar klachten binnen 5 werkdagen te behandelen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">10. Toepasselijk Recht</h2>
              <p>
                Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden
                voorgelegd aan de bevoegde rechter in Den Haag.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">Contact</h2>
              <p>
                HaagseTaxiApp<br />
                Cartesiusstraat 186<br />
                2562 SP Den Haag<br />
                Telefoon: 070-204 2200<br />
                E-mail: info@haagsetaxiapp.nl<br />
                KvK: 67194346
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
