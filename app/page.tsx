import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import ScrollToTop from "@/components/ScrollToTop";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Industries />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
