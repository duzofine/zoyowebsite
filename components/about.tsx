import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { Reveal } from "@/components/reveal"

const POINTS = [
  "International quality standards",
  "Consistent product supply",
  "Competitive, market-conscious pricing",
  "Dependable nationwide delivery",
]

export function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/warehouse-stock.jpg"
                alt="Palletised chemical stock inside the Zoyo Chemicals warehouse"
                width={900}
                height={675}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-xl bg-brand-red px-6 py-5 text-white shadow-lg sm:block">
              <p className="text-3xl font-extrabold leading-none">RC 1765134</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/85">
                Registered in Nigeria
              </p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-red">
              <span className="h-px w-6 bg-brand-red" />
              About Zoyo Chemicals
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-brand-black sm:text-4xl">
              Powering manufacturing with reliable chemical supply
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-brand-black/70">
              <p>
                Zoyo Chemicals Nig. Ltd. is a leading importer, distributor and supplier of
                high-quality food-grade chemicals and industrial raw materials in Nigeria.
              </p>
              <p>
                We are committed to providing premium products that meet international quality
                standards while delivering reliable supply solutions to manufacturers and
                distributors across Nigeria and West Africa.
              </p>
              <p>
                Through our sourcing network from globally recognised manufacturers, particularly
                in China, we provide consistent product quality, competitive pricing and dependable
                delivery.
              </p>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm font-medium text-brand-black/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
