"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function CtaSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-[#1C1C1C] to-[#2C1B47]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-light mb-4">Ready to Automate Your Social Media?</h2>
        <p className="text-gray-300 mb-8">
          Join leading brands and creators using our platform to streamline their social media presence
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 flex-grow"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" className="bg-white text-gray-900 hover:bg-gray-100 px-8">
            Get Started
          </Button>
        </form>
      </div>
    </section>
  )
}

