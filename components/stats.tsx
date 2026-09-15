"use client"

import { useEffect, useRef, useState } from "react"
import { STATS } from "@/lib/site-data"

export function Stats() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative bg-brand-black py-16 lg:py-20">
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:gap-6 lg:px-8"
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="border-l-2 border-brand-red/40 pl-4 transition-all duration-700"
            style={{
              transitionDelay: `${i * 120}ms`,
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(20px)",
            }}
          >
            <div className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              <StatValue value={stat.value} run={inView} />
            </div>
            <p className="mt-2 text-xs font-medium uppercase tracking-wider text-white/60 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function StatValue({ value, run }: { value: string; run: boolean }) {
  const match = value.match(/^(\d+)(.*)$/)

  if (!match) {
    return <span>{value}</span>
  }

  const target = Number.parseInt(match[1], 10)
  const suffix = match[2]
  return (
    <span>
      <CountUp target={target} run={run} />
      {suffix}
    </span>
  )
}

function CountUp({ target, run }: { target: number; run: boolean }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!run) return
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target)
      return
    }
    let raf = 0
    const duration = 1400
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setN(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, target])

  return <>{n}</>
}
