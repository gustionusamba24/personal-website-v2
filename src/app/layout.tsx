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
  title: 'Gustio Nusamba - Self-taught Software Engineer',
  description:
    'Self-taught software engineer passionate about crafting solutions through digital approaches. Portfolio of web development projects.',
  keywords: [
    'software engineer',
    'web developer',
    'next.js',
    'react',
    'typescript',
    'fullstack developer',
  ],
  authors: [
    {
      name: 'Gustio Nusamba',
      url: 'https://gustio-nusamba.vercel.app',
    },
  ],
  creator: 'Gustio Nusamba',
  icons: {
    icon: '/gustio-nusamba-icon.png',
    apple: '/gustio-nusamba-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gustio-nusamba.vercel.app',
    siteName: 'Gustio Nusamba',
    title: 'Gustio Nusamba - Self-taught Software Engineer',
    description:
      'Self-taught software engineer passionate about crafting solutions through digital approaches. Portfolio of web development projects.',
    images: [
      {
        url: 'https://gustio-nusamba.vercel.app/gustio-nusamba-og.png',
        width: 1200,
        height: 630,
        alt: 'Gustio Nusamba - Self-taught Software Engineer Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gustio Nusamba - Self-taught Software Engineer',
    description:
      'Self-taught software engineer passionate about crafting solutions through digital approaches.',
    images: ['https://gustio-nusamba.vercel.app/gustio-nusamba-og.png'],
    creator: '@GustioNusamba',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
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
        <link rel="canonical" href="https://gustio-nusamba.vercel.app" />
        <meta
          name="google-site-verification"
          content="qzFtiC-zSflPDttLPpg_WRyzaZPOhPANDQ-9acSpmPQ"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#ffffff" />
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
