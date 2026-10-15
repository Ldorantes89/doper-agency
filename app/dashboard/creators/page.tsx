'use client';

import { useState } from 'react';

interface Creator {
  id: string;
  name: string;
  instagram?: string;
  tiktok?: string;
  email?: string;
}

export default function CreatorsPage() {
  const [creators, setCreators] = useState<Creator[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    instagram: '',
    tiktok: '',
    email: ''
  });

  const handleAddCreator = (e: React.FormEvent) => {
    e.preventDefault();
    const newCreator: Creator = {
      id: Date.now().toString(),
      ...formData
    };
    setCreators([...creators, newCreator]);
    setFormData({ name: '', instagram: '', tiktok: '', email: '' });
    setShowForm(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDelete = (id: string) => {
    setCreators(creators.filter(c => c.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Creators</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700"
        >
          + Add Creator
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Add New Creator</h2>
          <form onSubmit={handleAddCreator} className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Creator Name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="instagram"
              placeholder="Instagram Handle"
              value={formData.instagram}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="tiktok"
              placeholder="TikTok Handle"
              value={formData.tiktok}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="md:col-span-2 bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700"
            >
              Save Creator
            </button>
          </form>
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {creators.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No creators yet. Add your first creator to get started.
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Name</th>
                <th className="px-6 py-3 text-left font-semibold">Email</th>
                <th className="px-6 py-3 text-left font-semibold">Instagram</th>
                <th className="px-6 py-3 text-left font-semibold">TikTok</th>
                <th className="px-6 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {creators.map((creator) => (
                <tr key={creator.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-3">{creator.name}</td>
                  <td className="px-6 py-3">{creator.email || '-'}</td>
                  <td className="px-6 py-3">{creator.instagram || '-'}</td>
                  <td className="px-6 py-3">{creator.tiktok || '-'}</td>
                  <td className="px-6 py-3">
                    <button
                      onClick={() => handleDelete(creator.id)}
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
