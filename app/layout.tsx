import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Doper Agency',
    description: 'Platform for agencies to manage influencers, campaigns, and earnings',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
          <html lang="en">
                <body>{children}</body>body>
          </html>html>
        );
}</html>
