import { render, screen, fireEvent } from '@testing-library/react'
import ReviewList from '@/components/ReviewList'

describe('ReviewList Component', () => {
  it('renders the section heading correctly', () => {
    render(<ReviewList />)
    expect(
      screen.getByRole('heading', { name: /Wat Onze Klanten Zeggen/i })
    ).toBeInTheDocument()
  })

  it('displays aggregate rating', () => {
    render(<ReviewList />)
    expect(screen.getByText('Uitstekend')).toBeInTheDocument()
    expect(screen.getByText(/Gebaseerd op 847 reviews/i)).toBeInTheDocument()
  })

  it('renders initial reviews (3 visible)', () => {
    render(<ReviewList />)
    const reviews = screen.getAllByRole('article')
    expect(reviews.length).toBe(3)
  })

  it('shows more reviews when button is clicked', () => {
    render(<ReviewList />)

    // Initially 3 reviews visible
    expect(screen.getAllByRole('article').length).toBe(3)

    // Click "show more" button
    const showMoreButton = screen.getByRole('button', {
      name: /Toon meer reviews/i,
    })
    fireEvent.click(showMoreButton)

    // Now all 6 reviews should be visible
    expect(screen.getAllByRole('article').length).toBe(6)
  })

  it('renders verified badges for reviews', () => {
    render(<ReviewList />)
    const verifiedBadges = screen.getAllByText('Geverifieerd')
    expect(verifiedBadges.length).toBeGreaterThan(0)
  })

  it('renders trust badges', () => {
    render(<ReviewList />)
    expect(screen.getByText('100% Betrouwbaar')).toBeInTheDocument()
    expect(screen.getByText('24/7 Beschikbaar')).toBeInTheDocument()
    expect(screen.getByText('10.000+ Klanten')).toBeInTheDocument()
    expect(screen.getByText('TX-Keurmerk')).toBeInTheDocument()
  })

  it('includes schema.org structured data', () => {
    render(<ReviewList />)
    const schemaScript = document.querySelector(
      'script[type="application/ld+json"]'
    )
    expect(schemaScript).toBeInTheDocument()

    if (schemaScript) {
      const schemaData = JSON.parse(schemaScript.textContent || '')
      expect(schemaData['@type']).toBe('LocalBusiness')
      expect(schemaData.aggregateRating).toBeDefined()
      expect(schemaData.review).toBeDefined()
    }
  })
})
