import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { JsonLd, absoluteUrl, breadcrumbSchema, buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How to Sleep After Vitrectomy Surgery | Face Down Recovery Guide",
  description:
    "Learn how to sleep after vitrectomy surgery, why face down positioning matters, and how recovery equipment can help Dallas-Fort Worth patients stay more comfortable.",
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

const positionTips = [
  "how many hours per day positioning is required",
  "how long recovery positioning should continue",
  "whether side sleeping is allowed during recovery",
];

const comfortTips = [
  "sleeping slightly inclined",
  "using specialized face down support cushions",
  "alternating approved positions if permitted by their surgeon",
];

const challenges = [
  "neck stiffness",
  "shoulder tension",
  "lower back soreness",
  "difficulty eating, reading, or watching television comfortably",
  "trouble sleeping through the night",
];

const equipment = [
  "face down recovery chairs",
  "face down table/bed",
  "2-way mirror for watching TV or interacting with others",
  "portable seated support to use on desk/table or in the car",
];

const recoveryTips = [
  "prepare your recovery area before surgery day",
  "keep medications, water, chargers, and snacks nearby",
  "use supportive cushions to reduce neck and shoulder tension",
  "take approved movement breaks if permitted by your surgeon",
  "try to maintain a consistent sleep schedule during recovery",
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
      name: "Face Down Recovery Rentals",
      url: absoluteUrl(),
    },
    publisher: {
      "@id": "https://facedownrecoveryrentals.com/#localbusiness",
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
              Sleeping after vitrectomy surgery is often one of the most difficult parts of recovery, especially if your
              surgeon has instructed you to remain face down during healing. Many patients are surprised by how
              challenging the first few nights can feel when trying to stay comfortable for long periods of time.
            </p>
            <p>The good news is that the right positioning and support equipment can make recovery much more manageable.</p>

            <section className="space-y-4">
              <h2 className="font-sans text-2xl font-black uppercase tracking-[0.08em] text-[#081936]">
                Why Face Down Positioning Matters
              </h2>
              <p>
                After vitrectomy or macular hole surgery, many patients have a gas bubble placed inside the eye to help
                support healing. Face down positioning helps keep that bubble in the correct position while the retina or
                macula recovers.
              </p>
              <p>
                Every patient and procedure is different, so it is important to carefully follow the instructions
                provided by your surgeon regarding positioning, sleep posture, and recovery time. Your doctor&apos;s
                guidance should always take priority over general recovery information found online.
              </p>
              <p>Depending on your procedure, your surgeon may advise:</p>
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
                For many patients, sleeping face down is recommended during recovery. While it may feel awkward at first,
                proper support can significantly reduce strain on the neck, shoulders, and lower back.
              </p>
              <p>Some patients also find relief by:</p>
              <ul className="list-disc space-y-2 pl-6">
                {comfortTips.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                In most cases, sleeping flat on your back is discouraged while the gas bubble remains in the eye, since
                it may affect healing or place pressure in the wrong area.
              </p>
              <p>
                If you are unsure about which sleeping positions are safe for your recovery, it is always best to confirm
                directly with your surgeon or medical team.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-sans text-2xl font-black uppercase tracking-[0.08em] text-[#081936]">
                Common Challenges During Recovery
              </h2>
              <p>
                The biggest issue many patients experience is discomfort from maintaining positioning for extended
                periods of time. Common complaints include:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                {challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Many people initially try using regular pillows or improvised setups at home, but these often become
                uncomfortable very quickly.
              </p>
              <p>The first few days are usually the hardest while your body adjusts to the positioning requirements.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-sans text-2xl font-black uppercase tracking-[0.08em] text-[#081936]">
                Equipment That Can Make Recovery Easier
              </h2>
              <p>
                Specialized face down recovery equipment is designed to make positioning more comfortable and sustainable
                throughout the healing process.
              </p>
              <p>Depending on the patient&apos;s needs, this may include:</p>
              <ul className="list-disc space-y-2 pl-6">
                {equipment.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                The goal is simply to make recovery more manageable while reducing unnecessary physical strain during
                long periods of positioning.
              </p>
              <p>
                At FDR Rentals, we provide clean, sanitized face down recovery equipment delivered throughout
                Dallas-Fort Worth for vitrectomy and retina surgery patients. Equipment is delivered, set up, and picked
                up directly from your home to help simplify the recovery process.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-sans text-2xl font-black uppercase tracking-[0.08em] text-[#081936]">
                Tips for a More Comfortable Recovery
              </h2>
              <p>A few small adjustments can make a big difference during recovery:</p>
              <ul className="list-disc space-y-2 pl-6">
                {recoveryTips.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Most importantly, be patient with yourself during the process. Face down recovery can feel frustrating at
                first, but many patients gradually adapt once they find a setup that works for them.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-sans text-2xl font-black uppercase tracking-[0.08em] text-[#081936]">
                Final Thoughts
              </h2>
              <p>
                Vitrectomy recovery can be physically and mentally demanding, especially when face down positioning is
                required for several days or weeks. Having the right support system in place can make the process
                significantly more comfortable and help reduce unnecessary stress during healing.
              </p>
              <p>
                If you need face down recovery equipment delivered anywhere in Dallas-Fort Worth, FDR Rentals provides
                premium recovery equipment with delivery, setup, and pickup throughout DFW.
              </p>
            </section>

            <div className="border-t border-neutral-200 pt-8">
              <Link
                href="/contact"
                className="inline-flex bg-neutral-950 px-7 py-4 font-sans text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800"
              >
                Contact FDR Rentals
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
