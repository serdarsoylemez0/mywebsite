import { siteConfig } from '@/config/site'

export function Hero() {
  return (
    <div className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10" />
      
      {/* Animated background shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="relative flex flex-col gap-8 px-4 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up flex justify-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border-2 border-green-200 dark:border-green-800 shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-lg shadow-green-500/50"></span>
            </span>
            <span className="text-sm font-bold text-green-700 dark:text-green-400 tracking-wide">✨ Available for opportunities</span>
          </div>
        </div>
        
        {/* Main heading */}
        <div className="flex flex-col gap-4 animate-fade-in-up stagger-1">
          <h1 className="text-gray-900 dark:text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-[-0.033em]">
            <span className="block">{siteConfig.name}</span>
            <span className="block mt-2 bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent animate-gradient">
              {siteConfig.title}
            </span>
          </h1>
          <h2 className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            {siteConfig.tagline}
          </h2>
        </div>
        
        {/* Stats cards - Redesigned with 2 cards */}
        <div className="flex flex-wrap gap-8 justify-center pt-8 max-w-3xl mx-auto animate-fade-in-up stagger-2">
          <div className="group relative flex min-w-[220px] flex-1 flex-col gap-4 rounded-3xl p-8 bg-gradient-to-br from-white to-gray-50 dark:from-[#1a242f] dark:to-[#151d27] border-2 border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-3 hover:border-primary/50">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-blue-500/5 transition-all duration-500" />
            
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 group-hover:from-primary/30 group-hover:to-blue-500/30 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white text-5xl font-black leading-tight bg-gradient-to-br from-primary via-blue-600 to-primary bg-clip-text text-transparent">
                    {siteConfig.stats.experience}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider mt-1">Years</p>
                </div>
              </div>
            </div>
            <p className="relative text-gray-700 dark:text-gray-300 text-base font-bold">Experience</p>
          </div>
          
          <div className="group relative flex min-w-[220px] flex-1 flex-col gap-4 rounded-3xl p-8 bg-gradient-to-br from-white to-gray-50 dark:from-[#1a242f] dark:to-[#151d27] border-2 border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-3 hover:border-primary/50">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-blue-500/5 transition-all duration-500" />
            
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white text-5xl font-black leading-tight bg-gradient-to-br from-green-600 via-emerald-600 to-green-600 dark:from-green-400 dark:via-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                    {siteConfig.stats.projects}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider mt-1">Completed</p>
                </div>
              </div>
            </div>
            <p className="relative text-gray-700 dark:text-gray-300 text-base font-bold">Projects</p>
          </div>
        </div>
      </div>
    </div>
  )
}
