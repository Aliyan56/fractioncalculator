"use client";

import { useMemo, useState } from "react";

type Mode = "force" | "coefficient" | "normal" | "incline";

const G = 9.80665;

const MODES: { id: Mode; label: string; formula: string }[] = [
  { id: "force", label: "Friction force", formula: "F = μ × N" },
  { id: "coefficient", label: "Coefficient (μ)", formula: "μ = F ÷ N" },
  { id: "normal", label: "Normal force", formula: "N = F ÷ μ" },
  { id: "incline", label: "Inclined plane", formula: "F = μ × m × g × cos θ" },
];

type Result = { label: string; value: string; unit?: string; main?: boolean };

const toNum = (s: string) => (s.trim() === "" ? NaN : Number(s));

function fmt(n: number): string {
  if (!Number.isFinite(n)) return "—";
  if (n === 0) return "0";
  const abs = Math.abs(n);
  if (abs >= 1e7 || abs < 1e-4) return n.toExponential(4);
  return parseFloat(n.toPrecision(6)).toString();
}

function Field({
  id,
  label,
  unit,
  value,
  onChange,
  hint,
}: {
  id: string;
  label: string;
  unit: string;
  value: string;
  onChange: (v: string) => void;
  hint?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <div className="flex overflow-hidden rounded-lg border border-slate-300 bg-white focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          step="any"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2.5 text-slate-900 outline-none"
          placeholder="0"
        />
        <span className="flex items-center bg-slate-100 px-3 text-sm text-slate-600">{unit}</span>
      </div>
      {hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
    </div>
  );
}

export default function FrictionCalculator() {
  const [mode, setMode] = useState<Mode>("force");
  const [mu, setMu] = useState("0.5");
  const [normal, setNormal] = useState("100");
  const [force, setForce] = useState("50");
  const [mass, setMass] = useState("10");
  const [angle, setAngle] = useState("30");

  const { results, error } = useMemo(() => {
    const m = toNum(mu);
    const N = toNum(normal);
    const F = toNum(force);
    const mass_ = toNum(mass);
    const theta = toNum(angle);

    const out: Result[] = [];
    let err = "";

    if (mode === "force") {
      if (!Number.isFinite(m) || !Number.isFinite(N)) err = "Enter the coefficient of friction and the normal force.";
      else if (m < 0 || N < 0) err = "Values cannot be negative.";
      else out.push({ label: "Friction force (F)", value: fmt(m * N), unit: "N", main: true });
    }

    if (mode === "coefficient") {
      if (!Number.isFinite(F) || !Number.isFinite(N)) err = "Enter the friction force and the normal force.";
      else if (N <= 0) err = "Normal force must be greater than zero.";
      else if (F < 0) err = "Friction force cannot be negative.";
      else out.push({ label: "Coefficient of friction (μ)", value: fmt(F / N), main: true });
    }

    if (mode === "normal") {
      if (!Number.isFinite(F) || !Number.isFinite(m)) err = "Enter the friction force and the coefficient of friction.";
      else if (m <= 0) err = "Coefficient of friction must be greater than zero.";
      else if (F < 0) err = "Friction force cannot be negative.";
      else out.push({ label: "Normal force (N)", value: fmt(F / m), unit: "N", main: true });
    }

    if (mode === "incline") {
      if (!Number.isFinite(m) || !Number.isFinite(mass_) || !Number.isFinite(theta))
        err = "Enter mass, incline angle and coefficient of friction.";
      else if (m < 0 || mass_ <= 0) err = "Mass must be positive and μ cannot be negative.";
      else if (theta < 0 || theta >= 90) err = "Angle must be between 0° and less than 90°.";
      else {
        const rad = (theta * Math.PI) / 180;
        const weight = mass_ * G;
        const N_ = weight * Math.cos(rad);
        const parallel = weight * Math.sin(rad);
        const fMax = m * N_;
        const slides = parallel > fMax;
        out.push({ label: "Friction force (F = μN)", value: fmt(fMax), unit: "N", main: true });
        out.push({ label: "Normal force (N = mg cos θ)", value: fmt(N_), unit: "N" });
        out.push({ label: "Force down the slope (mg sin θ)", value: fmt(parallel), unit: "N" });
        out.push({ label: "Critical angle (tan⁻¹ μ)", value: fmt((Math.atan(m) * 180) / Math.PI), unit: "°" });
        out.push({
          label: "Will the object slide?",
          value: slides ? "Yes – it slides" : "No – friction holds it",
        });
        if (slides) out.push({ label: "Net force down the slope", value: fmt(parallel - fMax), unit: "N" });
        if (slides) out.push({ label: "Acceleration", value: fmt((parallel - fMax) / mass_), unit: "m/s²" });
      }
    }

    return { results: out, error: err };
  }, [mode, mu, normal, force, mass, angle]);

  const reset = () => {
    setMu("");
    setNormal("");
    setForce("");
    setMass("");
    setAngle("");
  };

  const current = MODES.find((x) => x.id === mode)!;

  return (
    <section
      id="calculator"
      aria-label="Friction calculator"
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
    >
      <div role="tablist" aria-label="Calculation type" className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {MODES.map((m) => (
          <button
            key={m.id}
            role="tab"
            aria-selected={mode === m.id}
            onClick={() => setMode(m.id)}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
              mode === m.id
                ? "bg-indigo-600 text-white shadow"
                : "bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <p className="mt-4 rounded-lg bg-indigo-50 px-4 py-2 text-center font-mono text-sm text-indigo-800">
        {current.formula}
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {(mode === "force" || mode === "normal" || mode === "incline") && (
          <Field
            id="mu"
            label="Coefficient of friction (μ)"
            unit="μ"
            value={mu}
            onChange={setMu}
            hint="e.g. 0.5 for wood on wood. See the table below."
          />
        )}
        {(mode === "force" || mode === "coefficient") && (
          <Field id="normal" label="Normal force (N)" unit="N" value={normal} onChange={setNormal} hint="On a flat surface N = mass × 9.81." />
        )}
        {(mode === "coefficient" || mode === "normal") && (
          <Field id="force" label="Friction force (F)" unit="N" value={force} onChange={setForce} />
        )}
        {mode === "incline" && (
          <>
            <Field id="mass" label="Mass (m)" unit="kg" value={mass} onChange={setMass} />
            <Field id="angle" label="Incline angle (θ)" unit="°" value={angle} onChange={setAngle} hint="Use 0° for a flat surface." />
          </>
        )}
      </div>

      <div aria-live="polite" className="mt-6">
        {error ? (
          <p className="rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-800">{error}</p>
        ) : (
          <dl className="divide-y divide-slate-100 overflow-hidden rounded-xl border border-slate-200">
            {results.map((r) => (
              <div
                key={r.label}
                className={`flex items-center justify-between gap-4 px-4 py-3 ${r.main ? "bg-indigo-50" : "bg-white"}`}
              >
                <dt className="text-sm text-slate-600">{r.label}</dt>
                <dd className={`text-right font-semibold ${r.main ? "text-xl text-indigo-700" : "text-slate-900"}`}>
                  {r.value}
                  {r.unit && <span className="ml-1 text-sm font-normal text-slate-500">{r.unit}</span>}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      <button
        onClick={reset}
        className="mt-4 text-sm font-medium text-slate-500 underline-offset-2 hover:text-indigo-700 hover:underline"
      >
        Clear all fields
      </button>
    </section>
  );
}
