import { Inter } from "next/font/google"
import Footer from "../components/Footer"
import Header from "../components/Header"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Tuny - Automate your marketing with AI",
  description: "Tuny is a conversational marketing automation tool that uses AI to turn leads into customers.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

