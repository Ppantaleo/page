// components/LinkedInFeed.tsx
import { ExternalLink, Linkedin } from 'lucide-react'

// Solo necesitas actualizar estas 3 URLs de iframes de LinkedIn
const linkedinEmbeds = [
  {
    id: 1,
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7356725220063199233?collapsed=1",
    title: "Publicación sobre humanidades digitales"
  },
  {
    id: 2,
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7356725220063199233?collapsed=1", // Cambia por tu segunda URL
    title: "Publicación sobre metadatos académicos"
  },
  {
    id: 3,
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7356725220063199233?collapsed=1", // Cambia por tu tercera URL
    title: "Publicación sobre Open Journal Systems"
  }
]

export default function LinkedInFeed() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Linkedin className="w-7 h-7 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-serif text-slate-800 dark:text-white">
              Últimas publicaciones en LinkedIn
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Reflexiones sobre humanidades digitales, publicación académica y gestión de metadatos
          </p>
        </div>

        {/* LinkedIn Embeds Grid - Una sola fila de 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {linkedinEmbeds.map(embed => (
            <div 
              key={embed.id} 
              className="bg-background dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              {/* Contenedor del iframe */}
              <div className="w-full">
                <iframe 
                  src={embed.src}
                  height="500" 
                  width="100%" 
                  frameBorder="0" 
                  allowFullScreen 
                  title={embed.title}
                  className="w-full rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a 
            href="https://www.linkedin.com/in/patricio-pantaleo/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md"
          >
            <Linkedin className="w-5 h-5 mr-2" />
            Seguir en LinkedIn
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
            Posts actualizados automáticamente desde LinkedIn
          </p>
        </div>
      </div>
    </section>
  )
}