import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import PageTransition from "@/components/page-transition"
import BrutalHeader from "@/components/brutal-header"
import BrutalFooter from "@/components/brutal-footer"
import CustomCursor from "@/components/custom-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Monolith Crew | Streetwear Design Studio",
  description: "Monolith Crew is a design studio specializing in streetwear aesthetics and brutalist design.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative bg-black text-white selection:bg-red-500 selection:text-black">
          <CustomCursor />
          <BrutalHeader />
          <PageTransition>{children}</PageTransition>
          <BrutalFooter />
        </div>
      </body>
    </html>
  )
}
