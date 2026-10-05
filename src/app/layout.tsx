import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Friction Calculator – Free Online Friction Force & Coefficient Tool",
    template: "%s | Friction Calculator",
  },
  description: SITE.description,
  keywords: [
    "friction calculator",
    "friction force calculator",
    "coefficient of friction calculator",
    "static friction calculator",
    "kinetic friction calculator",
    "friction on inclined plane",
    "normal force calculator",
  ],
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: "Friction Calculator – Free Online Friction Force & Coefficient Tool",
    description: SITE.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Friction Calculator – Free Online Tool",
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4f46e5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
