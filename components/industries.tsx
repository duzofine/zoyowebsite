import { INDUSTRIES } from "@/lib/site-data"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

export function Industries() {
  return (
    <section id="industries" className="bg-brand-grey py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Trusted across manufacturing sectors"
          description="Our products support a broad range of industries that depend on consistent, quality raw materials to keep production running."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon
            return (
              <Reveal key={industry.name} delay={(i % 3) * 80}>
                <div className="group flex h-full items-start gap-4 rounded-xl border border-black/5 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/20 hover:shadow-lg">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red transition-colors duration-300 group-hover:bg-brand-red group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-brand-black">{industry.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-brand-black/60">
                      {industry.description}
                    </p>
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
