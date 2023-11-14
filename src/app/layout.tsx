import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import { AOSInit } from './components/AOS'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Charles O. Egesionu Portfolio',
  description: 'Software Engineer - Frontend',
  openGraph: {
    url: 'https://iamnaeto.vercel.app/',
    images: 'https://raw.githubusercontent.com/IamNaeto/portfolio_v2/main/public/img/twitter-card.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AOSInit />  
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
