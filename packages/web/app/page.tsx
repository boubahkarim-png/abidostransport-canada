import './globals.css'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
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
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About Us</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
            </nav>
            <a href="#quote" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md">
              Get Free Quote
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-500/30 px-4 py-2 rounded-full mb-6">
                <span className="text-blue-200 font-medium">Trusted by 5000+ customers across Canada</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Professional Vehicle Transport Across Quebec & Ontario
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Safe, reliable, and affordable car and truck transport services. 
                We move your vehicles with care across North America.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#quote" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-xl">
                  Get Instant Quote
                </a>
                <a href="tel:1-800-ABIDOS" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
                  Call: 1-800-ABIDOS
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Quick Quote Form</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Pickup Location</label>
                    <input type="text" placeholder="City, Province" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Delivery Location</label>
                    <input type="text" placeholder="City, Province" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Vehicle Type</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white">
                      <option value="">Select vehicle type</option>
                      <option value="car">Car / Sedan</option>
                      <option value="suv">SUV / Crossover</option>
                      <option value="truck">Truck / Pickup</option>
                      <option value="van">Van / Minivan</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-bold hover:from-green-600 hover:to-green-700 transition-all shadow-lg">
                    Get My Free Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <p className="text-gray-600">Vehicles Transported</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Transport Services</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional vehicle transport solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Car Transport</h4>
              <p className="text-gray-600 mb-4">Safe and secure car transport across Quebec, Ontario, and all of Canada. Door-to-door service available.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Fully insured transport</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Real-time tracking</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Competitive pricing</li>
              </ul>
            </div>
            {/* Service Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Snowbird Service</h4>
              <p className="text-gray-600 mb-4">Seasonal vehicle transport for snowbirds traveling between Canada and southern US destinations.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Florida & Arizona routes</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Flexible scheduling</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Storage options</li>
              </ul>
            </div>
            {/* Service Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Dealer & Auction</h4>
              <p className="text-gray-600 mb-4">Professional transport services for car dealers and auction purchases across North America.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Multi-vehicle discounts</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Dealer partnerships</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Auction pickup service</li>
              </ul>
            </div>
            {/* Service Card 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Truck & SUV</h4>
              <p className="text-gray-600 mb-4">Heavy-duty transport for trucks, SUVs, vans, and larger vehicles with specialized equipment.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Oversized vehicle handling</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Enclosed transport option</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Cross-border shipping</li>
              </ul>
            </div>
            {/* Service Card 5 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Express Transport</h4>
              <p className="text-gray-600 mb-4">Urgent vehicle transport with expedited delivery options for time-sensitive shipments.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Priority pickup</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Express delivery</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> GPS tracking</li>
              </ul>
            </div>
            {/* Service Card 6 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Enclosed Transport</h4>
              <p className="text-gray-600 mb-4">Premium enclosed transport for luxury, classic, and exotic vehicles requiring extra protection.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Weather protection</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Extra insurance coverage</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> White-glove service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose Abidostransport?</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 20 years of experience in the vehicle transport industry, Abidostransport has built a reputation 
                for reliability, safety, and exceptional customer service. We serve customers across Quebec, Ontario, 
                and throughout Canada.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Fully Licensed & Insured</h4>
                    <p className="text-gray-600">All vehicles transported with comprehensive insurance coverage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Real-Time Tracking</h4>
                    <p className="text-gray-600">Track your vehicle 24/7 with our mobile app and online portal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Door-to-Door Service</h4>
                    <p className="text-gray-600">Convenient pickup and delivery right at your doorstep</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Competitive Pricing</h4>
                    <p className="text-gray-600">Best rates guaranteed with no hidden fees</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Our Coverage Area</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h5 className="font-bold mb-2">Quebec</h5>
                  <p className="text-sm text-blue-100">Montreal, Quebec City, Laval, Gatineau</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h5 className="font-bold mb-2">Ontario</h5>
                  <p className="text-sm text-blue-100">Toronto, Ottawa, Hamilton, London</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h5 className="font-bold mb-2">Atlantic</h5>
                  <p className="text-sm text-blue-100">Nova Scotia, New Brunswick, PEI</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h5 className="font-bold mb-2">USA</h5>
                  <p className="text-sm text-blue-100">Florida, Arizona, California, Texas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote" className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">Get Your Free Quote Today</h3>
          <p className="text-xl text-blue-100 mb-12">
            Fill out the form below and we'll get back to you within 24 hours with a competitive quote
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900" placeholder="John Smith" />
                </div>
                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900" placeholder="john@email.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900" placeholder="(514) 555-1234" />
                </div>
                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type *</label>
                  <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900">
                    <option value="">Select type</option>
                    <option value="sedan">Sedan / Car</option>
                    <option value="suv">SUV / Crossover</option>
                    <option value="truck">Truck / Pickup</option>
                    <option value="van">Van / Minivan</option>
                    <option value="luxury">Luxury / Classic</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900" placeholder="City, Province" />
                </div>
                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Location *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900" placeholder="City, Province" />
                </div>
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900" placeholder="Any special requirements or questions..."></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-lg">
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-xl text-gray-600">Get in touch with our team</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Phone</h4>
              <p className="text-gray-600">1-800-ABIDOS</p>
              <p className="text-gray-600">+1 (514) 555-0123</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Email</h4>
              <p className="text-gray-600">info@abidostransport.ca</p>
              <p className="text-gray-600">quotes@abidostransport.ca</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Location</h4>
              <p className="text-gray-600">Montreal, Quebec</p>
              <p className="text-gray-600">Canada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
              <h5 className="font-bold mb-4">Services</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white">Car Transport</a></li>
                <li><a href="#services" className="hover:text-white">Snowbird Service</a></li>
                <li><a href="#services" className="hover:text-white">Dealer Transport</a></li>
                <li><a href="#services" className="hover:text-white">Enclosed Transport</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white">About Us</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Legal</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Abidostransport Canada. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
