import ContactFormModal from "./ContactFormModal"

export default function CtaSection() {
  return (
    <div className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">Ready to Streamline Your Workflow?</h2>
        <p className="text-xl mb-8">Join thousands of teams already using StreamLine to boost their productivity.</p>
        <ContactFormModal />
      </div>
    </div>
  )
}

