"use client"

import { ArrowRight, MessageCircle } from "lucide-react"
import { WHATSAPP_MESSAGES, createWhatsAppLink } from "@/lib/site-data"
import { Reveal } from "@/components/reveal"

export function BusinessCta() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand-red px-6 py-12 text-center shadow-xl sm:px-12 lg:py-16">
            <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-brand-black/10" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                Ready to secure a reliable chemical supply?
              </h2>
              <p className="mt-4 text-pretty text-base text-white/90 sm:text-lg">
                Partner with Zoyo Chemicals for premium products, competitive pricing and dependable
                delivery. Let&apos;s support your production goals.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={createWhatsAppLink(WHATSAPP_MESSAGES.business)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact ZOYO Chemicals on WhatsApp"
                  data-analytics="whatsapp_click"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-red shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-brand-black/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-brand-black/20"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
