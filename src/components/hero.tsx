import { siteConfig } from '@/config/site'
import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <div className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-primary/5 to-cyan-500/10 dark:from-blue-500/20 dark:via-primary/10 dark:to-cyan-500/20" />
      
      {/* Animated background shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Content */}
          <div className="flex-1 text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-gray-900 dark:text-white text-5xl sm:text-6xl md:text-7xl font-black leading-tight">
                Hello!
              </h1>
              <h2 className="text-gray-900 dark:text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
                I'm <span className="bg-gradient-to-r from-primary to-blue-600 dark:from-primary dark:to-blue-400 bg-clip-text text-transparent">Serdar</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-xl sm:text-2xl max-w-2xl leading-relaxed">
                A passionate software engineer from Istanbul, Turkey.
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                About
              </Link>
              
              <a 
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold text-lg border-2 border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
          
          {/* Right side - Profile Image */}
          <div className="flex-shrink-0 animate-fade-in-up stagger-1">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              {/* Hexagon shape container */}
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-500 rounded-3xl rotate-45 transform scale-90 opacity-20 blur-2xl"></div>
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-primary/30 dark:border-primary/40 shadow-2xl shadow-primary/20 hover:scale-105 hover:shadow-primary/30 transition-all duration-500">
                  <Image
                    src="/mainphoto.jpg"
                    alt={siteConfig.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
