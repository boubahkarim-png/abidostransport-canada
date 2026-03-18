import Link from 'next/link'

export default function FrenchQuote() {
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
            <Link href="/fr/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
            <Link href="/fr/quote" className="text-blue-600 font-medium">Devis</Link>
            <Link href="/fr/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            <Link href="/en/quote" className="ml-4 px-3 py-1 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">EN</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Demande de Devis Gratuit</h1>
          <p className="text-xl text-gray-600">Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24 heures</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Jean Tremblay" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Courriel *</label>
                <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="jean@email.com" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="(514) 555-1234" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type de véhicule *</label>
                <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Sélectionner</option>
                  <option value="sedan">Berline / Auto</option>
                  <option value="suv">VUS / Véhicule utilitaire</option>
                  <option value="truck">Camion / Pick-up</option>
                  <option value="van">Fourgonnette</option>
                  <option value="luxury">Luxe / Classique</option>
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lieu de ramassage *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Ville, Province" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lieu de livraison *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Ville, Province" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Notes supplémentaires</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Exigences spéciales ou questions..."></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-lg">
              Soumettre la Demande de Devis
            </button>
          </form>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl mb-2">📞</div>
            <h3 className="font-bold">Téléphone</h3>
            <p className="text-gray-600">1-800-ABIDOS</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl mb-2">✉️</div>
            <h3 className="font-bold">Courriel</h3>
            <p className="text-gray-600">devis@abidostransport.ca</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl mb-2">🕐</div>
            <h3 className="font-bold">Réponse</h3>
            <p className="text-gray-600">Sous 24 heures</p>
          </div>
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
