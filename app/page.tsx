import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import WebsiteBenefits from "./components/WebsiteBenefits";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <div className="pt-16">
        {" "}
        {/* Add padding-top to account for fixed header */}
        <Hero />
        <Features />
        <Pricing />
        {/* <WebsiteBenefits /> */}
        <WhyChooseUs />
        <FAQ />
        <Testimonials />
        <CTA />
      </div>
      <Footer />
    </div>
  );
}

export default App;
