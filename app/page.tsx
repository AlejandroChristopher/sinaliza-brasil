import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Products from "@/components/sections/Products";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Benefits />
        <Products />
      </main>
    </>
  );
}
