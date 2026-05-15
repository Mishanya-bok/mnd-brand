import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import FeaturedDrop from './sections/FeaturedDrop'
import Philosophy from './sections/Philosophy'
import Materials from './sections/Materials'
import Community from './sections/Community'
import Lookbook from './sections/Lookbook'
import WhyMnd from './sections/WhyMnd'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedDrop />
        <Philosophy />
        <Materials />
        <Community />
        <Lookbook />
        <WhyMnd />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
