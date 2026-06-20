import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Good News Collective - Positive News That Matters',
  description: 'Discover inspiring, verified positive news stories from around the world.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}