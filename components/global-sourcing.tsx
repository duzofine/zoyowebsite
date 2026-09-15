import Image from "next/image"
import { Globe2, Ship, PackageCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"

const FEATURES = [
  {
    icon: Globe2,
    title: "Global Manufacturer Network",
    description:
      "We source from globally recognised manufacturers, particularly in China, known for quality and scale.",
  },
  {
    icon: Ship,
    title: "Reliable Import Logistics",
    description:
      "Established import channels ensure a steady flow of stock and consistent product availability.",
  },
  {
    icon: PackageCheck,
    title: "Quality-Controlled Supply",
    description:
      "Products are selected and verified to meet international food-grade and industrial standards.",
  },
]

export function GlobalSourcing() {
  return (
    <section className="relative overflow-hidden bg-brand-black py-20 lg:py-28">
      <Image
        src="/images/kraft-bags.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/70" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <Reveal>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-red">
              <span className="h-px w-6 bg-brand-red" />
              Global Sourcing
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              Sourced globally, supplied locally
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-white/70">
              Our international sourcing network lets us deliver premium chemicals at competitive
              prices without compromising on quality. From factory to your facility, we manage the
              supply chain so you can focus on production.
            </p>
          </Reveal>
        </div>

        <div className="space-y-4">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon
            return (
              <Reveal key={feature.title} delay={i * 100}>
                <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:border-brand-red/40">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-red text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/65">{feature.description}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
