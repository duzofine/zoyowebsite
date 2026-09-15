import { ADVANTAGES } from "@/lib/site-data"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

export function WhyZoyo() {
  return (
    <section id="why-zoyo" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Zoyo"
          title="A supply partner built on trust and consistency"
          description="We combine quality sourcing, competitive pricing and dependable service to help your business grow with confidence."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((advantage, i) => {
            const Icon = advantage.icon
            return (
              <Reveal key={advantage.title} delay={(i % 3) * 80}>
                <div className="group relative h-full overflow-hidden rounded-xl border border-black/5 bg-brand-grey/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl">
                  <span className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-brand-red/5 transition-transform duration-500 group-hover:scale-150" />
                  <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red text-white shadow-sm">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="relative mt-5 text-lg font-bold text-brand-black">{advantage.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-brand-black/60">
                    {advantage.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
