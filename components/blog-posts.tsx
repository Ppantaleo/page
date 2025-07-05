// components/blog-posts.tsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Calendar } from "lucide-react"

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

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/blog/index.xml')
        const xmlText = await response.text()
        
        // Parse XML
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml')
        const items = xmlDoc.querySelectorAll('item')
        
        const parsedPosts = Array.from(items).slice(0, 3).map(item => {
          const title = item.querySelector('title')?.textContent || ''
          const link = item.querySelector('link')?.textContent || ''
          const description = item.querySelector('description')?.textContent || ''
          const pubDate = item.querySelector('pubDate')?.textContent || ''
          
          // Extraer imagen del contenido si existe
          const contentEncoded = item.querySelector('content\\:encoded')?.textContent || 
                                item.querySelector('description')?.textContent || ''
          const imgMatch = contentEncoded.match(/<img[^>]+src="([^">]+)"/i)
          const image = imgMatch ? imgMatch[1] : null
          
          // Calcular tiempo de lectura aproximado
          const wordCount = description.replace(/<[^>]*>/g, '').split(' ').length
          const readingTime = Math.ceil(wordCount / 200) // 200 palabras por minuto

          return {
            title: title.replace(/<!\[CDATA\[|\]\]>/g, ''),
            description: description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
            date: pubDate,
            path: link.replace('https://patricio.pantaleo.ar', ''),
            image,
            'reading-time': `${readingTime} min`
          }
        })
        
        setPosts(parsedPosts)
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
    return date.toLocaleDateString('es-ES', {
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
            Últimas entradas del blog
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
            No hay entradas disponibles en este momento.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            Visitar blog
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
            Últimas entradas del blog
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Reflexiones sobre publicación académica, acceso abierto, herramientas digitales y humanidades.
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
                <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-4">
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
                  Leer más
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Ver todas las entradas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}