import type { Metadata } from 'next'
import './globals.css'
import Header from './Components/Header'

export const metadata: Metadata = {
  title: 'Color-Get',
  description: 'Upload a picture - get colors',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-700">
        <Header />
        {children}
      </body>
    </html>
  )
}
