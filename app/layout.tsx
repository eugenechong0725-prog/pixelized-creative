import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pixelized Creative | Printing, Design & Branding for Malaysian SMEs",
  description:
    "Affordable professional creative and printing solutions for Malaysian SMEs. Factory-price printing with professional design and service. Get a free quotation on WhatsApp.",
  openGraph: {
    title: "Pixelized Creative",
    description:
      "Printing, Design & Branding That Helps Your Business Stand Out.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
