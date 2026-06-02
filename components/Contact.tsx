"use client";

import { useState, type FormEvent } from "react";
import { Phone, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  // Front-end only for the demo — no backend. Shows a thank-you state.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section bg-ink-900">
      <div className="container-px">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* CTA + quick contact */}
          <FadeIn>
            <p className="eyebrow mb-3">Get Started</p>
            <h2 className="heading text-4xl text-white md:text-5xl">
              Ready to Start?
              <br />
              <span className="text-crimson">Get in Touch.</span>
            </h2>
            <p className="mt-4 max-w-md text-lg text-white/70">
              Drop by, call, or message us on WhatsApp. Your first step toward
              training like a fighter starts here.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.contact.phoneTel} className="btn-ghost">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {site.contact.phoneDisplay}
              </a>
              <a
                href={site.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>

            <p className="mt-8 flex items-start gap-3 text-white/70">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-crimson" aria-hidden="true" />
              {site.contact.address}
            </p>
          </FadeIn>

          {/* Contact form */}
          <FadeIn delay={0.1} className="rounded-2xl border border-white/10 bg-ink-800 p-6 md:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="h-14 w-14 text-crimson" aria-hidden="true" />
                <h3 className="heading mt-4 text-2xl text-white">Thank You!</h3>
                <p className="mt-2 max-w-xs text-white/70">
                  We&apos;ve received your message and will get back to you
                  shortly. For a faster reply, message us on WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", phone: "", message: "" });
                  }}
                  className="btn-ghost mt-6 py-2.5 text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-white/80"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-md border border-white/15 bg-ink-900 px-4 py-3 text-white placeholder-white/40 focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-white/80"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-md border border-white/15 bg-ink-900 px-4 py-3 text-white placeholder-white/40 focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-white/80"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full resize-none rounded-md border border-white/15 bg-ink-900 px-4 py-3 text-white placeholder-white/40 focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson"
                    placeholder="Tell us your goals or ask a question…"
                  />
                </div>

                <button type="submit" className="btn-primary w-full text-base">
                  Send Message
                </button>
                <p className="text-center text-xs text-white/40">
                  This is a demo form — submissions are not stored.
                </p>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
