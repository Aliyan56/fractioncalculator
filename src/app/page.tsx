import Link from "next/link";
import FrictionCalculator from "@/components/FrictionCalculator";
import { SITE } from "@/lib/site";

const FAQS = [
  {
    q: "What is a friction calculator?",
    a: "A friction calculator is an online tool that works out the friction force between two surfaces from the coefficient of friction and the normal force. It can also find the coefficient of friction or the normal force when the other two values are known.",
  },
  {
    q: "What is the formula for friction force?",
    a: "The friction force formula is F = μ × N, where F is the friction force in newtons, μ (mu) is the coefficient of friction and N is the normal force in newtons.",
  },
  {
    q: "How do I calculate the normal force?",
    a: "On a flat horizontal surface the normal force equals the weight of the object, N = m × g, with g ≈ 9.81 m/s². On an incline of angle θ it is N = m × g × cos θ.",
  },
  {
    q: "What is the difference between static and kinetic friction?",
    a: "Static friction acts on an object at rest and prevents it from starting to move. Kinetic (sliding) friction acts on an object that is already moving. The coefficient of static friction is usually larger than the coefficient of kinetic friction.",
  },
  {
    q: "Can the coefficient of friction be greater than 1?",
    a: "Yes. Most common material pairs have a coefficient below 1, but very grippy surfaces such as rubber on dry concrete or racing tyres on a clean track can have values above 1.",
  },
  {
    q: "Does friction depend on surface area?",
    a: "In the basic model used by this friction calculator, friction does not depend on the contact area. It depends only on the coefficient of friction and the normal force.",
  },
  {
    q: "How do I calculate friction on an inclined plane?",
    a: "Find the normal force with N = m × g × cos θ, then multiply by the coefficient of friction: F = μ × m × g × cos θ. The object slides when m × g × sin θ is larger than this friction force, or equivalently when tan θ > μ.",
  },
];

const MATERIALS = [
  ["Steel on steel (dry)", "0.74", "0.57"],
  ["Aluminium on steel", "0.61", "0.47"],
  ["Copper on steel", "0.53", "0.36"],
  ["Wood on wood", "0.25 – 0.50", "0.20"],
  ["Glass on glass", "0.94", "0.40"],
  ["Rubber on dry concrete", "1.0", "0.80"],
  ["Ice on ice", "0.10", "0.03"],
  ["Teflon on Teflon", "0.04", "0.04"],
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Friction Calculator",
    url: SITE.url,
    description: SITE.description,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function HomePage() {
  return (
    <>
      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}

      <section className="border-b border-slate-200 bg-gradient-to-b from-indigo-50 to-slate-50">
        <div className="mx-auto max-w-5xl px-4 pb-10 pt-12 text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">Friction Calculator</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Use this free <strong>friction calculator</strong> to find friction force, the coefficient of
            friction or the normal force in seconds. It also handles inclined planes, so you can check
            whether an object will slide.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4">
        <div className="-mt-6">
          <FrictionCalculator />
        </div>
      </div>

      <article className="mx-auto mt-14 max-w-3xl space-y-12 px-4 leading-relaxed text-slate-700">
        <section>
          <h2 className="text-2xl font-bold">What is friction?</h2>
          <p className="mt-3">
            Friction is the force that resists the relative motion of two surfaces in contact. It is why a
            book stays on a tilted desk, why car brakes work, and why it is hard to push a heavy box across
            a rough floor. Friction always acts opposite to the direction of motion, or opposite to the
            direction the object would move if it were free to.
          </p>
          <p className="mt-3">
            Our friction calculator uses the classical Coulomb friction model, which is accurate enough for
            school physics, engineering estimates and everyday problems involving dry sliding surfaces.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Friction formulas used by the calculator</h2>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-mono text-lg text-indigo-700">F = μ × N</p>
              <p className="mt-1 text-sm">
                Friction force equals the coefficient of friction multiplied by the normal force.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-mono text-lg text-indigo-700">μ = F ÷ N</p>
              <p className="mt-1 text-sm">Rearranged to find the coefficient of friction.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-mono text-lg text-indigo-700">N = m × g × cos θ</p>
              <p className="mt-1 text-sm">
                Normal force of a mass m on a slope of angle θ (use θ = 0° for a flat surface), with g =
                9.80665 m/s².
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold">How to use this friction calculator</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-6">
            <li>Choose what you want to find: friction force, coefficient of friction, normal force or inclined plane.</li>
            <li>Enter the known values. Use newtons for forces, kilograms for mass and degrees for angles.</li>
            <li>Read the result instantly. No button press is needed because the answer updates as you type.</li>
            <li>For an inclined plane, check the extra results: critical angle, force down the slope and acceleration.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Worked friction examples</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Example 1: Friction force on a flat floor</h3>
              <p className="mt-1">
                A 10 kg box rests on a floor where μ = 0.4. The normal force is N = 10 × 9.81 = 98.1 N, so
                the friction force is F = 0.4 × 98.1 ≈ <strong>39.2 N</strong>.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Example 2: Finding the coefficient of friction</h3>
              <p className="mt-1">
                A force of 50 N is just enough to keep a 100 N normal-force block sliding. Then μ = 50 ÷ 100 ={" "}
                <strong>0.5</strong>.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Example 3: Block on a 30° incline</h3>
              <p className="mt-1">
                A 10 kg block sits on a 30° slope with μ = 0.5. N = 10 × 9.81 × cos 30° ≈ 84.9 N, so the
                maximum friction is about 42.5 N. The force pulling it down the slope is 10 × 9.81 × sin 30° ≈
                49.0 N. Because 49.0 N is greater than 42.5 N, the block slides, with a net force of about 6.6 N.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Coefficient of friction table</h2>
          <p className="mt-3">
            Typical approximate values for dry surfaces. Real values vary with roughness, cleanliness,
            temperature and lubrication, so treat them as starting points.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Approximate coefficients of static and kinetic friction</caption>
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th scope="col" className="px-4 py-3">Material pair</th>
                  <th scope="col" className="px-4 py-3">Static (μs)</th>
                  <th scope="col" className="px-4 py-3">Kinetic (μk)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {MATERIALS.map(([name, s, k]) => (
                  <tr key={name}>
                    <th scope="row" className="px-4 py-3 font-medium text-slate-900">{name}</th>
                    <td className="px-4 py-3">{s}</td>
                    <td className="px-4 py-3">{k}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Static vs kinetic friction</h2>
          <p className="mt-3">
            <strong>Static friction</strong> keeps an object at rest. It adjusts up to a maximum value of μs × N.
            Once you push harder than that, the object starts to move and <strong>kinetic friction</strong> takes
            over with the smaller value μk × N. To use this friction calculator for either type, simply enter
            the matching coefficient.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Frequently asked questions</h2>
          <div className="mt-4 space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group rounded-xl border border-slate-200 bg-white p-4">
                <summary className="cursor-pointer list-none font-semibold text-slate-900 marker:hidden">
                  <span className="mr-2 text-indigo-600 group-open:hidden">+</span>
                  <span className="mr-2 hidden text-indigo-600 group-open:inline">−</span>
                  {f.q}
                </summary>
                <p className="mt-2 text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-indigo-600 p-6 text-center text-white">
          <h2 className="text-xl font-bold text-white">Have a suggestion for the friction calculator?</h2>
          <p className="mt-2 text-indigo-100">
            Learn more <Link href="/about" className="underline">about this project</Link> or{" "}
            <Link href="/contact" className="underline">get in touch</Link>.
          </p>
        </section>
      </article>
    </>
  );
}
