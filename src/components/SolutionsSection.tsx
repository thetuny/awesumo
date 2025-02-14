"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

const solutions = [
  {
    id: "progress",
    title: "Progress Tracker",
    tabTitle: "Progress Tracker",
    description: "Add dynamic progress bars to your social media icons",
    features: [
      "Customizable progress bars",
      "Integration with various metrics",
      "Real-time updates",
      "Goal setting and tracking",
    ],
    metrics: ["Increase engagement by 30%", "Boost profile visits", "Motivate audience"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "live",
    title: "Live Now Badge",
    tabTitle: "Live Now",
    description: "Alert your audience across platforms when you're live",
    features: [
      "Automatic status updates",
      "Cross-platform synchronization",
      "Customizable badges and rings",
      "Integration with streaming services",
    ],
    metrics: ["Drive 50% more viewers", "Increase discoverability", "Boost live engagement"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "price",
    title: "Price Movement Tracker",
    tabTitle: "Price Tracker",
    description: "Display real-time price movements on your profile",
    features: [
      "Dynamic price badges",
      "Customizable arrows and indicators",
      "Integration with financial APIs",
      "Automatic updates based on market changes",
    ],
    metrics: ["Establish market authority", "Increase follower trust", "Real-time market insights"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "company",
    title: "Product Launch Banners",
    tabTitle: "Company Updates",
    description: "Automatically update company banners for product launches",
    features: [
      "Scheduled banner updates",
      "Multi-platform synchronization",
      "Customizable templates",
      "Integration with product calendars",
    ],
    metrics: ["Boost launch visibility by 40%", "Increase cross-platform consistency", "Streamline marketing efforts"],
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState(solutions[0].id)

  const activeSolution = solutions.find((s) => s.id === activeTab)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-4 text-gray-900">How People are using it</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enhance your social media presence with dynamic, data-driven profile elements
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {solutions.map((solution) => (
            <Button
              key={solution.id}
              variant="ghost"
              className={cn(
                "text-lg px-6 py-2 transition-colors",
                activeTab === solution.id
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50",
              )}
              onClick={() => setActiveTab(solution.id)}
            >
              {solution.tabTitle}
            </Button>
          ))}
        </div>

        {activeSolution && (
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-gray-900">{activeSolution.title}</h3>
              <p className="text-gray-600">{activeSolution.description}</p>
              <ul className="space-y-3">
                {activeSolution.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <h4 className="text-sm uppercase text-gray-500 mb-3">Key Benefits</h4>
                <div className="flex flex-wrap gap-4">
                  {activeSolution.metrics.map((metric) => (
                    <span key={metric} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={activeSolution.image || "/placeholder.svg"}
                alt={activeSolution.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

