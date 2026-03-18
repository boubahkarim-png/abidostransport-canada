import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Abidostransport Canada - Transport de Véhicules Québec Ontario | Transport Auto',
  description: 'Services de transport de véhicules professionnels au Québec, Ontario et Canada. Transport de voiture, camion, service snowbird. 20+ ans d\'expérience. Devis gratuits. Entièrement assuré. Appelez 1-800-ABIDOS.',
  keywords: 'transport véhicule Canada, transport auto Québec, transport voiture Ontario, transport auto Montréal, transport camion Toronto, service snowbird, transport véhicule Canada, livraison voiture, transport auto Québec, transport véhicule Ontario',
  openGraph: {
    title: 'Abidostransport Canada - Services de Transport de Véhicules Professionnels',
    description: 'Transport de véhicules sûr et fiable au Québec, Ontario et Canada. 20+ ans d\'expérience, entièrement assuré, service porte-à-porte.',
    type: 'website',
    locale: 'fr_CA',
  },
  alternates: {
    canonical: 'https://abidostransport.ca/fr',
    languages: {
      'en-CA': '/en',
      'fr-CA': '/fr',
    },
  },
}

export default function FrenchHome() {
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
            <Link href="/fr" className="text-blue-600 font-medium">Accueil</Link>
            <Link href="/fr/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
            <Link href="/fr/quote" className="text-gray-700 hover:text-blue-600 font-medium">Devis Gratuit</Link>
            <Link href="/fr/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            <Link href="/en" className="ml-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium">EN</Link>
          </nav>
          <Link href="/fr/quote" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Devis Gratuit
          </Link>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-blue-500/30 px-4 py-2 rounded-full mb-4">
                  <span className="text-blue-200 font-medium">🚗 Plus de 5000 clients satisfaits au Canada</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Transport de Véhicules Professionnel au Québec & Ontario
                </h1>
                <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                  Services de transport de voitures et camions sûrs, fiables et abordables. Nous transportons vos véhicules avec soin partout au Canada et en Amérique du Nord. Entièrement assuré, service porte-à-porte.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/fr/quote" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-xl">
                    Obtenir un Devis Gratuit
                  </Link>
                  <a href="tel:1-800-ABIDOS" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
                    📞 1-800-ABIDOS
                  </a>
                </div>
              </div>
              <div className="hidden lg:block bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Formulaire de Devis Rapide</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Ville de départ (ex: Montréal)" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 placeholder-white/60" />
                  <input type="text" placeholder="Ville de livraison (ex: Toronto)" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 placeholder-white/60" />
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30">
                    <option>Type de véhicule</option>
                    <option>Berline / Auto</option>
                    <option>VUS / Véhicule utilitaire</option>
                    <option>Camion / Pick-up</option>
                    <option>Fourgonnette</option>
                    <option>Luxe / Classique</option>
                  </select>
                  <Link href="/fr/quote" className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-bold text-center hover:from-green-600 hover:to-green-700">
                    Obtenir Mon Devis Gratuit →
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
                <p className="text-gray-600 font-medium">Années d'Expérience</p>
                <p className="text-sm text-gray-500">Au service du Canada depuis 2004</p>
              </div>
              <div className="p-4">
                <div className="text-5xl font-bold text-blue-600 mb-2">5000+</div>
                <p className="text-gray-600 font-medium">Véhicules Transportés</p>
                <p className="text-sm text-gray-500">Autos, camions, VUS</p>
              </div>
              <div className="p-4">
                <div className="text-5xl font-bold text-blue-600 mb-2">99%</div>
                <p className="text-gray-600 font-medium">Satisfaction Client</p>
                <p className="text-sm text-gray-500">Service 5 étoiles</p>
              </div>
              <div className="p-4">
                <div className="text-5xl font-bold text-blue-600 mb-2">24/7</div>
                <p className="text-gray-600 font-medium">Support Client</p>
                <p className="text-sm text-gray-500">Toujours disponible</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Services Complets de Transport de Véhicules au Québec, Ontario & Canada
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                De Montréal à Toronto, Québec à Ottawa – nous offrons des services de transport automobile professionnels dans toutes les provinces canadiennes et aux États-Unis.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Transport Auto Québec', desc: 'Transport de voiture sécurisé au Québec incluant Montréal, Québec, Laval, Gatineau, Longueuil et toutes les régions. Ramassage et livraison porte-à-porte avec suivi GPS en temps réel.', icon: '🚗', areas: 'Montréal • Québec • Laval • Gatineau • Sherbrooke' },
                { title: 'Transport Véhicule Ontario', desc: 'Transport de véhicules professionnel en Ontario incluant Toronto, Ottawa, Hamilton, London, Mississauga et tout le GTA. Services de transport auto entièrement assurés.', icon: '🚙', areas: 'Toronto • Ottawa • Hamilton • London • Mississauga • Brampton' },
                { title: 'Service Snowbird', desc: 'Transport saisonnier pour les snowbirds canadiens voyageant en Floride, Arizona, Californie, Texas et destinations du sud des États-Unis. Options d\'entreposage disponibles.', icon: '☀️', areas: 'Floride • Arizona • Californie • Texas • Caroline du Sud' },
                { title: 'Transport Concessionnaire', desc: 'Services de transport multi-véhicules pour concessionnaires automobiles, achats aux encans et déplacements de flottes au Canada et USA. Prix concessionnaires compétitifs.', icon: '🏢', areas: 'Toutes Provinces Canadiennes • Transfrontalier USA' },
                { title: 'Transport Camion & VUS', desc: 'Transport robuste pour camions pick-up, VUS, fourgonnettes et véhicules surdimensionnés. Équipement spécialisé pour la manutention sécuritaire.', icon: '🚚', areas: 'Tous Types de Véhicules • Surdimensionnés Acceptés' },
                { title: 'Transport Voiture de Luxe', desc: 'Transport fermé premium pour véhicules de luxe, exotiques, classiques et anciens. Service gants blancs avec assurance supplémentaire et remorques climatisées.', icon: '🏎️', areas: 'Transport Fermé • Protection Supplémentaire' }
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
                  Pourquoi Choisir Abidostransport pour Votre Transport de Véhicule?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Depuis plus de 20 ans, Abidostransport est le choix de confiance pour le transport de véhicules au Québec, en Ontario et partout au Canada. Nous comprenons l'importance de votre véhicule et traitons chaque expédition avec le plus grand soin.
                </p>
                <div className="space-y-4">
                  {[
                    { title: 'Entièrement Licencié & Assuré', desc: 'Couverture d\'assurance complète jusqu\'à 100 000 $ pour chaque véhicule. Nous sommes entièrement licenciés par l\'Agence des transports du Canada.' },
                    { title: 'Suivi GPS en Temps Réel', desc: 'Suivez votre véhicule 24/7 avec notre application mobile et portail en ligne. Sachez exactement où se trouve votre véhicule en tout temps.' },
                    { title: 'Service Porte-à-Porte', desc: 'Ramassage et livraison pratiques directement à votre porte. Pas de terminaux, pas de tracas – nous venons à vous.' },
                    { title: 'Prix Compétitifs', desc: 'Meilleurs tarifs au Québec et en Ontario garantis. Aucuns frais cachés, aucune surprise. Devis gratuits en quelques minutes.' },
                    { title: 'Expertise Transfrontalière', desc: 'Nous gérons tous les documents douaniers pour le transport Canada-USA. Expédition transfrontalière sans tracas.' }
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
                <h3 className="text-2xl font-bold mb-6">Nos Zones de Desserte</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold mb-2">🇨🇦 Québec</h4>
                    <p className="text-sm text-blue-100">Montréal, Québec, Laval, Gatineau, Longueuil, Sherbrooke, Trois-Rivières</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold mb-2">🇨🇦 Ontario</h4>
                    <p className="text-sm text-blue-100">Toronto, Ottawa, Hamilton, London, Mississauga, Brampton, Markham</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold mb-2">🇨🇦 Autres Provinces</h4>
                    <p className="text-sm text-blue-100">Colombie-Britannique, Alberta, Manitoba, Nouvelle-Écosse, Nouveau-Brunswick</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold mb-2">🇺🇸 États-Unis</h4>
                    <p className="text-sm text-blue-100">Floride, Arizona, Californie, Texas, New York, Tous les États</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ce Que Disent Nos Clients</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Michel Tremblay', location: 'Montréal, QC', text: 'Excellent service! Transporté ma voiture de Montréal à Toronto en toute sécurité. Excellente communication et livraison à temps. Je recommande fortement!', rating: 5 },
                { name: 'Sarah Johnson', location: 'Ottawa, ON', text: 'J\'utilise leur service snowbird depuis 3 ans. Toujours fiable, super prix, et ma voiture arrive en parfait état. Meilleur transport auto au Canada!', rating: 5 },
                { name: 'Jean-Pierre Dubois', location: 'Québec, QC', text: 'Shipped my classic car with their enclosed service. Flawless service, car arrived in perfect condition. Very professional team!', rating: 5 }
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Prêt à Transporter Votre Véhicule?</h2>
            <p className="text-xl text-blue-100 mb-8">Obtenez votre devis gratuit en quelques minutes. Sans obligation, sans frais cachés.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/fr/quote" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-xl">
                Obtenir un Devis Gratuit
              </Link>
              <a href="tel:1-800-ABIDOS" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
                📞 Appelez 1-800-ABIDOS
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Questions Fréquemment Posées</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                { q: 'Combien coûte le transport de voiture au Canada?', a: 'Les coûts varient selon la distance, le type de véhicule et la méthode de transport. Coût moyen de Montréal à Toronto: 400$-700$. Obtenez un devis gratuit instantané sur notre site.' },
                { q: 'Combien de temps prend l\'expédition?', a: 'Transport local au Québec ou Ontario: 1-3 jours. Transport transcanadien: 7-14 jours. Transport USA: 5-10 jours selon la destination.' },
                { q: 'Mon véhicule est-il assuré pendant le transport?', a: 'Oui! Tous les véhicules sont entièrement assurés pendant le transport. Nous offrons une couverture jusqu\'à 100 000 $ sans frais supplémentaires.' },
                { q: 'Offrez-vous un service porte-à-porte?', a: 'Oui, nous offrons le ramassage et la livraison porte-à-porte pratiques partout au Québec, en Ontario et dans toutes les provinces canadiennes.' },
                { q: 'Puis-je expédier ma voiture aux États-Unis?', a: 'Absolument! Nous spécialisons dans le transport de véhicules Canada-USA incluant tous les documents douaniers et la documentation transfrontalière.' },
                { q: 'Quels véhicules transportez-vous?', a: 'Nous transportons tous les types de véhicules: berlines, VUS, camions, fourgonnettes, motos, voitures classiques, véhicules de luxe et véhicules surdimensionnés.' }
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
              <p className="text-gray-400 text-sm">Services de transport de véhicules professionnels au Québec, en Ontario et partout au Canada. Entièrement licencié, entièrement assuré, confiance depuis 2004.</p>
              <p className="text-gray-500 text-xs mt-4">© 2024 Abidostransport Canada Inc. Tous droits réservés.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/fr/services" className="hover:text-white">Transport Auto Québec</Link></li>
                <li><Link href="/fr/services" className="hover:text-white">Transport Véhicule Ontario</Link></li>
                <li><Link href="/fr/services" className="hover:text-white">Service Snowbird</Link></li>
                <li><Link href="/fr/services" className="hover:text-white">Transport Concessionnaire</Link></li>
                <li><Link href="/fr/services" className="hover:text-white">Transport Voiture Luxe</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Régions Desservies</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/fr" className="hover:text-white">Montréal</Link></li>
                <li><Link href="/fr" className="hover:text-white">Québec</Link></li>
                <li><Link href="/fr" className="hover:text-white">Toronto</Link></li>
                <li><Link href="/fr" className="hover:text-white">Ottawa</Link></li>
                <li><Link href="/fr" className="hover:text-white">Tout Canada & USA</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📞 1-800-ABIDOS</li>
                <li>📧 info@abidostransport.ca</li>
                <li>📍 Montréal, Québec, Canada</li>
                <li className="pt-2">
                  <Link href="/en" className="text-blue-400 hover:text-white">English →</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
