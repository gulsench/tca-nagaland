import {
  Layers,
  Users,
  Dumbbell,
  GraduationCap,
  type LucideProps,
} from "lucide-react";
import { features } from "@/lib/site";
import FadeIn from "./FadeIn";

const icons: Record<string, React.ComponentType<LucideProps>> = {
  layers: Layers,
  users: Users,
  dumbbell: Dumbbell,
  "graduation-cap": GraduationCap,
};

export default function Features() {
  return (
    <section className="section bg-ink-800">
      <div className="container-px">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">Why TCA</p>
          <h2 className="heading text-4xl text-white md:text-5xl">
            Why Choose The Combat Academy
          </h2>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = icons[f.icon] ?? Layers;
            return (
              <FadeIn
                key={f.title}
                delay={i * 0.08}
                className="rounded-xl border border-white/10 bg-ink-900 p-7 text-center"
              >
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-crimson/15 text-crimson">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="heading text-xl text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-white/60">{f.desc}</p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
