'use client'

import { useState } from 'react'

interface Review {
  id: number
  name: string
  location: string
  rating: number
  date: string
  text: string
  verified: boolean
  avatar?: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Peter van der Berg',
    location: 'Den Haag',
    rating: 5,
    date: '2024-10-15',
    text: 'Uitstekende service! De chauffeur was stipt op tijd en de auto was zeer schoon en comfortabel. De rit naar Schiphol was vlekkeloos. Zeker een aanrader voor iedereen die betrouwbaar vervoer zoekt.',
    verified: true,
    avatar: 'P',
  },
  {
    id: 2,
    name: 'Maria Jansen',
    location: 'Wassenaar',
    rating: 5,
    date: '2024-10-12',
    text: 'Al jaren klant bij HaagseTaxiApp voor zakelijk vervoer. Altijd professioneel, altijd op tijd. De chauffeurs zijn vriendelijk en de vaste prijzen geven rust.',
    verified: true,
    avatar: 'M',
  },
  {
    id: 3,
    name: 'Thomas de Groot',
    location: 'Voorburg',
    rating: 5,
    date: '2024-10-10',
    text: 'Fantastische ervaring! Mijn ouders moesten naar het ziekenhuis en de rolstoeltaxi was perfect geregeld. Vriendelijke chauffeur die alle tijd nam. Dankjewel!',
    verified: true,
    avatar: 'T',
  },
  {
    id: 4,
    name: 'Sandra Bakker',
    location: 'Rijswijk',
    rating: 5,
    date: '2024-10-08',
    text: 'Zeer tevreden over de app en de service. Boeking was super makkelijk en de bevestiging kwam direct. Prijs-kwaliteit is uitstekend vergeleken met andere taxidiensten.',
    verified: true,
    avatar: 'S',
  },
  {
    id: 5,
    name: 'Robert Visser',
    location: 'Leidschendam',
    rating: 4,
    date: '2024-10-05',
    text: 'Goede taxiservice voor de regio. Gebruik ze regelmatig voor ritten naar Rotterdam CS. Betrouwbaar en de chauffeurs kennen de weg.',
    verified: true,
    avatar: 'R',
  },
  {
    id: 6,
    name: 'Emma Smit',
    location: 'Den Haag',
    rating: 5,
    date: '2024-10-01',
    text: 'Top service! Was heel blij met de luxe auto voor mijn trouwdag. De chauffeur was super professioneel en maakte er een speciale dag van. Absolute aanrader!',
    verified: true,
    avatar: 'E',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} van 5 sterren`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? 'text-gold-400' : 'text-accent-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewList() {
  const [visibleReviews, setVisibleReviews] = useState(3)
  const averageRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
  ).toFixed(1)

  return (
    <section id="reviews" className="relative bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-60 h-60 bg-gold-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container-luxury section-padding">
        {/* Compact Header with Stats */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-accent-900 mb-6">
            Wat Klanten Zeggen
          </h2>

          {/* Quick Stats - 3 bullets */}
          <div className="inline-flex flex-wrap justify-center items-center gap-4 md:gap-8 bg-accent-50 rounded-full px-6 py-3">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-bold text-accent-900">{averageRating}/5</span>
            </div>
            <div className="h-4 w-px bg-accent-300 hidden md:block" />
            <span className="text-accent-600 font-medium">847+ reviews</span>
            <div className="h-4 w-px bg-accent-300 hidden md:block" />
            <span className="text-green-600 font-medium flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Geverifieerd via Google
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.slice(0, visibleReviews).map((review, index) => (
            <article
              key={review.id}
              className="group relative bg-white rounded-2xl p-8 shadow-luxury border border-accent-100 hover:shadow-luxury-xl hover:-translate-y-1 transition-all duration-300"
              itemScope
              itemType="https://schema.org/Review"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <meta itemProp="itemReviewed" content="HaagseTaxiApp" />

              {/* Quote decoration */}
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center shadow-orange transform -rotate-6 group-hover:rotate-0 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="pt-4">
                <div
                  className="mb-4"
                  itemProp="reviewRating"
                  itemScope
                  itemType="https://schema.org/Rating"
                >
                  <meta itemProp="ratingValue" content={String(review.rating)} />
                  <meta itemProp="bestRating" content="5" />
                  <StarRating rating={review.rating} />
                </div>

                <p className="text-accent-700 mb-6 leading-relaxed line-clamp-4" itemProp="reviewBody">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-accent-100">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-gradient-orange flex items-center justify-center text-white font-semibold">
                      {review.avatar}
                    </div>
                    <div>
                      <h3
                        className="font-semibold text-accent-900"
                        itemProp="author"
                      >
                        {review.name}
                      </h3>
                      <p className="text-sm text-accent-500">{review.location}</p>
                    </div>
                  </div>
                  {review.verified && (
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-700 text-xs font-semibold rounded-full border border-green-100">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Geverifieerd
                    </span>
                  )}
                </div>

                <time
                  className="hidden"
                  dateTime={review.date}
                  itemProp="datePublished"
                >
                  {review.date}
                </time>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {visibleReviews < reviews.length && (
          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => setVisibleReviews(reviews.length)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl border-2 border-primary-200 shadow-luxury hover:border-primary-500 hover:shadow-luxury-lg transition-all duration-300"
            >
              Toon meer reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {/* Google Reviews Link */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?q=HaagseTaxiApp+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent-500 hover:text-primary-600 transition-colors text-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Bekijk alle reviews op Google
          </a>
        </div>

      </div>

      {/* Schema.org AggregateRating (hidden) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'HaagseTaxiApp',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: averageRating,
              reviewCount: 847,
              bestRating: 5,
              worstRating: 1,
            },
            review: reviews.map((r) => ({
              '@type': 'Review',
              author: {
                '@type': 'Person',
                name: r.name,
              },
              datePublished: r.date,
              reviewBody: r.text,
              reviewRating: {
                '@type': 'Rating',
                ratingValue: r.rating,
                bestRating: 5,
                worstRating: 1,
              },
            })),
          }),
        }}
      />
    </section>
  )
}
