"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function HeroSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
  }

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-light leading-tight">
              Hyper-accelerated research and due diligence powered by Gen-AI
            </h1>
            <div className="space-y-4">
              <p className="text-xl text-gray-400">
                Comprehensive and credible insights for investment and strategy professionals
              </p>
              <p className="text-gray-400">Enterprise grade and privacy-centered secure platform</p>
            </div>
            <form onSubmit={handleSubmit} className="flex max-w-md space-x-4">
              <Input
                type="email"
                placeholder="Business email"
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="bg-white text-black hover:bg-gray-200 px-8">
                Request Access
              </Button>
            </form>
          </div>
          <div className="relative">
            <Image
              src="https://sjc.microlink.io/oY6LXZdyPIXj1Yd3ftdjGUcVd61GV6V9YpMJtpzI66K6M6LFl4nO2hu_S_tOh7_sGZBDoNlXOaSgsb-ZOhiqdg.jpeg"
              alt="Platform Preview"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

