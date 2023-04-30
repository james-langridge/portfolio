import './globals.css'
import Nav from '@/app/components/Nav'

export const metadata = {
  title: 'James Langridge',
  description: 'JavaScript Developer skilled in React, Next.js, and TypeScript',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-gray-900">
        <Nav />
        {children}
      </body>
    </html>
  )
}
