import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { JsonLd, absoluteUrl, breadcrumbSchema, buildMetadata } from "../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Face Down Recovery Equipment Rental Prices | Dallas-Fort Worth",
  description:
    "Compare Dallas-Fort Worth face down recovery equipment rental packages for vitrectomy recovery, including face down chairs, beds, mattress attachments, mirrors, delivery, setup, and pickup.",
  path: "/prices",
});

const packages = [
  {
    title: "Extended Comfort Package",
    subtitle: "Everything you need for a more comfortable recovery",
    price: "$495",
    duration: "/ 10 Days",
    ctaTheme: "dark",
    image: "/sleep2.jpg",
    imageAlt: "Face down recovery bed included with the Extended Comfort Package",
    imageClassName: "object-cover object-[center_45%]",
    orderClassName: "order-2 lg:order-none",
    features: [
      "2 Seated Devices (Face Down Chair & Portable Seated Support)",
      "2 Sleep Devices (Mattress Attachment & Face Down Bed)",
      "1 Mirror (Watch TV & interact with others)",
      "Fresh Covers Included",
      "Free Delivery, Set Up & Pick Up (within 20 miles)",
    ],
  },
  {
    label: "Most Popular",
    title: "Complete Comfort Package",
    subtitle: "Everything you need for a more comfortable recovery",
    price: "$395",
    duration: "/ 1 Week",
    featured: true,
    ctaTheme: "teal",
    image: "/chair.jpg",
    imageAlt: "Face down chair included with the Complete Comfort Package",
    imageClassName: "object-cover object-[center_25%]",
    orderClassName: "order-1 lg:order-none",
    features: [
      "2 Seated Devices (Face Down Chair & Portable Seated Support)",
      "2 Sleep Devices (Mattress Attachment & Face Down Bed)",
      "1 Mirror (Watch TV & interact with others)",
      "Fresh Covers Included",
      "Free Delivery, Set Up & Pick Up (within 20 miles)",
    ],
  },
  {
    title: "Core Recovery Package",
    subtitle: "Essential face down equipment",
    price: "$295",
    duration: "/ 1 Week",
    ctaTheme: "dark",
    image: "/seated3.webp",
    imageAlt: "Portable seated face down support included with the Core Recovery Package",
    imageClassName: "object-cover object-[center_48%]",
    orderClassName: "order-3 lg:order-none",
    features: [
      "1 Seated Device (Face Down Chair or Portable Seated Support)",
      "1 Sleep Device (Mattress Attachment or Face Down Bed)",
      "1 Mirror (Watch TV & interact with others)",
      "Fresh Covers Included",
    ],
    exclusions: ["Delivery not included"],
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
      </div>
    </footer>
  );
}

export default function PricesPage() {
  const priceSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Face Down Recovery Equipment Rental Packages",
    url: absoluteUrl("/prices"),
    itemListElement: packages.map((pkg) => ({
      "@type": "Offer",
      name: pkg.title,
      price: pkg.price.replace("$", ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      areaServed: "Dallas-Fort Worth",
      description: `${pkg.subtitle}. ${pkg.features.join("; ")}.`,
      itemOffered: {
        "@type": "Service",
        name: `${pkg.title} face down recovery equipment rental`,
        serviceType: "Vitrectomy recovery equipment rental",
        url: absoluteUrl("/prices"),
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Prices", path: "/prices" },
          ]),
          priceSchema,
        ]}
      />
      <SiteHeader contactStyle="outline" />

      <section id="top" className="px-4 py-10 sm:px-8 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-center text-sm font-black uppercase tracking-[0.2em]">
            Choose the recovery package that best fits your needs
          </h1>

          <div className="mx-auto mt-7 grid max-w-7xl gap-6 sm:mt-9 lg:grid-cols-3 lg:items-stretch lg:gap-6">
            {packages.map((pkg) => (
              <article
                key={pkg.title}
                className={`relative flex flex-col rounded-lg border bg-white p-4 shadow-sm sm:p-5 lg:p-6 ${pkg.orderClassName} ${
                  pkg.featured ? "border-teal-400 ring-1 ring-teal-400" : "border-neutral-200"
                }`}
              >
                {pkg.label ? (
                  <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400 px-5 py-2 text-[0.65rem] font-black uppercase leading-tight tracking-[0.18em] text-white sm:px-6 sm:py-2.5 sm:text-xs">
                    {pkg.label}
                  </div>
                ) : null}
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
                <h2 className="text-center text-[0.95rem] font-black uppercase leading-tight tracking-[0.1em] sm:text-xl lg:text-[1.25rem] lg:tracking-[0.13em]">
                  {pkg.title}
                </h2>
                <div className="mb-4 mt-3 text-center sm:my-5">
                  <span className="font-serif text-4xl font-bold italic text-teal-500 sm:text-5xl lg:text-6xl">{pkg.price}</span>
                  <span className="ml-2 font-serif text-sm font-bold text-neutral-800 sm:text-base lg:text-lg">{pkg.duration}</span>
                </div>
                <ul className="grow divide-y divide-neutral-100 font-serif text-sm leading-6 text-neutral-800 sm:text-[0.95rem] sm:leading-7">
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
                  href="tel:+14693001867"
                  className={`mt-4 flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-center font-serif text-sm font-bold uppercase tracking-wide text-white sm:mt-5 sm:min-h-14 ${
                    pkg.ctaTheme === "teal" ? "bg-teal-400 hover:bg-teal-500" : "bg-neutral-950 hover:bg-neutral-800"
                  }`}
                >
                  Call to Reserve: (469) 300-1867
                </a>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-5 max-w-7xl text-center font-serif text-sm font-bold text-neutral-800 sm:text-base">
            * $175/additional week if needed.
          </p>

          <div className="mt-7 text-center">
            <Link
              href="/equipment"
              className="inline-flex bg-neutral-950 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800"
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
