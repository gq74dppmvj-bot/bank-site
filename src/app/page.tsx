import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="site">
      <nav className="nav">
        <div className="brand">
          <Image
            src="/BANK-monogram.png"
            alt="BANK monogram"
            width={120}
            height={180}
            className="brandLogo brandLogoHeader"
            priority
          />
          <div>
            <strong>BANK</strong>
            <small>BANKHEAD & NOBLE KINSHIP</small>
          </div>
        </div>

        <div className="navLinks">
          <a href="#stewardship">Stewardship</a>
          <a href="#services">Private Services</a>
          <Link href="/recycling-program">Recycling Program</Link>
          <a href="#contact" className="navButton">
            Private Inquiry
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="eyebrow">PRIVATE FAMILY STEWARDSHIP</div>

        <h1>
          When everything matters,
          <br />
          <em>someone should already be there.</em>
        </h1>

        <p className="heroCopy">
          Bespoke stewardship, private mobility and boots-on-ground
          coordination for families whose time, privacy and standards
          demand more.
        </p>

        <div className="heroActions">
          <a href="#contact" className="primaryButton">
            Request a Private Conversation
          </a>
          <a href="#stewardship" className="textLink">
            Discover our approach <span>→</span>
          </a>
        </div>

        <div className="quietLine">
          <span>DISCRETION</span>
          <i />
          <span>PRECISION</span>
          <i />
          <span>STEWARDSHIP</span>
        </div>
      </section>

      <section id="stewardship" className="statement">
        <div className="sectionNumber">01</div>

        <div>
          <p className="sectionLabel">THE BANK STANDARD</p>
          <h2>
            We do not seek recognition.
            <br />
            <em>We seek readiness.</em>
          </h2>

          <p>
            BANK Atelier exists quietly behind the lives of its clients —
            anticipating needs, coordinating trusted resources and executing
            with disciplined precision. We arrive prepared, perform the task,
            and step back without demanding the room.
          </p>
        </div>
      </section>

      <section id="services" className="services">
        <article>
          <span>01</span>
          <h3>Private Mobility</h3>
          <p>
            Coordinated aviation, executive ground transportation and
            destination logistics through a carefully developed network.
          </p>
        </article>

        <article>
          <span>02</span>
          <h3>Family Stewardship</h3>
          <p>
            A trusted boots-on-ground presence for the details that require
            judgment, discretion and personal accountability.
          </p>
        </article>

        <article>
          <span>03</span>
          <h3>Special Situations</h3>
          <p>
            When the request falls outside the ordinary, we assemble the
            people and resources necessary to see it through.
          </p>
        </article>
      </section>

      <section id="contact" className="contact">
        <p className="sectionLabel">PRIVATE INQUIRY</p>

        <h2>
          Not every relationship
          <br />
          <em>begins with a form.</em>
        </h2>

        <p>
          BANK Atelier is intentionally selective. Initial conversations are
          private, personal and without obligation.
        </p>

        <a href="mailto:concierge@bnkatelier.com" className="primaryButton">
          Begin a Conversation
        </a>
      </section>

      <footer>
        <div className="brand">
          <Image
            src="/Bank-logo.png"
            alt="BANK monogram"
            width={54}
            height={36}
            className="brandLogo"
          />
          <div>
            <strong>BANK</strong>
            <small>BANKHEAD & NOBLE KINSHIP</small>
          </div>
        </div>

        <div className="footerDetails">
          <Link href="/recycling-program">Recycling Program</Link>
          <p>Private stewardship. Quietly executed.</p>
        </div>
      </footer>
    </main>
  );
}
