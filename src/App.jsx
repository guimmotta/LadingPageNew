import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Results from './components/Results'
import Bonus from './components/Bonus'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import { Author, Footer } from './components/AuthorFooter'
import StickyBar from './components/StickyBar'

export default function App() {
  return (
    <div className="bg-light min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Results />
      <Bonus />
      <Pricing />
      <FAQ />
      <Author />
      <Footer />
      <StickyBar />
    </div>
  )
}

