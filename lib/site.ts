/**
 * Centralized business data for The Combat Academy (TCA).
 *
 * EDIT THIS FILE to update prices, hours, contact details, links, and copy.
 * Components read from here so the client's info lives in one place.
 */

export const site = {
  name: "The Combat Academy",
  shortName: "TCA",
  tagline:
    "Boxing • Kickboxing • Muay Thai • Brazilian Jiu-Jitsu • Wrestling — all under one roof in Dimapur, Nagaland.",
  logo: "/logo.png", // Transparent cutout logo generated from the client's source image.
  heroImage: "/images/tca-1.png", // Real gym photo provided by the client.

  contact: {
    phoneDisplay: "07005420757",
    phoneTel: "tel:07005420757",
    whatsapp: "https://wa.me/917005420757",
    address: "H/No-66, Sovima Village, Vitho Khel, Dimapur, Nagaland 797112",
    directions: "https://maps.app.goo.gl/2NUpRN9cAWV3oU4c7",
    // Google Maps embed for the address above.
    mapEmbed:
      "https://www.google.com/maps?q=Sovima%20Village%2C%20Vitho%20Khel%2C%20Dimapur%2C%20Nagaland%20797112&output=embed",
  },

  social: {
    instagram: "https://www.instagram.com/tcanagaland/",
    facebook: "https://www.facebook.com/tcanagaland/",
  },

  // Anchor-link navigation used by the header.
  nav: [
    { label: "Home", href: "#home" },
    { label: "Training", href: "#training" },
    { label: "Pricing", href: "#pricing" },
    { label: "Schedule", href: "#schedule" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

/* ----------------------------- Disciplines ----------------------------- */
// Real gym photos supplied by the client.
export const disciplines = [
  {
    name: "Boxing",
    icon: "boxing",
    tagline: "Footwork, head movement, and knockout power.",
    image: "/images/tca-3.png",
  },
  {
    name: "Kickboxing",
    icon: "kickboxing",
    tagline: "Explosive strikes blending hands and legs.",
    image: "/images/tca-8.png",
  },
  {
    name: "Muay Thai",
    icon: "muaythai",
    tagline: "The art of eight limbs — fists, elbows, knees, shins.",
    image: "/images/tca-4.png",
  },
  {
    name: "Brazilian Jiu-Jitsu",
    icon: "bjj",
    tagline: "Leverage, control, and ground dominance.",
    image: "/images/tca-1.png",
  },
  {
    name: "Wrestling",
    icon: "wrestling",
    tagline: "Takedowns, scrambles, and relentless pressure.",
    image: "/images/tca-6.png",
  },
] as const;

/* ------------------------------- Pricing ------------------------------- */
export const groupTraining = {
  plans: [
    {
      price: "₹3,499",
      period: "/month",
      title: "Single Session",
      desc: "1 session per day.",
      highlight: false,
      features: ["1 group session daily", "Access to all disciplines"],
    },
    {
      price: "₹4,499",
      period: "/month",
      title: "Unlimited",
      desc: "Up to 3 sessions/day + all-day Strength & Conditioning access.",
      highlight: true,
      features: [
        "Up to 3 sessions per day",
        "All disciplines included",
        "All-day Strength & Conditioning access",
      ],
    },
  ],
  discounts: [
    "20% off for students (valid student ID required)",
    "10% off on 3-month package",
    "20% off on 6-month package",
  ],
  discountNote:
    "Discounts apply to Group Training only. No discounts on Personal Training.",
};

export const personalTraining = {
  intro:
    "Customized to individual goals — martial arts skill development, general fitness & conditioning, or rehabilitation (special cases). Scheduled around client preference & trainer availability.",
  tiers: [
    {
      title: "Junior Trainers",
      plans: [
        { price: "₹6,999", period: "/mo", detail: "3 sessions / week" },
        { price: "₹9,499", period: "/mo", detail: "5 sessions / week" },
      ],
    },
    {
      title: "Senior Trainers",
      plans: [
        { price: "₹9,499", period: "/mo", detail: "3 sessions / week" },
        { price: "₹11,999", period: "/mo", detail: "5 sessions / week" },
      ],
    },
  ],
  note: "Senior trainers have greater experience and higher client engagement.",
};

export const pricingFooterNote = "All fees are inclusive of GST.";

/* ------------------------------ Schedule ------------------------------- */
export const schedule = [
  {
    period: "Morning",
    time: "From 7:30 AM",
    title: "Grappling & Striking",
    desc: "Alternates between grappling and striking sessions.",
    icon: "sunrise",
  },
  {
    period: "Afternoon",
    time: "3:00 PM",
    title: "Grappling — BJJ & Wrestling",
    desc: "Focused mat work, takedowns, and ground game.",
    icon: "sun",
  },
  {
    period: "Evening",
    time: "From 4:30 PM",
    title: "Striking — Boxing, Kickboxing, Muay Thai",
    desc: "Pad work, sparring drills, and conditioning.",
    icon: "sunset",
  },
] as const;

export const scheduleNote = "Each session lasts 60–90 minutes.";

/* ------------------------------ Features ------------------------------- */
export const features = [
  {
    title: "Multiple Disciplines",
    desc: "Five combat sports under one roof — cross-train and level up faster.",
    icon: "layers",
  },
  {
    title: "Junior & Senior Trainers",
    desc: "Coaching tiers to match your goals, experience, and budget.",
    icon: "users",
  },
  {
    title: "Strength & Conditioning",
    desc: "All-day S&C access included with the unlimited membership.",
    icon: "dumbbell",
  },
  {
    title: "Student-Friendly Pricing",
    desc: "20% student discount plus multi-month package savings.",
    icon: "graduation-cap",
  },
] as const;

/* --------------------------- Opening Hours ----------------------------- */
// `closed: true` styles the row distinctly. Order follows the client's listing.
export const openingHours = [
  { day: "Tuesday", hours: "7 AM – 7 PM", closed: false },
  { day: "Wednesday", hours: "7 AM – 7 PM", closed: false },
  { day: "Thursday", hours: "7 AM – 7 PM", closed: false },
  { day: "Friday", hours: "7 AM – 7 PM", closed: false },
  { day: "Saturday", hours: "7 AM – 11:15 PM", closed: false },
  { day: "Sunday", hours: "Closed", closed: true },
  { day: "Monday", hours: "7 AM – 7 PM", closed: false },
] as const;

/* ------------------------------- Gallery ------------------------------- */
// Client-provided gallery photos.
export const gallery = [
  "/images/tca-1.png",
  "/images/tca-2.png",
  "/images/tca-3.png",
  "/images/tca-4.png",
  "/images/tca-5.png",
  "/images/tca-6.png",
  "/images/tca-7.png",
  "/images/tca-8.png",
] as const;
