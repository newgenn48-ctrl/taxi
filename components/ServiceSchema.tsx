interface ServiceSchemaProps {
  serviceName: string
  serviceType: string
  description: string
  provider: string
  areaServed: string[]
  price?: string
  priceCurrency?: string
}

export default function ServiceSchema({
  serviceName,
  serviceType,
  description,
  provider,
  areaServed,
  price,
  priceCurrency = 'EUR',
}: ServiceSchemaProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceType,
    name: serviceName,
    description: description,
    provider: {
      '@type': 'LocalBusiness',
      name: provider,
      '@id': 'https://haagsetaxiapp.nl/#organization',
    },
    areaServed: areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    ...(price && {
      offers: {
        '@type': 'Offer',
        price: price,
        priceCurrency: priceCurrency,
        availability: 'https://schema.org/InStock',
      },
    }),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: serviceName,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: serviceName,
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

// Pre-configured service schemas for common taxi services
export function SchipholTaxiSchema() {
  return (
    <ServiceSchema
      serviceName="Taxi Den Haag naar Schiphol"
      serviceType="TaxiService"
      description="Betrouwbare taxi van Den Haag naar Schiphol Airport. Vaste prijs vanaf €79,50, 24/7 beschikbaar, vluchtmonitoring inbegrepen."
      provider="HaagseTaxiApp"
      areaServed={['Den Haag', 'Schiphol', 'Amsterdam']}
      price="79.50"
    />
  )
}

export function ZakelijkVervoerSchema() {
  return (
    <ServiceSchema
      serviceName="Zakelijk Vervoer Den Haag"
      serviceType="TaxiService"
      description="Professioneel zakelijk vervoer in Den Haag. Representatieve voertuigen, betrouwbare chauffeurs, facturatie mogelijk."
      provider="HaagseTaxiApp"
      areaServed={['Den Haag', 'Rotterdam', 'Amsterdam', 'Utrecht']}
    />
  )
}

export function RolstoelTaxiSchema() {
  return (
    <ServiceSchema
      serviceName="Rolstoeltaxi Den Haag"
      serviceType="TaxiService"
      description="Aangepast vervoer voor rolstoelgebruikers in Den Haag. Speciaal uitgeruste voertuigen, ervaren chauffeurs."
      provider="HaagseTaxiApp"
      areaServed={['Den Haag', 'Wassenaar', 'Voorburg', 'Rijswijk', 'Leidschendam']}
    />
  )
}

export function LuchthavenVervoerSchema() {
  return (
    <ServiceSchema
      serviceName="Luchthavenvervoer Den Haag"
      serviceType="TaxiService"
      description="Luchthavenvervoer vanaf Den Haag naar Schiphol en Rotterdam The Hague Airport. Vaste prijzen, vluchtmonitoring."
      provider="HaagseTaxiApp"
      areaServed={['Den Haag', 'Schiphol', 'Rotterdam The Hague Airport']}
    />
  )
}
