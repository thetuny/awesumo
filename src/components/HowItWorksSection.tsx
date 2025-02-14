import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Connect Accounts",
    description: "Link your social media accounts with our secure platform",
  },
  {
    number: "02",
    title: "Set Preferences",
    description: "Configure your automation rules and content preferences",
  },
  {
    number: "03",
    title: "Auto-Post",
    description: "Let AI handle your social media updates and engagement",
  },
  {
    number: "04",
    title: "Track Results",
    description: "Monitor performance and optimize your social presence",
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-4 text-gray-900">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get started with social media automation in four simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="mb-4">
                <span className="text-4xl font-light text-gray-400">{step.number}</span>
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-8 right-0 transform translate-x-1/2 h-6 w-6 text-gray-400" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

