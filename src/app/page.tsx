import LeadForm from './leads/page';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Find Your Dream Home Today
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600 sm:text-xl md:mt-5 md:text-2xl">
            Get instant access to the best properties in your area before they hit the market
          </p>
          <div className="mt-8 max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Ready to move in? Let&apos;s get started!
            </h2>
            <p className="text-gray-600 mb-6">
              Complete the form below and our expert agents will help you find your perfect home
            </p>
            <div className="rounded-md shadow-sm">
              <LeadForm />
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Get personalized property matches within 24 hours
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
