export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Abidostransport Canada
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Professional vehicle transport services across Quebec and Ontario
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Get a Quote</h2>
            <p className="text-gray-600 mb-4">
              Instant online quotes for vehicle transport
            </p>
            <button className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700">
              Get Started
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Our Services</h2>
            <ul className="text-gray-600 space-y-2">
              <li>• Car transport across Quebec & Ontario</li>
              <li>• Snowbirds seasonal service</li>
              <li>• Dealer and auction transport</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-2">Phone: 1-800-ABIDOS</p>
            <p className="text-gray-600">Email: info@abidostransport.ca</p>
          </div>
        </div>
      </main>
    </div>
  )
}