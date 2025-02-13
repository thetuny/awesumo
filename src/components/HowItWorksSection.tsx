import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Upload Documents",
    description: "Simply upload your research documents and data sources",
  },
  {
    number: "02",
    title: "AI Analysis",
    description: "Our Gen-AI technology analyzes and processes your documents",
  },
  {
    number: "03",
    title: "Generate Insights",
    description: "Receive comprehensive insights and analysis in minutes",
  },
  {
    number: "04",
    title: "Collaborate & Share",
    description: "Share findings with your team and stakeholders",
  },
]

export default function HowItWorksSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A simple yet powerful process to transform your research workflow
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="mb-4">
                <span className="text-4xl font-light text-gray-500">{step.number}</span>
              </div>
              <h3 className="text-xl font-medium mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-8 right-0 transform translate-x-1/2 h-6 w-6 text-gray-500" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

