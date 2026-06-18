import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { JsonLd, breadcrumbSchema, buildMetadata, contactEmail, displayPhoneNumber, phoneNumber } from "../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Vitrectomy Recovery Equipment Rental FAQs | Canada",
  description:
    "Answers to common questions about Canadian face down recovery equipment rental, delivery, setup, payment, insurance receipts, and retina surgery recovery support.",
  path: "/faqs",
});

const faqs = [
  {
    question: "How do I get my recovery equipment?",
    answer: [
      "We offer free delivery, set up, and pick up.",
      "We usually bring all equipment for the patient to try out. This lets the patient choose what works best, and we take back whatever they do not need.",
      "We can also deliver and set up a few days before surgery at no extra charge. This helps make sure everything is ready before the recovery period begins.",
      "Curbside pickup is also available if the patient prefers to pick up the equipment.",
    ],
  },
  {
    question: "Will my insurance cover the rental costs?",
    answer: [
      "Coverage varies by insurance company and plan. Some companies cover part of the cost of recovery equipment rentals.",
      "A receipt can be provided for submission to your health coverage provider for reimbursement. We encourage patients to request a prescription from their doctor as proof that the equipment is part of recovery.",
    ],
  },
  {
    question: "What if I notice a problem with my equipment?",
    answer: [
      "Please contact us if you notice any issues with your equipment. Do not use equipment until functionality and safety have been checked and cleared by one of our specialists.",
    ],
  },
  {
    question: "How may I pay for my rental?",
    answer: ["Payment can be made with cash, debit card, or credit card."],
  },
  {
    question: "What areas do you serve?",
    answer: [
      "Vitrectomy Healing serves Canadian patients across Alberta, Saskatchewan, Manitoba, British Columbia, and Ontario service areas.",
      "Please call to confirm delivery timing and availability for your city before surgery.",
    ],
  },
];

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

export default function FaqsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.join(" "),
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQs", path: "/faqs" },
          ]),
          faqSchema,
        ]}
      />
      <SiteHeader contactStyle="outline" />

      <section className="overflow-hidden bg-slate-100">
        <div className="relative mx-auto flex min-h-44 max-w-7xl items-center justify-center px-5 py-10 sm:px-8 lg:min-h-56">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#dbe4ee,#f8fafc)]" />
          <h1 className="relative text-center text-5xl font-black uppercase tracking-[0.18em] text-[#081936] sm:text-6xl">
            FAQs
          </h1>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-8 font-serif text-base leading-8 text-neutral-800 sm:text-lg">
            {faqs.map((faq) => (
              <section key={faq.question}>
                <h2 className="font-sans text-base font-black text-neutral-800">{"\u2022"} {faq.question}</h2>
                <div className="mt-2 space-y-4">
                  {faq.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-lg bg-neutral-50 p-6 text-center font-serif text-base leading-7 text-neutral-800">
            <p className="font-sans text-sm font-black uppercase tracking-[0.18em] text-neutral-900">
              Service Areas
            </p>
            <p className="mt-3">
              Calgary, Edmonton, Red Deer, Airdrie, Saskatoon, Regina, Winnipeg, Vancouver, Surrey, Richmond,
              New Westminster, Victoria, Toronto, Ottawa, Hamilton, Burlington, Oakville, Milton, Mississauga,
              Brantford, Cambridge, and Windsor.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
