import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Doper Agency - Influencer Management Platform',
  description: 'Manage influencers, campaigns, and earnings all in one place',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
