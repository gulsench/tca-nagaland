"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import BentoVideoGallery from "./BentoVideoGallery";

export default function Hero() {
  const showGallery = site.showHeroVideoGallery;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => undefined);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink-900 py-24 md:py-28"
    >
      {/* Looping hero background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={site.heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Dark overlays for readable text */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/50"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/40"
        aria-hidden="true"
      />

      <div className="container-px relative z-10 w-full">
        <div
          className={
            showGallery
              ? "grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12 xl:gap-16"
              : "max-w-3xl"
          }
        >
          <div className={showGallery ? "order-1 max-w-2xl lg:pr-4" : ""}>
            <p className="eyebrow mb-4">Dimapur, Nagaland</p>

            <h1 className="heading text-5xl text-white sm:text-6xl md:text-7xl xl:text-[5.25rem]">
              Train Like
              <br />a <span className="text-crimson">Fighter</span>
            </h1>

            <p className="mt-6 text-lg text-white/80 md:text-xl">
              {site.tagline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/pricing" className="btn-primary text-base">
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
          </div>

          {showGallery && (
            <div className="order-2 w-full lg:justify-self-end">
              <BentoVideoGallery />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
