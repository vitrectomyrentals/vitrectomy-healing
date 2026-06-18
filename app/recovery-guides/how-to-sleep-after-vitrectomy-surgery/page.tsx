import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { JsonLd, absoluteUrl, breadcrumbSchema, buildMetadata, contactEmail, displayPhoneNumber, phoneNumber, siteName, siteUrl } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How to Sleep After Vitrectomy Surgery | Face Down Recovery Guide",
  description:
    "Learn how to sleep after vitrectomy surgery, why face down positioning matters, and how recovery equipment can help Canadian patients stay more comfortable.",
  path: "/recovery-guides/how-to-sleep-after-vitrectomy-surgery",
  type: "article",
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

const positionTips = [
  "the number of hours each day you should stay positioned",
  "how many days or weeks your positioning plan should continue",
  "which sleeping positions, including side sleeping, are acceptable for your case",
];

const comfortTips = [
  "resting at a slight incline if your surgeon allows it",
  "using purpose-built face-down cushions or supports",
  "rotating between approved positions when your care team says it is safe",
];

const challenges = [
  "stiffness through the neck",
  "tightness in the shoulders",
  "soreness in the lower back",
  "difficulty reading, eating, or watching TV while positioned",
  "waking often or struggling to settle overnight",
];

const equipment = [
  "face-down recovery chairs for daytime sitting",
  "a face-down bed or table-style sleeping support",
  "a two-way mirror for TV, conversation, and basic visibility",
  "portable seated supports for use at a table, desk, or while traveling locally",
];

const recoveryTips = [
  "set up your main recovery space before your surgery date",
  "place eye drops, medications, water, chargers, and simple snacks within reach",
  "use supportive padding to reduce pressure on the neck, shoulders, and chest",
  "take only the breaks or position changes your surgeon has approved",
  "keep bedtime and wake-up routines as consistent as possible",
];

export default function SleepAfterVitrectomyArticlePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Sleep After Vitrectomy Surgery",
    description:
      "Sleeping and positioning guidance for vitrectomy surgery recovery, including face down recovery equipment options.",
    url: absoluteUrl("/recovery-guides/how-to-sleep-after-vitrectomy-surgery"),
    mainEntityOfPage: absoluteUrl("/recovery-guides/how-to-sleep-after-vitrectomy-surgery"),
    author: {
      "@type": "Organization",
      name: siteName,
      url: absoluteUrl(),
    },
    publisher: {
      "@id": `${siteUrl}/#localbusiness`,
    },
    about: [
      "vitrectomy recovery",
      "face down positioning",
      "face down recovery equipment",
      "vitrectomy equipment rental",
    ],
  };

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Recovery Guides", path: "/recovery-guides" },
            {
              name: "How to Sleep After Vitrectomy Surgery",
              path: "/recovery-guides/how-to-sleep-after-vitrectomy-surgery",
            },
          ]),
          articleSchema,
        ]}
      />
      <SiteHeader contactStyle="outline" />

      <article className="px-5 py-10 sm:px-8 lg:py-14">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/recovery-guides"
            className="text-xs font-black uppercase tracking-[0.24em] text-teal-700 transition hover:text-teal-600"
          >
            Recovery Guides
          </Link>

          <header className="mt-5 border-b border-neutral-200 pb-8">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-teal-700">Article #1</p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              How to Sleep After Vitrectomy Surgery
            </h1>
          </header>

          <div className="mt-8 space-y-8 font-serif text-lg leading-8 text-neutral-800">
            <p>
              Getting comfortable at night after vitrectomy surgery can be harder than many patients expect. If your
              surgeon has asked you to stay face down, even ordinary rest can feel unfamiliar during the first stage of
              healing.
            </p>
            <p>
              With the right setup, however, sleeping and resting face down can become much more practical. Supportive
              equipment helps reduce strain so you can focus on following your surgeon&apos;s recovery instructions.
            </p>

            <section className="space-y-4">
              <h2 className="font-sans text-2xl font-black uppercase tracking-[0.08em] text-[#081936]">
                Why Face Down Positioning Matters
              </h2>
              <p>
                After a vitrectomy, macular hole repair, or related retina procedure, your surgeon may place a gas
                bubble inside the eye. Face-down positioning can help keep that bubble where it needs to be while the
                retina or macula heals.
              </p>
              <p>
                Positioning instructions are not one-size-fits-all. Your surgeon&apos;s directions for sleep posture,
                daily positioning time, breaks, and activity limits should always come before general recovery advice.
              </p>
              <p>Your care team may give specific guidance on:</p>
              <ul className="list-disc space-y-2 pl-6">
                {positionTips.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-sans text-2xl font-black uppercase tracking-[0.08em] text-[#081936]">
                Best Sleeping Positions After Vitrectomy Surgery
              </h2>
              <p>
                Many patients are told to sleep face down for part of their recovery. It can feel awkward at first, but
                a stable support system can make the position easier on your neck, shoulders, and back.
              </p>
              <p>Depending on your surgeon&apos;s instructions, comfort may improve with:</p>
              <ul className="list-disc space-y-2 pl-6">
                {comfortTips.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Sleeping flat on your back is often restricted while a gas bubble is present, because it can move the
                bubble away from the area it is meant to support.
              </p>
              <p>
                If you are unsure whether a position is allowed, check with your surgeon or clinic before trying it.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-sans text-2xl font-black uppercase tracking-[0.08em] text-[#081936]">
                Common Challenges During Recovery
              </h2>
              <p>
                The hardest part is often the repetition: staying positioned hour after hour can put stress on the body.
                Patients commonly report:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                {challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Standard pillows and improvised setups may work briefly, but they often shift, compress, or create
                pressure points during longer rest periods.
              </p>
              <p>For many people, the adjustment period is most noticeable during the first several days.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-sans text-2xl font-black uppercase tracking-[0.08em] text-[#081936]">
                Equipment That Can Make Recovery Easier
              </h2>
              <p>
                Face-down recovery equipment is built to support the head, chest, and upper body while keeping the face
                clear and the posture more stable.
              </p>
              <p>A complete recovery setup may include:</p>
              <ul className="list-disc space-y-2 pl-6">
                {equipment.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                The purpose is not to replace medical instructions. It is to make those instructions easier to follow by
                reducing avoidable discomfort.
              </p>
              <p>
                Vitrectomy Healing provides sanitized face-down recovery equipment for Canadian patients recovering from
                vitrectomy and retina surgery. Delivery, setup, and pickup options help reduce the amount of lifting,
                moving, and planning required around surgery day.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-sans text-2xl font-black uppercase tracking-[0.08em] text-[#081936]">
                Tips for a More Comfortable Recovery
              </h2>
              <p>A little planning before surgery can make the recovery period smoother:</p>
              <ul className="list-disc space-y-2 pl-6">
                {recoveryTips.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Give yourself time to adapt. Face-down recovery can be tiring at first, but the right arrangement often
                makes each day more manageable.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-sans text-2xl font-black uppercase tracking-[0.08em] text-[#081936]">
                Final Thoughts
              </h2>
              <p>
                Recovery after vitrectomy can be demanding, particularly when strict face-down positioning is part of
                your surgeon&apos;s plan. Preparing your space and support equipment ahead of time can reduce stress once
                you are home.
              </p>
              <p>
                For patients in Canadian service areas, Vitrectomy Healing offers premium face-down recovery equipment
                rentals with support for delivery, setup, and pickup.
              </p>
            </section>

            <div className="border-t border-neutral-200 pt-8">
              <Link
                href="/contact"
                className="inline-flex bg-neutral-950 px-7 py-4 font-sans text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800"
              >
                Contact Vitrectomy Healing
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
