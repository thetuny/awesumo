"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CtaSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
  }

  return (
    <section className="py-24 bg-[#242424]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-light mb-4">Ready to Transform Your Research Process?</h2>
        <p className="text-gray-400 mb-8">
          Join leading organizations already using our platform to accelerate their research and decision-making
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your business email"
            className="bg-transparent border-gray-600 text-white placeholder:text-gray-500 flex-grow"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" className="bg-white text-black hover:bg-gray-200 px-8">
            Get Started
          </Button>
        </form>
      </div>
    </section>
  )
}

