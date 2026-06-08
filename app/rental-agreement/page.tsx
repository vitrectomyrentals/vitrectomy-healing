import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { buildMetadata } from "../lib/seo";
import { agreementBullets } from "./agreementTerms";
import { RentalAgreementForm } from "./RentalAgreementForm";

export const metadata: Metadata = buildMetadata({
  title: "Rental Agreement | Face Down Recovery Rentals",
  description: "Face Down Recovery Rentals rental agreement and electronic signature form.",
  path: "/rental-agreement",
  noIndex: true,
});

function Footer() {
  return (
    <footer className="bg-neutral-950 px-5 py-12 text-center text-white sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8">
        <nav className="flex flex-col gap-5 text-xs font-bold uppercase tracking-[0.26em] text-white/90 sm:flex-row">
          <Link href="/recovery-guides">Recovery Guides</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </nav>
        <div className="font-serif text-lg leading-8 text-white/45">
          <a className="block underline decoration-white/15 underline-offset-4" href="mailto:info@fdrrentals.com">
            info@fdrrentals.com
          </a>
          <a className="block underline decoration-white/15 underline-offset-4" href="tel:+14693001867">
            (469) 300-1867
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function RentalAgreementPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <SiteHeader contactStyle="outline" />

      <section className="bg-neutral-100 px-5 py-12 sm:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-teal-700">Face Down Recovery Rentals</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-6xl">
            Rental Agreement
          </h1>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="/Rental Agreement.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-neutral-950 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800"
            >
              Download / Print Agreement
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:py-14">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <article className="rounded-xl border border-neutral-200 bg-white p-5 shadow-xl shadow-neutral-950/5 sm:p-8">
            <h2 className="font-serif text-3xl font-bold text-neutral-950">Rental Terms and Conditions</h2>
            <ul className="mt-6 space-y-4 font-serif text-lg leading-8 text-neutral-800">
              {agreementBullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 text-teal-600">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <div>
            <h2 className="text-2xl font-black uppercase tracking-[0.12em] text-neutral-950">Submit Agreement</h2>
            <p className="mt-3 font-serif text-lg leading-7 text-neutral-700">
              Complete the required fields and submit your agreement electronically.
            </p>
            <div className="mt-6">
              <RentalAgreementForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
