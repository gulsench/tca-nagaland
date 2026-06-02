import type { Metadata } from "next";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Gallery | ${site.name}`,
  description:
    "Photos from The Combat Academy — training, facility, and community in Dimapur, Nagaland.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
