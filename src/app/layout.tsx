import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import ReactQueryProvider from '@/providers/ReactQueryProvider';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Beyond UI - Modern Blog Platform',
  description: 'Discover insights about business efficiency, SaaS solutions, and modern design.',
  keywords: 'blog, SaaS, business, design, UI/UX',
  authors: [{ name: 'Beyond UI Team' }],
  openGraph: {
    title: 'Beyond UI - Modern Blog Platform',
    description: 'Discover insights about business efficiency, SaaS solutions, and modern design.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <Header />
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
