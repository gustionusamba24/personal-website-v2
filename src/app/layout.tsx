import type { Metadata } from 'next';
import { Albert_Sans } from 'next/font/google';

import './globals.css';

const albertSans = Albert_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Gustio Nusamba',
  description:
    'Self-taught software engineer passionate about crafting the solutions through digital approaches.',
  icons: {
    icon: '/gustio-nusamba-icon.png',
    apple: '/gustio-nusamba-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={albertSans.className}>
      <body>{children}</body>
    </html>
  );
}
