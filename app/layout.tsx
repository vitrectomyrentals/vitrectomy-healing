import type { Metadata } from "next";
import { buildMetadata, siteUrl } from "./lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...buildMetadata({
    title: "Vitrectomy Healing | Canada Vitrectomy Recovery Equipment",
    description:
      "Canadian vitrectomy recovery equipment rentals with delivery, setup, and pickup for face-down retina surgery recovery.",
  }),
  applicationName: "Vitrectomy Healing",
  category: "medical equipment rental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if('scrollRestoration'in history){history.scrollRestoration='manual'}window.addEventListener('beforeunload',function(){window.scrollTo(0,0)})",
          }}
        />
        {children}
      </body>
    </html>
  );
}
