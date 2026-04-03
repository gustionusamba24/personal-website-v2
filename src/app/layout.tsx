import type { Metadata } from 'next';
import { Albert_Sans } from 'next/font/google';

import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';

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
  // verification: {
  //   google: 'QHmaFH6GQ1afrvAwlW4BArxO9d5hVgO5JyTg6V665Jw',
  // },
  openGraph: {
    title: 'Gustio Nusamba',
    description:
      'Self-taught software engineer passionate about crafting the solutions through digital approaches.',
    url: 'https://gustio-nusamba.vercel.app',
    siteName: 'Gustio Nusamba',
    images: [
      {
        url: 'https://gustio-nusamba.vercel.app/gustio-nusamba-og.png',
        width: 1200,
        height: 630,
        alt: 'Gustio Nusamba Open Graph Image',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={albertSans.className}>
      <head>
        <meta
          name="google-site-verification"
          content="qzFtiC-zSflPDttLPpg_WRyzaZPOhPANDQ-9acSpmPQ"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
