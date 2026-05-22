import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { PracticeAreas } from "@/components/practice-areas"
import { Team } from "@/components/team"

import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
