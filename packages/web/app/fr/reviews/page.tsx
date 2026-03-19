import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Avis Clients - Abidostransport Canada | Témoignages Transport Véhicules',
  description: "Lisez les avis et témoignages de nos clients sur nos services de transport de véhicules au Québec, Ontario et Canada. Service de transport auto 5 étoiles.",
}

const reviews = [
  { name: 'Michel Tremblay', location: 'Montréal, QC', rating: 5, date: 'Mars 2024', text: "Excellent service! Ont transporté ma Honda Civic de Montréal à Toronto en toute sécurité. Le chauffeur était professionnel, à l'heure et m'a tenu informé tout au long du voyage. Le prix était exactement comme cité. Je recommande fortement!", vehicle: 'Honda Civic' },
  { name: 'Sarah Johnson', location: 'Ottawa, ON', rating: 5, date: 'Février 2024', text: "J'utilise leur service snowbird depuis 3 ans maintenant. Toujours fiable, super prix, et ma voiture arrive en parfait état. L'équipe est très amicale et ils gèrent tous les documents pour le transport transfrontalier.", vehicle: 'Toyota RAV4' },
  { name: 'Jean-Pierre Dubois', location: 'Québec, QC', rating: 5, date: 'Mars 2024', text: "Service impeccable! J'ai utilisé le service de transport fermé pour ma voiture classique. L'équipe est très professionnelle et ma voiture est arrivée en parfait état. Je recommande fortement.", vehicle: 'Mustang Classique' },
  { name: 'Amanda Chen', location: 'Toronto, ON', rating: 5, date: 'Janvier 2024', text: "Meilleure expérience d'expédition auto! J'ai obtenu un devis en ligne, planifié le ramassage le lendemain, et mon VUS est arrivé à Ottawa plus tôt que prévu. J'utiliserai certainement encore pour mes transports de concessionnaire.", vehicle: 'BMW X5' },
  { name: 'Robert Williams', location: 'Hamilton, ON', rating: 5, date: 'Février 2024', text: "Très impressionné par le service. Ils ont transporté mon camion de Hamilton à Montréal et il est arrivé en parfait état. La fonction de suivi GPS était géniale - je pouvais voir exactement où était mon camion.", vehicle: 'Ford F-150' },
  { name: 'Marie Lefebvre', location: 'Laval, QC', rating: 5, date: 'Mars 2024', text: "Service exceptionnel! J'ai fait transporter ma voiture à Toronto et tout s'est très bien passé. Le prix était compétitif et le service client toujours disponible pour répondre à mes questions.", vehicle: 'Mazda 3' },
  { name: 'David Martinez', location: 'London, ON', rating: 5, date: 'Janvier 2024', text: "Excellente communication tout au long du processus. Le devis était précis et il n'y avait pas de frais cachés. Ma voiture a été ramassée et livrée à temps. Je recommande à tous.", vehicle: 'Hyundai Sonata' },
  { name: 'Sophie Bernard', location: 'Gatineau, QC', rating: 5, date: 'Février 2024', text: "J'ai fait affaire avec Abidostransport pour transporter mon VUS de Gatineau à Toronto. Le service était rapide et professionnel. Le suivi en temps réel m'a permis de savoir exactement où en était le transport.", vehicle: 'Honda CR-V' },
]

export default function FrenchReviewsPage() {
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
            <Link href="/fr/quote" className="text-gray-700 hover:text-blue-600 font-medium">Devis</Link>
            <Link href="/fr/reviews" className="text-blue-600 font-medium">Avis</Link>
            <Link href="/fr/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            <Link href="/en/reviews" className="ml-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium">EN</Link>
          </nav>
          <a href="tel:1-800-ABIDOS" className="bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            📞 Appelez
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Avis Clients</h1>
          <p className="text-xl text-gray-600">Découvrez ce que nos clients disent de nos services de transport</p>
          <div className="mt-6 inline-flex items-center bg-green-100 px-6 py-3 rounded-full">
            <span className="text-3xl font-bold text-green-600 mr-2">4.9</span>
            <div>
              <div className="text-yellow-400 text-xl">★★★★★</div>
              <span className="text-sm text-gray-600">Basé sur 500+ avis</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-yellow-400 text-lg">
                  {[...Array(review.rating)].map((_, j) => <span key={j}>★</span>)}
                </div>
                <span className="text-sm text-gray-400">{review.date}</span>
              </div>
              <p className="text-gray-700 mb-4">{review.text}</p>
              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">Véhicule:</p>
                  <p className="text-sm font-medium text-blue-600">{review.vehicle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Joignez Nos Clients Satisfaits</h2>
          <p className="text-xl text-blue-100 mb-6">Obtenez votre devis gratuit aujourd'hui et découvrez notre service 5 étoiles</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/fr/quote" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
              Obtenir un Devis
            </Link>
            <a href="tel:1-800-ABIDOS" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
              📞 1-800-ABIDOS
            </a>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Confiance au Québec & Ontario</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Montréal', 'Québec', 'Toronto', 'Ottawa', 'Hamilton', 'London', 'Laval', 'Gatineau'].map((city, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-4 text-center">
                <span className="text-2xl">📍</span>
                <p className="font-medium text-gray-900">{city}</p>
              </div>
            ))}
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
