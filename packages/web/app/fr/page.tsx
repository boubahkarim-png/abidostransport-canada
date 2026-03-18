import Link from 'next/link'

const content = {
  nav: { home: 'Accueil', services: 'Services', quote: 'Devis', contact: 'Contact' },
  hero: {
    badge: 'Plus de 5000 clients satisfaits au Canada',
    title: 'Transport de Véhicules Professionnel au Québec & Ontario',
    subtitle: 'Services de transport de voitures et camions sûrs, fiables et abordables. Nous transportons vos véhicules avec soin à travers l\'Amérique du Nord.',
    cta1: 'Obtenir un Devis Instantané',
    cta2: 'Appeler: 1-800-ABIDOS'
  },
  stats: {
    years: '20+ Années d\'Expérience',
    vehicles: '5000+ Véhicules Transportés',
    satisfaction: '99% Satisfaction Client',
    support: 'Support 24/7'
  },
  services: {
    title: 'Nos Services de Transport',
    subtitle: 'Solutions de transport de véhicules professionnelles adaptées à vos besoins',
    items: [
      { title: 'Transport de Voitures', desc: 'Transport de voitures sûr et sécurisé au Québec, en Ontario et partout au Canada.', features: ['Transport entièrement assuré', 'Suivi en temps réel', 'Prix compétitifs'] },
      { title: 'Service Snowbird', desc: 'Transport saisonnier de véhicules pour les snowbirds voyageant entre le Canada et le sud des États-Unis.', features: ['Routes Floride & Arizona', 'Horaires flexibles', 'Options d\'entreposage'] },
      { title: 'Concessionnaires & Encans', desc: 'Services de transport professionnels pour concessionnaires automobiles et achats aux encans.', features: ['Rabais multi-véhicules', 'Partenariats concessionnaires', 'Service de récupération aux encans'] },
      { title: 'Camions & VUS', desc: 'Transport robuste pour camions, VUS, fourgonnettes et véhicules plus grands.', features: ['Manutention véhicules surdimensionnés', 'Option transport fermé', 'Expédition transfrontalière'] },
      { title: 'Transport Express', desc: 'Transport de véhicules urgent avec options de livraison accélérée.', features: ['Ramassage prioritaire', 'Livraison express', 'Suivi GPS'] },
      { title: 'Transport Fermé', desc: 'Transport fermé premium pour véhicules de luxe, classiques et exotiques.', features: ['Protection contre les intempéries', 'Couverture d\'assurance supplémentaire', 'Service gants blancs'] }
    ]
  },
  quote: { title: 'Obtenez Votre Devis Gratuit', subtitle: 'Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24 heures' },
  contact: { title: 'Contactez-Nous', subtitle: 'Communiquez avec notre équipe', phone: 'Téléphone', email: 'Courriel', location: 'Adresse' },
  footer: { rights: 'Tous droits réservés.', services: 'Services', company: 'Compagnie', legal: 'Légal' }
}

export default function FrenchHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
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
              <Link href="/fr" className="text-gray-700 hover:text-blue-600 font-medium">{content.nav.home}</Link>
              <Link href="/fr/services" className="text-gray-700 hover:text-blue-600 font-medium">{content.nav.services}</Link>
              <Link href="/fr/quote" className="text-gray-700 hover:text-blue-600 font-medium">{content.nav.quote}</Link>
              <Link href="/fr/contact" className="text-gray-700 hover:text-blue-600 font-medium">{content.nav.contact}</Link>
              <Link href="/en" className="ml-4 px-3 py-1 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">EN</Link>
            </nav>
            <Link href="/fr/quote" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md">
              {content.nav.quote}
            </Link>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-500/30 px-4 py-2 rounded-full mb-6">
                <span className="text-blue-200 font-medium">{content.hero.badge}</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">{content.hero.title}</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">{content.hero.subtitle}</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/fr/quote" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-xl">{content.hero.cta1}</Link>
                <a href="tel:1-800-ABIDOS" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">{content.hero.cta2}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl font-bold text-blue-600 mb-2">20+</div><p className="text-gray-600">{content.stats.years}</p></div>
            <div><div className="text-4xl font-bold text-blue-600 mb-2">5000+</div><p className="text-gray-600">{content.stats.vehicles}</p></div>
            <div><div className="text-4xl font-bold text-blue-600 mb-2">99%</div><p className="text-gray-600">{content.stats.satisfaction}</p></div>
            <div><div className="text-4xl font-bold text-blue-600 mb-2">24/7</div><p className="text-gray-600">{content.stats.support}</p></div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{content.services.title}</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{content.services.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.services.items.map((service, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  {service.features.map((f, j) => <li key={j} className="flex items-center"><span className="text-green-500 mr-2">✓</span>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">{content.quote.title}</h3>
          <p className="text-xl text-blue-100 mb-8">{content.quote.subtitle}</p>
          <Link href="/fr/quote" className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-lg">
            Obtenir un Devis Gratuit
          </Link>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{content.contact.title}</h3>
            <p className="text-xl text-gray-600">{content.contact.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📞</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{content.contact.phone}</h4>
              <p className="text-gray-600">1-800-ABIDOS</p>
              <p className="text-gray-600">+1 (514) 555-0123</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✉️</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{content.contact.email}</h4>
              <p className="text-gray-600">info@abidostransport.ca</p>
              <p className="text-gray-600">quotes@abidostransport.ca</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📍</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{content.contact.location}</h4>
              <p className="text-gray-600">Montréal, Québec</p>
              <p className="text-gray-600">Canada</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">AT</span>
                </div>
                <span className="text-xl font-bold">Abidostransport</span>
              </div>
              <p className="text-gray-400">Services de transport de véhicules professionnels au Québec, en Ontario et en Amérique du Nord.</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">{content.footer.services}</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/fr/services" className="hover:text-white">Transport Auto</Link></li>
                <li><Link href="/fr/services" className="hover:text-white">Service Snowbird</Link></li>
                <li><Link href="/fr/services" className="hover:text-white">Transport Concessionnaire</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">{content.footer.company}</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/fr/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Langue</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/en" className="hover:text-white">English</Link></li>
                <li><Link href="/fr" className="hover:text-white font-semibold text-white">Français</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Abidostransport Canada. {content.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
