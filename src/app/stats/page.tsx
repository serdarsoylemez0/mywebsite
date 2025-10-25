'use client'

import { useState, useEffect } from 'react'
import { getAnalyticsStats } from '@/lib/analytics'

export default function StatsPage() {
  const [stats, setStats] = useState({
    activeVisitors: 0,
    totalVisitors: 0,
    totalPageViews: 0,
    uniqueIPs: 0,
    topPages: [] as { page: string; views: number }[],
    recentVisitors: [] as { ip: string; page: string; time: string; country: string }[],
    deviceStats: { desktop: 0, mobile: 0, tablet: 0 },
    browserStats: {} as Record<string, number>,
  })

  useEffect(() => {
    // Load real analytics data
    const loadStats = () => {
      const realStats = getAnalyticsStats()
      setStats(realStats)
    }

    loadStats()

    // Update stats every 10 seconds
    const interval = setInterval(loadStats, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0f16] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2">
            📊 Website Analytics
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Real-time statistics and visitor insights
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Active Visitors */}
          <div className="bg-white dark:bg-[#1c2127] rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-green-500/10">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </div>
            <h3 className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-1">Active Visitors</h3>
            <p className="text-4xl font-black text-gray-900 dark:text-white">{stats.activeVisitors}</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-2">🟢 Live now</p>
          </div>

          {/* Total Visitors */}
          <div className="bg-white dark:bg-[#1c2127] rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-1">Total Visitors</h3>
            <p className="text-4xl font-black text-gray-900 dark:text-white">{stats.totalVisitors.toLocaleString()}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">All time</p>
          </div>

          {/* Page Views */}
          <div className="bg-white dark:bg-[#1c2127] rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-1">Page Views</h3>
            <p className="text-4xl font-black text-gray-900 dark:text-white">{stats.totalPageViews.toLocaleString()}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Total views</p>
          </div>

          {/* Unique IPs */}
          <div className="bg-white dark:bg-[#1c2127] rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-purple-500/10">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
            </div>
            <h3 className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-1">Unique IPs</h3>
            <p className="text-4xl font-black text-gray-900 dark:text-white">{stats.uniqueIPs.toLocaleString()}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Different visitors</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Top Pages */}
          <div className="bg-white dark:bg-[#1c2127] rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">📄 Top Pages</h3>
            <div className="space-y-3">
              {stats.topPages.length > 0 ? (
                stats.topPages.map((page, index) => (
                  <div key={page.page} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-[#0a0f16]">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                        {index + 1}
                      </span>
                      <span className="text-gray-900 dark:text-white font-medium">{page.page}</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 font-semibold">{page.views.toLocaleString()} views</span>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <p>No page views yet. Start browsing to see data!</p>
                </div>
              )}
            </div>
          </div>

          {/* Recent Visitors */}
          <div className="bg-white dark:bg-[#1c2127] rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">🌍 Recent Visitors</h3>
            <div className="space-y-3">
              {stats.recentVisitors.length > 0 ? (
                stats.recentVisitors.map((visitor, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-[#0a0f16]">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-gray-900 dark:text-white font-mono text-sm">{visitor.ip}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{visitor.country}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <span>{visitor.page}</span>
                        <span>•</span>
                        <span>{visitor.time}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <p>No recent visitors yet</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Device & Browser Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Device Stats */}
          <div className="bg-white dark:bg-[#1c2127] rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">📱 Device Types</h3>
            <div className="space-y-4">
              {Object.entries(stats.deviceStats).length > 0 && Object.values(stats.deviceStats).some(v => v > 0) ? (
                Object.entries(stats.deviceStats).map(([device, percentage]) => (
                  <div key={device}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-900 dark:text-white font-medium capitalize">{device}</span>
                      <span className="text-gray-600 dark:text-gray-400 font-semibold">{percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <p>No device data yet</p>
                </div>
              )}
            </div>
          </div>

          {/* Browser Stats */}
          <div className="bg-white dark:bg-[#1c2127] rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">🌐 Browsers</h3>
            <div className="space-y-4">
              {Object.entries(stats.browserStats).length > 0 ? (
                Object.entries(stats.browserStats).map(([browser, percentage]) => (
                  <div key={browser}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-900 dark:text-white font-medium">{browser}</span>
                      <span className="text-gray-600 dark:text-gray-400 font-semibold">{percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <p>No browser data yet</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Info Note */}
        <div className="mt-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
          <h3 className="text-lg font-bold text-green-900 dark:text-green-300 mb-2">✅ Real Analytics Active</h3>
          <p className="text-green-800 dark:text-green-200 text-sm mb-2">
            This page shows <strong>real visitor data</strong> tracked locally without external services. Data includes:
          </p>
          <ul className="list-disc list-inside text-green-800 dark:text-green-200 text-sm space-y-1">
            <li>Actual page views from your visitors</li>
            <li>Real device and browser statistics</li>
            <li>Live visitor tracking (updates every 10 seconds)</li>
            <li>Privacy-friendly (no cookies, no external tracking)</li>
          </ul>
          <p className="text-green-800 dark:text-green-200 text-sm mt-2">
            <strong>Note:</strong> Data is stored in browser localStorage. Clear browser data to reset statistics.
          </p>
        </div>
      </div>
    </div>
  )
}
