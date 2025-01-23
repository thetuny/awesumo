import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Simplify Your Workflow with StreamLine
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Boost productivity and collaboration with our powerful SaaS platform.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Free Trial
            </Button>
          </div>
          <div className="hidden md:block">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="StreamLine Dashboard"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

