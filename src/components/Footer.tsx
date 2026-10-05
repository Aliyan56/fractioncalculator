import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="font-semibold text-slate-900">Friction Calculator</p>
            <p className="mt-2 text-sm text-slate-600">
              A free online friction calculator for students, engineers and anyone working with
              forces, surfaces and motion.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="space-y-2 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-600 hover:text-indigo-700">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-8 border-t border-slate-100 pt-4 text-xs text-slate-500">
          © {new Date().getFullYear()} {SITE.name}. Results are for educational and estimation
          purposes only.
        </p>
      </div>
    </footer>
  );
}
