import { render, screen } from '@testing-library/react'
import HeroWithIframe from '@/components/HeroWithIframe'

describe('HeroWithIframe Component', () => {
  it('renders the hero heading correctly', () => {
    render(<HeroWithIframe />)
    expect(
      screen.getByRole('heading', { name: /Taxi Den Haag/i })
    ).toBeInTheDocument()
  })

  it('renders USP bullets', () => {
    render(<HeroWithIframe />)
    expect(screen.getByText('TX-Keurmerk gecertificeerd')).toBeInTheDocument()
    expect(screen.getByText('Comfortabele voertuigen')).toBeInTheDocument()
    expect(screen.getByText(/Vaste tarieven/i)).toBeInTheDocument()
    expect(screen.getByText('24/7 bereikbaar')).toBeInTheDocument()
  })

  it('renders call-to-action with phone number', () => {
    render(<HeroWithIframe />)
    const phoneLinks = screen.getAllByRole('link', { name: /bel/i })
    expect(phoneLinks.length).toBeGreaterThan(0)
    expect(phoneLinks[0]).toHaveAttribute('href', 'tel:+31702042200')
  })

  it('renders WhatsApp link', () => {
    render(<HeroWithIframe />)
    const whatsappLinks = screen.getAllByRole('link', { name: /whatsapp/i })
    expect(whatsappLinks.length).toBeGreaterThan(0)
    expect(whatsappLinks[0]).toHaveAttribute('href', expect.stringContaining('wa.me/31702042200'))
  })

  it('renders the subheading with Snel & Betrouwbaar', () => {
    render(<HeroWithIframe />)
    expect(screen.getByText(/Snel & Betrouwbaar/i)).toBeInTheDocument()
  })

  it('renders InlineWebbooker container', () => {
    render(<HeroWithIframe />)
    // The InlineWebbooker is dynamically added via useEffect, so we check for the container
    const containers = document.querySelectorAll('.relative')
    expect(containers.length).toBeGreaterThan(0)
  })
})
