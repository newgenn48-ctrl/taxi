'use client'

import { useEffect, useRef } from 'react'

export default function InlineWebbooker() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current && !containerRef.current.querySelector('inline-webbooker')) {
      const webbooker = document.createElement('inline-webbooker')
      webbooker.setAttribute('formid', '650acd888fe8f64502bcb2c9')
      webbooker.setAttribute('navigation', 'inline')
      webbooker.setAttribute('showtopbar', 'false')
      webbooker.setAttribute('showlogo', 'false')
      webbooker.setAttribute('headercolor', '#f97316')
      webbooker.setAttribute('textcolor', '#1e293b')
      webbooker.setAttribute('backgroundcolor', '#ffffff')
      webbooker.setAttribute('buttonstyle', 'rounded')
      webbooker.setAttribute('language', 'nl')
      webbooker.setAttribute('style', 'padding: 20px;')
      containerRef.current.appendChild(webbooker)
    }
  }, [])

  return (
    <div className="w-full overflow-hidden">
      {/* Simpele premium rand */}
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden ring-2 ring-orange-500/20 ring-offset-2 ring-offset-white">
        {/* Oranje accent lijn bovenaan */}
        <div className="h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" />

        {/* Formulier */}
        <div ref={containerRef} className="w-full overflow-hidden" />
      </div>
    </div>
  )
}
