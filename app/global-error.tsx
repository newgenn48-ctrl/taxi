'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="nl">
      <body>
        <section style={{
          minHeight: '100vh',
          backgroundColor: '#102a43',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '28rem' }}>
            <div style={{
              width: '6rem',
              height: '6rem',
              backgroundColor: 'rgba(239, 68, 68, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem'
            }}>
              <svg
                style={{ width: '3rem', height: '3rem', color: '#f87171' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>

            <h1 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '1rem'
            }}>
              Er Ging Iets Mis
            </h1>

            <p style={{
              fontSize: '1.125rem',
              color: '#94a3b8',
              marginBottom: '2rem'
            }}>
              Sorry, er is een kritieke fout opgetreden. Neem contact met ons op via telefoon.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button
                onClick={() => reset()}
                style={{
                  padding: '1rem 2rem',
                  backgroundColor: '#f97316',
                  color: 'white',
                  fontWeight: 'bold',
                  borderRadius: '0.75rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                Probeer Opnieuw
              </button>
              <a
                href="tel:+31702042200"
                style={{
                  padding: '1rem 2rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  textDecoration: 'none',
                  fontSize: '1rem'
                }}
              >
                Bel 070-204 2200
              </a>
            </div>
          </div>
        </section>
      </body>
    </html>
  )
}
