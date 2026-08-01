import Header from "@/components/layout/Header";
import Benefits from "@/components/sections/Benefits";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import WhyUs from "@/components/sections/WhyUs";
import FloatingWhatsapp from "@/components/shared/FloatingWhatsapp";
import Process from "@/components/sections/Process";

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
      </main>

      <FloatingWhatsapp />
    </>
  );
}
