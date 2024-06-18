import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'
import { Recursive } from 'next/font/google'
import './globals.css'

const recursive = Recursive({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'casecobra',
  description:
    'Create your own custom phone case and protect your memories, not just your phone case.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <NavBar />
        <main className="flex min-h-[calc(100vh-3.5rem-1px)] flex-col">
          <div className="flex h-full flex-1 flex-col">{children}</div>
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  )
}
