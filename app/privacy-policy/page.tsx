import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { JsonLd, breadcrumbSchema, buildMetadata, contactEmail, displayPhoneNumber, phoneNumber } from "../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy & SMS Terms | Vitrectomy Healing",
  description:
    "Privacy Policy and SMS Terms of Service for Vitrectomy Healing, including customer information use and text messaging consent terms.",
  path: "/privacy-policy",
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
          <a className="block underline decoration-white/15 underline-offset-4" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
          <a className="block underline decoration-white/15 underline-offset-4" href={`tel:${phoneNumber}`}>
            {displayPhoneNumber}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <SiteHeader contactStyle="outline" />

      <section className="bg-neutral-100 px-5 py-10 sm:px-8 lg:py-14">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-teal-700">Vitrectomy Healing</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#081936] sm:text-6xl">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:py-14">
        <div className="mx-auto max-w-4xl space-y-12 font-sans text-lg leading-8 text-neutral-900">
          <article>
            <h2 className="text-3xl font-black tracking-tight text-neutral-950">Privacy Policy</h2>
            <div className="mt-6 space-y-5">
              <p>
                Vitrectomy Healing respects your privacy. We collect information
                such as your name, phone number, email address, delivery address, and rental details solely for the
                purpose of providing rental services, coordinating deliveries and pickups, and communicating with
                customers.
              </p>
              <p>
                No mobile information will be shared with third parties or affiliates for marketing or promotional
                purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.
              </p>
              <p>
                We may share information with trusted service providers only as necessary to operate our business,
                process payments, coordinate deliveries, or provide customer support.
              </p>
              <p>
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a className="text-teal-700 underline underline-offset-4" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>{" "}
                or{" "}
                <a className="text-teal-700 underline underline-offset-4" href={`tel:${phoneNumber}`}>
                  {displayPhoneNumber}
                </a>
                .
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-3xl font-black tracking-tight text-neutral-950">SMS Terms of Service</h2>
            <div className="mt-6 space-y-5">
              <p>
                By opting into SMS communications from Vitrectomy Healing, you agree to receive text messages
                related to rental reservations, delivery scheduling, pickup coordination, customer support, and service
                updates.
              </p>
              <p>Message frequency varies. Message and data rates may apply.</p>
              <p>
                You may opt out at any time by replying STOP. For assistance, reply HELP or contact us at{" "}
                <a className="text-teal-700 underline underline-offset-4" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>{" "}
                or{" "}
                <a className="text-teal-700 underline underline-offset-4" href={`tel:${phoneNumber}`}>
                  {displayPhoneNumber}
                </a>
                .
              </p>
              <p>
                Consent to receive SMS messages is not a condition of purchase. Carriers are not liable for delayed or
                undelivered messages.
              </p>
              <p>Vitrectomy Healing reserves the right to update these terms at any time.</p>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
