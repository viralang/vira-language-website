
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vira — Write code that speaks',
  description: 'Vira is a modern programming language born in Egypt. Explore the official language guide and tutorials.',
  generator: 'Vira Language',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#eee7d5',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
