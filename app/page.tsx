import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Programs } from "@/components/programs"
import { Corporate } from "@/components/corporate"
import { Partners } from "@/components/partners"
import { About } from "@/components/about"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Programs />
      <Corporate />
      <Partners />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
