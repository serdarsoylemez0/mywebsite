'use client'

import { useState, useEffect } from 'react'
import { SplashScreen } from './splash-screen'

interface SplashWrapperProps {
  children: React.ReactNode
}

export function SplashWrapper({ children }: SplashWrapperProps) {
  const [showSplash, setShowSplash] = useState(true)
  const [hasVisited, setHasVisited] = useState(false)

  useEffect(() => {
    // Check if user has already visited in this session
    const visited = sessionStorage.getItem('hasVisited')
    if (visited) {
      setShowSplash(false)
      setHasVisited(true)
    }
  }, [])

  const handleComplete = () => {
    setShowSplash(false)
    sessionStorage.setItem('hasVisited', 'true')
  }

  if (hasVisited || !showSplash) {
    return <>{children}</>
  }

  return (
    <>
      <SplashScreen onComplete={handleComplete} />
      <div className="opacity-0 pointer-events-none">
        {children}
      </div>
    </>
  )
}
