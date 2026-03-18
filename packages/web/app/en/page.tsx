import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Abidostransport Canada - Vehicle Transport Services Quebec Ontario | Car Shipping',
  description: 'Professional vehicle transport services across Quebec, Ontario and Canada. Car shipping, truck transport, snowbird services. 20+ years experience. Free quotes. Fully insured. Call 1-800-ABIDOS.',
  keywords: 'vehicle transport Canada, car shipping Quebec, auto transport Ontario, car transport Montreal, truck shipping Toronto, snowbird transport, vehicle shipping Canada, car delivery service, auto transport company Quebec, vehicle transport Ontario',
  openGraph: {
    title: 'Abidostransport Canada - Professional Vehicle Transport Services',
    description: 'Safe, reliable vehicle transport across Quebec, Ontario and Canada. 20+ years experience, fully insured, door-to-door service.',
    type: 'website',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://abidostransport.ca/en',
    languages: {
      'en-CA': '/en',
      'fr-CA': '/fr',
    },
  },
}

export default function EnglishHome() {
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
            <Link href="/en" className="text-blue-600 font-medium">Home</Link>
            <Link href="/en/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
            <Link href="/en/quote" className="text-gray-700 hover:text-blue-600 font-medium">Free Quote</Link>
            <Link href="/en/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            <Link href="/fr" className="ml-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium">FR</Link>
          </nav>
          <Link href="/en/quote" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Free Quote
          </Link>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-blue-500/30 px-4 py-2 rounded-full mb-4">
                  <span className="text-blue-200 font-medium">🚗 Trusted by 5000+ customers across Canada</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Professional Vehicle Transport Across Quebec & Ontario
                </h1>
                <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                  Safe, reliable, and affordable car and truck transport services. We move your vehicles with care across Canada and North America. Fully insured, door-to-door service.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/en/quote" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-xl">
                    Get Instant Free Quote
                  </Link>
                  <a href="tel:1-800-ABIDOS" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
                    📞 1-800-ABIDOS
                  </a>
                </div>
              </div>
              <div className="hidden lg:block bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Quick Quote Form</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Pickup City (e.g., Montreal)" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 placeholder-white/60" />
                  <input type="text" placeholder="Delivery City (e.g., Toronto)" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 placeholder-white/60" />
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30">
                    <option>Vehicle Type</option>
                    <option>Sedan / Car</option>
                    <option>SUV / Crossover</option>
                    <option>Truck / Pickup</option>
                    <option>Van / Minivan</option>
                    <option>Luxury / Classic</option>
                  </select>
                  <Link href="/en/quote" className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-bold text-center hover:from-green-600 hover:to-green-700">
                    Get My Free Quote →
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-4">
                <div className="text-5xl font-bold text-blue-600 mb-2">20+</div>
                <p className="text-gray-600 font-medium">Years Experience</p>
                <p className="text-sm text-gray-500">Serving Canada since 2004</p>
              </div>
              <div className="p-4">
                <div className="text-5xl font-bold text-blue-600 mb-2">5000+</div>
                <p className="text-gray-600 font-medium">Vehicles Transported</p>
                <p className="text-sm text-gray-500">Cars, trucks, SUVs</p>
              </div>
              <div className="p-4">
                <div className="text-5xl font-bold text-blue-600 mb-2">99%</div>
                <p className="text-gray-600 font-medium">Customer Satisfaction</p>
                <p className="text-sm text-gray-500">5-star rated service</p>
              </div>
              <div className="p-4">
                <div className="text-5xl font-bold text-blue-600 mb-2">24/7</div>
                <p className="text-gray-600 font-medium">Customer Support</p>
                <p className="text-sm text-gray-500">Always available</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Complete Vehicle Transport Services in Quebec, Ontario & Canada
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From Montreal to Toronto, Quebec City to Ottawa – we provide professional auto transport services across all Canadian provinces and to the United States.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Car Transport Quebec', desc: 'Safe car shipping across Quebec Province including Montreal, Quebec City, Laval, Gatineau, Longueuil, and all Quebec regions. Door-to-door pickup and delivery with real-time GPS tracking.', icon: '🚗', areas: 'Montreal • Quebec City • Laval • Gatineau • Sherbrooke' },
                { title: 'Auto Transport Ontario', desc: 'Professional vehicle transport across Ontario including Toronto, Ottawa, Hamilton, London, Mississauga, and all GTA areas. Fully insured car shipping services.', icon: '🚙', areas: 'Toronto • Ottawa • Hamilton • London • Mississauga • Brampton' },
                { title: 'Snowbird Transport', desc: 'Seasonal vehicle transport for Canadian snowbirds traveling to Florida, Arizona, California, Texas and southern US destinations. Storage options available.', icon: '☀️', areas: 'Florida • Arizona • California • Texas • South Carolina' },
                { title: 'Dealer & Auction Transport', desc: 'Multi-vehicle transport services for car dealerships, auction purchases, and fleet moves across Canada and USA. Competitive dealer pricing available.', icon: '🏢', areas: 'All Canadian Provinces • USA Cross-Border' },
                { title: 'Truck & SUV Shipping', desc: 'Heavy-duty transport for pickup trucks, SUVs, vans, and oversized vehicles. Specialized equipment for safe handling of larger vehicles.', icon: '🚚', areas: 'All Vehicle Types • Oversized Welcome' },
                { title: 'Luxury & Classic Car Transport', desc: 'Premium enclosed transport for luxury, exotic, classic, and vintage vehicles. White-glove service with extra insurance coverage and climate-controlled trailers.', icon: '🏎️', areas: 'Enclosed Transport • Extra Protection' }
              ].map((service, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-3">{service.desc}</p>
                  <p className="text-sm text-blue-600 font-medium">{service.areas}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Abidostransport for Your Vehicle Shipping?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  For over 20 years, Abidostransport has been the trusted choice for vehicle transport across Quebec, Ontario, and all of Canada. We understand the importance of your vehicle and treat every shipment with the utmost care.
                </p>
                <div className="space-y-4">
                  {[
                    { title: 'Fully Licensed & Insured', desc: 'Complete insurance coverage up to $100,000 for every vehicle. We are fully licensed by the Canadian Transportation Agency.' },
                    { title: 'Real-Time GPS Tracking', desc: 'Track your vehicle 24/7 with our mobile app and online portal. Know exactly where your vehicle is at all times.' },
                    { title: 'Door-to-Door Service', desc: 'Convenient pickup and delivery right at your doorstep. No terminals, no hassle – we come to you.' },
                    { title: 'Competitive Pricing', desc: 'Best rates in Quebec and Ontario guaranteed. No hidden fees, no surprises. Free quotes in minutes.' },
                    { title: 'Cross-Border Expertise', desc: 'We handle all customs paperwork for USA-Canada transport. Hassle-free cross-border shipping.' }
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-green-600 text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Coverage Areas</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold mb-2">🇨🇦 Quebec</h4>
                    <p className="text-sm text-blue-100">Montreal, Quebec City, Laval, Gatineau, Longueuil, Sherbrooke, Trois-Rivières</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold mb-2">🇨🇦 Ontario</h4>
                    <p className="text-sm text-blue-100">Toronto, Ottawa, Hamilton, London, Mississauga, Brampton, Markham</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold mb-2">🇨🇦 Other Provinces</h4>
                    <p className="text-sm text-blue-100">British Columbia, Alberta, Manitoba, Nova Scotia, New Brunswick</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold mb-2">🇺🇸 United States</h4>
                    <p className="text-sm text-blue-100">Florida, Arizona, California, Texas, New York, All US States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Michel Tremblay', location: 'Montreal, QC', text: 'Excellent service! Shipped my car from Montreal to Toronto safely. Great communication and on-time delivery. Highly recommend!', rating: 5 },
                { name: 'Sarah Johnson', location: 'Ottawa, ON', text: 'Used their snowbird service for 3 years now. Always reliable, great prices, and my car arrives in perfect condition. Best auto transport in Canada!', rating: 5 },
                { name: 'Jean-Pierre Dubois', location: 'Quebec City, QC', text: 'Transporté ma voiture classique avec leur service fermé. Service impeccable, voiture arrivée en parfait état. Très professionnel!', rating: 5 }
              ].map((review, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, j) => <span key={j} className="text-yellow-400 text-xl">★</span>)}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <div>
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Ship Your Vehicle?</h2>
            <p className="text-xl text-blue-100 mb-8">Get your free quote in minutes. No obligation, no hidden fees.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/en/quote" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-xl">
                Get Free Quote Now
              </Link>
              <a href="tel:1-800-ABIDOS" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
                📞 Call 1-800-ABIDOS
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                { q: 'How much does car transport cost in Canada?', a: 'Car transport costs vary based on distance, vehicle type, and transport method. Average cost from Montreal to Toronto is $400-$700. Get a free instant quote on our website.' },
                { q: 'How long does vehicle shipping take?', a: 'Local transport within Quebec or Ontario: 1-3 days. Cross-country shipping: 7-14 days. USA transport: 5-10 days depending on destination.' },
                { q: 'Is my vehicle insured during transport?', a: 'Yes! All vehicles are fully insured during transport. We provide up to $100,000 coverage at no extra cost.' },
                { q: 'Do you offer door-to-door service?', a: 'Yes, we offer convenient door-to-door pickup and delivery across Quebec, Ontario, and all Canadian provinces.' },
                { q: 'Can I ship my car to the USA?', a: 'Absolutely! We specialize in Canada-USA vehicle transport including all customs paperwork and cross-border documentation.' },
                { q: 'What vehicles do you transport?', a: 'We transport all vehicle types: sedans, SUVs, trucks, vans, motorcycles, classic cars, luxury vehicles, and oversized vehicles.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">AT</span>
                </div>
                <span className="text-xl font-bold">Abidostransport</span>
              </div>
              <p className="text-gray-400 text-sm">Professional vehicle transport services across Quebec, Ontario, and all of Canada. Fully licensed, fully insured, trusted since 2004.</p>
              <p className="text-gray-500 text-xs mt-4">© 2024 Abidostransport Canada Inc. All rights reserved.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/en/services" className="hover:text-white">Car Transport Quebec</Link></li>
                <li><Link href="/en/services" className="hover:text-white">Auto Transport Ontario</Link></li>
                <li><Link href="/en/services" className="hover:text-white">Snowbird Transport</Link></li>
                <li><Link href="/en/services" className="hover:text-white">Dealer Transport</Link></li>
                <li><Link href="/en/services" className="hover:text-white">Luxury Car Shipping</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Areas Served</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/en" className="hover:text-white">Montreal</Link></li>
                <li><Link href="/en" className="hover:text-white">Quebec City</Link></li>
                <li><Link href="/en" className="hover:text-white">Toronto</Link></li>
                <li><Link href="/en" className="hover:text-white">Ottawa</Link></li>
                <li><Link href="/en" className="hover:text-white">All Canada & USA</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📞 1-800-ABIDOS</li>
                <li>📧 info@abidostransport.ca</li>
                <li>📍 Montreal, Quebec, Canada</li>
                <li className="pt-2">
                  <Link href="/fr" className="text-blue-400 hover:text-white">Français →</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
