# HaagseTaxiApp

Premium taxiservice website voor Den Haag en omgeving, gebouwd met Next.js 14, TypeScript en TailwindCSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Taal**: TypeScript
- **Styling**: TailwindCSS
- **Testing**: Jest + React Testing Library (unit), Playwright (e2e)
- **Deployment**: Vercel-ready

## Installatie

```bash
npm install
```

## Ontwikkeling

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## Build

```bash
npm run build
```

## Linting

```bash
npm run lint
```

## Testen

### Unit tests
```bash
npm run test
```

### E2E tests
```bash
npm run test:e2e
```

## Projectstructuur

```
haagsetaxiapp/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout met SEO metadata
│   ├── globals.css           # Global styles
│   ├── sitemap.ts            # Dynamische sitemap generatie
│   ├── robots.ts             # Robots.txt configuratie
│   └── locations/
│       └── [slug]/
│           └── page.tsx      # Dynamische locatiepagina's
├── components/
│   ├── Header.tsx            # Navigatie header
│   ├── Footer.tsx            # Footer met contactinfo
│   ├── HeroWithIframe.tsx    # Hero met TaxiID booking widget
│   ├── ReviewList.tsx        # Reviews met schema.org data
│   ├── ServicesSection.tsx   # Diensten overzicht
│   └── LocationSEOSection.tsx # Locaties grid
├── data/
│   └── locations.json        # Locatie data voor SEO pagina's
├── lib/
│   └── utils.ts              # Utility functies
├── tests/
│   ├── unit/                 # Jest unit tests
│   └── e2e/                  # Playwright e2e tests
└── public/
    └── images/               # Statische afbeeldingen
```

## Iframe Beveiliging

De TaxiID booking iframe gebruikt de volgende sandbox configuratie:

```html
sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
```

### Uitleg sandbox attributen:

| Attribuut | Reden |
|-----------|-------|
| `allow-scripts` | Noodzakelijk voor formulier interactie en validatie |
| `allow-forms` | Noodzakelijk voor versturen van boekingsformulieren |
| `allow-same-origin` | Noodzakelijk voor cookies/sessies van TaxiID |
| `allow-popups` | Noodzakelijk voor betalingsflows in nieuw venster |

**Bewust NIET toegevoegd** voor extra beveiliging:
- `allow-top-navigation` - Voorkomt redirect van parent pagina
- `allow-modals` - Voorkomt alert/confirm/prompt
- `allow-pointer-lock` - Niet nodig voor formulier

### Fallback mechanisme

Als de iframe niet laadt binnen 8 seconden, wordt automatisch een fallback getoond met directe links naar:
- NL desktop: https://secure.taxiid.nl/nl/e20de/
- NL mobiel: https://secure.taxiid.nl/mobile/nl/e20de/
- EN desktop: https://secure.taxiid.nl/en/e20de/
- EN mobiel: https://secure.taxiid.nl/mobile/en/e20de/

## SEO Features

- Dynamische metadata per locatiepagina
- Schema.org structured data (TaxiService, LocalBusiness, FAQPage, Review)
- Automatische sitemap.xml generatie
- Robots.txt configuratie
- Open Graph en Twitter Cards
- Canonical URLs

## Kleurenpalet

Het premium kleurenpalet bestaat uit:
- **Primary (Deep Navy)**: Vertrouwen en professionaliteit
- **Gold**: Premium accent voor CTA's en highlights
- **Cream**: Warme, luxe achtergrond

## Lighthouse Targets

- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## Deployment

De website is geoptimaliseerd voor Vercel deployment:

```bash
# Via Vercel CLI
vercel

# Of via Git integratie
git push origin main
```

## Locaties Toevoegen

Voeg nieuwe locaties toe in `data/locations.json`:

```json
{
  "slug": "nieuwe-locatie",
  "name": "Nieuwe Locatie",
  "description": "Beschrijving...",
  "metaTitle": "Taxi Nieuwe Locatie | HaagseTaxiApp",
  "metaDescription": "Meta beschrijving voor SEO...",
  "heroText": "Premium Taxi in Nieuwe Locatie",
  "highlights": ["Feature 1", "Feature 2"],
  "popularRoutes": [
    { "from": "A", "to": "B", "price": "€XX" }
  ],
  "neighborhoods": ["Wijk 1", "Wijk 2"]
}
```

---

**Conversie-tip**: Implementeer automatische taalherkenning via `navigator.language` om bezoekers direct naar de juiste NL/EN versie van het boekingsformulier te leiden.
