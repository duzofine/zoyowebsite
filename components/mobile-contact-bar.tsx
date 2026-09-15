"use client"

import { useEffect, useState } from "react"
import { MessageCircle, FileText } from "lucide-react"
import { createWhatsAppLink } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function MobileContactBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Reveal after the user scrolls past the hero so it never covers hero CTAs.
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const requestQuote = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/95 backdrop-blur transition-transform duration-300 sm:hidden",
        "pb-[env(safe-area-inset-bottom)]",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="grid grid-cols-2 gap-2 p-2.5">
        <a
          href={createWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact ZOYO Chemicals on WhatsApp"
          data-analytics="whatsapp_click"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1ebe5b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <button
          onClick={requestQuote}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-red-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
        >
          <FileText className="h-4 w-4" />
          Request Quote
        </button>
      </div>
    </div>
  )
}
