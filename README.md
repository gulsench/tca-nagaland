# The Combat Academy (TCA) — Demo Website

A responsive, single-page marketing site for **The Combat Academy**, a martial arts & fitness gym in Dimapur, Nagaland. Built as a polished, conversion-focused client demo.

**Disciplines:** Boxing • Kickboxing • Muay Thai • Brazilian Jiu-Jitsu • Wrestling

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **lucide-react** for icons
- **framer-motion** for scroll-triggered fade-in animations
- Google Fonts via `next/font` — **Oswald** (headings) + **Inter** (body)
- Zero-config deploy to **Vercel**

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# open http://localhost:3000

# 3. Production build
npm run build
npm run start
```

## Project Structure

```
app/
  layout.tsx        # Fonts, metadata, global wrapper
  page.tsx          # Single-page composition of all sections
  globals.css       # Tailwind layers, theme utilities, smooth scroll
components/
  Header.tsx        # Sticky header + mobile hamburger menu
  Hero.tsx          # Full-screen hero with CTAs
  Disciplines.tsx   # Group training discipline cards
  Pricing.tsx       # Group + Personal training fees (core of the demo)
  Schedule.tsx      # Daily class timings
  Features.tsx      # "Why choose TCA" value props
  Hours.tsx         # Opening hours + Google Map + directions
  Gallery.tsx       # Image grid + Instagram CTA
  Contact.tsx       # CTA + front-end-only contact form
  Footer.tsx        # Logo, links, address, social
  FadeIn.tsx        # Reusable scroll-into-view animation wrapper
  DisciplineIcon.tsx# Maps disciplines to icons
lib/
  site.ts           # ⭐ ALL business data (prices, hours, links, contact)
public/
  logo.png          # Transparent main logo used in header/footer
  logo-icon.png     # Square icon asset used for favicon/metadata
  logo-source.jpg   # Original source image provided by client
```

## Editing Content

**All business data lives in [`lib/site.ts`](lib/site.ts)** — prices, discounts,
schedule, opening hours, contact info, social links, and gallery images. Edit
that one file to update the site; components read from it automatically.

## Swapping Placeholder Assets

This demo uses placeholder imagery so it looks complete out of the box:

- **Logo:** The site now uses `public/logo.png` (transparent cutout) generated
  from the client's provided source. Replace it with a refined export anytime.
- **Photos:** Hero, discipline, and gallery images come from Unsplash. Each is
  marked with a comment; swap the URLs in `lib/site.ts` (and `Hero.tsx`) for the
  client's real photos. You can host them in `public/` and reference locally.

## Key Info Wired In

- **Phone:** 07005420757 (`tel:` link)
- **WhatsApp:** https://wa.me/917005420757
- **Address:** H/No-66, Sovima Village, Vitho Khel, Dimapur, Nagaland 797112
- **Directions:** https://maps.app.goo.gl/2NUpRN9cAWV3oU4c7
- **Instagram:** https://www.instagram.com/tcanagaland/
- **Facebook:** https://www.facebook.com/tcanagaland/

## Notes

- The contact form is **front-end only** (no backend) — it shows a thank-you
  state on submit. Wire it to an email service or API route for production.
- Accessible: semantic HTML, alt text, focus-visible states, and high-contrast
  colors. Respects `prefers-reduced-motion`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Deploy — no environment variables or config required.

---

© 2026 The Combat Academy. All rights reserved.
