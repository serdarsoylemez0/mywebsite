'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './theme-toggle'
import { siteConfig } from '@/config/site'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  // Admin is hidden - access directly at /admin
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#101922]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#101922]/60 transition-all duration-300">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative">
            {/* Animated glow background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-500 to-primary rounded-xl blur-xl opacity-40 group-hover:opacity-60 animate-pulse transition-all" />
            <div className="absolute inset-0 bg-primary/30 rounded-xl blur-md group-hover:blur-lg transition-all" />
            
            {/* Logo icon */}
            <div className="relative size-12 text-primary transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 p-2 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
          </div>
          
          {/* Brand name */}
          <div className="flex flex-col">
            <h2 className="text-xl font-black leading-tight tracking-tight bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent group-hover:from-primary group-hover:via-blue-600 group-hover:to-primary transition-all duration-300">
              {siteConfig.name}
            </h2>
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase">
              {siteConfig.title}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-8">
          <nav className="flex items-center gap-1">
            {navItems.map(item => {
              const isActive = pathname === item.href
              const isAdmin = item.href === '/admin'
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? isAdmin
                        ? 'text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg shadow-orange-500/30'
                        : 'text-primary bg-primary/10'
                      : isAdmin
                        ? 'text-orange-600 dark:text-orange-400 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 border border-orange-500/30'
                        : 'text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                  {isActive && !isAdmin && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center p-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#101922] animate-slide-down">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            {navItems.map(item => {
              const isActive = pathname === item.href
              const isAdmin = item.href === '/admin'
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? isAdmin
                        ? 'text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg'
                        : 'text-primary bg-primary/10'
                      : isAdmin
                        ? 'text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-semibold rounded-lg bg-primary text-white text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
