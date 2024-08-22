import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Приложение E-notGPT',
  description: 'Создано командой первых Чемпионов России'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru' style={{ scrollBehavior: 'smooth' }}>
      <body className={inter.className}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  )
}
