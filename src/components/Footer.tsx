import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  Product: ["Features", "Security", "Team", "Enterprise"],
  Resources: ["Documentation", "Guides", "API Reference", "Support"],
  Company: ["About", "Blog", "Careers", "Press"],
}

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex justify-between items-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} TheTuny. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

