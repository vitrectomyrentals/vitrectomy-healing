import type { Metadata } from "next";
import { buildMetadata, siteUrl } from "./lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...buildMetadata({
    title: "Face Down Recovery Rentals | Dallas-Fort Worth",
    description:
      "Face down recovery equipment rentals with delivery and setup throughout Dallas-Fort Worth for vitrectomy and retina surgery recovery.",
  }),
  applicationName: "Face Down Recovery Rentals",
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
