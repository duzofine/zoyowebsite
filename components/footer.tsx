"use client"

import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"
import { COMPANY, NAV_LINKS, PRODUCT_FILTERS } from "@/lib/site-data"

function scrollTo(href: string) {
  document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" })
}

export function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Zoyo Chemicals Nigeria Limited"
              width={220}
              height={72}
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              A leading importer, distributor and supplier of high-quality food-grade chemicals and
              industrial raw materials across Nigeria and West Africa.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-white/40">
              {COMPANY.rc}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/60 transition-colors hover:text-brand-red"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Products</h3>
            <ul className="mt-4 space-y-2.5">
              {PRODUCT_FILTERS.filter((f) => f.key !== "all").map((filter) => (
                <li key={filter.key}>
                  <button
                    onClick={() => scrollTo("#products")}
                    className="text-sm text-white/60 transition-colors hover:text-brand-red"
                  >
                    {filter.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-start gap-2.5 text-sm text-white/60 transition-colors hover:text-brand-red"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-2.5 text-sm text-white/60 transition-colors hover:text-brand-red"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                {COMPANY.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} {COMPANY.name} ({COMPANY.rc}). All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Quality Chemicals. Reliable Supply. Built for Industry.
          </p>
        </div>
      </div>
    </footer>
  )
}
