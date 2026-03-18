import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abidostransport Admin - Dashboard',
  description: 'Administration dashboard for Abidostransport Canada',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-900 text-white shadow">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold">
                Abidostransport Admin
              </div>
              <div className="space-x-4">
                <a href="/" className="hover:text-primary-400">
                  Dashboard
                </a>
                <a href="/bookings" className="hover:text-primary-400">
                  Bookings
                </a>
                <a href="/customers" className="hover:text-primary-400">
                  Customers
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}