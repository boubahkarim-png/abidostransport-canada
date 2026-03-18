import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Abidostransport Canada - Vehicle Transport Services',
  description: 'Professional vehicle transport services across Quebec and Ontario. Car transport, truck transport, snowbird services, and dealer/auction transport.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-gray-50 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
