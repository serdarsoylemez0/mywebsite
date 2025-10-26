import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { VinylPlayer } from '@/components/vinyl-player'
import { AnalyticsTracker } from '@/components/analytics-tracker'
import { SplashWrapper } from '@/components/splash-wrapper'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Serdar Soylemez - Software Engineer',
  description: 'I design and build beautiful, fast, and accessible web experiences for everyone.',
  keywords: ['software engineer', 'portfolio', 'web development', 'react', 'typescript'],
  authors: [{ name: 'Serdar Soylemez' }],
  icons: {
    icon: '/icon',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://serdarsoylemez.com',
    title: 'Serdar Soylemez - Software Engineer',
    description: 'I design and build beautiful, fast, and accessible web experiences for everyone.',
    siteName: 'Serdar Soylemez Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serdar Soylemez - Software Engineer',
    description: 'I design and build beautiful, fast, and accessible web experiences for everyone.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} bg-background-light dark:bg-background-dark font-display`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnalyticsTracker />
          <SplashWrapper>
            <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
              <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
                  <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <Navigation />
                    <main className="flex-1">{children}</main>
                  </div>
                </div>
              </div>
              <VinylPlayer />
            </div>
          </SplashWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
