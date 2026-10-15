'use client';

import { useState } from 'react';

interface Earning {
  id: string;
  creator: string;
  campaign: string;
  amount: number;
  status: string;
  dueDate: string;
}

export default function EarningsPage() {
  const [earnings] = useState<Earning[]>([]);

  const totalEarnings = earnings.reduce((sum, e) => sum + e.amount, 0);
  const pendingEarnings = earnings
    .filter(e => e.status === 'pending')
    .reduce((sum, e) => sum + e.amount, 0);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Earnings</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm">Total Earnings</p>
          <p className="text-3xl font-bold text-green-600">${totalEarnings.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm">Paid Out</p>
          <p className="text-3xl font-bold text-blue-600">
            ${earnings.filter(e => e.status === 'paid').reduce((sum, e) => sum + e.amount, 0).toLocaleString()}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm">Pending</p>
          <p className="text-3xl font-bold text-orange-600">${pendingEarnings.toLocaleString()}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">Earnings Breakdown</h2>
        </div>
        {earnings.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No earnings recorded yet. Create campaigns and assign creators to track earnings.
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Creator</th>
                <th className="px-6 py-3 text-left font-semibold">Campaign</th>
                <th className="px-6 py-3 text-left font-semibold">Amount</th>
                <th className="px-6 py-3 text-left font-semibold">Status</th>
                <th className="px-6 py-3 text-left font-semibold">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {earnings.map((earning) => (
                <tr key={earning.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-3">{earning.creator}</td>
                  <td className="px-6 py-3">{earning.campaign}</td>
                  <td className="px-6 py-3 font-semibold">${earning.amount.toLocaleString()}</td>
                  <td className="px-6 py-3">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      earning.status === 'paid' ? 'bg-green-100 text-green-800' :
                      earning.status === 'pending' ? 'bg-orange-100 text-orange-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {earning.status}
                    </span>
                  </td>
                  <td className="px-6 py-3">{earning.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
