import Image from "next/image";
import { Instagram, Facebook, Phone, MapPin } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <div className="container-px py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={site.logo}
                alt={`${site.name} logo`}
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
              <span className="heading text-xl text-white">
                {site.shortName}
                <span className="text-crimson">.</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              {site.tagline}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white/80 transition-colors hover:border-crimson hover:text-crimson"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white/80 transition-colors hover:border-crimson hover:text-crimson"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-crimson"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>
                <a
                  href={site.contact.phoneTel}
                  className="inline-flex items-center gap-2 transition-colors hover:text-crimson"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {site.contact.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/40">
          © 2026 {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
