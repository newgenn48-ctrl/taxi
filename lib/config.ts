/**
 * CENTRALE CONFIGURATIE - HaagseTaxiApp
 *
 * BELANGRIJK: Vervang ALLE placeholder waarden met echte bedrijfsgegevens!
 * Deze waarden worden door de hele website gebruikt.
 */

export const businessConfig = {
  // === CONTACTGEGEVENS ===
  phone: {
    display: '070-204 2200',
    href: '+31702042200',
  },
  whatsapp: {
    number: '31702042200',
    message: 'Hallo, ik wil graag een taxi boeken.',
  },
  email: 'info@haagsetaxiapp.nl',

  // === BEDRIJFSGEGEVENS (VOOR TRUST & SEO) ===
  business: {
    name: 'HaagseTaxiApp',
    legalName: 'HaagseTaxiApp',
    kvk: '67194346',
    btw: 'NL856869806B01',
    address: {
      street: 'Cartesiusstraat 186',
      city: 'Den Haag',
      postalCode: '2562 SP',
      country: 'Nederland',
    },
  },

  // === TARIEVEN ===
  pricing: {
    perKm: 2.50,
    startTarief: 3.50,
    schipholVanaf: 79.50,
    rotterdamAirport: 55,
    amsterdamCentrum: 125,
    // Populaire routes - vaste prijzen
    routes: {
      'den-haag-schiphol': 79.50,
      'wassenaar-schiphol': 79.50,
      'delft-schiphol': 79.50,
      'rijswijk-schiphol': 79.50,
      'voorburg-schiphol': 79.50,
      'den-haag-rotterdam-airport': 55,
      'den-haag-amsterdam': 125,
    },
  },

  // === SERVICE GARANTIES ===
  guarantees: {
    waitTime: 8,              // Gemiddelde wachttijd in minuten
    freeWaitAirport: 30,      // Gratis wachttijd luchthaven in minuten
    flightMonitoring: true,
    nachtToeslag: false,
    bagageToeslag: false,
    annulerenGratis: true,    // Tot 1 uur voor rit
  },

  // === SOCIAL PROOF ===
  // TODO: Voeg echte reviews toe wanneer beschikbaar
  reviews: {
    rating: null,      // Nog geen reviews
    count: null,       // Nog geen reviews
    platform: 'Google',
  },

  // === CERTIFICERINGEN ===
  certifications: [
    { name: 'TX-Keurmerk', verified: true },
    { name: 'KvK Geregistreerd', verified: true },
  ],

  // === OPERATING HOURS ===
  hours: {
    open24_7: true,
    description: '24 uur per dag, 7 dagen per week',
  },

  // === BOOKING ===
  booking: {
    formId: '650acd888fe8f64502bcb2c9', // yourwebbooker.com form ID
  },
}

// Helper functies
export function getWhatsAppUrl(customMessage?: string): string {
  const message = encodeURIComponent(customMessage || businessConfig.whatsapp.message)
  return `https://wa.me/${businessConfig.whatsapp.number}?text=${message}`
}

export function getPhoneUrl(): string {
  return `tel:${businessConfig.phone.href}`
}
