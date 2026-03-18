export default function AdminHomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Admin Dashboard
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Abidostransport Canada Administration
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Bookings</h2>
            <p className="text-gray-600 mb-4">Manage transport bookings</p>
            <button className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700">
              View Bookings
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Customers</h2>
            <p className="text-gray-600 mb-2">Total customers: 0</p>
            <button className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700">
              View Customers
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Analytics</h2>
            <p className="text-gray-600 mb-2">View performance metrics</p>
            <button className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700">
              View Analytics
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}