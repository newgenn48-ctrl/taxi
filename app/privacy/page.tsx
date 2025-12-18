import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacybeleid | HaagseTaxiApp',
  description: 'Privacybeleid van HaagseTaxiApp - Hoe wij omgaan met uw persoonsgegevens',
}

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-20 bg-white">
      <div className="container-luxury px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-accent-900 mb-8">
            Privacybeleid
          </h1>

          <div className="prose prose-lg max-w-none text-accent-700">
            <p className="text-accent-500 mb-8">
              Laatst bijgewerkt: december 2024
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">1. Inleiding</h2>
              <p>
                HaagseTaxiApp, gevestigd te Cartesiusstraat 186, 2562 SP Den Haag, is verantwoordelijk
                voor de verwerking van persoonsgegevens zoals weergegeven in dit privacybeleid.
                Wij respecteren uw privacy en zorgen ervoor dat uw persoonlijke gegevens vertrouwelijk
                worden behandeld.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">2. Contactgegevens</h2>
              <p>
                HaagseTaxiApp<br />
                Cartesiusstraat 186<br />
                2562 SP Den Haag<br />
                Telefoon: 070-204 2200<br />
                E-mail: info@haagsetaxiapp.nl<br />
                KvK: 67194346<br />
                BTW: NL856869806B01
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">3. Persoonsgegevens die wij verwerken</h2>
              <p className="mb-4">
                HaagseTaxiApp verwerkt uw persoonsgegevens doordat u gebruik maakt van onze diensten
                en/of omdat u deze zelf aan ons verstrekt. Hieronder vindt u een overzicht van de
                persoonsgegevens die wij verwerken:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Voor- en achternaam</li>
                <li>Telefoonnummer</li>
                <li>E-mailadres</li>
                <li>Ophaal- en bestemmingsadres</li>
                <li>Datum en tijd van de rit</li>
                <li>Betalingsgegevens</li>
                <li>Vluchtgegevens (bij luchthavenvervoer)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">4. Doel van de gegevensverwerking</h2>
              <p className="mb-4">Wij verwerken uw persoonsgegevens voor de volgende doelen:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Het uitvoeren van de taxirit die u heeft geboekt</li>
                <li>U te kunnen bellen of e-mailen over uw boeking</li>
                <li>Het afhandelen van uw betaling</li>
                <li>Het versturen van een factuur</li>
                <li>Het bijhouden van een klantenbestand voor herhaalde boekingen</li>
                <li>Het verbeteren van onze dienstverlening</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">5. Bewaartermijn</h2>
              <p>
                HaagseTaxiApp bewaart uw persoonsgegevens niet langer dan strikt noodzakelijk is om
                de doelen te realiseren waarvoor uw gegevens worden verzameld. Wij hanteren de
                volgende bewaartermijnen:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Boekingsgegevens: 2 jaar na de rit</li>
                <li>Factuurgegevens: 7 jaar (wettelijke verplichting)</li>
                <li>Contactgegevens voor marketing: tot u zich afmeldt</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">6. Delen met derden</h2>
              <p>
                HaagseTaxiApp verkoopt uw gegevens niet aan derden en verstrekt deze uitsluitend
                indien dit nodig is voor de uitvoering van onze overeenkomst met u of om te voldoen
                aan een wettelijke verplichting. Met bedrijven die uw gegevens verwerken in onze
                opdracht, sluiten wij een verwerkersovereenkomst om te zorgen voor eenzelfde niveau
                van beveiliging en vertrouwelijkheid van uw gegevens.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">7. Cookies</h2>
              <p className="mb-4">
                HaagseTaxiApp gebruikt functionele en analytische cookies. Een cookie is een klein
                tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen in de
                browser van uw computer, tablet of smartphone.
              </p>
              <p className="mb-4">Wij gebruiken de volgende soorten cookies:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Functionele cookies:</strong> noodzakelijk voor het functioneren van de website</li>
                <li><strong>Analytische cookies:</strong> om het gebruik van de website te analyseren en te verbeteren</li>
              </ul>
              <p className="mt-4">
                U kunt zich afmelden voor cookies door uw internetbrowser zo in te stellen dat
                deze geen cookies meer opslaat.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">8. Uw rechten</h2>
              <p className="mb-4">U heeft het recht om:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Uw persoonsgegevens in te zien</li>
                <li>Uw persoonsgegevens te laten corrigeren</li>
                <li>Uw persoonsgegevens te laten verwijderen</li>
                <li>Uw toestemming voor gegevensverwerking in te trekken</li>
                <li>Bezwaar te maken tegen de verwerking van uw persoonsgegevens</li>
                <li>Uw gegevens over te laten dragen (dataportabiliteit)</li>
              </ul>
              <p className="mt-4">
                U kunt een verzoek tot inzage, correctie, verwijdering of gegevensoverdraging
                sturen naar info@haagsetaxiapp.nl. Om er zeker van te zijn dat het verzoek door
                u is gedaan, vragen wij u een kopie van uw identiteitsbewijs bij het verzoek mee
                te sturen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">9. Beveiliging</h2>
              <p>
                HaagseTaxiApp neemt de bescherming van uw gegevens serieus en neemt passende
                maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking
                en ongeoorloofde wijziging tegen te gaan. Onze website maakt gebruik van een
                betrouwbaar SSL-certificaat om te borgen dat uw persoonsgegevens niet in verkeerde
                handen vallen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">10. Klachten</h2>
              <p>
                Als u klachten heeft over de verwerking van uw persoonsgegevens, neem dan contact
                met ons op via info@haagsetaxiapp.nl. U heeft ook het recht een klacht in te dienen
                bij de Autoriteit Persoonsgegevens, de toezichthoudende autoriteit op het gebied
                van privacybescherming.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-accent-900 mb-4">11. Wijzigingen</h2>
              <p>
                HaagseTaxiApp behoudt zich het recht voor om wijzigingen aan te brengen in dit
                privacybeleid. Het is daarom raadzaam om dit privacybeleid regelmatig te raadplegen.
                De meest actuele versie vindt u altijd op onze website.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
