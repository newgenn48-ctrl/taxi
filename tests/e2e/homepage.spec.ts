import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('has correct title and meta description', async ({ page }) => {
    await expect(page).toHaveTitle(/Taxi Den Haag|HaagseTaxiApp/)

    const metaDescription = await page.getAttribute(
      'meta[name="description"]',
      'content'
    )
    expect(metaDescription).toContain('Taxi Den Haag')
  })

  test('displays hero section with booking widget', async ({ page }) => {
    // Check hero heading
    await expect(
      page.getByRole('heading', { name: /Taxi Den Haag/i })
    ).toBeVisible()

    // Check subheading
    await expect(page.getByText(/Snel & Betrouwbaar/i)).toBeVisible()
  })

  test('displays navigation and is accessible', async ({ page }) => {
    // Check header is visible
    const header = page.locator('header')
    await expect(header).toBeVisible()

    // Check navigation links
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Locaties' })).toBeVisible()
  })

  test('displays pricing section with routes', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: /Taxi Den Haag Tarieven/i })
    ).toBeVisible()

    // Check for route pricing
    await expect(page.getByText('Schiphol Airport')).toBeVisible()
    await expect(page.getByText('Rotterdam Airport')).toBeVisible()
  })

  test('displays services section', async ({ page }) => {
    // Check for service section
    await expect(page.getByText('Luchthaven Vervoer')).toBeVisible()
    await expect(page.getByText('Zakelijk Vervoer')).toBeVisible()
  })

  test('displays locations section with links', async ({ page }) => {
    // Check for location cards
    await expect(page.getByRole('link', { name: /Wassenaar/i }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /Scheveningen/i }).first()).toBeVisible()
  })

  test('phone CTA links work correctly', async ({ page }) => {
    const phoneLink = page.getByRole('link', { name: /070-204 2200/i }).first()
    await expect(phoneLink).toHaveAttribute('href', 'tel:+31702042200')
  })

  test('WhatsApp links work correctly', async ({ page }) => {
    const whatsappLink = page.getByRole('link', { name: /WhatsApp/i }).first()
    await expect(whatsappLink).toHaveAttribute('href', /wa\.me\/31702042200/)
  })

  test('mobile menu opens and closes', async ({ page, isMobile }) => {
    if (!isMobile) {
      test.skip()
      return
    }

    // Open mobile menu
    const menuButton = page.getByRole('button', { name: /menu/i })
    await menuButton.click()

    // Check menu is visible
    await expect(page.locator('#mobile-menu')).toBeVisible()

    // Close menu
    await menuButton.click()
    await expect(page.locator('#mobile-menu')).not.toBeVisible()
  })

  test('location page navigation works', async ({ page }) => {
    // Click on Wassenaar location
    await page.getByRole('link', { name: /Wassenaar/i }).first().click()

    // Should navigate to location page
    await expect(page).toHaveURL(/\/locations\/wassenaar/)
    await expect(
      page.getByRole('heading', { name: /Taxi Wassenaar/i })
    ).toBeVisible()
  })

  test('footer contains contact information', async ({ page }) => {
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()

    // Check contact info
    await expect(footer.getByText('070-204 2200')).toBeVisible()
    await expect(footer.getByText('info@haagsetaxiapp.nl')).toBeVisible()
  })

  test('FAQ section is interactive', async ({ page }) => {
    // Find FAQ section
    const faqHeading = page.getByRole('heading', { name: /Veelgestelde Vragen|FAQ/i })
    await expect(faqHeading).toBeVisible()

    // Click on first FAQ item
    const firstFaq = page.locator('details').first()
    await firstFaq.click()

    // Check content is visible
    await expect(firstFaq.locator('p')).toBeVisible()
  })
})
