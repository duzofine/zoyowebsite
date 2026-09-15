"use client"

import { useState, type FormEvent } from "react"
import { Mail, MapPin, Phone, MessageCircle, Send, CheckCircle2 } from "lucide-react"
import { COMPANY, PRODUCTS, createWhatsAppLink } from "@/lib/site-data"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const CONTACT_CARDS = [
  { icon: Phone, label: "Call Us", value: COMPANY.phone, href: COMPANY.phoneHref },
  { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with our team",
    href: createWhatsAppLink(),
    external: true,
  },
  { icon: MapPin, label: "Location", value: COMPANY.address },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") || "")
    const company = String(data.get("company") || "")
    const product = String(data.get("product") || "")
    const quantity = String(data.get("quantity") || "")
    const location = String(data.get("location") || "")
    const message = String(data.get("message") || "")

    const composed =
      `Hello ZOYO CHEMICALS,\n\n` +
      `I would like to request a quotation.\n\n` +
      `Name: ${name}\n` +
      `Company: ${company}\n` +
      `Product: ${product}\n` +
      `Quantity: ${quantity}\n` +
      `Delivery Location: ${location}\n` +
      `\nAdditional Information:\n${message}`

    window.open(createWhatsAppLink(composed), "_blank", "noopener")
    setSent(true)
    form.reset()
    window.setTimeout(() => setSent(false), 6000)
  }

  return (
    <section id="contact" className="bg-brand-grey py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Request a quote or product enquiry"
          description="Tell us what you need and our team will respond with pricing, availability and supply options. Prefer to chat? Reach us directly on WhatsApp."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {CONTACT_CARDS.map((card) => {
                  const Icon = card.icon
                  const inner = (
                    <div className="flex h-full items-start gap-3 rounded-xl border border-black/5 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-brand-black/45">
                          {card.label}
                        </p>
                        <p className="mt-0.5 truncate text-sm font-semibold text-brand-black">
                          {card.value}
                        </p>
                      </div>
                    </div>
                  )
                  return card.href ? (
                    <a
                      key={card.label}
                      href={card.href}
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noopener noreferrer" : undefined}
                      className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 rounded-xl"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={card.label}>{inner}</div>
                  )
                })}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-4 rounded-xl border border-black/5 bg-brand-black p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
                  Business Hours
                </p>
                <div className="mt-3 space-y-1.5 text-sm text-white/75">
                  <p className="flex justify-between gap-4">
                    <span>Monday – Friday</span>
                    <span className="font-medium text-white">8:00 – 18:00</span>
                  </p>
                  <p className="flex justify-between gap-4">
                    <span>Saturday</span>
                    <span className="font-medium text-white">9:00 – 15:00</span>
                  </p>
                  <p className="flex justify-between gap-4">
                    <span>Sunday</span>
                    <span className="font-medium text-white/60">Closed</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={80} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" name="name" required placeholder="Your name" />
                <Field label="Company" name="company" placeholder="Company name" />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" />
                <Field label="Phone" name="phone" type="tel" placeholder="+234 ..." />
                <Field label="Quantity" name="quantity" placeholder="e.g. 500 kg / 20 bags" />
                <Field label="Delivery Location" name="location" placeholder="City / State" />
              </div>

              <div className="mt-4">
                <label htmlFor="product" className="mb-1.5 block text-sm font-semibold text-brand-black">
                  Product of Interest
                </label>
                <select
                  id="product"
                  name="product"
                  defaultValue=""
                  className="w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-brand-black outline-none transition-colors focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
                >
                  <option value="">Select a product (optional)</option>
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option value="Other / Bulk enquiry">Other / Bulk enquiry</option>
                </select>
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-brand-black">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about quantities, delivery location and any requirements..."
                  className="w-full resize-none rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-brand-black outline-none transition-colors focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-red-dark hover:shadow-md sm:w-auto"
              >
                <Send className="h-4 w-4" />
                Send Enquiry via WhatsApp
              </button>

              {sent && (
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-green-600">
                  <CheckCircle2 className="h-4 w-4" />
                  Opening WhatsApp with your enquiry — we&apos;ll respond shortly.
                </p>
              )}
              <p className="mt-3 text-xs text-brand-black/45">
                Submitting opens WhatsApp with your details pre-filled so you can send instantly.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-brand-black">
        {label}
        {required && <span className="ml-0.5 text-brand-red">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-brand-black outline-none transition-colors placeholder:text-brand-black/35 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
      />
    </div>
  )
}
