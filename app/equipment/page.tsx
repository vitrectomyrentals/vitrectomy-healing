import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { JsonLd, absoluteUrl, breadcrumbSchema, buildMetadata } from "../lib/seo";

type EquipmentImage = {
  src: string;
  alt: string;
  label: string;
  fit?: "cover" | "contain";
};

export const metadata: Metadata = buildMetadata({
  title: "Vitrectomy Recovery Equipment Rental | Dallas-Fort Worth",
  description:
    "View face down recovery equipment rentals for Dallas-Fort Worth patients, including face down chair rental, portable seated support, face down bed, mattress attachment, mirror, delivery, and setup.",
  path: "/equipment",
});

const seatedImages: EquipmentImage[] = [
  {
    src: "/seated1.webp",
    alt: "Face-down seated recovery chair",
    label: "Face Down Chair",
  },
  {
    src: "/seated2.webp",
    alt: "Patient using seated face-down support while staying connected",
    label: "Watch TV Comfortably",
  },
  {
    src: "/seated3.webp",
    alt: "Portable seated face-down recovery support",
    label: "Portable Seated Support",
  },
];

const sleepImages: EquipmentImage[] = [
  {
    src: "/sleep1.webp",
    alt: "Patient using a face-down mattress attachment",
    label: "Mattress Attachment",
  },
  {
    src: "/sleep2.jpg",
    alt: "Face-down recovery bed setup",
    label: "Face Down Bed",
  },
];

const miscImages: EquipmentImage[] = [
  {
    src: "/mirror.webp",
    alt: "Face-down recovery mirror",
    label: "Mirror",
  },
  {
    src: "/car.webp",
    alt: "Face-down recovery equipment in a vehicle for pickup",
    label: "Car",
    fit: "contain",
  },
  {
    src: "/mattress.webp",
    alt: "Face-down mattress attachment",
    label: "Mattress",
    fit: "contain",
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

function FigureCard({
  src,
  alt,
  label,
  large = false,
  fit = "cover",
}: {
  src: string;
  alt: string;
  label: string;
  large?: boolean;
  fit?: "cover" | "contain";
}) {
  return (
    <figure className={large ? "sm:col-span-2" : ""}>
      <div
        className={`relative overflow-hidden rounded-sm bg-neutral-100 shadow-sm ${
          large ? "aspect-[1.55/1]" : "aspect-[1.22/1]"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          quality={92}
          sizes={large ? "(min-width: 768px) 760px, 92vw" : "(min-width: 768px) 380px, 92vw"}
          className={fit === "contain" ? "object-contain p-2" : "object-cover object-center"}
        />
      </div>
      <figcaption className="mt-3 text-center font-serif text-sm font-bold text-neutral-700">{label}</figcaption>
    </figure>
  );
}

function CopyBlock({
  eyebrow,
  title,
  items,
}: {
  eyebrow?: string;
  title: string;
  items: string[];
}) {
  return (
    <div>
      {eyebrow ? <p className="text-xs font-black uppercase tracking-[0.24em] text-teal-600">{eyebrow}</p> : null}
      <h2 className="mt-2 text-2xl font-black uppercase tracking-wide text-neutral-800">{title}</h2>
      <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm font-black uppercase leading-relaxed tracking-[0.08em] text-neutral-950">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default function EquipmentPage() {
  const equipmentSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vitrectomy recovery equipment rental",
    serviceType: "Face down recovery equipment rental",
    url: absoluteUrl("/equipment"),
    provider: {
      "@id": "https://facedownrecoveryrentals.com/#localbusiness",
    },
    areaServed: "Dallas-Fort Worth",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Face down recovery equipment",
      itemListElement: [...seatedImages, ...sleepImages, ...miscImages].map((image) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: image.label,
          image: absoluteUrl(image.src),
          description: image.alt,
        },
      })),
    },
  };

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Equipment", path: "/equipment" },
          ]),
          equipmentSchema,
        ]}
      />
      <SiteHeader contactStyle="outline" />

      <section className="px-5 pb-4 pt-10 sm:px-8 lg:pb-5 lg:pt-12">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <h1 className="text-2xl font-black uppercase tracking-[0.24em] text-teal-600 sm:text-3xl">
              Recovery Equipment
            </h1>
            <p className="mt-4 max-w-2xl font-serif text-lg leading-8 text-neutral-700">
              Choose comfortable face-down support for sitting, sleeping, watching TV, and traveling during recovery.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 pt-4 sm:px-8 lg:pb-10 lg:pt-5">
        <div className="mx-auto max-w-5xl">
          <CopyBlock
            title="Seated:"
            items={[
              "Face down chair: this is usually the most used device during recovery. It is very sturdy and ergonomic.",
              "Portable seated device: a smaller portable device that can be used on a table top or on the patient's lap.",
            ]}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:gap-8">
            <FigureCard {...seatedImages[0]} />
            <FigureCard {...seatedImages[1]} />
            <FigureCard {...seatedImages[2]} large />
          </div>
        </div>
      </section>

      <section className="px-5 py-8 sm:px-8 lg:py-10">
        <div className="mx-auto max-w-5xl">
          <CopyBlock
            title="Sleep:"
            items={[
              "Bed attachment: this device attaches to any side of your bed that is unobstructed. This allows the patient to sleep on the mattress that they normally sleep on.",
              "Face down bed: a massage table that is used as a face-down bed. It can be placed outside the bedroom to sleep in other parts of the home.",
            ]}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {sleepImages.map((image) => (
              <FigureCard key={image.label} {...image} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-8 sm:px-8 lg:py-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-wide text-neutral-800">
                Complimentary items included in the package:
              </h2>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-sm font-black uppercase leading-relaxed tracking-[0.08em]">
                <li>
                  Facedown mirror: a custom designed mirror that enables patients to see what is in front of them while
                  face down. It can be used to watch TV or interact with people around you.
                </li>
                <li>Face cushion covers: sanitary fitted covers for the headrests.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase tracking-wide text-neutral-800">Delivery and set up:</h2>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-sm font-black uppercase leading-relaxed tracking-[0.08em]">
                <li>Professional home delivery and set up.</li>
                <li>Early pre-surgery delivery available at no extra cost.</li>
                <li>
                  Equipment fits in standard passenger vehicles for pick up orders. Instructional set up videos provided
                  by email.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/prices"
              className="inline-flex min-h-12 items-center justify-center bg-neutral-950 px-7 py-3 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800"
            >
              See Prices
            </Link>
            <a
              href="tel:+14693001867"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-teal-400 px-7 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-teal-500"
            >
              Call Now: (469) 300-1867
            </a>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3 lg:gap-8">
            {miscImages.map((image) => (
              <FigureCard key={image.label} {...image} />
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.16em]">Please call us for a custom quote</p>
            <a
              href="tel:+14693001867"
              className="mt-3 block font-serif text-lg font-bold underline decoration-neutral-300 underline-offset-4"
            >
              (469) 300-1867
            </a>
            <p className="mt-8 text-sm font-black uppercase leading-6 tracking-[0.14em]">
              Price matching policy
              <br />
              If you find a better price from another supplier, let us know and we will match it.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
