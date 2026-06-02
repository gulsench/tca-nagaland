"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a solid background once the user scrolls past the hero top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-ink-900/95 backdrop-blur border-b border-white/10"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="container-px flex h-20 items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <Image
            src={site.logo}
            alt={`${site.name} logo`}
            width={56}
            height={56}
            className="h-14 w-14 object-contain"
            priority
          />
          <span className="heading hidden text-xl text-white sm:block">
            {site.shortName}
            <span className="text-crimson">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-heading text-sm font-medium uppercase tracking-widest text-white/80 transition-colors hover:text-crimson"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a href={site.contact.phoneTel} className="btn-ghost py-2.5 text-xs">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Now
          </a>
          <a
            href={site.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2.5 text-xs"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-crimson-light"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-ink-900 lg:hidden">
          <nav className="container-px flex flex-col py-4" aria-label="Mobile">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 font-heading text-base font-medium uppercase tracking-widest text-white/90 transition-colors hover:text-crimson"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <a href={site.contact.phoneTel} className="btn-ghost">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {site.contact.phoneDisplay}
              </a>
              <a
                href={site.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                onClick={() => setOpen(false)}
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
