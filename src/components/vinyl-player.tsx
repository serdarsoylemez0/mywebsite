'use client'

import { useEffect, useRef, useState } from 'react'

export function VinylPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Auto-play on mount with multiple attempts
    const playAudio = async () => {
      if (!audioRef.current) return

      try {
        // Set volume to 40% (4/10)
        audioRef.current.volume = 0.4
        await audioRef.current.play()
        setIsPlaying(true)
      } catch (error) {
        // Auto-play blocked, try again on first user interaction
        const playOnInteraction = async () => {
          try {
            if (audioRef.current) {
              await audioRef.current.play()
              setIsPlaying(true)
              // Remove listeners after successful play
              document.removeEventListener('click', playOnInteraction)
              document.removeEventListener('keydown', playOnInteraction)
              document.removeEventListener('touchstart', playOnInteraction)
            }
          } catch (err) {
            console.log('Could not auto-play audio')
          }
        }

        // Listen for any user interaction
        document.addEventListener('click', playOnInteraction, { once: true })
        document.addEventListener('keydown', playOnInteraction, { once: true })
        document.addEventListener('touchstart', playOnInteraction, { once: true })
      }
    }

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      playAudio()
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const togglePlay = async () => {
    if (!audioRef.current) return

    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        await audioRef.current.play()
        setIsPlaying(true)
      }
    } catch (error) {
      console.error('Error toggling audio:', error)
    }
  }

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
      />

      {/* Vinyl Record - Smaller and Subtle */}
      <div className={`fixed bottom-4 right-4 z-40 group transition-all duration-500 ${isLoaded ? 'opacity-70 hover:opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <button
          onClick={togglePlay}
          className="relative focus:outline-none focus:ring-1 focus:ring-primary/50 focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-[#101922] rounded-full"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {/* Outer glow ring (subtle when playing) */}
          <div className={`absolute inset-0 rounded-full transition-all duration-700 ${
            isPlaying 
              ? 'bg-primary/10 dark:bg-primary/15 blur-xl scale-110' 
              : 'bg-transparent'
          }`} />
          
          {/* Shadow/Reflection - More subtle */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/15 dark:via-black/10 dark:to-black/25 rounded-full blur-lg translate-y-2 scale-95" />
          
          {/* Vinyl Record - Smaller */}
          <div
            className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full cursor-pointer transition-all duration-500 hover:scale-105 ${
              isPlaying ? 'animate-spin-slow' : ''
            }`}
            style={{
              background: 'radial-gradient(circle at 35% 35%, #2a2a2a 0%, #0a0a0a 50%, #000000 100%)',
              boxShadow: isPlaying 
                ? '0 6px 20px rgba(17, 115, 212, 0.15), inset 0 0 15px rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.08)'
                : '0 4px 16px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.03), 0 0 0 1px rgba(255, 255, 255, 0.06)',
            }}
          >
            {/* Vinyl grooves effect - Simplified */}
            <div className="absolute inset-0 rounded-full opacity-30">
              <div className="absolute inset-1 rounded-full border border-gray-700/40" />
              <div className="absolute inset-2 rounded-full border border-gray-700/30" />
              <div className="absolute inset-3 rounded-full border border-gray-700/20" />
              <div className="absolute inset-4 rounded-full border border-gray-700/20" />
              <div className="absolute inset-5 rounded-full border border-gray-700/10" />
            </div>

            {/* Center label - Smaller and more subtle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-primary/80 via-blue-600/80 to-primary/80 flex items-center justify-center shadow-lg transition-all duration-300 ${
                  isPlaying ? 'scale-105' : 'scale-100'
                }`}
                style={{
                  boxShadow: isPlaying 
                    ? '0 0 10px rgba(17, 115, 212, 0.4), 0 0 20px rgba(17, 115, 212, 0.2)'
                    : '0 0 8px rgba(17, 115, 212, 0.3)',
                }}
              >
                {/* Play/Pause icon - Smaller */}
                {isPlaying ? (
                  <svg
                    className="w-2.5 h-2.5 md:w-3 md:h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg
                    className="w-2.5 h-2.5 md:w-3 md:h-3 text-white ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>
            </div>

            {/* Highlight effect - Subtle */}
            <div
              className="absolute top-2 left-2 w-3 h-3 rounded-full bg-white/20 blur-sm"
              style={{ transform: 'rotate(45deg)' }}
            />
          </div>

          {/* Hover tooltip - Compact */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
            <div className="bg-gray-900/90 dark:bg-gray-800/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap">
              {isPlaying ? '🎵 Playing' : '▶️ Play'}
            </div>
          </div>

          {/* Volume indicator - Smaller */}
          {isPlaying && (
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          )}
        </button>
      </div>
    </>
  )
}
