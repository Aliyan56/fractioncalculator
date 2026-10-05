import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for the Friction Calculator website: what information we collect, how cookies and analytics are used, and your choices.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 leading-relaxed text-slate-700">
      <h1 className="text-3xl font-extrabold sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: October 5, 2026</p>

      <p className="mt-6">
        This Privacy Policy explains how {SITE.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles
        information when you visit our website at {SITE.url}.
      </p>

      <h2 className="mt-8 text-2xl font-bold">Information we collect</h2>
      <p className="mt-3">
        The friction calculator runs entirely in your browser. The numbers you enter are never sent to
        our servers or stored by us. We do not require an account and we do not ask for personal
        information to use the tool.
      </p>

      <h2 className="mt-8 text-2xl font-bold">Contact information</h2>
      <p className="mt-3">
        If you email us or use the contact form, we receive the details you choose to share, such as your
        name, email address and message. We use them only to reply to you and do not sell or share them.
      </p>

      <h2 className="mt-8 text-2xl font-bold">Log data</h2>
      <p className="mt-3">
        Like most websites, our hosting provider may automatically record technical information such as IP
        address, browser type, pages visited and timestamps. This is used for security, troubleshooting and
        understanding overall traffic.
      </p>

      <h2 className="mt-8 text-2xl font-bold">Cookies and third-party services</h2>
      <p className="mt-3">
        We may use cookies or similar technologies, including analytics or advertising services such as
        Google Analytics or Google AdSense, to measure traffic and keep the site free. These providers may
        collect information according to their own privacy policies. You can control or delete cookies in
        your browser settings and opt out of personalised advertising through your Google ad settings.
      </p>

      <h2 className="mt-8 text-2xl font-bold">External links</h2>
      <p className="mt-3">
        Our site may link to other websites. We are not responsible for the content or privacy practices of
        those sites.
      </p>

      <h2 className="mt-8 text-2xl font-bold">Children&rsquo;s privacy</h2>
      <p className="mt-3">
        Our website is not directed at children under 13, and we do not knowingly collect personal
        information from them.
      </p>

      <h2 className="mt-8 text-2xl font-bold">Your rights</h2>
      <p className="mt-3">
        Depending on where you live, you may have the right to access, correct or delete personal data we
        hold about you. To make a request, please use our{" "}
        <Link href="/contact" className="font-medium text-indigo-700 underline">contact page</Link>.
      </p>

      <h2 className="mt-8 text-2xl font-bold">Changes to this policy</h2>
      <p className="mt-3">
        We may update this policy from time to time. Changes take effect when they are posted on this page,
        and the &ldquo;Last updated&rdquo; date above will be revised.
      </p>

      <h2 className="mt-8 text-2xl font-bold">Disclaimer</h2>
      <p className="mt-3">
        Calculation results are provided for educational and estimation purposes only and come without any
        warranty of accuracy or fitness for a particular purpose.
      </p>
    </div>
  );
}
