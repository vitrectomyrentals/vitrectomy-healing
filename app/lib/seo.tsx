import type { Metadata } from "next";

export const siteUrl = "https://www.vitrectomyhealing.com";
export const siteName = "Vitrectomy Healing";
export const phoneNumber = "+17802972526";
export const displayPhoneNumber = "(780) 297-2526";
export const contactEmail = "info@vitrectomyhealing.com";
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
      locale: "en_CA",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Vitrectomy recovery equipment rental setup for Canadian patients",
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
  "Calgary",
  "Edmonton",
  "Red Deer",
  "Airdrie",
  "Saskatoon",
  "Regina",
  "Winnipeg",
  "Burnaby",
  "New Westminster",
  "Richmond",
  "Surrey",
  "Vancouver",
  "Victoria",
  "Toronto",
  "Ottawa",
  "Hamilton",
  "Burlington",
  "Oakville",
  "Milton",
  "Mississauga",
  "Brantford",
  "Cambridge",
  "Windsor",
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
      "Canadian vitrectomy recovery equipment rentals with delivery, setup, and pickup for face-down retina surgery recovery.",
    areaServed: serviceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    serviceArea: {
      "@type": "AdministrativeArea",
      name: "Canada",
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
          areaServed: "Canada",
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
