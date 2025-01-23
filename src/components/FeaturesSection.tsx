import { Zap, Users, BarChart, Lock } from "lucide-react"

const features = [
  {
    name: "Lightning Fast",
    description: "Our platform is optimized for speed, ensuring quick load times and real-time updates.",
    icon: Zap,
  },
  {
    name: "Team Collaboration",
    description: "Work seamlessly with your team members, share resources, and communicate effectively.",
    icon: Users,
  },
  {
    name: "Advanced Analytics",
    description: "Gain valuable insights with our powerful analytics and reporting tools.",
    icon: BarChart,
  },
  {
    name: "Enterprise-grade Security",
    description: "Rest easy knowing your data is protected with state-of-the-art security measures.",
    icon: Lock,
  },
]

export default function FeaturesSection() {
  return (
    <div className="bg-gray-50 py-24" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Powerful Features to Boost Your Productivity
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            StreamLine offers a wide range of features to help you work smarter, not harder.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-base text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

