import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Logo Concepts | Vitrectomy Healing",
  description: "Navbar-size logo concept previews for Vitrectomy Healing.",
  path: "/logo-concepts",
  noIndex: true,
});

const navItems = ["Home", "Prices", "Equipment", "Vitrectomy Recovery", "FAQs"];

function ConceptOne() {
  return (
    <div className="flex items-center gap-3">
      <svg className="h-10 w-12" viewBox="0 0 72 60" aria-hidden="true">
        <path
          d="M8 30c8-11 17-16 28-16s20 5 28 16c-8 11-17 16-28 16S16 41 8 30Z"
          style={{ fill: "none", stroke: "#14b8a6", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 4 }}
        />
        <circle cx="36" cy="30" r="10" style={{ fill: "none", stroke: "#ffffff", strokeWidth: 4 }} />
        <circle cx="36" cy="30" r="4" style={{ fill: "#14b8a6", stroke: "none" }} />
        <path
          d="M18 17c10-8 25-10 38-2M16 43c11 7 26 8 39 1"
          style={{ fill: "none", stroke: "#14b8a6", strokeLinecap: "round", strokeOpacity: 0.55, strokeWidth: 2.5 }}
        />
      </svg>
      <span className="leading-none">
        <span className="block text-xl font-black uppercase tracking-[0.18em] text-white">Vitrectomy</span>
        <span className="mt-1 block text-sm font-black uppercase tracking-[0.34em] text-teal-300">
          Healing
        </span>
      </span>
    </div>
  );
}

function ConceptTwo() {
  return (
    <div className="flex items-center gap-3">
      <svg className="h-10 w-12" viewBox="0 0 72 60" aria-hidden="true">
        <circle cx="36" cy="30" r="21" style={{ fill: "none", stroke: "#14b8a6", strokeWidth: 4 }} />
        <path
          d="M15 30c6-8 13-12 21-12s15 4 21 12c-6 8-13 12-21 12s-15-4-21-12Z"
          style={{ fill: "none", stroke: "#ffffff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 3.5 }}
        />
        <circle cx="36" cy="30" r="6" style={{ fill: "#14b8a6", stroke: "#14b8a6", strokeWidth: 2 }} />
        <path
          d="M36 9v7M36 44v7M15 30H8M64 30h-7"
          style={{ fill: "none", stroke: "#14b8a6", strokeLinecap: "round", strokeWidth: 2.5 }}
        />
      </svg>
      <span className="leading-none">
        <span className="block text-xl font-black uppercase tracking-[0.2em] text-white">VH</span>
        <span className="mt-1 block text-sm font-black uppercase tracking-[0.26em] text-teal-300">
          Recovery Equipment
        </span>
      </span>
    </div>
  );
}

function ConceptThree() {
  return (
    <div className="flex items-center gap-3">
      <svg className="h-10 w-12" viewBox="0 0 72 60" aria-hidden="true">
        <path
          d="M36 8c11 5 18 10 23 17-2 14-10 24-23 29-13-5-21-15-23-29 5-7 12-12 23-17Z"
          style={{ fill: "none", stroke: "#14b8a6", strokeLinejoin: "round", strokeWidth: 4 }}
        />
        <path
          d="M17 29c6-7 12-10 19-10s13 3 19 10c-6 7-12 10-19 10s-13-3-19-10Z"
          style={{ fill: "none", stroke: "#ffffff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 3.5 }}
        />
        <circle cx="36" cy="29" r="5.5" style={{ fill: "#14b8a6", stroke: "none" }} />
        <path
          d="M47 43c-3 3-7 5-11 7-4-2-8-4-11-7"
          style={{ fill: "none", stroke: "#14b8a6", strokeLinecap: "round", strokeWidth: 2.5 }}
        />
      </svg>
      <span className="leading-none">
        <span className="block text-xl font-black uppercase tracking-[0.18em] text-white">Vitrectomy</span>
        <span className="mt-1 block text-sm font-black uppercase tracking-[0.34em] text-teal-300">
          Healing
        </span>
      </span>
    </div>
  );
}

const concepts = [
  { name: "Concept 1: Retina Orbit", logo: <ConceptOne /> },
  { name: "Concept 2: Clinical Iris", logo: <ConceptTwo /> },
  { name: "Concept 3: Retina Shield", logo: <ConceptThree /> },
];

export default function LogoConceptsPage() {
  return (
    <main className="min-h-screen bg-neutral-100 px-5 py-10 text-neutral-950 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-teal-700">Brand Preview</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight">Navbar Logo Concepts</h1>
          <p className="mt-3 max-w-2xl text-lg leading-8 text-neutral-700">
            Each option is shown at real navbar size with the same black, white, and teal palette used on the site.
          </p>
        </div>

        <div className="space-y-8">
          {concepts.map((concept) => (
            <section key={concept.name}>
              <h2 className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-neutral-700">{concept.name}</h2>
              <div className="bg-neutral-950 text-white">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
                  {concept.logo}
                  <nav className="hidden items-center gap-7 text-xs font-bold uppercase tracking-[0.22em] text-white/80 lg:flex">
                    {navItems.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </nav>
                  <span className="hidden rounded-full bg-teal-400 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-neutral-950 lg:inline-flex">
                    Contact
                  </span>
                </div>
              </div>
            </section>
          ))}
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex bg-neutral-950 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white"
        >
          Back To Home
        </Link>
      </div>
    </main>
  );
}
