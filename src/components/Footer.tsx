import { Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between">
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-2">Tuny</h3>
            <p className="text-gray-400">
              Conversational Marketing Automation with AI.
            </p>
          </div>
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Integrations
                </Link>
              </li>
            </ul>
          </div> */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}
          <div className="text-right">
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <div className="flex justify-end space-x-4">
              <Link href="https://www.linkedin.com/in/jayalmehta/" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Tuny. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

