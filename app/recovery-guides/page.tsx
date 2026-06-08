import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { JsonLd, absoluteUrl, breadcrumbSchema, buildMetadata } from "../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Recovery Guides for Vitrectomy Patients | FDR Rentals Dallas-Fort Worth",
  description:
    "Helpful recovery guides for vitrectomy and face down positioning patients in Dallas-Fort Worth, including sleep support and face down recovery equipment tips.",
  path: "/recovery-guides",
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

export default function RecoveryGuidesPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Recovery Guides",
    url: absoluteUrl("/recovery-guides"),
    about: "Vitrectomy recovery, face down positioning, and recovery equipment guidance",
    hasPart: [
      {
        "@type": "Article",
        headline: "How to Sleep After Vitrectomy Surgery",
        url: absoluteUrl("/recovery-guides/how-to-sleep-after-vitrectomy-surgery"),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Recovery Guides", path: "/recovery-guides" },
          ]),
          collectionSchema,
        ]}
      />
      <SiteHeader contactStyle="outline" />

      <section className="bg-neutral-100 px-5 py-9 sm:px-8 lg:py-12">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-teal-700">Recovery Guides</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight tracking-tight text-[#081936] sm:text-5xl lg:text-6xl">
            Helpful Articles for Face-Down Recovery
          </h1>
        </div>
      </section>

      <section className="px-5 py-8 sm:px-8 lg:py-12">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/recovery-guides/how-to-sleep-after-vitrectomy-surgery"
            className="group block max-w-xl border-l-4 border-teal-400 py-1 pl-5 transition hover:border-teal-500"
          >
            <p className="text-xs font-black uppercase tracking-[0.24em] text-teal-700">Article #1</p>
            <h2 className="mt-3 text-2xl font-black leading-tight text-[#081936] transition group-hover:text-teal-700 sm:text-3xl">
              How to Sleep After Vitrectomy Surgery
            </h2>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
