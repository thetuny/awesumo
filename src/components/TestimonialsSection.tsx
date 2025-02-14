import Image from "next/image"

const testimonials = [
  {
    content: "This has revolutionized our team's workflow. We're more productive than ever!",
    author: "Jane Cooper",
    role: "CEO, TechCorp",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    content: "The analytics features have given us invaluable insights into our business processes.",
    author: "John Doe",
    role: "CTO, InnovateCo",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    content: "Customer support is top-notch. They're always there when we need them.",
    author: "Alice Johnson",
    role: "Operations Manager, StartupX",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialsSection() {
  return (
    <div className="bg-white py-24" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">What Our Customers Say</h2>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md p-8">
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

