"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import TallyFormModal from "./TallyFormModal"

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="relative min-h-screen flex items-center bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-light leading-tight">Auto update Social Media Profile Picture and Banners</h1>
            <div className="space-y-4">
              <p className="text-xl text-gray-400">
                Seamlessly manage and update all your social media accounts with intelligent automation
              </p>
              <p className="text-gray-400">Enterprise-grade platform for Twitter, Instagram, and LinkedIn automation</p>
            </div>
            <Button className="bg-white text-black hover:bg-gray-200 px-8" onClick={() => setIsModalOpen(true)}>
              Request Access
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/crypto_banner.png"
              alt="Social Media Dashboard"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
      <TallyFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

