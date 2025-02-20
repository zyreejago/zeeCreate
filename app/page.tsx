import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Pricing from "./components/Pricing"
import WebsiteBenefits from "./components/WebsiteBenefits"
import FAQ from "./components/FAQ"
import Testimonials from "./components/Testimonials"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <WebsiteBenefits />
      <FAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App

