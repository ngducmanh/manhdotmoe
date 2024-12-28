import type { Metadata } from 'next'
import './globals.scss'
import { Nav } from './nav'

export const metadata: Metadata = {
  title: 'manh.moe',
  description: 'manh.moe',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#EADBC8] min-h-screen`}>
        <header>
          <Nav />
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
