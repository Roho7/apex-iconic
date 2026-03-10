import { Metadata } from "next";

const BASE_URL = "https://www.apexiconic.com";

export const metadata: Metadata = {
  title: "Register With Us",
  description:
    "Register with Apex Iconic to connect with a trusted Dubai property advisor. Buy, sell, rent or manage your property with expert guidance.",
  openGraph: {
    title: "Register With Apex Iconic | Dubai Property Brokerage",
    description:
      "Register with Apex Iconic to connect with a trusted Dubai property advisor. Buy, sell, rent or manage your property with expert guidance.",
    url: `${BASE_URL}/register`,
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Apex Iconic – Register With Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Register With Apex Iconic | Dubai Property Brokerage",
    description:
      "Register with Apex Iconic to connect with a trusted Dubai property advisor. Buy, sell, rent or manage your property with expert guidance.",
    images: ["/og_image.png"],
  },
  alternates: {
    canonical: `${BASE_URL}/register`,
  },
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
