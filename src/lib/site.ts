export const SITE = {
  name: "Friction Calculator",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourdomain.com").replace(/\/$/, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@yourdomain.com",
  tagline: "Free online friction calculator for force, coefficient and inclined planes",
  description:
    "Free friction calculator: find friction force, coefficient of friction or normal force instantly. Includes an inclined plane mode, formulas, worked examples and a coefficient table.",
  updated: "2026-10-05",
};

export const NAV = [
  { href: "/", label: "Friction Calculator" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
];
