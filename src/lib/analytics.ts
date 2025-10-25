// Simple analytics tracking without external services
// Stores data in localStorage for demo purposes

export interface VisitorData {
  ip: string
  page: string
  timestamp: number
  lastActivity: number
  userAgent: string
  referrer: string
  country?: string
  city?: string
}

export interface AnalyticsData {
  visitors: VisitorData[]
  pageViews: Record<string, number>
  lastUpdated: number
}

const STORAGE_KEY = 'site_analytics'
const SESSION_KEY = 'visitor_session'

// Get visitor's approximate location (free API, no key needed)
async function getVisitorInfo() {
  try {
    const response = await fetch('https://ipapi.co/json/')
    const data = await response.json()
    return {
      ip: data.ip || 'Unknown',
      country: data.country_name || 'Unknown',
      city: data.city || 'Unknown',
    }
  } catch (error) {
    return {
      ip: 'Unknown',
      country: 'Unknown',
      city: 'Unknown',
    }
  }
}

// Get device type
function getDeviceType(): 'desktop' | 'mobile' | 'tablet' {
  const ua = navigator.userAgent
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet'
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile'
  }
  return 'desktop'
}

// Get browser name
function getBrowserName(): string {
  const ua = navigator.userAgent
  if (ua.includes('Firefox')) return 'Firefox'
  if (ua.includes('Chrome')) return 'Chrome'
  if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari'
  if (ua.includes('Edge')) return 'Edge'
  if (ua.includes('Opera')) return 'Opera'
  return 'Other'
}

// Track page view
export async function trackPageView(page: string) {
  try {
    // Check if this is a new session (not visited in last 30 minutes)
    const lastVisit = localStorage.getItem(SESSION_KEY)
    const now = Date.now()
    const isNewSession = !lastVisit || (now - parseInt(lastVisit)) > 30 * 60 * 1000

    // Update session timestamp
    localStorage.setItem(SESSION_KEY, now.toString())

    // Get existing analytics data
    const stored = localStorage.getItem(STORAGE_KEY)
    const analytics: AnalyticsData = stored ? JSON.parse(stored) : {
      visitors: [],
      pageViews: {},
      lastUpdated: now,
    }

    // Get visitor info
    const visitorInfo = await getVisitorInfo()
    
    // Add visitor data if new session
    if (isNewSession) {
      const visitorData: VisitorData = {
        ip: visitorInfo.ip,
        page,
        timestamp: now,
        lastActivity: now,
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'Direct',
        country: visitorInfo.country,
        city: visitorInfo.city,
      }
      analytics.visitors.push(visitorData)
    } else {
      // Update last activity for existing visitor
      const existingVisitor = analytics.visitors.find(v => v.ip === visitorInfo.ip)
      if (existingVisitor) {
        existingVisitor.lastActivity = now
        existingVisitor.page = page // Update current page
      }
    }

    // Track page view
    analytics.pageViews[page] = (analytics.pageViews[page] || 0) + 1
    analytics.lastUpdated = now

    // Keep only last 1000 visitors
    if (analytics.visitors.length > 1000) {
      analytics.visitors = analytics.visitors.slice(-1000)
    }

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(analytics))

    return visitorInfo
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

// Get analytics stats
export function getAnalyticsStats() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      return {
        activeVisitors: 0,
        totalVisitors: 0,
        totalPageViews: 0,
        uniqueIPs: 0,
        topPages: [],
        recentVisitors: [],
        deviceStats: { desktop: 0, mobile: 0, tablet: 0 },
        browserStats: {} as Record<string, number>,
      }
    }

    const analytics: AnalyticsData = JSON.parse(stored)
    const now = Date.now()
    const fiveMinutesAgo = now - 5 * 60 * 1000

    // Active visitors (had activity in last 5 minutes)
    const activeVisitors = analytics.visitors.filter(v => 
      (v.lastActivity || v.timestamp) > fiveMinutesAgo
    ).length

    // Unique IPs
    const uniqueIPs = new Set(analytics.visitors.map(v => v.ip)).size

    // Total page views
    const totalPageViews = Object.values(analytics.pageViews).reduce((sum, count) => sum + count, 0)

    // Top pages
    const topPages = Object.entries(analytics.pageViews)
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 5)

    // Recent visitors (last 10)
    const recentVisitors = analytics.visitors
      .slice(-10)
      .reverse()
      .map(v => ({
        ip: v.ip.includes('.') ? v.ip.split('.').slice(0, 2).join('.') + '.***' : v.ip, // Mask IP for privacy
        page: v.page,
        time: formatTimeAgo(v.timestamp),
        country: v.country || 'Unknown',
      }))

    // Device stats
    const deviceCounts = { desktop: 0, mobile: 0, tablet: 0 }
    analytics.visitors.forEach(v => {
      const device = getDeviceTypeFromUA(v.userAgent)
      deviceCounts[device]++
    })
    const totalDevices = analytics.visitors.length || 1
    const deviceStats = {
      desktop: Math.round((deviceCounts.desktop / totalDevices) * 100),
      mobile: Math.round((deviceCounts.mobile / totalDevices) * 100),
      tablet: Math.round((deviceCounts.tablet / totalDevices) * 100),
    }

    // Browser stats
    const browserCounts: Record<string, number> = {}
    analytics.visitors.forEach(v => {
      const browser = getBrowserFromUA(v.userAgent)
      browserCounts[browser] = (browserCounts[browser] || 0) + 1
    })
    const browserStats: Record<string, number> = {}
    Object.entries(browserCounts).forEach(([browser, count]) => {
      browserStats[browser] = Math.round((count / totalDevices) * 100)
    })

    return {
      activeVisitors,
      totalVisitors: analytics.visitors.length,
      totalPageViews,
      uniqueIPs,
      topPages,
      recentVisitors,
      deviceStats,
      browserStats,
    }
  } catch (error) {
    console.error('Error getting analytics stats:', error)
    return {
      activeVisitors: 0,
      totalVisitors: 0,
      totalPageViews: 0,
      uniqueIPs: 0,
      topPages: [],
      recentVisitors: [],
      deviceStats: { desktop: 0, mobile: 0, tablet: 0 },
      browserStats: {},
    }
  }
}

// Helper functions
function getDeviceTypeFromUA(ua: string): 'desktop' | 'mobile' | 'tablet' {
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet'
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile'
  }
  return 'desktop'
}

function getBrowserFromUA(ua: string): string {
  if (ua.includes('Firefox')) return 'Firefox'
  if (ua.includes('Chrome')) return 'Chrome'
  if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari'
  if (ua.includes('Edge')) return 'Edge'
  if (ua.includes('Opera')) return 'Opera'
  return 'Other'
}

function formatTimeAgo(timestamp: number): string {
  const seconds = Math.floor((Date.now() - timestamp) / 1000)
  if (seconds < 60) return `${seconds}s ago`
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}

// Export current device and browser for immediate use
export const currentDevice = typeof window !== 'undefined' ? getDeviceType() : 'desktop'
export const currentBrowser = typeof window !== 'undefined' ? getBrowserName() : 'Unknown'
