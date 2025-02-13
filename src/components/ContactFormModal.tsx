"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactFormModal() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <button onClick={openModal} className="text-gray-400 hover:text-white">
        Contact
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
              <Button variant="ghost" onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="p-6">
              <iframe
                aria-label="Contact Us"
                style={{ height: "500px", width: "100%", border: "none" }}
                src="https://forms.zohopublic.com/jayalmehtagm1/form/ContactUs/formperma/J0GOTy4L_mrAE2YZ7TSCyPiwEzRn-HPZgqUjhJlmYcY"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

