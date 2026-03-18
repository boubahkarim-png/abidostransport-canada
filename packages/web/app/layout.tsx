import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abidostransport Canada - Vehicle Transport Services',
  description: 'Professional vehicle transport services across Quebec and Ontario',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold text-primary-700">
                Abidostransport
              </div>
              <div className="space-x-4">
                <a href="/" className="text-gray-700 hover:text-primary-600">
                  Home
                </a>
                <a href="/services" className="text-gray-700 hover:text-primary-600">
                  Services
                </a>
                <a href="/quote" className="text-gray-700 hover:text-primary-600">
                  Get Quote
                </a>
                <a href="/contact" className="text-gray-700 hover:text-primary-600">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4">
            <p className="text-center">
              © 2024 Abidostransport Canada. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}