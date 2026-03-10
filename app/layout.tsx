import type { Metadata } from "next";
import { Funnel_Display, Geist, Geist_Mono, Inter, Quicksand } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";


const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
});

const BASE_URL = "https://www.apexiconic.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Apex Iconic | Dubai Property Brokerage",
    template: "%s | Apex Iconic",
  },
  description:
    "Dubai property brokerage for villas, townhouses, apartments, land and commercial property incl. shops. Buy, sell, rent & manage with expert advisors.",
  openGraph: {
    type: "website",
    siteName: "Apex Iconic",
    title: "Apex Iconic | Dubai Property Brokerage",
    description:
      "Dubai property brokerage for villas, townhouses, apartments, land and commercial property incl. shops. Buy, sell, rent & manage with expert advisors.",
    url: BASE_URL,
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Apex Iconic – Dubai Property Brokerage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Iconic | Dubai Property Brokerage",
    description:
      "Dubai property brokerage for villas, townhouses, apartments, land and commercial property incl. shops. Buy, sell, rent & manage with expert advisors.",
    images: ["/og_image.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={funnelDisplay.variable}>
      <body
        className={`${funnelDisplay.variable} antialiased`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
