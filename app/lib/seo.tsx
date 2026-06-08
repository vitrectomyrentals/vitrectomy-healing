import type { Metadata } from "next";

export const siteUrl = "https://facedownrecoveryrentals.com";
export const siteName = "Face Down Recovery Rentals";
export const phoneNumber = "+14693001867";
export const contactEmail = "info@fdrrentals.com";
export const ogImage = "/hero2.jpg";

type PageSeo = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  type?: "website" | "article";
};

export function absoluteUrl(path = "") {
  return `${siteUrl}${path}`;
}

export function buildMetadata({ title, description, path = "", noIndex = false, type = "website" }: PageSeo): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type,
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Face down recovery equipment rental setup for Dallas-Fort Worth patients",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export const serviceAreas = [
  "Dallas",
  "Fort Worth",
  "Plano",
  "Irving",
  "Arlington",
  "Frisco",
  "Dallas-Fort Worth",
  "DFW",
];

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    "@id": `${siteUrl}/#localbusiness`,
    name: siteName,
    url: siteUrl,
    telephone: phoneNumber,
    email: contactEmail,
    image: absoluteUrl(ogImage),
    logo: absoluteUrl("/icon.svg"),
    priceRange: "$$",
    description:
      "Face down recovery equipment rentals with home delivery and setup throughout Dallas-Fort Worth for vitrectomy and retina surgery recovery.",
    areaServed: serviceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    serviceArea: {
      "@type": "AdministrativeArea",
      name: "Dallas-Fort Worth, TX",
    },
    knowsAbout: [
      "face down recovery equipment",
      "vitrectomy recovery equipment",
      "face down chair rental",
      "vitrectomy equipment rental",
      "retina surgery recovery positioning",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Face down recovery equipment rental",
          serviceType: "Medical recovery equipment rental",
          areaServed: "Dallas-Fort Worth",
        },
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    publisher: {
      "@id": `${siteUrl}/#localbusiness`,
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
