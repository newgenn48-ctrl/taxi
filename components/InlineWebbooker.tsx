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

  return <div ref={containerRef} className="w-full" />
}
