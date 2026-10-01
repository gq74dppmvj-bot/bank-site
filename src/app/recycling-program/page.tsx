import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recycling Program",
  alternates: { canonical: "/recycling-program" },
  description:
    "A discreet, considered approach to the collection and responsible routing of select household materials.",
};

export default function RecyclingProgram() {
  return (
    <main className="programPage">
      <a className="skipLink" href="#program-content">
        Skip to program details
      </a>

      <nav className="nav programNav" aria-label="Recycling program navigation">
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
          <Link
            href="/inquiry?topic=Recycling%20Program"
            className="navButton"
          >
            Arrange Collection
          </Link>
        </div>
      </nav>

      <section className="programHero" id="program-content">
        <div>
          <p className="programKicker">THE BANK RECYCLING PROGRAM</p>
          <h1>
            Steward what
            <br />
            <em>leaves the home.</em>
          </h1>
        </div>

        <p className="programHeroAside">
          A discreet, considered approach to the collection and responsible
          routing of select household materials. Every request begins with a
          private review.
        </p>
      </section>

      <section className="programIntro">
        <div className="sectionNumber">01</div>
        <h2>Removal should be as deliberate as acquisition.</h2>
        <p className="programIntroCopy">
          The BANK Recycling Program helps clients plan the next chapter for
          items no longer in use. We first consider reuse and donation, then
          identify an appropriate specialist recycling path when one is
          available. Accepted materials and collection options are confirmed
          before any appointment.
        </p>
      </section>

      <section className="programFlow" aria-labelledby="process-title">
        <div className="programFlowHeader">
          <h2 id="process-title">A clear, quiet process.</h2>
          <p>
            The program is coordinated by inquiry so that handling, access and
            destination requirements can be established in advance.
          </p>
        </div>

        <div className="programSteps">
          <article>
            <span>01 / PRIVATE REVIEW</span>
            <h3>Tell us what is leaving.</h3>
            <p>
              Share a brief description, photographs when useful and the
              property location. We will identify what requires clarification.
            </p>
          </article>

          <article>
            <span>02 / ROUTING PLAN</span>
            <h3>Confirm the proper path.</h3>
            <p>
              We assess whether each item is suited to reuse, donation or a
              qualified recycling stream before collection is scheduled.
            </p>
          </article>

          <article>
            <span>03 / COORDINATED TRANSFER</span>
            <h3>Complete the handoff.</h3>
            <p>
              Once scope and availability are confirmed, BANK coordinates the
              agreed collection or transfer with discretion and care.
            </p>
          </article>
        </div>
      </section>

      <section className="programNotes" aria-labelledby="materials-title">
        <div className="programNotesHeader">
          <div className="sectionNumber">02</div>
          <h2 id="materials-title">What to include in your inquiry.</h2>
        </div>

        <div className="materialGrid">
          <article className="materialGroup">
            <span>COMMON REQUESTS</span>
            <h3>Items we can review</h3>
            <ul>
              <li>Furniture, housewares and other reusable household goods</li>
              <li>Clothing, textiles, books and boxed personal effects</li>
              <li>Consumer electronics and small appliances</li>
              <li>Paper, cardboard and records requiring planned handling</li>
              <li>Specialty items that may require a dedicated provider</li>
            </ul>
          </article>

          <article className="materialGroup">
            <span>CONFIRM IN ADVANCE</span>
            <h3>Items requiring special direction</h3>
            <ul>
              <li>Batteries, bulbs and devices with embedded power cells</li>
              <li>Paint, chemicals, fuel or pressurized containers</li>
              <li>Medical, biological or otherwise regulated material</li>
              <li>Construction debris, loose waste or damaged bulk material</li>
              <li>Anything containing sensitive data or confidential records</li>
            </ul>
          </article>
        </div>

        <p className="programCaution">
          Program availability, accepted materials, scheduling and any
          third-party requirements vary by location and provider. Please do not
          leave items for collection until BANK has reviewed and confirmed the
          request.
        </p>
      </section>

      <section className="programInquiry">
        <p className="sectionLabel">BEGIN PRIVATELY</p>
        <h2>
          Start with a list.
          <br />
          <em>We will take it from there.</em>
        </h2>
        <p>
          Include the property location, approximate volume and a short
          description of the items. Photographs are welcome when they help
          establish scope.
        </p>
        <Link
          href="/inquiry?topic=Recycling%20Program"
          className="primaryButton"
        >
          Request a Private Review
        </Link>
      </section>

      <footer>
        <Link className="brand" href="/" aria-label="BANK Atelier home">
          <Image
            src="/Bank-logo.png"
            alt=""
            width={54}
            height={36}
            className="brandLogo"
          />
          <div>
            <strong>BANK</strong>
            <small>BANKHEAD &amp; NOBLE KINSHIP</small>
          </div>
        </Link>

        <div className="footerDetails">
          <Link href="/">Home</Link>
          <p>Private stewardship. Quietly executed.</p>
        </div>
      </footer>
    </main>
  );
}
