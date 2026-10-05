import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the Friction Calculator project: a free, fast and accurate online tool for calculating friction force, coefficient of friction and inclined plane problems.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 leading-relaxed text-slate-700">
      <h1 className="text-3xl font-extrabold sm:text-4xl">About Friction Calculator</h1>
      <p className="mt-4 text-lg">
        Friction Calculator is a free online tool that helps students, teachers, engineers and hobbyists
        solve friction problems quickly and correctly.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Our mission</h2>
      <p className="mt-3">
        Friction shows up everywhere in physics and engineering, but the math can slow people down. Our
        goal is to give you a clean, fast and reliable friction calculator that works on any device without
        sign-ups, downloads or ads getting in the way.
      </p>

      <h2 className="mt-10 text-2xl font-bold">What the calculator can do</h2>
      <ul className="mt-3 list-disc space-y-2 pl-6">
        <li>Calculate friction force from the coefficient of friction and normal force.</li>
        <li>Find the coefficient of friction from a measured friction force.</li>
        <li>Work out the normal force when friction force and coefficient are known.</li>
        <li>Solve inclined plane problems, including critical angle and acceleration.</li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold">Accuracy and limitations</h2>
      <p className="mt-3">
        The calculator uses the standard Coulomb friction model and g = 9.80665 m/s². Real surfaces can
        behave differently because of lubrication, temperature, wear and contamination. Please treat
        results as estimates and verify critical engineering or safety calculations independently.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Get in touch</h2>
      <p className="mt-3">
        Found a bug or have an idea for a new calculator? Visit our{" "}
        <Link href="/contact" className="font-medium text-indigo-700 underline">contact page</Link> and
        let us know. Ready to calculate? Go back to the{" "}
        <Link href="/" className="font-medium text-indigo-700 underline">friction calculator</Link>.
      </p>
    </div>
  );
}
