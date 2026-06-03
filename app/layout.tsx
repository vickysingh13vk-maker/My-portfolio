import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vikram Singh — Senior AI Product Designer & Creative Lead",
  description:
    "Senior AI Product Designer with 5+ years of experience creating SaaS, FinTech, EdTech, eCommerce, ERP, OTT, and AI-powered digital products.",
  keywords: [
    "AI Product Designer",
    "UX Designer",
    "Product Manager",
    "Creative Lead",
    "SaaS Design",
    "FinTech Design",
    "UI/UX",
    "Design Systems",
    "Vikram Singh",
  ],
  authors: [{ name: "Vikram Singh" }],
  creator: "Vikram Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Vikram Singh — Senior AI Product Designer & Creative Lead",
    description:
      "Senior AI Product Designer with 5+ years of experience creating world-class digital products.",
    siteName: "Vikram Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikram Singh — Senior AI Product Designer",
    description:
      "Senior AI Product Designer with 5+ years of experience creating world-class digital products.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white text-[#0a0a0a] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
