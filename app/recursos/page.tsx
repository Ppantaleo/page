import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Download, FileText, Presentation, Database, Code } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources | Patricio Pantaleo',
  description: 'Academic resources, presentations, tools and research materials',
}

interface Resource {
  id: string
  title: string
  description: string
  type: 'presentation' | 'document' | 'tool' | 'dataset'
  format: string
  url: string
  date: string
  tags: string[]
}

const resources: Resource[] = [
  // Example resources - add your own here
  /*{
    id: '1',
    title: 'Introduction to Digital Humanities',
    description: 'Presentation on the fundamentals and methodologies of digital humanities.',
    type: 'presentation',
    format: 'PPT',
    url: '/recursos/presentaciones/intro-digital-humanities.pptx',
    date: '2024-03-15',
    tags: ['digital humanities', 'methodology', 'research']
  },*/
  {
    id: '2',
    title: 'Checklist de pre-publicación',
    description: 'Verificación sugerida para revistas académicas antes de aplicar a índices o bases de datos',
    type: 'tool',
    format: 'HTML',
    url: '/recursos/herramientas/checklist.html',
    date: '2025-11-16',
    tags: ['checklist', 'publicación', 'revistas académicas', 'índices', 'bases de datos']
  },
  {
    id: '3',
    title: 'Calidad editorial y prácticas de metadatos en revistas académicas chilenas',
    description: 'Un análisis de instalaciones OJS mediante informes de calidad Dialnet, Open Alex y Crossref en el año 2025',
    type: 'document',
    format: 'HTML',
    url: '/recursos/documentos/metadatos-chile-2025/Informe.html',
    date: '2025-11-24',
    tags: ['metadatos', 'chile', '2025', 'ojs', 'dialnet', 'open alex', 'crossref']
  }
]

const getTypeIcon = (type: Resource['type']) => {
  switch (type) {
    case 'presentation':
      return <Presentation className="w-5 h-5" />
    case 'document':
      return <FileText className="w-5 h-5" />
    case 'tool':
      return <Code className="w-5 h-5" />
    case 'dataset':
      return <Database className="w-5 h-5" />
  }
}

const getTypeColor = (type: Resource['type']) => {
  switch (type) {
    case 'presentation':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
    case 'document':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    case 'tool':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
    case 'dataset':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
  }
}

export default function RecursosPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-serif mb-4 text-slate-800 dark:text-white">
            Resources
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
            Academic resources, presentations, tools and research materials 
            available for the academic and professional community.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
            <Presentation className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Presentations</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Conference and workshop slides
            </p>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
            <FileText className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Documents</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Guides, manuals and references
            </p>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
            <Code className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Tools</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Scripts, templates and utilities
            </p>
          </div>
          
          <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
            <Database className="w-8 h-8 text-orange-600 mb-3" />
            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Datasets</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Conjuntos de datos para investigación
            </p>
          </div>
        </div>

        {/* Resources Grid */}
        {resources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="bg-background dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${getTypeColor(resource.type)}`}>
                    {getTypeIcon(resource.type)}
                    {resource.type}
                  </div>
                  <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                    {resource.format}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                  {resource.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                  {resource.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {resource.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {new Date(resource.date).toLocaleDateString('en-US')}
                  </span>
                  <Link
                    href={resource.url}
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
              Coming Soon
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Resources will be available soon. In the meantime, you can explore the blog.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              View blog
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}