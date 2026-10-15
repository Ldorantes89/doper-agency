'use client';

import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Doper Agency</h2>
        <nav className="space-y-2">
          <Link href="/dashboard" className="block px-4 py-2 rounded hover:bg-blue-800">
            📊 Overview
          </Link>
          <Link href="/dashboard/creators" className="block px-4 py-2 rounded hover:bg-blue-800">
            👥 Creators
          </Link>
          <Link href="/dashboard/campaigns" className="block px-4 py-2 rounded hover:bg-blue-800">
            🎬 Campaigns
          </Link>
          <Link href="/dashboard/earnings" className="block px-4 py-2 rounded hover:bg-blue-800">
            💰 Earnings
          </Link>
        </nav>
        <div className="absolute bottom-6 left-6">
          <a href="/" className="text-sm text-blue-200 hover:text-white">Logout</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
