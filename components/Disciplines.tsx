import Image from "next/image";
import { disciplines } from "@/lib/site";
import FadeIn from "./FadeIn";

export default function Disciplines() {
  return (
    <section id="training" className="section bg-ink-900">
      <div className="container-px">
        <FadeIn className="max-w-2xl">
          <p className="eyebrow mb-3">Group Training</p>
          <h2 className="heading text-4xl text-white md:text-5xl">
            A Complete Martial Arts Experience
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Five disciplines across striking and grappling — cross-train under
            one roof and become a more complete fighter.
          </p>
        </FadeIn>

        {/* Mobile: 2×2 (+ 5th centered) · Desktop (lg+): 5 in one row */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
          {disciplines.map((d, i) => (
            <FadeIn
              as="article"
              key={d.name}
              delay={i * 0.08}
              className={`group relative overflow-hidden rounded-xl border border-white/10 bg-ink-800 ${
                i === 4 ? "col-span-2 mx-auto w-full max-w-sm lg:col-span-1 lg:max-w-none" : ""
              }`}
            >
              {/* Discipline image — replace with the client's photos later. */}
              <div className="relative h-44 w-full overflow-hidden sm:h-52 lg:h-48">
                <Image
                  src={d.image}
                  alt={`${d.name} training at The Combat Academy`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent"
                  aria-hidden="true"
                />
              </div>

              <div className="p-4 sm:p-5 lg:p-4">
                <h3 className="heading text-lg text-white sm:text-xl lg:text-lg">{d.name}</h3>
                <p className="mt-1.5 text-xs text-white/65 sm:text-sm lg:text-xs">{d.tagline}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
