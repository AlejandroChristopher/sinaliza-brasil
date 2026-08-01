import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Benefits from "@/components/sections/Benefits";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Products from "@/components/sections/Products";
import WhyUs from "@/components/sections/WhyUs";
import FloatingWhatsapp from "@/components/shared/FloatingWhatsapp";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Benefits />
        <Products />
        <WhyUs />
        <Process />
        <FAQ />
        <CTA />
      </main>

      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
