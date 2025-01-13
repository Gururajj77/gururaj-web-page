import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from './components/navigation'
import Sidebar from './components/sidebar'
import { ThemeProvider } from './components/theme-provider'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gururaj - Developer Portfolio',
  description: 'Full Stack Developer passionate about creating exceptional digital experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        <ThemeProvider>
          <Navigation />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-8 vertical-dotted-border ml-64 relative">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

