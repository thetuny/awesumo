const solutions = [
  {
    title: "Investment Research",
    description: "Accelerate investment decisions with comprehensive market analysis and insights",
    metrics: ["70% faster research", "90% accuracy", "24/7 availability"],
  },
  {
    title: "Due Diligence",
    description: "Streamline due diligence process with automated document analysis and risk assessment",
    metrics: ["50% cost reduction", "100% coverage", "Real-time updates"],
  },
  {
    title: "Market Intelligence",
    description: "Stay ahead with real-time market insights and competitive analysis",
    metrics: ["360° market view", "Predictive insights", "Custom reports"],
  },
]

export default function SolutionsSection() {
  return (
    <section className="py-24 bg-[#242424]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-4">Solutions for Every Need</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tailored solutions to meet your specific research and analysis requirements
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div key={solution.title} className="p-8 rounded-lg bg-[#1C1C1C]">
              <h3 className="text-xl font-medium mb-4">{solution.title}</h3>
              <p className="text-gray-400 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.metrics.map((metric) => (
                  <li key={metric} className="text-sm text-gray-300">
                    • {metric}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

