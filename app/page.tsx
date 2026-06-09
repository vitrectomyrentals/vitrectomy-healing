import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";
import { JsonLd, buildMetadata, contactEmail, displayPhoneNumber, localBusinessSchema, phoneNumber, websiteSchema } from "./lib/seo";

export const metadata = buildMetadata({
  title: "Vitrectomy Recovery Equipment Rentals in Canada | Vitrectomy Healing",
  description:
    "Rent face-down vitrectomy recovery equipment in Canada. Vitrectomy Healing provides chairs, beds, mattress attachments, mirrors, delivery, setup, and pickup for retina surgery recovery.",
});

const packages = [
  {
    title: "Comfort Package",
    subtitle: "Complete seated and sleep support for face-down recovery",
    price: "$395",
    duration: "/ 1st Week",
    secondWeek: "2nd week: $200 + tax",
    ctaTheme: "dark",
    image: "/sleep1.webp",
    imageAlt: "Face down recovery bed included with the Comfort Package",
    imageClassName: "object-cover object-[center_45%]",
    orderClassName: "order-1 lg:order-none",
    features: [
      "2 Seated Devices (Face Down Chair & Portable Seated Support)",
      "2 Sleep Devices (Mattress Attachment & Face Down Bed)",
      "1 Mirror (Watch TV & interact with others)",
      "Headrest fitted sheets (1 per device)",
      "Delivery, Set Up & Pick Up (free within 30 km)",
    ],
  },
  {
    title: "Essential Support Package",
    subtitle: "Core face-down equipment for focused recovery",
    price: "$295",
    duration: "/ 1st Week",
    secondWeek: "2nd week: $150 + tax",
    ctaTheme: "teal",
    image: "/seated3.webp",
    imageAlt: "Face down chair included with the Essential Support Package",
    imageClassName: "object-cover object-[center_48%]",
    orderClassName: "order-2 lg:order-none",
    features: [
      "1 Seated Device (Face Down Chair or Portable Seated Support)",
      "1 Sleep Device (Mattress Attachment or Face Down Bed)",
      "1 Mirror (Watch TV & interact with others)",
      "Headrest fitted sheets (1 per device)",
    ],
    exclusions: ["Delivery, Set Up & Pick Up not included"],
  },
];

const heroFeatures = [
  "Canadian provider of retina surgery recovery equipment",
  "Delivered, set up, and picked up by trained support",
  "Comfortable seated and sleep options for face-down recovery",
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-white text-neutral-950">
      <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
      <SiteHeader />

      <section className="overflow-hidden bg-[#eee4e1]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 pb-8 pt-4 sm:px-8 sm:pb-12 sm:pt-6 lg:hidden">
          <div className="mx-auto max-w-xl text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-teal-700">
              Canada Vitrectomy Equipment
            </p>
            <h1 className="whitespace-nowrap text-[2.28rem] font-black leading-[0.92] tracking-tight text-[#081936] min-[420px]:text-[2.45rem] sm:text-5xl">
              Face Down Recovery Rentals
            </h1>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-teal-400" />
            <p className="mx-auto mt-4 max-w-lg text-pretty text-base leading-7 text-neutral-800 sm:text-lg">
              Premium face-down recovery equipment rentals with delivery, setup, and pickup across Canadian service areas.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-[2.05/1] overflow-hidden rounded-[1.5rem] bg-white shadow-2xl shadow-neutral-950/15 sm:aspect-[2.35/1]">
              <Image
                src="/sleep4.webp"
                alt="Patient using face down recovery bed rental equipment for vitrectomy recovery"
                fill
                priority
                quality={95}
                sizes="(max-width: 1023px) 92vw, 1px"
                className="object-cover object-[center_62%] sm:object-[center_58%]"
              />
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={`tel:${phoneNumber}`}
                className="rounded-full bg-teal-400 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.22em] text-white shadow-lg shadow-teal-700/20 transition hover:bg-teal-500"
              >
                Call Now: {displayPhoneNumber}
              </a>
              <Link
                href="/prices"
                className="rounded-full border border-neutral-950/15 bg-white/75 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-neutral-950 transition hover:bg-white"
              >
                View Prices
              </Link>
            </div>
            <div className="mt-5 rounded-2xl border border-teal-500/20 bg-neutral-950 px-5 py-5 text-left text-white shadow-xl shadow-neutral-950/10">
              <div className="grid gap-4 text-sm font-semibold leading-6">
                {heroFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border-2 border-teal-300 text-sm text-teal-300">
                      {"\u2713"}
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto hidden max-w-7xl px-10 pb-10 pt-5 lg:block">
          <div className="relative aspect-[2.7/1] overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-neutral-950/15">
            <Image
              src="/sleep4.webp"
              alt="Patient using face down recovery equipment rental setup in Canada"
              fill
              priority
              quality={95}
              sizes="(min-width: 1280px) 1180px, 92vw"
              className="object-cover object-center"
            />
          </div>

          <div className="mx-auto mt-5 max-w-5xl text-center">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.28em] text-teal-700">Canada Vitrectomy Equipment</p>
            <h1 className="text-balance text-6xl font-black leading-[0.92] tracking-tight text-[#081936] xl:text-7xl">
              Face Down Recovery Rentals
            </h1>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-teal-400" />
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-lg leading-8 text-neutral-800">
              Premium face-down recovery equipment rentals with delivery, setup, and pickup across Canadian service areas.
            </p>
            <div className="mt-5 flex justify-center gap-4">
              <a
                href={`tel:${phoneNumber}`}
                className="rounded-full bg-teal-400 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-white shadow-lg shadow-teal-700/20 transition hover:bg-teal-500"
              >
                Call Now: {displayPhoneNumber}
              </a>
              <Link
                href="/prices"
                className="rounded-full border border-neutral-950/15 bg-white/70 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-neutral-950 transition hover:bg-white"
              >
                View Prices
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-teal-500/20 bg-neutral-950 px-8 py-5 text-white shadow-xl shadow-neutral-950/10">
            <div className="grid gap-3 text-base font-semibold leading-7">
              {heroFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-4">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full border-2 border-teal-300 text-teal-300">
                    {"\u2713"}
                  </span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="bg-neutral-50 px-4 pb-7 pt-6 sm:px-8 lg:pb-9 lg:pt-8">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2 lg:items-start lg:gap-6">
          {packages.map((pkg) => (
            <article
              key={pkg.title}
              className={`relative rounded-xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-5 lg:p-6 ${pkg.orderClassName}`}
            >
              <div className="relative mb-4 h-52 overflow-hidden rounded-lg bg-neutral-100 sm:mb-5 sm:h-56 lg:h-60">
                <Image
                  src={pkg.image}
                  alt={pkg.imageAlt}
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 390px, 92vw"
                  className={pkg.imageClassName}
                />
              </div>
              <h3 className="text-center text-[0.95rem] font-black uppercase leading-tight tracking-[0.1em] sm:text-xl lg:text-[1.25rem] lg:tracking-[0.13em]">
                {pkg.title}
              </h3>
              <div className="mb-4 mt-3 text-center sm:my-5">
                <span className="font-serif text-4xl font-bold italic text-teal-500 sm:text-5xl lg:text-6xl">{pkg.price}</span>
                <span className="ml-2 font-serif text-sm font-bold text-neutral-800 sm:text-base lg:text-lg">{pkg.duration}</span>
                <p className="mt-2 font-serif text-sm font-bold text-neutral-500 sm:text-base">{pkg.secondWeek}</p>
              </div>
              <ul className="divide-y divide-neutral-100 font-serif text-sm leading-6 text-neutral-800 sm:text-[0.95rem] sm:leading-7">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex gap-3 py-2 sm:py-2.5">
                    <span className="font-sans font-bold text-teal-500">{"\u2713"}</span>
                    <span>{feature}</span>
                  </li>
                ))}
                {pkg.exclusions?.map((feature) => (
                  <li key={feature} className="flex gap-3 py-2 text-neutral-400 sm:py-2.5">
                    <span className="font-sans">{"\u00d7"}</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`tel:${phoneNumber}`}
                className={`mt-4 flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-center font-serif text-sm font-bold uppercase tracking-wide text-white sm:mt-5 sm:min-h-14 sm:px-6 sm:text-base ${
                  pkg.ctaTheme === "teal" ? "bg-teal-400 hover:bg-teal-500" : "bg-neutral-950 hover:bg-neutral-800"
                }`}
              >
                Call to Reserve: {displayPhoneNumber}
              </a>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-5 max-w-7xl text-center font-serif text-sm font-bold text-neutral-800 sm:text-base">
          * Taxes apply. Please call for custom quotes, delivery details, and extension timing.
        </p>
      </section>

      <section id="equipment" className="px-5 py-10 sm:px-8 lg:py-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[1.04/1] overflow-hidden rounded-xl bg-neutral-100 shadow-xl shadow-neutral-950/10">
            <Image
              src="/seated2.webp"
              alt="Patient using a seated face down chair rental for retina surgery recovery"
              fill
              quality={92}
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="object-cover object-center"
            />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-teal-600">Equipment Flow</p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              Comfortable options for sitting, sleeping, and staying connected.
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-700">
              Choose the package that matches your retina specialist&apos;s recovery plan, then reserve by phone. Equipment is
              cleaned, prepared, delivered, set up, and picked up so face-down recovery feels simpler from day one.
            </p>
            <div className="mt-7 flex justify-center lg:justify-start">
              <Link
                href="/equipment"
                className="inline-flex bg-neutral-950 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800"
              >
                View Equipment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 pt-6 text-center sm:px-8 lg:pb-14 lg:pt-8">
        <div className="mx-auto max-w-4xl">
          <p className="font-serif text-3xl leading-tight text-neutral-900 sm:text-5xl">
            <Link href="/contact" className="text-teal-500 transition hover:text-teal-600">
              Contact us today
            </Link>{" "}
            to book your equipment and ensure timely delivery.
          </p>
          <h2 className="mt-5 font-serif text-2xl leading-tight text-neutral-900 sm:text-3xl">
            Free Delivery, Setup & Pickup
            <br />
            (Within 30 km)
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-black uppercase leading-6 tracking-[0.2em]">
            Calgary - Edmonton - Red Deer - Saskatoon - Regina - Winnipeg - Vancouver - Surrey - Toronto - Ottawa -
            Hamilton - Mississauga - Windsor
          </p>
        </div>
      </section>

      <footer className="bg-neutral-950 px-5 py-12 text-center text-white sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8">
          <a href="#top" className="text-xs font-bold uppercase tracking-[0.28em] text-white/90">
            Back to Top
          </a>
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
    </main>
  );
}
