import Link from "next/link"

const footerLinks = {
  Product: ["Features", "Security", "Team", "Enterprise"],
  Resources: ["Documentation", "Guides", "API Reference", "Support"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy", "Terms", "Security", "GDPR"],
}

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} StreamLine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

