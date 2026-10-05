import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact the Friction Calculator team to report a bug, suggest a feature or ask a question about friction calculations.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 leading-relaxed text-slate-700">
      <h1 className="text-3xl font-extrabold sm:text-4xl">Contact Us</h1>
      <p className="mt-4 text-lg">
        Questions, feedback or ideas for the friction calculator? We would love to hear from you.
      </p>
      <p className="mt-3">
        Email us directly at{" "}
        <a href={`mailto:${SITE.email}`} className="font-medium text-indigo-700 underline">
          {SITE.email}
        </a>
        , or use the form below. We usually reply within a few business days.
      </p>
      <ContactForm email={SITE.email} />
    </div>
  );
}
