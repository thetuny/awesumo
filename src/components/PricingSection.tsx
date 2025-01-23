import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "$9",
    features: ["5 team members", "10GB storage", "Basic analytics", "Email support"],
  },
  {
    name: "Pro",
    price: "$29",
    features: ["Unlimited team members", "100GB storage", "Advanced analytics", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited everything", "Custom integrations", "Dedicated account manager", "24/7 phone support"],
  },
]

export default function PricingSection() {
  return (
    <div className="bg-gray-50 py-24" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
          Choose the Perfect Plan for Your Team
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-lg shadow-md p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-blue-600 mb-6">{plan.price}</p>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">{plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

