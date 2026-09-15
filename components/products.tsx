"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { ArrowUpRight, MessageCircle, X } from "lucide-react"
import {
  CATEGORY_LABELS,
  PRODUCT_FILTERS,
  PRODUCTS,
  createProductWhatsAppLink,
  createWhatsAppLink,
  type CategoryKey,
  type Product,
} from "@/lib/site-data"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

export function Products() {
  const [filter, setFilter] = useState<CategoryKey | "all">("all")
  const [selected, setSelected] = useState<Product | null>(null)

  const visible = useMemo(
    () => (filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="products" className="bg-brand-grey py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Products"
          title="A complete range of food-grade & industrial chemicals"
          description="From preservatives and sweeteners to acids, flavours and industrial raw materials — sourced to international quality standards and supplied in bulk."
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {PRODUCT_FILTERS.map((option) => {
            const active = filter === option.key
            return (
              <button
                key={option.key}
                onClick={() => setFilter(option.key)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  active
                    ? "border-brand-red bg-brand-red text-white shadow-sm"
                    : "border-black/10 bg-white text-brand-black/70 hover:border-brand-red/40 hover:text-brand-red",
                )}
                aria-pressed={active}
              >
                {option.label}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((product, i) => (
            <Reveal key={product.id} delay={(i % 4) * 80}>
              <ProductCard product={product} onOpen={() => setSelected(product)} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

function ProductCard({ product, onOpen }: { product: Product; onOpen: () => void }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-black/5 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <button
        onClick={onOpen}
        aria-label={`View details for ${product.name}`}
        className="flex flex-1 flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-grey">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-red backdrop-blur">
            {CATEGORY_LABELS[product.category]}
          </span>
          <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-red text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <div className="flex flex-1 flex-col p-4">
          <h3 className="text-base font-bold text-brand-black transition-colors group-hover:text-brand-red">
            {product.name}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-brand-black/60">
            {product.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.applications.slice(0, 2).map((app) => (
              <span
                key={app}
                className="rounded-md bg-brand-grey px-2 py-0.5 text-[11px] font-medium text-brand-black/60"
              >
                {app}
              </span>
            ))}
          </div>
        </div>
      </button>
      <div className="px-4 pb-4">
        <a
          href={createProductWhatsAppLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Enquire about ${product.name} on WhatsApp`}
          data-analytics="product_whatsapp_enquiry"
          className="flex w-full items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-2.5 text-sm font-semibold text-[#128C4A] transition-colors hover:bg-[#25D366] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        >
          <MessageCircle className="h-4 w-4" />
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  )
}

function ProductModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  useEffect(() => {
    if (!product) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [product, onClose])

  if (!product) return null

  const enquiryLink = createWhatsAppLink(
    `Hello ZOYO CHEMICALS, I would like to enquire about ${product.name}. Please provide your current price and availability.`,
  )

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      <div
        className="absolute inset-0 bg-brand-black/60 backdrop-blur-sm animate-[fade_0.2s_ease]"
        onClick={onClose}
      />
      <div className="relative z-10 max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white shadow-2xl animate-[modal_0.28s_cubic-bezier(0.22,1,0.36,1)] sm:rounded-2xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-black shadow-sm transition-colors hover:text-brand-red"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid sm:grid-cols-2">
          <div className="relative aspect-square bg-brand-grey sm:aspect-auto">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col p-6">
            <span className="mb-2 inline-flex w-fit rounded-full bg-brand-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-red">
              {CATEGORY_LABELS[product.category]}
            </span>
            <h3 className="text-2xl font-extrabold text-brand-black">{product.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-black/70">{product.description}</p>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-black/50">
                Typical Applications
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.applications.map((app) => (
                  <span
                    key={app}
                    className="rounded-md bg-brand-grey px-2.5 py-1 text-xs font-medium text-brand-black/70"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-6">
              <a
                href={enquiryLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Enquire about ${product.name} on WhatsApp`}
                data-analytics="product_whatsapp_enquiry"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
              >
                Enquire About This Product
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="mt-2 text-center text-xs text-brand-black/50">
                Available for bulk supply — request pricing &amp; availability
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes modal {
          from { opacity: 0; transform: translateY(24px) scale(0.98) }
          to { opacity: 1; transform: none }
        }
      `}</style>
    </div>
  )
}
