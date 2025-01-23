import { BarChart, Lock, Users, Zap } from "lucide-react"

const features = [
  {
    name: "Integrate",
    description: "Integrate Tuny directly in your conversational marketing tools like ManyChat, Chatfuel, and more.",
    icon: Zap,
  },
  {
    name: "Authentic Voice",
    description: "Train Tuny to talk like you, using your own words, phrases, and tone.",
    icon: Users,
  },
  {
    name: "Personalize",
    description: "Tuny can learn your business, and personalize responses to your customers.",
    icon: BarChart,
  },
  {
    name: "State of the Art",
    description: "Dont worry about keeping up with AI. We do that for you.",
    icon: Lock,
  },
]

export default function FeaturesSection() {
  return (
    <div className="bg-gray-50 py-24" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Powerful Features 
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Tuny offers a wide range of features to turn leads into customers.
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

