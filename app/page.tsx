import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Disciplines from "@/components/Disciplines";
import Pricing from "@/components/Pricing";
import Schedule from "@/components/Schedule";
import Features from "@/components/Features";
import Hours from "@/components/Hours";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Disciplines />
        <Pricing />
        <Schedule />
        <Features />
        <Hours />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
