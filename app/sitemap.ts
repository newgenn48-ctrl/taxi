import { MetadataRoute } from 'next'
import locationsData from '@/data/locations.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://haagsetaxiapp.nl'

  // Static pages - only include pages that actually exist
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Location pages - prioritize cities higher than neighborhoods
  const locationPages: MetadataRoute.Sitemap = locationsData.locations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: location.type === 'city' ? 0.9 : 0.8,
  }))

  return [...staticPages, ...locationPages]
}
