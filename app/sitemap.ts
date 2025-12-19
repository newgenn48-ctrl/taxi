import { MetadataRoute } from 'next'
import locationsData from '@/data/locations.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://haagsetaxiapp.nl'

  // Static pages - only include pages that actually exist
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl },
    { url: `${baseUrl}/locations` },
    { url: `${baseUrl}/voorwaarden` },
    { url: `${baseUrl}/privacy` },
    { url: `${baseUrl}/cookies` },
  ]

  // Location pages
  const locationPages: MetadataRoute.Sitemap = locationsData.locations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
  }))

  return [...staticPages, ...locationPages]
}
