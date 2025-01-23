import Image from "next/image"
import ContactFormModal from "./ContactFormModal"

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Integrate AI in Conversational Marketing Tools
            </h1>
            <br />
            <p className="text-xl md:text-1xl mb-8">
              Wow customers with <b>AUTHENTIC</b> and <b>PERSONAL</b> conversations
            </p>
            <ContactFormModal />
          </div>
          <div className="hidden md:block">
            <Image
              src="/awesumo/placeholder.svg?height=400&width=600"
              alt="StreamLine Dashboard"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

