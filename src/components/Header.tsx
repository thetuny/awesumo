"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import TallyFormModal from "./TallyFormModal"

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo_wt.png"
              alt="TheTuny Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <Link href="/" className="text-2xl font-bold text-white">
              TheTuny
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#product" className="text-sm text-gray-300 hover:text-white">
              Product
            </Link>
            <Link href="#how-it-works" className="text-sm text-gray-300 hover:text-white">
              How it works
            </Link>
            <Link href="#solutions" className="text-sm text-gray-300 hover:text-white">
              Solutions
            </Link>
            <Link href="#pricing" className="text-sm text-gray-300 hover:text-white">
              Pricing
            </Link>
            <Link href="#careers" className="text-sm text-gray-300 hover:text-white">
              Careers
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="text-sm bg-white text-black hover:bg-gray-200" onClick={() => setIsModalOpen(true)}>
              Request Access
            </Button>
          </div>
        </div>
      </div>
      <TallyFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  )
}

