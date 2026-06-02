import type { Metadata, Viewport } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

// Athletic condensed heading font + clean body font, wired to CSS variables.
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tca-nagaland.vercel.app"),
  title: "The Combat Academy | Martial Arts & Fitness Gym in Dimapur, Nagaland",
  description:
    "Boxing, Kickboxing, Muay Thai, Brazilian Jiu-Jitsu & Wrestling under one roof in Dimapur, Nagaland. Group & personal training with junior and senior coaches.",
  keywords: [
    "martial arts Dimapur",
    "boxing Nagaland",
    "Muay Thai Dimapur",
    "BJJ Nagaland",
    "wrestling gym",
    "The Combat Academy",
  ],
  openGraph: {
    title: "The Combat Academy — Train Like a Fighter",
    description: site.tagline,
    type: "website",
    images: [{ url: "/logo-icon.png", width: 512, height: 512, alt: site.name }],
  },
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
