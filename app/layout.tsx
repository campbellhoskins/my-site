import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { Spotlight } from './components/spotlight'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Campbell Hoskins',
    template: '%s | Campbell Hoskins',
  },
  description: 'Software Engineer | Stanford AI/ML Graduate',
  openGraph: {
    title: 'Campbell Hoskins',
    description: 'Software Engineer | Stanford AI/ML Graduate',
    url: baseUrl,
    siteName: 'Campbell Hoskins',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes: (string | undefined | null | false)[]): string => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'scroll-smooth',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div id="_next">
          <div className="group/spotlight relative">
            <Spotlight />
            <div className="mx-auto min-h-screen max-w-screen-xl px-16 py-12 font-sans md:px-32 md:py-16 lg:py-0">
              <a 
                href="#content" 
                className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
              >
                Skip to Content
              </a>
              <div className="lg:flex lg:justify-between lg:gap-4">
                {children}
              </div>
            </div>
          </div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  )
}
