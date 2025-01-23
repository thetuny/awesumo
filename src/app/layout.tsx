import { Inter } from "next/font/google"
import Footer from "../components/Footer"
import Header from "../components/Header"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "StreamLine - Simplify Your Workflow",
  description: "StreamLine is a powerful SaaS platform that helps teams collaborate and streamline their workflows.",
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

