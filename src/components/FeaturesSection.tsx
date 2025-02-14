import { Brain, Search, Shield, Clock, BarChart, Users } from "lucide-react"

const features = [
  {
    title: "AI-Powered Research",
    description: "Leverage advanced Gen-AI technology to accelerate your research process",
    icon: Brain,
  },
  {
    title: "Comprehensive Analysis",
    description: "Deep insights across multiple data sources and documents",
    icon: Search,
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security with privacy-first architecture",
    icon: Shield,
  },
  {
    title: "Time Efficiency",
    description: "Reduce research time by up to 70% with automated analysis",
    icon: Clock,
  },
  {
    title: "Advanced Analytics",
    description: "Custom reports and analytics for deeper insights",
    icon: BarChart,
  },
  {
    title: "Team Collaboration",
    description: "Seamless sharing and collaboration features",
    icon: Users,
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#3B2069] to-[#2C1B47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-4">Powerful Features for Modern Research</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transform your research and due diligence process with our comprehensive suite of AI-powered tools
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <feature.icon className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

