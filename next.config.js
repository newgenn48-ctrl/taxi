/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode for development
  reactStrictMode: true,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'haagsetaxiapp.nl',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // Headers for security and performance
  async headers() {
    return [
      // Headers for all routes
      {
        source: '/:path*',
        headers: [
          // HSTS - Force HTTPS for 1 year
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // DNS Prefetch
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          // Prevent MIME sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Referrer Policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Content Security Policy with frame-ancestors (replaces X-Frame-Options)
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self' https://yourwebbooker.com https://*.dispatchapi.io",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://yourwebbooker.com https://maps.googleapis.com https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://yourwebbooker.com",
              "font-src 'self' https://fonts.gstatic.com https://yourwebbooker.com data:",
              "img-src 'self' data: https: blob:",
              "frame-src 'self' https://yourwebbooker.com",
              "connect-src 'self' https: wss:",
              "media-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://yourwebbooker.com",
              "frame-ancestors 'self'",
            ].join('; '),
          },
          // Permissions Policy
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)',
          },
          // Cross-Origin policies
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
        ],
      },
      // Cache headers for static assets
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/favicon.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'image/svg+xml; charset=utf-8',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/manifest.webmanifest',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
          {
            key: 'Content-Type',
            value: 'application/manifest+json; charset=utf-8',
          },
        ],
      },
    ]
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/taxi-den-haag',
        destination: '/',
        permanent: true,
      },
      {
        source: '/locations/den-haag',
        destination: '/',
        permanent: true,
      },
      {
        source: '/taxi-wassenaar',
        destination: '/locations/wassenaar',
        permanent: true,
      },
      {
        source: '/taxi-scheveningen',
        destination: '/locations/scheveningen',
        permanent: true,
      },
      {
        source: '/taxi-rijswijk',
        destination: '/locations/rijswijk',
        permanent: true,
      },
      {
        source: '/taxi-voorburg',
        destination: '/locations/voorburg',
        permanent: true,
      },
      // Redirects for removed locations
      {
        source: '/locations/delft',
        destination: '/',
        permanent: true,
      },
      {
        source: '/locations/westland',
        destination: '/',
        permanent: true,
      },
      {
        source: '/locations/zoetermeer',
        destination: '/',
        permanent: true,
      },
      {
        source: '/locations/pijnacker',
        destination: '/',
        permanent: true,
      },
      {
        source: '/locations/nootdorp',
        destination: '/',
        permanent: true,
      },
      {
        source: '/locations/leidschenveen',
        destination: '/',
        permanent: true,
      },
      {
        source: '/locations/wateringseveld',
        destination: '/',
        permanent: true,
      },
      {
        source: '/taxi-delft',
        destination: '/',
        permanent: true,
      },
    ]
  },

  // Compression
  compress: true,

  // Power by header removal
  poweredByHeader: false,

  // Trailing slash consistency
  trailingSlash: false,
}

module.exports = nextConfig
