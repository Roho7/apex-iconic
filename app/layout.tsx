import type { Metadata } from "next";
import { Funnel_Display, Geist, Geist_Mono, Inter, Quicksand } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";


const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apex Iconic | Dubai Property Brokerage",
  description: "Dubai property brokerage for villas, townhouses, apartments, land and commercial property incl. shops. Buy, sell, rent & manage with expert advisors.",
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
