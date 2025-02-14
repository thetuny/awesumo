"use client"

import { useEffect, useRef } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TallyFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TallyFormModal({ isOpen, onClose }: TallyFormModalProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Load Tally script only when modal is open
    if (isOpen) {
      const script = document.createElement("script")
      script.src = "https://tally.so/widgets/embed.js"
      script.async = true
      script.onload = () => {
        // @ts-ignore - Tally is added to window by the script
        if (window.Tally) {
          // @ts-ignore
          window.Tally.loadEmbeds()
        }
      }
      document.body.appendChild(script)

      return () => {
        // Cleanup script when modal closes
        document.body.removeChild(script)
      }
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] p-0">
        <div className="absolute right-4 top-4 z-50">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="w-full h-full">
          <iframe
            ref={iframeRef}
            data-tally-src="https://tally.so/r/mJWpAz"
            width="100%"
            height="100%"
            title="Request Beta Invite"
            style={{ border: "none", borderRadius: "8px" }}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

