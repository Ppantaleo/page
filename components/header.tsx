"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image
              src="/images/logo.png"
              alt="Patricio Pantaleo Logo"
              width={120}
              height={60}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#about" label="ABOUT" />
            <NavLink href="https://patricio.pantaleo.ar/blog" label="BLOG" />
            <NavLink href="#skills" label="SKILLS" />
            <NavLink href="#projects" label="PROJECTS" />
            <NavLink href="#interests" label="INTERESTS" />
            <NavLink href="#contact" label="CONTACT" />

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={mounted && theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {mounted && theme === "dark" ? (
                <Sun className="w-5 h-5 text-slate-300" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={mounted && theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {mounted && theme === "dark" ? (
                <Sun className="w-5 h-5 text-slate-300" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink href="#about" label="ABOUT" onClick={closeMenu} />
              <MobileNavLink href="https://patricio.pantaleo.ar/blog" label="BLOG" onClick={closeMenu} />
              <MobileNavLink href="#skills" label="SKILLS" onClick={closeMenu} />
              <MobileNavLink href="#projects" label="PROJECTS" onClick={closeMenu} />
              <MobileNavLink href="#interests" label="INTERESTS" onClick={closeMenu} />
              <MobileNavLink href="#contact" label="CONTACT" onClick={closeMenu} />
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, label }) {
  return (
    <Link
      href={href}
      className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors tracking-wider text-sm"
    >
      {label}
    </Link>
  )
}

function MobileNavLink({ href, label, onClick }) {
  return (
    <Link
      href={href}
      className="block py-2 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors tracking-wider text-sm"
      onClick={onClick}
    >
      {label}
    </Link>
  )
}

