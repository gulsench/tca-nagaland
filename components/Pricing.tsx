import { Check, Tag, Star, Info } from "lucide-react";
import {
  groupTraining,
  personalTraining,
  pricingFooterNote,
  site,
} from "@/lib/site";
import FadeIn from "./FadeIn";

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-ink-800">
      <div className="container-px">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">Membership</p>
          <h2 className="heading text-4xl text-white md:text-5xl">Pricing</h2>
          <p className="mt-4 text-lg text-white/70">
            Transparent fees with flexible options for every fighter — from
            casual training to a full pro-style program.
          </p>
        </FadeIn>

        {/* ----------------------- Group Training ----------------------- */}
        <div className="mt-14">
          <FadeIn>
            <h3 className="heading text-2xl text-crimson md:text-3xl">
              Group Training Fees
            </h3>
          </FadeIn>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {groupTraining.plans.map((plan, i) => (
              <FadeIn
                as="article"
                key={plan.title}
                delay={i * 0.1}
                className={`relative rounded-2xl border p-8 ${
                  plan.highlight
                    ? "border-crimson bg-gradient-to-b from-crimson/15 to-ink-900"
                    : "border-white/10 bg-ink-900"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full bg-crimson px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    <Star className="h-3.5 w-3.5" aria-hidden="true" />
                    Best Value
                  </span>
                )}
                <h4 className="heading text-xl text-white">{plan.title}</h4>
                <div className="mt-4 flex items-end gap-1">
                  <span className="heading text-5xl text-white">{plan.price}</span>
                  <span className="mb-1.5 text-white/60">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-white/65">{plan.desc}</p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-crimson" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={site.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 w-full ${plan.highlight ? "btn-primary" : "btn-ghost"}`}
                >
                  Join Now
                </a>
              </FadeIn>
            ))}
          </div>

          {/* Discounts callout */}
          <FadeIn className="mt-6 rounded-2xl border border-white/10 bg-ink-900 p-6 md:p-8">
            <h4 className="flex items-center gap-2 font-heading text-lg font-bold uppercase tracking-wide text-white">
              <Tag className="h-5 w-5 text-crimson" aria-hidden="true" />
              Discounts
            </h4>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {groupTraining.discounts.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-2 rounded-lg bg-ink-800 p-4 text-sm text-white/80"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-crimson" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-4 flex items-start gap-2 text-sm text-white/55">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-white/40" aria-hidden="true" />
              {groupTraining.discountNote}
            </p>
          </FadeIn>
        </div>

        {/* --------------------- Personal Training ---------------------- */}
        <div className="mt-16">
          <FadeIn className="max-w-3xl">
            <h3 className="heading text-2xl text-crimson md:text-3xl">
              Personal Training Fees
            </h3>
            <p className="mt-3 text-white/70">{personalTraining.intro}</p>
          </FadeIn>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {personalTraining.tiers.map((tier, i) => (
              <FadeIn
                as="article"
                key={tier.title}
                delay={i * 0.1}
                className="rounded-2xl border border-white/10 bg-ink-900 p-8"
              >
                <h4 className="heading text-xl text-white">{tier.title}</h4>
                <div className="mt-6 space-y-4">
                  {tier.plans.map((p) => (
                    <div
                      key={p.detail}
                      className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="text-sm text-white/70">{p.detail}</span>
                      <span className="heading text-2xl text-white">
                        {p.price}
                        <span className="ml-1 text-sm font-normal text-white/50">
                          {p.period}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-4 flex items-start gap-2 text-sm text-white/55">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-white/40" aria-hidden="true" />
            {personalTraining.note}
          </FadeIn>
        </div>

        <FadeIn className="mt-10 text-center text-sm font-medium uppercase tracking-widest text-white/50">
          {pricingFooterNote}
        </FadeIn>
      </div>
    </section>
  );
}
