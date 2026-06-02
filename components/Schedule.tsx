import { Sunrise, Sun, Sunset, Clock, type LucideProps } from "lucide-react";
import { schedule, scheduleNote } from "@/lib/site";
import FadeIn from "./FadeIn";

const icons: Record<string, React.ComponentType<LucideProps>> = {
  sunrise: Sunrise,
  sun: Sun,
  sunset: Sunset,
};

export default function Schedule() {
  return (
    <section id="schedule" className="section bg-ink-900">
      <div className="container-px">
        <FadeIn className="max-w-2xl">
          <p className="eyebrow mb-3">Daily Timings</p>
          <h2 className="heading text-4xl text-white md:text-5xl">Class Schedule</h2>
          <p className="mt-4 text-lg text-white/70">
            Sessions run morning, afternoon, and evening — pick the slots that
            fit your routine.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {schedule.map((slot, i) => {
            const Icon = icons[slot.icon] ?? Clock;
            return (
              <FadeIn
                as="article"
                key={slot.period}
                delay={i * 0.1}
                className="relative overflow-hidden rounded-xl border border-white/10 bg-ink-800 p-7"
              >
                {/* Accent bar */}
                <span
                  className="absolute inset-x-0 top-0 h-1 bg-crimson"
                  aria-hidden="true"
                />
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-crimson/15 text-crimson">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="font-heading text-sm font-bold uppercase tracking-widest text-crimson">
                  {slot.period}
                </p>
                <p className="mt-1 heading text-3xl text-white">{slot.time}</p>
                <h3 className="mt-3 font-semibold text-white">{slot.title}</h3>
                <p className="mt-2 text-sm text-white/60">{slot.desc}</p>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="mt-6 inline-flex items-center gap-2 rounded-lg bg-ink-800 px-4 py-3 text-sm text-white/70">
          <Clock className="h-4 w-4 text-crimson" aria-hidden="true" />
          {scheduleNote}
        </FadeIn>
      </div>
    </section>
  );
}
