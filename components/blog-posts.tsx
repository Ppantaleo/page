// components/blog-posts.tsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Calendar, Tag, BookOpen, PenTool, FileText } from "lucide-react"

interface BlogPost {
  title: string
  description: string
  date: string
  path: string
  image?: string
  categories?: string[]
  'reading-time'?: string
  author?: string
}

export default function BlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  // Función para limitar palabras
  const limitWords = (text: string, maxWords: number): string => {
    const words = text.trim().split(/\s+/)
    if (words.length <= maxWords) return text
    return words.slice(0, maxWords).join(' ') + '...'
  }

  // Función para filtrar posts principales (excluir cuentos y aforismos)
  const filterMainPosts = (posts: BlogPost[]): BlogPost[] => {
    return posts.filter(post => {
      const categories = post.categories || []
      return !categories.some(cat => 
        cat.toLowerCase().includes('cuento') || 
        cat.toLowerCase().includes('aforismo') ||
        cat.toLowerCase().includes('story')
      )
    })
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/blog/index.xml')
        const xmlText = await response.text()
        
        // Parse XML
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml')
        const items = xmlDoc.querySelectorAll('item')
        
        const parsedPosts = Array.from(items).map(item => {
          const title = item.querySelector('title')?.textContent || ''
          const link = item.querySelector('link')?.textContent || ''
          const pubDate = item.querySelector('pubDate')?.textContent || ''
          
          // Intentar extraer la descripción del feed primero
          let description = ''
          
          // 1. Buscar en dc:description (Dublin Core)
          const dcDescription = item.querySelector('description')?.textContent || ''
          
          // 2. Buscar en el contenido completo
          const contentEncoded = item.querySelector('content\\:encoded')?.textContent || dcDescription
          
          // Si hay contenido HTML, intentar extraer solo la descripción/extracto
          if (contentEncoded && contentEncoded.length > 0) {
            // Crear un documento temporal para parsear el HTML
            const tempDiv = document.createElement('div')
            tempDiv.innerHTML = contentEncoded
            
            // Buscar párrafos que no sean créditos de fotos
            const paragraphs = tempDiv.querySelectorAll('p')
            let cleanDescription = ''
            
            for (const p of paragraphs) {
              const text = p.textContent || ''
              // Omitir párrafos que son créditos de fotos
              if (!text.toLowerCase().includes('foto de') && 
                  !text.toLowerCase().includes('photo by') && 
                  !text.toLowerCase().includes('image by') &&
                  !text.toLowerCase().includes('unsplash') &&
                  text.trim().length > 20) {
                cleanDescription = text.trim()
                break // Tomar el primer párrafo válido
              }
            }
            
            // Limitar a un número específico de palabras
            description = limitWords(cleanDescription || dcDescription.replace(/<[^>]*>/g, ''), 40)
          } else {
            description = limitWords(dcDescription.replace(/<[^>]*>/g, ''), 40)
          }
          
          // Extraer imagen del contenido si existe
          const imgMatch = contentEncoded.match(/<img[^>]+src="([^">]+)"/i)
          const image = imgMatch ? imgMatch[1] : null
          
          // Extraer categorías del RSS
          const categories: string[] = []
          const categoryElements = item.querySelectorAll('category')
          categoryElements.forEach(cat => {
            const categoryText = cat.textContent?.trim()
            if (categoryText && !categories.includes(categoryText)) {
              categories.push(categoryText)
            }
          })
          
          // Calcular tiempo de lectura aproximado basado en el contenido completo
          const wordCount = contentEncoded.replace(/<[^>]*>/g, '').split(/\s+/).length
          const readingTime = Math.max(1, Math.ceil(wordCount / 200)) // Mínimo 1 minuto

          return {
            title: title.replace(/<!\[CDATA\[|\]\]>/g, ''),
            description: description,
            date: pubDate,
            path: link.replace('https://patricio.pantaleo.ar', ''),
            image,
            categories: categories.filter(cat => cat.toLowerCase() !== 'posts'), // Filtrar "posts" genérico
            'reading-time': `${readingTime} min`
          }
        })
        
        // Filtrar solo posts principales (sin cuentos ni aforismos) y tomar los primeros 3
        const mainPosts = filterMainPosts(parsedPosts).slice(0, 3)
        setPosts(mainPosts)
      } catch (error) {
        console.error('Error fetching blog posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif mb-12 text-center text-slate-800 dark:text-white">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-background dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="aspect-video bg-slate-200 dark:bg-slate-700 animate-pulse"></div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-16 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
                    <div className="h-4 w-20 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
                  </div>
                  <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
                  <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (posts.length === 0) {
    return (
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif mb-4 text-slate-800 dark:text-white">
            Blog
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            No blog posts available at the moment.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            Visit blog
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4 text-slate-800 dark:text-white">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Thoughts on academic publishing, open access, digital tools, and humanities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <article key={index} className="bg-background dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group border border-slate-200 dark:border-slate-700">
              {post.image && (
                <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post['reading-time']}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                  </div>
                </div>

                {/* Categories/Tags */}
                {post.categories && post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.slice(0, 3).map((category, catIndex) => (
                      <span
                        key={catIndex}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        <Tag className="w-3 h-3" />
                        {category}
                      </span>
                    ))}
                  </div>
                )}

                <h3 className="text-xl font-serif mb-3 text-slate-800 dark:text-white group-hover:text-primary transition-colors">
                  <Link href={post.path}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {post.description}
                </p>

                <Link
                  href={post.path}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm font-medium"
                >
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Navigation buttons section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            View all posts
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <Link
            href="/blog/cuentos"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full hover:bg-secondary/80 transition-colors"
          >
            <PenTool className="w-4 h-4" />
            View stories
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <Link
            href="/blog/aforismos"
            className="inline-flex items-center gap-2 bg-outline text-foreground border border-slate-300 dark:border-slate-600 px-6 py-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Tag className="w-4 h-4" />
            View aphorisms
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <Link
            href="/recursos"
            className="inline-flex items-center gap-2 bg-slate-600 text-white px-6 py-3 rounded-full hover:bg-slate-700 transition-colors"
          >
            <FileText className="w-4 h-4" />
            Resources
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}