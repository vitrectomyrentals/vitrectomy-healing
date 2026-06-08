import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { JsonLd, absoluteUrl, breadcrumbSchema, buildMetadata } from "../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Vitrectomy Recovery Positioning Guide | Dallas-Fort Worth",
  description:
    "Learn about vitrectomy recovery positioning, face down recovery support, and equipment options for Dallas-Fort Worth retina surgery patients.",
  path: "/vitrectomy-recovery",
});

const careItems = [
  "Allow the eye to heal. Don’t do things that might cause you to move your head. This includes moving quickly, lifting anything heavy, or doing activities such as cleaning or gardening.",
  "If your doctor used an oil or gas bubble to hold the retina in place, keep your head in a certain position for most of the day and night for 1 to 3 weeks after the surgery. Make a plan for this part of your recovery, because it will be hard to do some daily activities. Your doctor will give you specific instructions.",
  "If your doctor used a gas bubble, avoid airplane travel until your doctor tells you it is safe. This is because the change in altitude may cause the gas bubble to expand and increase the pressure inside the eye.",
  "Your doctor will tell you if and when you can restart your medicines. He or she will also give you instructions about taking any new medicines.",
  "You can shower and wash your hair and face. But don’t get any soap in your eye. You may want to use a wash cloth to wash your face.",
];

const guideCards = [
  {
    title: "What is the purpose of a vitrectomy?",
    body: "A vitrectomy is a surgical procedure that removes the gel-like vitreous humor from the eye. It treats detached retinas, retinal tears, macular holes, vitreomacular tractions, and epiretinal membranes to improve or preserve vision.",
  },
  {
    title: "Why is posturing necessary after a vitrectomy?",
    body: "Posturing positions the gas bubble placed in your eye during surgery so it presses against the retina to seal retinal breaks or support the macula — critical for successful healing.",
  },
  {
    title: "How can you prepare for posturing after a vitrectomy?",
    body: "Rent specialized equipment before your surgery date so it’s ready at home. Arrange help for daily tasks, prepare your recovery space, and have your equipment delivered and set up in advance.",
  },
  {
    title: "What are the guidelines for daily activities?",
    body: "Face-down positioning is required during waking hours. Maintain the position for the prescribed duration, take short breaks every hour, and avoid lying on your back so the bubble stays correctly positioned.",
  },
  {
    title: "How long does positioning last?",
    body: "The duration varies for each patient — typically ranging from a few days to several weeks depending on your surgeon’s guidance and the nature of your procedure. Following your medical professional’s instructions precisely gives you the best chance of a full recovery.",
  },
  {
    title: "What equipment is needed?",
    body: "Recovery equipment typically includes both seated and sleeping options so you can alternate throughout the day. A face-down chair and portable seated support keep you comfortable while awake, while a face-down bed attachment and mattress support allow you to maintain the correct position while sleeping or lying down.",
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

function EyeIcon() {
  return (
    <svg className="size-6" viewBox="0 0 64 36" aria-hidden="true">
      <path d="M4 18c6.7-9 16-13.5 28-13.5S53.3 9 60 18c-6.7 9-16 13.5-28 13.5S10.7 27 4 18Z" />
      <circle cx="32" cy="18" r="7.5" />
      <circle cx="32" cy="18" r="2.6" fill="currentColor" />
    </svg>
  );
}

export default function VitrectomyRecoveryPage() {
  const guideSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Vitrectomy Recovery Positioning Guide",
    url: absoluteUrl("/vitrectomy-recovery"),
    about: [
      "vitrectomy recovery",
      "face down positioning",
      "retina surgery recovery",
      "vitrectomy recovery equipment",
    ],
    audience: {
      "@type": "MedicalAudience",
      audienceType: "Patients recovering from vitrectomy or retina surgery",
    },
    publisher: {
      "@id": "https://facedownrecoveryrentals.com/#localbusiness",
    },
  };

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Vitrectomy Recovery", path: "/vitrectomy-recovery" },
          ]),
          guideSchema,
        ]}
      />
      <SiteHeader contactStyle="outline" />

      <section className="overflow-hidden bg-neutral-100">
        <div className="relative mx-auto flex min-h-52 max-w-7xl items-center px-5 py-10 sm:px-8 lg:min-h-64 lg:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(20,184,166,0.25),transparent_28%),linear-gradient(90deg,#e5e7eb,#f8fafc_45%,#d7dee6)]" />
          <div className="absolute left-1/2 top-1/2 h-36 w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border-[18px] border-white/70 opacity-70" />
          <div className="relative max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-teal-700">Recovery Guide</p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight text-[#081936] sm:text-5xl lg:text-6xl">
              Vitrectomy Recovery
            </h1>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:py-14">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto max-w-xl">
            <Image
              src="/healing.webp"
              alt="Diagram showing incorrect and correct healing position after vitrectomy"
              width={900}
              height={520}
              quality={95}
              sizes="(min-width: 768px) 560px, 92vw"
              className="h-auto w-full"
              priority
            />
          </div>

          <article className="mx-auto mt-8 max-w-3xl font-serif text-base leading-8 text-neutral-800 sm:text-lg">
            <h2 className="text-center font-sans text-lg font-black uppercase tracking-wide text-neutral-800">
              What Is Vitrectomy
            </h2>
            <p className="mt-5">
              Vitrectomy surgery is a procedure used for the treatment of detached retinas, retinal tears, macular
              holes, vitreomacular tractions, and removal of epiretinal membranes.
            </p>
            <p className="mt-5">
              Following the procedure, your retina specialist may decide to place a gas or oil bubble in the eye to help
              hold the retina in place while it heals. You may be asked to maintain a face down position during the
              recovery period while the bubble is in place. The gas bubble needs to be kept in the correct place until a
              seal forms around the tear or detachment in the retina. Some patients may need to keep their head and eye
              in a face down position for approximately 90% of the day for the first 1 to 3 weeks after the surgery. You
              cannot lie on your back or the bubble will move to the front of the eye, press against the lens,
              potentially creating more problems.
            </p>
            <p className="mt-5">
              The face down recovery position required, can be quite strenuous on your neck, back and joints without
              proper support. Our equipment help patients comply with their recommended recovery protocol, while
              maintaining comfort and functionality.
            </p>
          </article>

          <article className="mx-auto mt-10 max-w-3xl">
            <h2 className="text-center text-lg font-black uppercase tracking-wide text-neutral-800">
              How To Care For Yourself At Home
            </h2>
            <ul className="mt-6 space-y-4 font-serif text-base leading-8 text-neutral-800 sm:text-lg">
              {careItems.map((item) => (
                <li key={item}>
                  <div className="flex gap-3">
                    <span className="mt-3 size-1.5 shrink-0 rounded-full bg-teal-500" />
                    <span>{item}</span>
                  </div>
                  {item.startsWith("If your doctor used an oil") ? (
                    <div className="ml-8 mt-3 flex gap-3">
                      <span className="mt-3 size-1.5 shrink-0 rounded-full border border-teal-500" />
                      <span>
                        Do not lie on your back, or the bubble will move to the front of the eye and press against the
                        lens instead of the retina.
                      </span>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center text-sm font-bold leading-7 text-neutral-700">
              Care instructions adapted under license by your healthcare professional. If you have questions about a
              medical condition or these instructions, always ask your healthcare professional. FDR Rentals LLC disclaims
              any warranty or liability for your use of this information.
            </p>
          </article>
        </div>
      </section>

      <section className="px-5 pb-14 sm:px-8">
        <div className="mx-auto max-w-5xl bg-neutral-900 px-5 py-10 text-white sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-black uppercase tracking-wide">Understanding Vitrectomy Recovery</h2>
            <p className="mt-3 font-serif text-sm leading-6 text-white/75">
              Learn the essential aspects of recovery and how proper positioning can support healing.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guideCards.map((card) => (
              <article key={card.title} className="rounded-md bg-white p-5 text-neutral-950">
                <div className="mb-5 grid size-10 place-items-center rounded-md bg-teal-100 text-teal-600">
                  <EyeIcon />
                </div>
                <h3 className="text-sm font-black leading-5 text-teal-600">{card.title}</h3>
                <p className="mt-3 font-serif text-sm leading-6 text-neutral-800">{card.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link
              href="/equipment"
              className="inline-flex bg-teal-400 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-neutral-950 transition hover:bg-teal-300"
            >
              View Equipment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
