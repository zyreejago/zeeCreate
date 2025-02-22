import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <div className="pt-16">
        {" "}
        <Hero />
        <Features />
        <Pricing />
        <WhyChooseUs />
        <FAQ />
        <Testimonials />
        <CTA />
      </div>
    </div>
  );
}

export default App;
