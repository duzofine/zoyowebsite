"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { NAV_LINKS } from "@/lib/site-data"
import { cn } from "@/lib/utils"

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", ""))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("home")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    )
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const handleNav = (href: string) => {
    setOpen(false)
    const el = document.getElementById(href.replace("#", ""))
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <button
          onClick={() => handleNav("#home")}
          className="relative flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 rounded-sm"
          aria-label="Zoyo Chemicals — back to top"
        >
          <Image
            src="/images/logo.png"
            alt="Zoyo Chemicals Nigeria Limited"
            width={220}
            height={72}
            priority
            className="h-12 w-auto transition-all duration-300 lg:h-16"
          />
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.replace("#", "")
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    scrolled || open
                      ? isActive
                        ? "text-brand-red"
                        : "text-brand-black/70 hover:text-brand-black"
                      : isActive
                        ? "text-white"
                        : "text-white/75 hover:text-white",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-red transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </button>
              </li>
            )
          })}
        </ul>

        <div className="hidden lg:block">
          <button
            onClick={() => handleNav("#contact")}
            className="group inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-red-dark hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
          >
            Request a Quote
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors lg:hidden",
            scrolled || open ? "text-brand-black" : "text-white",
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-black/5 bg-white transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              className={cn(
                "transition-all duration-300",
                open ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0",
              )}
              style={{ transitionDelay: open ? `${i * 45}ms` : "0ms" }}
            >
              <button
                onClick={() => handleNav(link.href)}
                className="w-full rounded-md px-3 py-3 text-left text-base font-medium text-brand-black/80 transition-colors hover:bg-brand-grey hover:text-brand-red"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="mt-2 px-1">
            <button
              onClick={() => handleNav("#contact")}
              className="w-full rounded-full bg-brand-red px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
            >
              Request a Quote →
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}
