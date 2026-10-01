import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./extras.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.bnkatelier.com";
const description =
  "BANK Atelier provides private family stewardship: coordinated private mobility, household logistics and special situations, handled with discretion and personal accountability.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BANK Atelier | Private Family Stewardship",
    template: "%s | BANK Atelier",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "BANK Atelier",
    title: "BANK Atelier | Private Family Stewardship",
    description,
    url: siteUrl,
    images: [{ url: "/BANK-monogram.png", alt: "BANK Atelier monogram" }],
  },
  twitter: {
    card: "summary",
    title: "BANK Atelier | Private Family Stewardship",
    description,
    images: ["/BANK-monogram.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#090a0b",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BANK Atelier",
  legalName: "Bankhead & Noble Kinship",
  url: siteUrl,
  logo: `${siteUrl}/BANK-monogram.png`,
  description,
  email: "concierge@bnkatelier.com",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "concierge@bnkatelier.com",
      availableLanguage: "English",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
