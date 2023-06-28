'use client'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { Navbar } from '../../components'

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
