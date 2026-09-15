import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

interface SectionHeadingProps {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
  dark?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <p
            className={cn(
              "mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest",
              dark ? "text-brand-red" : "text-brand-red",
            )}
          >
            <span className="h-px w-6 bg-brand-red" />
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2
          className={cn(
            "text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]",
            dark ? "text-white" : "text-brand-black",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p
            className={cn(
              "mt-4 text-pretty text-base leading-relaxed sm:text-lg",
              dark ? "text-white/70" : "text-brand-black/65",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
