import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$9.99",
    period: "per month",
    description: "Perfect for personal brands and creators",
    features: ["3 social media accounts", "Basic automation", "Weekly analytics", "Content calendar", "Email support"],
  },
  {
    name: "Professional",
    price: "$29.99",
    period: "per month",
    description: "Ideal for growing businesses",
    features: [
      "10 social media accounts",
      "Advanced automation",
      "Real-time analytics",
      "Team collaboration",
      "Priority support",
      "Custom workflows",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large organizations",
    features: [
      "Unlimited accounts",
      "Custom integrations",
      "Advanced security",
      "Dedicated manager",
      "24/7 support",
      "API access",
      "SLA guarantee",
    ],
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-4 text-gray-900">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your social media automation needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="p-8 rounded-lg bg-gray-50 border border-gray-200 flex flex-col hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-medium mb-2 text-gray-900">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-light text-gray-900">{plan.price}</span>
                <span className="text-gray-600 ml-2">{plan.period}</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

