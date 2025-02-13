import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "per month",
    description: "Perfect for individuals and small teams",
    features: [
      "Up to 100 documents per month",
      "Basic AI analysis",
      "Email support",
      "1 team member",
      "Basic reporting",
    ],
  },
  {
    name: "Professional",
    price: "$299",
    period: "per month",
    description: "Ideal for growing businesses",
    features: [
      "Up to 500 documents per month",
      "Advanced AI analysis",
      "Priority support",
      "5 team members",
      "Advanced analytics",
      "Custom reports",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large organizations",
    features: [
      "Unlimited documents",
      "Custom AI models",
      "24/7 dedicated support",
      "Unlimited team members",
      "Custom integrations",
      "Advanced security",
      "SLA guarantee",
    ],
  },
]

export default function PricingSection() {
  return (
    <section className="py-24" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include a 14-day free trial.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="p-8 rounded-lg bg-[#242424] border border-gray-800 flex flex-col">
              <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-light">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-white text-black hover:bg-gray-200">
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

