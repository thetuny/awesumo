import { Inter } from "next/font/google"
import type React from "react"; // Added import for React
import Footer from "../components/Footer"
import Header from "../components/Header"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TheTuny - Manage Social Profiles",
  description: "Hyper-accelerated research and due diligence powered by Gen-AI",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#1C1C1C] text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

