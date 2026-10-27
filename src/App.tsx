import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { Overview } from "./components/Overview"
import { Categories } from "./components/Categories"
import { Criteria } from "./components/Criteria"
import { Process } from "./components/Process"
import { Timeline } from "./components/Timeline"
import { Comparison } from "./components/Comparison"
import { Tips } from "./components/Tips"
import { Faq } from "./components/Faq"
import { Cta } from "./components/Cta"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Overview />
        <Categories />
        <Criteria />
        <Process />
        <Timeline />
        <Comparison />
        <Tips />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
