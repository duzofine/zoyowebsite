"use client"

import Image from "next/image"
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react"
import { TRUST_ITEMS, WHATSAPP_MESSAGES, createWhatsAppLink } from "@/lib/site-data"

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden bg-brand-black">
      {/* Background image */}
      <Image
        src="/images/warehouse.jpg"
        alt="Zoyo Chemicals warehouse and logistics operations"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/70 to-brand-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/30" />

      {/* Subtle animated molecular lines */}
      <MolecularBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 pb-24 sm:px-6 lg:px-8 lg:pt-32">
        <div className="max-w-3xl">
          <p className="hero-item mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            Chemical Importation • Distribution • Supply
          </p>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="hero-item block">Quality Chemicals.</span>
            <span className="hero-item block text-brand-red" style={{ animationDelay: "0.12s" }}>
              Reliable Supply.
            </span>
            <span className="hero-item block" style={{ animationDelay: "0.24s" }}>
              Built for Industry.
            </span>
          </h1>

          <p
            className="hero-item mt-6 max-w-xl text-pretty text-base font-medium text-white/85 sm:text-lg"
            style={{ animationDelay: "0.36s" }}
          >
            Premium food-grade chemicals and industrial raw materials for growing businesses.
            Zoyo Chemicals Nig. Ltd. is a trusted importer, distributor and supplier serving
            manufacturers across Nigeria and West Africa.
          </p>

          <div
            className="hero-item mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.48s" }}
          >
            <button
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-brand-red-dark hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={createWhatsAppLink(WHATSAPP_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact ZOYO Chemicals on WhatsApp"
              data-analytics="hero_whatsapp_click"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5b] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <button
              onClick={() => scrollTo("products")}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
            >
              Explore Products
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-brand-black/40 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {TRUST_ITEMS.map((item, i) => (
            <div
              key={item}
              className="hero-item flex items-center justify-center gap-2 py-4 text-center text-xs font-semibold uppercase tracking-wider text-white/85 sm:text-sm"
              style={{ animationDelay: `${0.6 + i * 0.1}s` }}
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
              {item}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-item {
          opacity: 0;
          transform: translateY(20px);
          animation: hero-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes hero-in {
          to {
            opacity: 1;
            transform: none;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-item {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}

function MolecularBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="molgrid" width="80" height="80" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#C62828" />
          <path d="M2 2 L80 2 M2 2 L2 80" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#molgrid)" />
    </svg>
  )
}
