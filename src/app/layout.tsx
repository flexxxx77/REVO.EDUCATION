'use client'

import { useRouter } from 'next/navigation'
import './globals.css' // байвал import хий

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 relative">
        {/* Лого зүүн дээд буланд */}
        <div
          className="absolute top-4 left-6 z-50 cursor-pointer"
          onClick={() => router.push('/')}
        >
          <img src="/logo.jpeg" alt="Logo" className="w-10 h-10 object-cover rounded-full" />
        </div>

        {/* Үндсэн page */}
        <main className="flex items-center justify-center min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
