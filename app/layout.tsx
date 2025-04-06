import type React from "react"
import "./globals.css"

export const metadata = {
  title: "Ghazanfar Idrees | Product-Led Growth Strategist",
  description:
    "Helping companies build products that retain & grow users. 12+ years of experience in product management, growth hacking, and SEO.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



import './globals.css'