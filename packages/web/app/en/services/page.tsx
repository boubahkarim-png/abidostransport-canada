import Link from 'next/link'

export default function EnglishServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AT</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Abidostransport</h1>
              <p className="text-xs text-gray-500">Canada Vehicle Transport</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/en" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link href="/en/services" className="text-blue-600 font-medium">Services</Link>
            <Link href="/en/quote" className="text-gray-700 hover:text-blue-600 font-medium">Get Quote</Link>
            <Link href="/en/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            <Link href="/fr/services" className="ml-4 px-3 py-1 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">FR</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Car Transport', desc: 'Safe and secure car transport across Quebec, Ontario, and all of Canada. Door-to-door service available.', icon: '🚗', features: ['Fully insured transport', 'Real-time tracking', 'Competitive pricing'] },
            { title: 'Snowbird Service', desc: 'Seasonal vehicle transport for snowbirds traveling between Canada and southern US destinations.', icon: '☀️', features: ['Florida & Arizona routes', 'Flexible scheduling', 'Storage options'] },
            { title: 'Dealer & Auction', desc: 'Professional transport services for car dealers and auction purchases across North America.', icon: '🏢', features: ['Multi-vehicle discounts', 'Dealer partnerships', 'Auction pickup service'] },
            { title: 'Truck & SUV', desc: 'Heavy-duty transport for trucks, SUVs, vans, and larger vehicles with specialized equipment.', icon: '🚚', features: ['Oversized vehicle handling', 'Enclosed transport option', 'Cross-border shipping'] },
            { title: 'Express Transport', desc: 'Urgent vehicle transport with expedited delivery options for time-sensitive shipments.', icon: '⚡', features: ['Priority pickup', 'Express delivery', 'GPS tracking'] },
            { title: 'Enclosed Transport', desc: 'Premium enclosed transport for luxury, classic, and exotic vehicles requiring extra protection.', icon: '🛡️', features: ['Weather protection', 'Extra insurance coverage', 'White-glove service'] }
          ].map((service, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <ul className="text-sm text-gray-500 space-y-2">
                {service.features.map((f, j) => <li key={j} className="flex items-center"><span className="text-green-500 mr-2">✓</span>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Need a quote?</h2>
          <p className="mb-6">Get a free quote in minutes</p>
          <Link href="/en/quote" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50">
            Get Free Quote
          </Link>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Abidostransport Canada. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
