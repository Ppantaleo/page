// Crear archivo: components/mailchimp-script.tsx
"use client"

import { useEffect } from 'react'

export default function MailChimpScript() {
  useEffect(() => {
    // Verificar si el script ya existe
    if (document.getElementById('mcjs')) {
      return
    }

    // Crear el script de MailChimp
    const script = document.createElement('script')
    script.id = 'mcjs'
    script.innerHTML = `
      !function(c,h,i,m,p){
        m=c.createElement(h),
        p=c.getElementsByTagName(h)[0],
        m.async=1,
        m.src=i,
        p.parentNode.insertBefore(m,p)
      }(document,"script","https://chimpstatic.com/mcjs-connected/js/users/9ff2d7319c483513cb68224bd/bf810a0f4a8dfcda83f6c4d52.js");
    `
    
    // Añadir el script al head
    document.head.appendChild(script)

    // Cleanup function
    return () => {
      const existingScript = document.getElementById('mcjs')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return null
}