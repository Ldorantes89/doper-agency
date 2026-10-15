'use client';

import { useState } from 'react';

interface Campaign {
  id: string;
  name: string;
  brand: string;
  budget: number;
  status: string;
}

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    budget: ''
  });

  const handleAddCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    const newCampaign: Campaign = {
      id: Date.now().toString(),
      name: formData.name,
      brand: formData.brand,
      budget: parseFloat(formData.budget),
      status: 'pending'
    };
    setCampaigns([...campaigns, newCampaign]);
    setFormData({ name: '', brand: '', budget: '' });
    setShowForm(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDelete = (id: string) => {
    setCampaigns(campaigns.filter(c => c.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Campaigns</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700"
        >
          + New Campaign
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Create Campaign</h2>
          <form onSubmit={handleAddCampaign} className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Campaign Name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="brand"
              placeholder="Brand Name"
              value={formData.brand}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="number"
              name="budget"
              placeholder="Budget (USD)"
              value={formData.budget}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="md:col-span-3 bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700"
            >
              Create Campaign
            </button>
          </form>
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {campaigns.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No campaigns yet. Create your first campaign to get started.
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Campaign</th>
                <th className="px-6 py-3 text-left font-semibold">Brand</th>
                <th className="px-6 py-3 text-left font-semibold">Budget</th>
                <th className="px-6 py-3 text-left font-semibold">Status</th>
                <th className="px-6 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-3 font-semibold">{campaign.name}</td>
                  <td className="px-6 py-3">{campaign.brand}</td>
                  <td className="px-6 py-3">${campaign.budget.toLocaleString()}</td>
                  <td className="px-6 py-3">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-3">
                    <button
                      onClick={() => handleDelete(campaign.id)}
                      className="text-red-600 hover:text-red-800 font-semibold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
