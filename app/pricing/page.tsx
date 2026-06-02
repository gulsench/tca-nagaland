import type { Metadata } from "next";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Pricing | ${site.name}`,
  description:
    "Group training and personal training fees at The Combat Academy, Dimapur, Nagaland. Student discounts and flexible membership options.",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
