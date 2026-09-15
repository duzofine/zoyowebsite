import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://zoyochemicals.com'),
  title: {
    default: 'Zoyo Chemicals Nigeria Ltd — Food Additives & Preservatives Importer',
    template: '%s | Zoyo Chemicals Nigeria Ltd',
  },
  description:
    'Zoyo Chemicals Nigeria Limited (RC 1765134) is a leading importer and distributor of food-grade additives, preservatives, sweeteners and flavours across Nigeria and West Africa. Sodium Benzoate, Citric Acid, Sorbic Acid, Potassium Sorbate, Xanthan Gum and more — supplied in bulk.',
  keywords: [
    'Zoyo Chemicals',
    'food additives Nigeria',
    'chemical importer Nigeria',
    'sodium benzoate',
    'citric acid',
    'potassium sorbate',
    'sorbic acid',
    'xanthan gum',
    'aspartame',
    'acesulfame K',
    'food preservatives Lagos',
    'bulk chemical supplier West Africa',
  ],
  authors: [{ name: 'Zoyo Chemicals Nigeria Ltd' }],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    title: 'Zoyo Chemicals Nigeria Ltd — Food Additives & Preservatives Importer',
    description:
      'Leading importer and distributor of food-grade additives, preservatives, sweeteners and flavours across Nigeria and West Africa.',
    siteName: 'Zoyo Chemicals Nigeria Ltd',
    images: [{ url: '/images/warehouse.jpg', width: 1440, height: 960, alt: 'Zoyo Chemicals warehouse' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoyo Chemicals Nigeria Ltd',
    description:
      'Leading importer and distributor of food-grade additives, preservatives, sweeteners and flavours across Nigeria and West Africa.',
    images: ['/images/warehouse.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#111111',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${inter.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
