import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { JsonLd, breadcrumbSchema, buildMetadata, localBusinessSchema } from "../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact FDR Rentals | Face Down Recovery Equipment Dallas-Fort Worth",
  description:
    "Contact Face Down Recovery Rentals to reserve vitrectomy recovery equipment, face down chair rentals, and recovery support equipment in Dallas-Fort Worth.",
  path: "/contact",
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

function Field({
  label,
  name,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-serif text-base text-neutral-800">
        {label} {required ? <span className="text-xs text-neutral-500">(required)</span> : null}
      </span>
      <input
        className="mt-2 h-11 w-full border border-neutral-400 px-3 text-base outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
        name={name}
        type={type}
        required={required}
      />
    </label>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          localBusinessSchema(),
        ]}
      />
      <SiteHeader contactStyle="outline" />

      <section className="px-5 py-12 sm:px-8 lg:py-16">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
          <div>
            <h1 className="text-center font-serif text-3xl font-bold lg:text-left">Get in Touch</h1>
            <form
              action="https://formspree.io/f/mrevgnlw"
              method="POST"
              className="mt-8 space-y-5"
            >
              <input type="hidden" name="_subject" value="New Face Down Recovery Rentals inquiry" />
              <div>
                <p className="font-serif text-base text-neutral-800">Name</p>
                <div className="mt-2 grid gap-4 sm:grid-cols-2">
                  <Field label="First Name" name="first_name" />
                  <Field label="Last Name" name="last_name" />
                </div>
              </div>
              <Field label="Email" name="email" type="email" />
              <Field label="Phone number" name="phone" type="tel" />
              <label className="block">
                <span className="font-serif text-base text-neutral-800">
                  Message <span className="text-xs text-neutral-500">(required)</span>
                </span>
                <textarea
                  className="mt-2 min-h-36 w-full border border-neutral-400 px-3 py-2 text-base outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                  name="message"
                  required
                />
              </label>
              <div>
                <p className="font-serif text-base text-neutral-800">SMS Consent</p>
                <label className="mt-3 flex gap-3 text-xs leading-5 text-neutral-700">
                  <input className="mt-1 size-4 shrink-0" name="sms_consent" type="checkbox" value="yes" />
                  <span>
                    I agree to receive messages from Face Down Recovery Rentals regarding booking updates, delivery
                    coordination, and customer support. Message and data rates may apply. Reply STOP to opt out.
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="bg-neutral-950 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition hover:bg-neutral-800"
              >
                Submit
              </button>
            </form>
          </div>

          <aside className="text-center font-serif text-lg leading-8 text-neutral-800 lg:pt-20">
            <p className="font-sans text-sm font-black uppercase tracking-[0.18em] text-neutral-900">Contact Us:</p>
            <a className="mt-2 block text-xl font-bold text-teal-600" href="tel:+14693001867">
              (469) 300-1867
            </a>
            <p className="mt-8 font-sans text-sm font-black uppercase tracking-[0.18em] text-neutral-900">
              Business Hours:
            </p>
            <p className="mt-2">Monday - Sunday: 9am to 9pm CT</p>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
