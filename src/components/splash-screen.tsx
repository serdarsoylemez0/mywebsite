'use client'

import { useState, useEffect } from 'react'
import { siteConfig } from '@/config/site'

interface SplashScreenProps {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [showSkip, setShowSkip] = useState(false)

  useEffect(() => {
    // Show skip button after 5 seconds
    const timer = setTimeout(() => {
      setShowSkip(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-950 transition-opacity duration-500">
      <div className="text-center space-y-6 animate-fade-in">
        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight">
          {siteConfig.name}
        </h1>
        
        {/* Contact Info */}
        <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          <p className="hover:text-primary transition-colors">
            <a href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
          </p>
          <p className="text-gray-700 dark:text-gray-300 max-w-md mx-auto pt-2">
            A passionate software engineer from Istanbul, Turkey.
          </p>
        </div>
      </div>

      {/* Skip Button - appears after 5 seconds in bottom-right corner */}
      {showSkip && (
        <button
          onClick={onComplete}
          className="fixed bottom-8 right-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold text-sm hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in border border-gray-200 dark:border-gray-700"
        >
          Enter Site
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      )}
    </div>
  )
}
