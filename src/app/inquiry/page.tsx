import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InquiryForm from "./InquiryForm";

export const metadata: Metadata = {
  title: "Private Inquiry",
  description:
    "Begin a private conversation with BANK Atelier. Every inquiry receives a personal reply within one business day.",
  alternates: { canonical: "/inquiry" },
};

export default async function InquiryPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;
  const allowed = [
    "Private Mobility",
    "Family Stewardship",
    "Special Situations",
    "Recycling Program",
    "Other",
  ];
  const defaultTopic = allowed.includes(topic ?? "") ? (topic as string) : "Family Stewardship";

  return (
    <main className="site inquiryPage">
      <nav className="nav" aria-label="Primary">
        <Link className="brand" href="/" aria-label="BANK Atelier home">
          <Image
            src="/BANK-monogram.png"
            alt=""
            width={120}
            height={180}
            className="brandLogo brandLogoHeader"
            priority
          />
          <div>
            <strong>BANK</strong>
            <small>BANKHEAD &amp; NOBLE KINSHIP</small>
          </div>
        </Link>
        <div className="navLinks">
          <Link href="/">Return Home</Link>
        </div>
      </nav>

      <section className="inquiryIntro">
        <p className="sectionLabel">PRIVATE INQUIRY</p>
        <h1>
          Begin a private
          <br />
          <em>conversation.</em>
        </h1>
        <p>
          BANK Atelier is intentionally selective. Tell us briefly what you
          have in mind. Initial conversations are private, personal and without
          obligation, and every inquiry receives a personal reply within one
          business day.
        </p>
      </section>

      <section className="inquiryBody">
        <InquiryForm defaultTopic={defaultTopic} />
      </section>
    </main>
  );
}
