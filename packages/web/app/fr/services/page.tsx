import Link from 'next/link'

export default function FrenchServices() {
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
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/fr" className="text-gray-700 hover:text-blue-600 font-medium">Accueil</Link>
            <Link href="/fr/services" className="text-blue-600 font-medium">Services</Link>
            <Link href="/fr/quote" className="text-gray-700 hover:text-blue-600 font-medium">Devis</Link>
            <Link href="/fr/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            <Link href="/en/services" className="ml-4 px-3 py-1 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">EN</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Nos Services</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Transport de Voitures', desc: 'Transport de voitures sûr et sécurisé au Québec, en Ontario et partout au Canada. Service porte-à-porte disponible.', icon: '🚗', features: ['Transport entièrement assuré', 'Suivi en temps réel', 'Prix compétitifs'] },
            { title: 'Service Snowbird', desc: 'Transport saisonnier pour les snowbirds voyageant entre le Canada et les destinations du sud des États-Unis.', icon: '☀️', features: ['Routes Floride & Arizona', 'Horaires flexibles', 'Options d\'entreposage'] },
            { title: 'Concessionnaires & Encans', desc: 'Services de transport professionnels pour concessionnaires automobiles et achats aux encans.', icon: '🏢', features: ['Rabais multi-véhicules', 'Partenariats concessionnaires', 'Service de récupération'] },
            { title: 'Camions & VUS', desc: 'Transport robuste pour camions, VUS, fourgonnettes et véhicules plus grands avec équipement spécialisé.', icon: '🚚', features: ['Manutention surdimensionnée', 'Option transport fermé', 'Expédition transfrontalière'] },
            { title: 'Transport Express', desc: 'Transport de véhicules urgent avec options de livraison accélérée pour les expéditions urgentes.', icon: '⚡', features: ['Ramassage prioritaire', 'Livraison express', 'Suivi GPS'] },
            { title: 'Transport Fermé', desc: 'Transport fermé premium pour véhicules de luxe, classiques et exotiques nécessitant une protection supplémentaire.', icon: '🛡️', features: ['Protection intempéries', 'Assurance supplémentaire', 'Service gants blancs'] }
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
          <h2 className="text-2xl font-bold mb-4">Besoin d'un devis?</h2>
          <p className="mb-6">Obtenez un devis gratuit en quelques minutes</p>
          <Link href="/fr/quote" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50">
            Demander un Devis
          </Link>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Abidostransport Canada. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
