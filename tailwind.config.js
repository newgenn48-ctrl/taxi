/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Disable default preflight to use custom one with correct vendor prefix order
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        // PREMIUM ORANJE - Nederlands, Warm, Actie, Vertrouwen
        // Geïnspireerd door succesvolle Nederlandse merken: ING, PostNL, Oranje Taxi
        primary: {
          50: '#fff7ed',   // Zeer licht oranje/cream
          100: '#ffedd5',  // Licht oranje
          200: '#fed7aa',  // Zacht oranje
          300: '#fdba74',  // Medium licht oranje
          400: '#fb923c',  // Levendig oranje
          500: '#f97316',  // HOOFD ORANJE - Krachtig, Nederlands
          600: '#ea580c',  // Donkerder oranje
          700: '#c2410c',  // Diep oranje
          800: '#9a3412',  // Zeer donker oranje
          900: '#7c2d12',  // Bijna bruin-oranje
          950: '#431407',  // Donkerste oranje
        },
        // NAVY/DONKERBLAUW - Luxe, Vertrouwen, Premium
        // Complementeert oranje perfect, geeft luxe uitstraling
        accent: {
          50: '#f8fafc',   // Bijna wit
          100: '#f1f5f9',  // Zeer licht grijs
          200: '#e2e8f0',  // Licht grijs
          300: '#cbd5e1',  // Medium grijs
          400: '#94a3b8',  // Grijs
          500: '#64748b',  // Donker grijs
          600: '#475569',  // Zeer donker grijs
          700: '#334155',  // Navy grijs
          800: '#1e293b',  // Donker navy
          900: '#0f172a',  // Zeer donker navy
          950: '#020617',  // Bijna zwart navy
        },
        // GOUD - Voor sterren, awards, premium badges
        gold: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        // UTILITY KLEUREN
        luxury: {
          cream: '#fffbf5',   // Warme cream (past bij oranje)
          white: '#ffffff',
          dark: '#0c1222',    // Diepe navy voor contrast
        },
        // SUCCESS/TRUST kleuren
        trust: {
          green: '#16a34a',   // Voor "geverifieerd", "beschikbaar"
          blue: '#0369a1',    // Voor links, secundaire acties
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Luxe schaduwen
        'luxury': '0 4px 20px -2px rgba(0, 0, 0, 0.08), 0 2px 8px -2px rgba(0, 0, 0, 0.04)',
        'luxury-lg': '0 10px 40px -3px rgba(0, 0, 0, 0.12), 0 4px 16px -4px rgba(0, 0, 0, 0.08)',
        'luxury-xl': '0 20px 50px -5px rgba(0, 0, 0, 0.15), 0 8px 20px -6px rgba(0, 0, 0, 0.1)',
        // Oranje glow effecten
        'orange': '0 4px 20px -2px rgba(249, 115, 22, 0.25)',
        'orange-lg': '0 10px 40px -3px rgba(249, 115, 22, 0.35)',
        'orange-xl': '0 20px 50px -5px rgba(249, 115, 22, 0.4)',
      },
      backgroundImage: {
        // Premium gradients
        'gradient-orange': 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
        'gradient-orange-warm': 'linear-gradient(135deg, #fb923c 0%, #f97316 50%, #ea580c 100%)',
        'gradient-luxury': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0c1222 0%, #0f172a 100%)',
        'gradient-light': 'linear-gradient(180deg, #fffbf5 0%, #ffffff 100%)',
        // Hero gradient - dramatic oranje naar navy
        'gradient-hero': 'linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #1e293b 100%)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
