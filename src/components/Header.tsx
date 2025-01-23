import { MessageSquareCode } from "lucide-react"
import ContactFormModal from "./ContactFormModal"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MessageSquareCode className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Tuny</span>
          </div>
          {/* <nav className="hidden md:flex space-x-10">
            <Link href="#features" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Features
            </Link>
            <Link href="#testimonials" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Pricing
            </Link>
          </nav> */}
          <div className="flex items-center">
            {/* <Button variant="ghost" className="text-gray-500 hover:text-gray-900">
              Log in
            </Button>
            <Button className="ml-8">Get Started</Button> */}
            <ContactFormModal />
          </div>
        </div>
      </div>
    </header>
  )
}

