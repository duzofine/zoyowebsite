"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

interface GalleryItem {
  src: string
  caption: string
  span: string
}

const GALLERY: GalleryItem[] = [
  { src: "/images/sorbic-acid.jpg", caption: "Sorbic Acid — 25kg bagged stock", span: "sm:col-span-2 sm:row-span-2" },
  { src: "/images/potassium-sorbate.jpg", caption: "Potassium Sorbate (Granular)", span: "" },
  { src: "/images/citric-acid.jpg", caption: "Citric Acid Anhydrous — palletised", span: "" },
  { src: "/images/sodium-benzoate-powder.jpg", caption: "Sodium Benzoate Powder", span: "sm:row-span-2" },
  { src: "/images/warehouse-stock.jpg", caption: "Warehouse inventory & bulk storage", span: "" },
  { src: "/images/bulk-sacks-green.jpg", caption: "Bulk sacks ready for distribution", span: "" },
  { src: "/images/kraft-bags.jpg", caption: "Kraft-packed raw materials", span: "sm:col-span-2" },
  { src: "/images/xanthan-gum.png", caption: "Xanthan Gum — 25kg", span: "" },
  { src: "/images/sodium-benzoate.png", caption: "Sodium Benzoate — 25kg", span: "" },
]

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null)

  const close = useCallback(() => setIndex(null), [])
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length)),
    [],
  )
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % GALLERY.length)),
    [],
  )

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [index, close, prev, next])

  return (
    <section id="gallery" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Inside our supply operations"
          description="Genuine product packaging and warehouse stock — a look at the quality and scale behind every Zoyo Chemicals order."
        />

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY.map((item, i) => (
            <Reveal
              key={item.src}
              delay={(i % 4) * 70}
              className={cn("group relative", item.span)}
            >
              <button
                onClick={() => setIndex(i)}
                className="relative h-full w-full overflow-hidden rounded-xl bg-brand-grey focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
                aria-label={`View ${item.caption}`}
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute left-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-brand-red opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4" />
                </span>
                <p className="absolute inset-x-3 bottom-3 translate-y-2 text-left text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.caption}
                </p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {index !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-brand-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            onClick={close}
            aria-label="Close viewer"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <figure className="flex max-h-[85vh] w-full max-w-4xl flex-col items-center">
            <div className="relative h-[70vh] w-full">
              <Image
                key={GALLERY[index].src}
                src={GALLERY[index].src || "/placeholder.svg"}
                alt={GALLERY[index].caption}
                fill
                sizes="100vw"
                className="object-contain animate-[fade_0.25s_ease]"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm font-medium text-white/80">
              {GALLERY[index].caption}
              <span className="ml-2 text-white/40">
                {index + 1} / {GALLERY.length}
              </span>
            </figcaption>
          </figure>

          <style>{`@keyframes fade { from { opacity: 0 } to { opacity: 1 } }`}</style>
        </div>
      )}
    </section>
  )
}
