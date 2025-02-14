"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import TallyFormModal from "./TallyFormModal"

export default function CtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="py-24 bg-gradient-to-br from-[#1C1C1C] to-[#2C1B47]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-light mb-4">Ready to Automate Your Social Media?</h2>
        <p className="text-gray-300 mb-8">
          Join leading brands and creators using our software manage their social profile branding
        </p>
        <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8" onClick={() => setIsModalOpen(true)}>
          Request Access
        </Button>
      </div>
      <TallyFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

