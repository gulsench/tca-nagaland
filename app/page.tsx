import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Disciplines from "@/components/Disciplines";
import Schedule from "@/components/Schedule";
import Features from "@/components/Features";
import Hours from "@/components/Hours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Disciplines />
        <Schedule />
        <Features />
        <Hours />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
