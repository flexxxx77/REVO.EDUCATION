import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 relative">
        {/* Лого зүүн дээд буланд */}
        <a href="/" className="absolute top-4 left-6 z-50 cursor-pointer">
          <img src="/logo.jpeg" alt="Logo" className="w-10 h-10 object-cover rounded-full" />
        </a>

        {/* Үндсэн page */}
        <main className="flex items-center justify-center min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
