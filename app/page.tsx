import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedOffer from "@/components/FeaturedOffer";
import WhoItsFor from "@/components/WhoItsFor";
import Portfolio from "@/components/Portfolio";
import QuoteForm from "@/components/QuoteForm";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import LeadGen from "@/components/LeadGen";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FeaturedOffer />
        <WhoItsFor />
        <Portfolio />
        <QuoteForm />
        <WhyUs />
        <HowItWorks />
        <LeadGen />
        <Testimonials />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
