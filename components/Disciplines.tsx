import Image from "next/image";
import { disciplines } from "@/lib/site";
import FadeIn from "./FadeIn";
import DisciplineIcon from "./DisciplineIcon";

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

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {disciplines.map((d, i) => (
            <FadeIn
              as="article"
              key={d.name}
              delay={i * 0.08}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-ink-800"
            >
              {/* Discipline image — replace with the client's photos later. */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={d.image}
                  alt={`${d.name} training at The Combat Academy`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent"
                  aria-hidden="true"
                />
              </div>

              <div className="p-6">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-md bg-crimson/15 text-crimson">
                  <DisciplineIcon name={d.icon} className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="heading text-2xl text-white">{d.name}</h3>
                <p className="mt-2 text-sm text-white/65">{d.tagline}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
