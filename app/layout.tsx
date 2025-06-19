import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Script from "next/script"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Patricio Pantaleo - Digital Humanities & Academic Publishing",
  description: "Portfolio of Patricio Pantaleo, expert in digital humanities, academic publishing, and metadata management. Specializing in metadata management and persistent identifiers for academic content.",
  generator: 'v0.dev',
  keywords: ["Digital Humanities", "Academic Publishing", "Metadata Management", "Research Support", "Open Access", "Crossref", "ORCID", "Patricio Pantaleo", "Paideia Studio"],
  authors: [{ name: "Patricio Pantaleo", url: "https://patricio.pantaleo.ar" }],
  creator: "Patricio Pantaleo",
  publisher: "Paideia Studio",
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  // Open Graph
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://patricio.pantaleo.ar",
    title: "Patricio Pantaleo - Digital Humanities & Academic Publishing",
    description: "Expert in digital humanities, academic publishing, and metadata management. Director of Paideia Studio, a Crossref sponsor.",
    siteName: "Patricio Pantaleo",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Patricio Pantaleo Logo",
      },
    ],
  },
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Patricio Pantaleo - Digital Humanities & Academic Publishing",
    description: "Expert in digital humanities, academic publishing, and metadata management. Director of Paideia Studio.",
    images: ["/images/logo.png"],
  },
  // Canonical URL
  alternates: {
    canonical: "https://patricio.pantaleo.ar",
  },
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Viewport
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link href="https://fonts.cdnfonts.com/css/tan-pearl" rel="stylesheet" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />

        {/* MailChimp Script */}
        <Script
          id="mailchimp"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/9ff2d7319c483513cb68224bd/bf810a0f4a8dfcda83f6c4d52.js");
            `
          }}
        />
        
      </head>
      <body className={`${montserrat.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1CK9XW12H5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1CK9XW12H5');
          `}
        </Script>
        
      </body>
    </html>
  )
}
