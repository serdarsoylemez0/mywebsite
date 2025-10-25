'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackPageView } from '@/lib/analytics'

export function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page view when component mounts or pathname changes
    trackPageView(pathname)
  }, [pathname])

  return null // This component doesn't render anything
}
