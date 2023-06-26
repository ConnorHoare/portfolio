'use client'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import { Navbar } from '../../components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
