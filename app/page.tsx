'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-900">
      <nav className="flex justify-between items-center px-8 py-4 bg-white/10 backdrop-blur">
        <h1 className="text-2xl font-bold text-white">Doper Agency</h1>
        <div className="space-x-4">
          <a href="/login" className="text-white hover:text-blue-200">Login</a>
          <a href="/signup" className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-blue-50">Sign Up</a>
        </div>
      </nav>

      <div className="container mx-auto max-w-4xl py-20 text-center text-white">
        <h2 className="text-5xl font-bold mb-6">Manage Influencers Like a Pro</h2>
        <p className="text-xl mb-8 text-blue-100">
          Track creators, campaigns, earnings, and results all in one platform built for agencies.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">📊 Track Earnings</h3>
            <p>Real-time earnings dashboard with payment tracking</p>
          </div>
          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">🎬 Manage Campaigns</h3>
            <p>Create campaigns, assign creators, track deliverables</p>
          </div>
          <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">👥 Creator Database</h3>
            <p>Store creator profiles, rates, contracts, and metrics</p>
          </div>
        </div>

        <a href="/signup" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-50 mt-12">
          Start Free Trial
        </a>
      </div>
    </div>
  );
}
