import './globals.css'
import type { Metadata } from 'next'
import { Inter,Space_Grotesk } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const sg = Space_Grotesk({weight:"500",subsets:["latin"]})

export const metadata: Metadata = {
  title: 'Solraccs',
  description: 'unearth the fun World of Urban Bandits.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sg.className}>{children}</body>
    </html>
  )
}
