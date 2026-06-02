"use client";

import { ArrowRight, MessageCircle, MapPin, Clock } from "lucide-react";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Hero background from client-provided image set. */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${site.heroImage}')`,
        }}
        aria-hidden="true"
      />
      {/* Dark gradient overlay for legibility + combat-sports mood. */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/30"
        aria-hidden="true"
      />

      <div className="container-px relative z-10 py-28">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4 animate-fade-in-up">Dimapur, Nagaland</p>

          <h1 className="heading text-5xl text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Train Like
            <br />a <span className="text-crimson">Fighter</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            {site.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#pricing" className="btn-primary text-base">
              Start Training
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={site.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-base"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-crimson" aria-hidden="true" />
              Sovima Village, Dimapur
            </span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden="true" />
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-crimson" aria-hidden="true" />
              Open 7 AM – 7 PM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
