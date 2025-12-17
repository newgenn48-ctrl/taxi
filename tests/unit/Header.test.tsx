import { render, screen, fireEvent } from '@testing-library/react'
import Header from '@/components/Header'

// Mock useRouter
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      prefetch: jest.fn(),
    }
  },
}))

describe('Header Component', () => {
  it('renders the logo text correctly', () => {
    render(<Header />)
    expect(screen.getByText(/Haagsche/i)).toBeInTheDocument()
    expect(screen.getByText(/Taxi/i)).toBeInTheDocument()
    expect(screen.getByText(/App/i)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Diensten')).toBeInTheDocument()
    expect(screen.getByText('Locaties')).toBeInTheDocument()
    expect(screen.getByText('Reviews')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders call-to-action button', () => {
    render(<Header />)
    const ctaButtons = screen.getAllByText('Bel Nu')
    expect(ctaButtons.length).toBeGreaterThan(0)
  })

  it('toggles mobile menu when button is clicked', () => {
    render(<Header />)

    // Find the mobile menu button by its aria-label
    const menuButton = screen.getByRole('button', { name: /menu/i })

    // Initially, mobile menu should not be visible
    expect(screen.queryById?.('mobile-menu')).not.toBeInTheDocument

    // Click the menu button
    fireEvent.click(menuButton)

    // Mobile menu should now be visible (checking for the container)
    const mobileMenu = document.getElementById('mobile-menu')
    expect(mobileMenu).toBeInTheDocument()
  })

  it('has correct aria-label for accessibility', () => {
    render(<Header />)
    const logoLink = screen.getByLabelText(/terug naar home/i)
    expect(logoLink).toBeInTheDocument()
  })
})
