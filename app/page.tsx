import { Navbar } from "@/components/navbar"
import { ScrollProgress } from "@/components/scroll-progress"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Stats } from "@/components/stats"
import { Products } from "@/components/products"
import { Gallery } from "@/components/gallery"
import { Industries } from "@/components/industries"
import { WhyZoyo } from "@/components/why-zoyo"
import { GlobalSourcing } from "@/components/global-sourcing"
import { BusinessCta } from "@/components/business-cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileContactBar } from "@/components/mobile-contact-bar"

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Products />
        <Gallery />
        <Industries />
        <WhyZoyo />
        <GlobalSourcing />
        <BusinessCta />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
      <MobileContactBar />
    </>
  )
}
