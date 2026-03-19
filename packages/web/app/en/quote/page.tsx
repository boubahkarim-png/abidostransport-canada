'use client'
import { useState } from 'react'
import Link from 'next/link'

const PRICES: Record<string, Record<string, number>> = {
  'Montreal': { 'Toronto': 550, 'Ottawa': 400, 'Quebec City': 350, 'Hamilton': 600, 'London': 650, 'Florida': 1500, 'Arizona': 1800 },
  'Quebec City': { 'Toronto': 650, 'Ottawa': 500, 'Montreal': 350, 'Hamilton': 700, 'London': 750, 'Florida': 1600, 'Arizona': 1900 },
  'Toronto': { 'Montreal': 550, 'Ottawa': 350, 'Quebec City': 650, 'Hamilton': 250, 'London': 200, 'Florida': 1400, 'Arizona': 1700 },
  'Ottawa': { 'Montreal': 400, 'Toronto': 350, 'Quebec City': 500, 'Hamilton': 400, 'London': 450, 'Florida': 1450, 'Arizona': 1750 },
  'Hamilton': { 'Montreal': 600, 'Toronto': 250, 'Ottawa': 400, 'Quebec City': 700, 'London': 150, 'Florida': 1350, 'Arizona': 1650 },
  'London': { 'Montreal': 650, 'Toronto': 200, 'Ottawa': 450, 'Quebec City': 750, 'Hamilton': 150, 'Florida': 1300, 'Arizona': 1600 },
}

const VEHICLE_MULTIPLIERS: Record<string, number> = {
  'Sedan': 1.0,
  'SUV': 1.2,
  'Truck': 1.3,
  'Van': 1.25,
  'Luxury': 1.5,
}

const CITIES = ['Montreal', 'Quebec City', 'Toronto', 'Ottawa', 'Hamilton', 'London', 'Florida', 'Arizona']

export default function QuotePage() {
  const [pickup, setPickup] = useState('')
  const [delivery, setDelivery] = useState('')
  const [vehicle, setVehicle] = useState('Sedan')
  const [transport, setTransport] = useState('open')
  const [price, setPrice] = useState<number | null>(null)

  const calculatePrice = () => {
    if (!pickup || !delivery || pickup === delivery) {
      alert('Please select different pickup and delivery locations')
      return
    }
    
    const basePrice = PRICES[pickup]?.[delivery] || 800
    const vehicleMultiplier = VEHICLE_MULTIPLIERS[vehicle] || 1.0
    const transportMultiplier = transport === 'enclosed' ? 1.4 : 1.0
    
    const finalPrice = Math.round(basePrice * vehicleMultiplier * transportMultiplier)
    setPrice(finalPrice)
  }

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
              <p className="text-xs text-gray-500">Vehicle Transport Canada</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/en" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link href="/en/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
            <Link href="/en/quote" className="text-blue-600 font-medium">Get Quote</Link>
            <Link href="/en/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            <Link href="/fr/quote" className="ml-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium">FR</Link>
          </nav>
          <a href="tel:1-800-ABIDOS" className="bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            📞 Call Now
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Your Instant Quote</h1>
          <p className="text-xl text-gray-600">Calculate your transport cost in seconds. No obligation, free estimate.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📦 Quote Calculator</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location *</label>
                <select 
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select pickup city</option>
                  {CITIES.filter(c => !delivery || c !== delivery).map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Location *</label>
                <select 
                  value={delivery}
                  onChange={(e) => setDelivery(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select delivery city</option>
                  {CITIES.filter(c => !pickup || c !== pickup).map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type *</label>
                <select 
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Sedan">🚗 Sedan / Car</option>
                  <option value="SUV">🚙 SUV / Crossover</option>
                  <option value="Truck">🚚 Truck / Pickup</option>
                  <option value="Van">🚐 Van / Minivan</option>
                  <option value="Luxury">🏎️ Luxury / Classic</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Transport Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setTransport('open')}
                    className={`p-4 rounded-lg border-2 text-center ${transport === 'open' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}
                  >
                    <span className="block text-2xl mb-1">🚛</span>
                    <span className="font-medium">Open Transport</span>
                    <span className="block text-sm text-gray-500">Standard, most popular</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTransport('enclosed')}
                    className={`p-4 rounded-lg border-2 text-center ${transport === 'enclosed' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}
                  >
                    <span className="block text-2xl mb-1">🏠</span>
                    <span className="font-medium">Enclosed Transport</span>
                    <span className="block text-sm text-gray-500">Premium protection (+40%)</span>
                  </button>
                </div>
              </div>

              <button
                onClick={calculatePrice}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
              >
                Calculate My Price →
              </button>
            </div>

            {price && (
              <div className="mt-8 p-6 bg-green-50 border-2 border-green-500 rounded-xl">
                <p className="text-lg text-gray-700 mb-2">Estimated Transport Cost:</p>
                <p className="text-5xl font-bold text-green-600">${price} CAD</p>
                <p className="text-sm text-gray-500 mt-2">*Final price may vary based on exact locations and dates</p>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📝 Get Exact Quote</h2>
            <p className="text-gray-600 mb-6">For an exact quote with specific dates and addresses, fill out the form below:</p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="John Smith" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="john@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="(514) 555-1234" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Address</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="123 Main St, Montreal" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Address</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="456 Oak Ave, Toronto" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Pickup Date</label>
                <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="Vehicle running condition, special requirements..."></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-bold hover:from-green-600 hover:to-green-700">
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: '🏆', title: '20+ Years', desc: 'Experience' },
            { icon: '✅', title: 'Fully Insured', desc: 'Up to $100K' },
            { icon: '📋', title: 'Licensed', desc: '& Bonded' },
            { icon: '⭐', title: '99%', desc: 'Satisfaction' },
          ].map((badge, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 text-center">
              <span className="text-4xl">{badge.icon}</span>
              <h3 className="font-bold text-gray-900 mt-2">{badge.title}</h3>
              <p className="text-sm text-gray-500">{badge.desc}</p>
            </div>
          ))}
        </div>

        {/* Call CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Prefer to Talk?</h2>
          <p className="mb-4">Get an instant quote over the phone - no waiting!</p>
          <a href="tel:1-800-ABIDOS" className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-xl hover:bg-blue-50">
            📞 1-800-ABIDOS
          </a>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Abidostransport Canada. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-4">
            <Link href="/en" className="text-gray-400 hover:text-white">Home</Link>
            <Link href="/en/services" className="text-gray-400 hover:text-white">Services</Link>
            <Link href="/en/contact" className="text-gray-400 hover:text-white">Contact</Link>
            <Link href="/fr/quote" className="text-gray-400 hover:text-white">Français</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
