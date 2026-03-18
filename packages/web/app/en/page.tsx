import Link from 'next/link'

const content = {
  nav: { home: 'Home', services: 'Services', quote: 'Get Quote', contact: 'Contact' },
  hero: {
    badge: 'Trusted by 5000+ customers across Canada',
    title: 'Professional Vehicle Transport Across Quebec & Ontario',
    subtitle: 'Safe, reliable, and affordable car and truck transport services. We move your vehicles with care across North America.',
    cta1: 'Get Instant Quote',
    cta2: 'Call: 1-800-ABIDOS'
  },
  stats: {
    years: '20+ Years Experience',
    vehicles: '5000+ Vehicles Transported',
    satisfaction: '99% Customer Satisfaction',
    support: '24/7 Customer Support'
  },
  services: {
    title: 'Our Transport Services',
    subtitle: 'Professional vehicle transport solutions tailored to your needs',
    items: [
      { title: 'Car Transport', desc: 'Safe and secure car transport across Quebec, Ontario, and all of Canada.', features: ['Fully insured transport', 'Real-time tracking', 'Competitive pricing'] },
      { title: 'Snowbird Service', desc: 'Seasonal vehicle transport for snowbirds traveling between Canada and southern US destinations.', features: ['Florida & Arizona routes', 'Flexible scheduling', 'Storage options'] },
      { title: 'Dealer & Auction', desc: 'Professional transport services for car dealers and auction purchases across North America.', features: ['Multi-vehicle discounts', 'Dealer partnerships', 'Auction pickup service'] },
      { title: 'Truck & SUV', desc: 'Heavy-duty transport for trucks, SUVs, vans, and larger vehicles with specialized equipment.', features: ['Oversized vehicle handling', 'Enclosed transport option', 'Cross-border shipping'] },
      { title: 'Express Transport', desc: 'Urgent vehicle transport with expedited delivery options for time-sensitive shipments.', features: ['Priority pickup', 'Express delivery', 'GPS tracking'] },
      { title: 'Enclosed Transport', desc: 'Premium enclosed transport for luxury, classic, and exotic vehicles requiring extra protection.', features: ['Weather protection', 'Extra insurance coverage', 'White-glove service'] }
    ]
  },
  about: {
    title: 'Why Choose Abidostransport?',
    desc: 'With over 20 years of experience in the vehicle transport industry, Abidostransport has built a reputation for reliability, safety, and exceptional customer service.',
    features: [
      { title: 'Fully Licensed & Insured', desc: 'All vehicles transported with comprehensive insurance coverage' },
      { title: 'Real-Time Tracking', desc: 'Track your vehicle 24/7 with our mobile app and online portal' },
      { title: 'Door-to-Door Service', desc: 'Convenient pickup and delivery right at your doorstep' },
      { title: 'Competitive Pricing', desc: 'Best rates guaranteed with no hidden fees' }
    ],
    coverage: { title: 'Our Coverage Area', quebec: 'Montreal, Quebec City, Laval, Gatineau', ontario: 'Toronto, Ottawa, Hamilton, London', atlantic: 'Nova Scotia, New Brunswick, PEI', usa: 'Florida, Arizona, California, Texas' }
  },
  quote: { title: 'Get Your Free Quote Today', subtitle: 'Fill out the form below and we\'ll get back to you within 24 hours' },
  contact: { title: 'Contact Us', subtitle: 'Get in touch with our team', phone: 'Phone', email: 'Email', location: 'Location' },
  footer: { rights: 'All rights reserved.', services: 'Services', company: 'Company', legal: 'Legal' }
}

export default function EnglishHome() {
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
                <p className="text-xs text-gray-500">Canada Vehicle Transport</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/en" className="text-gray-700 hover:text-blue-600 font-medium">{content.nav.home}</Link>
              <Link href="/en/services" className="text-gray-700 hover:text-blue-600 font-medium">{content.nav.services}</Link>
              <Link href="/en/quote" className="text-gray-700 hover:text-blue-600 font-medium">{content.nav.quote}</Link>
              <Link href="/en/contact" className="text-gray-700 hover:text-blue-600 font-medium">{content.nav.contact}</Link>
              <Link href="/fr" className="ml-4 px-3 py-1 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">FR</Link>
            </nav>
            <Link href="/en/quote" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md">
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
                <Link href="/en/quote" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-xl">{content.hero.cta1}</Link>
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
          <Link href="/en/quote" className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-lg">
            Get Free Quote
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
              <p className="text-gray-600">Montreal, Quebec</p>
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
              <p className="text-gray-400">Professional vehicle transport services across Quebec, Ontario, and North America.</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">{content.footer.services}</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/en/services" className="hover:text-white">Car Transport</Link></li>
                <li><Link href="/en/services" className="hover:text-white">Snowbird Service</Link></li>
                <li><Link href="/en/services" className="hover:text-white">Dealer Transport</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">{content.footer.company}</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/en/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Language</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/en" className="hover:text-white font-semibold text-white">English</Link></li>
                <li><Link href="/fr" className="hover:text-white">Français</Link></li>
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
