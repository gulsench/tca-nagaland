import Image from "next/image";
import { Instagram } from "lucide-react";
import { gallery, site } from "@/lib/site";
import FadeIn from "./FadeIn";

export default function Gallery() {
  return (
    <section className="section bg-ink-800">
      <div className="container-px">
        <FadeIn className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Inside the Gym</p>
            <h2 className="heading text-4xl text-white md:text-5xl">Gallery</h2>
            <p className="mt-4 text-lg text-white/70">
              Sweat, skill, and community in action.
            </p>
          </div>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost shrink-0 py-2.5 text-xs"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Follow on Instagram
          </a>
        </FadeIn>

        {/* Responsive image grid — replace placeholders with real gym photos. */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {gallery.map((src, i) => (
            <FadeIn
              key={src}
              delay={(i % 4) * 0.06}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={src}
                alt={`Training moment ${i + 1} at The Combat Academy`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-ink-900/0 transition-colors duration-300 group-hover:bg-ink-900/30"
                aria-hidden="true"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
