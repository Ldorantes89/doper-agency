'use client';

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Dashboard Overview</h1>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm">Total Creators</p>
          <p className="text-3xl font-bold text-blue-600">0</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm">Active Campaigns</p>
          <p className="text-3xl font-bold text-green-600">0</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm">Total Earnings</p>
          <p className="text-3xl font-bold text-purple-600">$0.00</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm">Pending Payments</p>
          <p className="text-3xl font-bold text-orange-600">$0.00</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Recent Campaigns</h2>
          <p className="text-gray-500">No campaigns yet. Create your first campaign to get started.</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Top Creators</h2>
          <p className="text-gray-500">No creators added yet. Add creators to track their performance.</p>
        </div>
      </div>
    </div>
  );
}
