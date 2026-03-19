'use client'
import { useState } from 'react'
import Link from 'next/link'

const PRICES: Record<string, Record<string, number>> = {
  'Montréal': { 'Toronto': 550, 'Ottawa': 400, 'Québec': 350, 'Hamilton': 600, 'London': 650, 'Floride': 1500, 'Arizona': 1800 },
  'Québec': { 'Toronto': 650, 'Ottawa': 500, 'Montréal': 350, 'Hamilton': 700, 'London': 750, 'Floride': 1600, 'Arizona': 1900 },
  'Toronto': { 'Montréal': 550, 'Ottawa': 350, 'Québec': 650, 'Hamilton': 250, 'London': 200, 'Floride': 1400, 'Arizona': 1700 },
  'Ottawa': { 'Montréal': 400, 'Toronto': 350, 'Québec': 500, 'Hamilton': 400, 'London': 450, 'Floride': 1450, 'Arizona': 1750 },
  'Hamilton': { 'Montréal': 600, 'Toronto': 250, 'Ottawa': 400, 'Québec': 700, 'London': 150, 'Floride': 1350, 'Arizona': 1650 },
  'London': { 'Montréal': 650, 'Toronto': 200, 'Ottawa': 450, 'Québec': 750, 'Hamilton': 150, 'Floride': 1300, 'Arizona': 1600 },
}

const VEHICLE_MULTIPLIERS: Record<string, number> = {
  'Berline': 1.0,
  'VUS': 1.2,
  'Camion': 1.3,
  'Fourgonnette': 1.25,
  'Luxe': 1.5,
}

const CITIES = ['Montréal', 'Québec', 'Toronto', 'Ottawa', 'Hamilton', 'London', 'Floride', 'Arizona']

export default function FrenchQuotePage() {
  const [pickup, setPickup] = useState('')
  const [delivery, setDelivery] = useState('')
  const [vehicle, setVehicle] = useState('Berline')
  const [transport, setTransport] = useState('open')
  const [price, setPrice] = useState<number | null>(null)

  const calculatePrice = () => {
    if (!pickup || !delivery || pickup === delivery) {
      alert('Veuillez sélectionner des villes de départ et de livraison différentes')
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
              <p className="text-xs text-gray-500">Transport Véhicules Canada</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/fr" className="text-gray-700 hover:text-blue-600 font-medium">Accueil</Link>
            <Link href="/fr/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
            <Link href="/fr/quote" className="text-blue-600 font-medium">Devis</Link>
            <Link href="/fr/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            <Link href="/en/quote" className="ml-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium">EN</Link>
          </nav>
          <a href="tel:1-800-ABIDOS" className="bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            📞 Appelez
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Obtenez Votre Devis Instantané</h1>
          <p className="text-xl text-gray-600">Calculez le coût de transport en quelques secondes. Sans obligation.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📦 Calculateur de Devis</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ville de Départ *</label>
                <select 
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Sélectionner la ville</option>
                  {CITIES.filter(c => !delivery || c !== delivery).map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ville de Livraison *</label>
                <select 
                  value={delivery}
                  onChange={(e) => setDelivery(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Sélectionner la ville</option>
                  {CITIES.filter(c => !pickup || c !== pickup).map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type de Véhicule *</label>
                <select 
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Berline">🚗 Berline / Auto</option>
                  <option value="VUS">🚙 VUS / Véhicule utilitaire</option>
                  <option value="Camion">🚚 Camion / Pick-up</option>
                  <option value="Fourgonnette">🚐 Fourgonnette</option>
                  <option value="Luxe">🏎️ Luxe / Classique</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type de Transport</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setTransport('open')}
                    className={`p-4 rounded-lg border-2 text-center ${transport === 'open' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}
                  >
                    <span className="block text-2xl mb-1">🚛</span>
                    <span className="font-medium">Transport Ouvert</span>
                    <span className="block text-sm text-gray-500">Standard, plus populaire</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTransport('enclosed')}
                    className={`p-4 rounded-lg border-2 text-center ${transport === 'enclosed' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}
                  >
                    <span className="block text-2xl mb-1">🏠</span>
                    <span className="font-medium">Transport Fermé</span>
                    <span className="block text-sm text-gray-500">Protection premium (+40%)</span>
                  </button>
                </div>
              </div>

              <button
                onClick={calculatePrice}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
              >
                Calculer Mon Prix →
              </button>
            </div>

            {price && (
              <div className="mt-8 p-6 bg-green-50 border-2 border-green-500 rounded-xl">
                <p className="text-lg text-gray-700 mb-2">Coût de Transport Estimé:</p>
                <p className="text-5xl font-bold text-green-600">{price} $ CAD</p>
                <p className="text-sm text-gray-500 mt-2">*Le prix final peut varier selon les adresses exactes et dates</p>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📝 Devis Exact</h2>
            <p className="text-gray-600 mb-6">Pour un devis exact avec dates et adresses spécifiques, remplissez le formulaire:</p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nom Complet *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="Jean Tremblay" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Courriel *</label>
                <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="jean@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="(514) 555-1234" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Adresse de Ramassage</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="123 Rue Principale, Montréal" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Adresse de Livraison</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="456 Avenue Chêne, Toronto" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date de Ramassage Préférée</label>
                <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Notes Supplémentaires</label>
                <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="État du véhicule, exigences spéciales..."></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-bold hover:from-green-600 hover:to-green-700">
                Soumettre la Demande de Devis
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: '🏆', title: '20+ Ans', desc: "d'Expérience" },
            { icon: '✅', title: 'Entièrement', desc: 'Assuré' },
            { icon: '📋', title: 'Licencié', desc: '& Agréé' },
            { icon: '⭐', title: '99%', desc: 'Satisfaction' },
          ].map((badge, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 text-center">
              <span className="text-4xl">{badge.icon}</span>
              <h3 className="font-bold text-gray-900 mt-2">{badge.title}</h3>
              <p className="text-sm text-gray-500">{badge.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Préférez-vous Parler?</h2>
          <p className="mb-4">Obtenez un devis instantané par téléphone - sans attente!</p>
          <a href="tel:1-800-ABIDOS" className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-xl hover:bg-blue-50">
            📞 1-800-ABIDOS
          </a>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Abidostransport Canada. Tous droits réservés.</p>
          <div className="mt-4 flex justify-center gap-4">
            <Link href="/fr" className="text-gray-400 hover:text-white">Accueil</Link>
            <Link href="/fr/services" className="text-gray-400 hover:text-white">Services</Link>
            <Link href="/fr/contact" className="text-gray-400 hover:text-white">Contact</Link>
            <Link href="/en/quote" className="text-gray-400 hover:text-white">English</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
