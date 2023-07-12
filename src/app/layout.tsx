import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'gabe wolford',
  description: 'gabe wolford is a full stack developer based in portland, oregon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
