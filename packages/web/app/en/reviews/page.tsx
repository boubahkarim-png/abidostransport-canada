import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customer Reviews - Abidostransport Canada | Vehicle Transport Testimonials',
  description: 'Read real customer reviews and testimonials about our vehicle transport services in Quebec, Ontario and Canada. 5-star rated car shipping service.',
}

const reviews = [
  { name: 'Michel Tremblay', location: 'Montreal, QC', rating: 5, date: 'March 2024', text: 'Excellent service! Transported my Honda Civic from Montreal to Toronto safely. The driver was professional, on time, and kept me updated throughout the journey. Price was exactly as quoted. Highly recommend!', vehicle: 'Honda Civic' },
  { name: 'Sarah Johnson', location: 'Ottawa, ON', rating: 5, date: 'February 2024', text: "Used their snowbird service for 3 years now. Always reliable, great prices, and my car arrives in perfect condition. The team is super friendly and they handle all the paperwork for cross-border transport.", vehicle: 'Toyota RAV4' },
  { name: 'Jean-Pierre Dubois', location: 'Quebec City, QC', rating: 5, date: 'March 2024', text: "J'ai utilisé le service de transport fermé pour ma voiture classique. Service impeccable! L'équipe est très professionnelle et ma voiture est arrivée en parfait état. Je recommande fortement.", vehicle: 'Classic Mustang' },
  { name: 'Amanda Chen', location: 'Toronto, ON', rating: 5, date: 'January 2024', text: "Best car shipping experience! Got a quote online, scheduled pickup the next day, and my SUV arrived in Ottawa earlier than expected. Will definitely use again for my dealership transports.", vehicle: 'BMW X5' },
  { name: 'Robert Williams', location: 'Hamilton, ON', rating: 5, date: 'February 2024', text: "Very impressed with the service. They transported my truck from Hamilton to Montreal and it arrived in perfect condition. The GPS tracking feature was great - I could see exactly where my truck was.", vehicle: 'Ford F-150' },
  { name: 'Marie Lefebvre', location: 'Laval, QC', rating: 5, date: 'March 2024', text: "Service exceptionnel! J'ai fait transporter ma voiture à Toronto et tout s'est très bien passé. Le prix était compétitif et le service client toujours disponible pour répondre à mes questions.", vehicle: 'Mazda 3' },
  { name: 'David Martinez', location: 'London, ON', rating: 5, date: 'January 2024', text: "Great communication throughout the process. The quote was accurate and there were no hidden fees. My car was picked up and delivered on time. Would recommend to anyone needing vehicle transport.", vehicle: 'Hyundai Sonata' },
  { name: 'Sophie Bernard', location: 'Gatineau, QC', rating: 5, date: 'February 2024', text: "J'ai fait affaire avec Abidostransport pour transporter mon VUS de Gatineau à Toronto. Le service était rapide et professionnel. Le suivi en temps réel m'a permis de savoir exactement où en était le transport.", vehicle: 'Honda CR-V' },
]

export default function ReviewsPage() {
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
            <Link href="/en/quote" className="text-gray-700 hover:text-blue-600 font-medium">Get Quote</Link>
            <Link href="/en/reviews" className="text-blue-600 font-medium">Reviews</Link>
            <Link href="/en/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            <Link href="/fr/reviews" className="ml-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium">FR</Link>
          </nav>
          <a href="tel:1-800-ABIDOS" className="bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            📞 Call Now
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h1>
          <p className="text-xl text-gray-600">See what our customers say about our vehicle transport services</p>
          <div className="mt-6 inline-flex items-center bg-green-100 px-6 py-3 rounded-full">
            <span className="text-3xl font-bold text-green-600 mr-2">4.9</span>
            <div>
              <div className="text-yellow-400 text-xl">★★★★★</div>
              <span className="text-sm text-gray-600">Based on 500+ reviews</span>
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
                  <p className="text-xs text-gray-400">Vehicle:</p>
                  <p className="text-sm font-medium text-blue-600">{review.vehicle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Happy Customers</h2>
          <p className="text-xl text-blue-100 mb-6">Get your free quote today and experience our 5-star service</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/en/quote" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
              Get Free Quote
            </Link>
            <a href="tel:1-800-ABIDOS" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
              📞 1-800-ABIDOS
            </a>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Trusted Across Quebec & Ontario</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Montreal', 'Quebec City', 'Toronto', 'Ottawa', 'Hamilton', 'London', 'Laval', 'Gatineau'].map((city, i) => (
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
          <p>© 2024 Abidostransport Canada. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
