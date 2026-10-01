import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    q: "What does BANK Atelier do?",
    a: "We provide private family stewardship: coordinated private mobility, a trusted on-the-ground presence for household and family matters, and the assembly of people and resources for situations that fall outside the ordinary.",
  },
  {
    q: "How does an engagement begin?",
    a: "With a private conversation. You tell us what you have in mind, we confirm whether we are the right fit, and the scope is agreed before any work begins. Initial conversations are without obligation.",
  },
  {
    q: "Is pricing published?",
    a: "No. Every engagement is scoped individually, so fees are discussed privately once we understand what is required.",
  },
  {
    q: "How quickly will I hear back?",
    a: "Every inquiry receives a personal reply within one business day.",
  },
];

const steps = [
  {
    n: "01",
    title: "A private conversation",
    body: "Share what you need. We listen, ask the right questions and tell you plainly whether we can help.",
  },
  {
    n: "02",
    title: "A defined scope",
    body: "Responsibilities, timing and points of contact are agreed in advance, so nothing is left to assumption.",
  },
  {
    n: "03",
    title: "Quiet execution",
    body: "We arrive prepared, complete the work with discipline and report back, without drawing attention.",
  },
];

export default function Home() {
  return (
    <main className="site">
      <nav className="nav" aria-label="Primary">
        <div className="brand">
          <Image
            src="/BANK-monogram.png"
            alt="BANK Atelier monogram"
            width={120}
            height={180}
            className="brandLogo brandLogoHeader"
            priority
          />
          <div>
            <strong>BANK</strong>
            <small>BANKHEAD &amp; NOBLE KINSHIP</small>
          </div>
        </div>

        <div className="navLinks">
          <a href="#stewardship">Stewardship</a>
          <a href="#services">Private Services</a>
          <Link href="/recycling-program">Recycling Program</Link>
          <Link href="/inquiry" className="navButton">
            Private Inquiry
          </Link>
        </div>
      </nav>

      <section className="hero">
        <div className="eyebrow">PRIVATE FAMILY STEWARDSHIP</div>

        <h1>
          Private stewardship for families
          <br />
          <em>who expect every detail handled.</em>
        </h1>

        <p className="heroCopy">
          BANK Atelier coordinates private mobility, household logistics and
          special situations for families whose time, privacy and standards
          demand more. Discreetly, accountably and on call.
        </p>

        <div className="heroActions">
          <Link href="/inquiry" className="primaryButton">
            Speak With BANK Privately
          </Link>
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
            BANK Atelier exists quietly behind the lives of its clients,
            anticipating needs, coordinating trusted resources and executing
            with disciplined precision. We arrive prepared, perform the task,
            and step back without demanding the room.
          </p>
        </div>
      </section>

      <section id="services" className="services" aria-label="Private services">
        <article>
          <span>01</span>
          <h3>Private Mobility</h3>
          <p>
            Coordinated aviation, executive ground transportation and
            destination logistics through a carefully developed network.
          </p>
          <Link href="/inquiry?topic=Private%20Mobility" className="serviceLink">
            Inquire about mobility →
          </Link>
        </article>

        <article>
          <span>02</span>
          <h3>Family Stewardship</h3>
          <p>
            A trusted boots-on-ground presence for the details that require
            judgment, discretion and personal accountability.
          </p>
          <Link href="/inquiry?topic=Family%20Stewardship" className="serviceLink">
            Inquire about stewardship →
          </Link>
        </article>

        <article>
          <span>03</span>
          <h3>Special Situations</h3>
          <p>
            When the request falls outside the ordinary, we assemble the
            people and resources necessary to see it through.
          </p>
          <Link href="/inquiry?topic=Special%20Situations" className="serviceLink">
            Inquire about special situations →
          </Link>
        </article>
      </section>

      <section className="process" aria-labelledby="process-heading">
        <p className="sectionLabel">HOW WE WORK</p>
        <h2 id="process-heading">
          A clear, <em>considered process.</em>
        </h2>
        <ol>
          {steps.map((s) => (
            <li key={s.n}>
              <span>{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="faq" aria-labelledby="faq-heading">
        <p className="sectionLabel">QUESTIONS</p>
        <h2 id="faq-heading">
          Before you <em>reach out.</em>
        </h2>
        <div className="faqList">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="sectionLabel">PRIVATE INQUIRY</p>

        <h2>
          Begin with a
          <br />
          <em>private conversation.</em>
        </h2>

        <p>
          BANK Atelier is intentionally selective. Initial conversations are
          private, personal and without obligation, and every inquiry receives
          a personal reply within one business day.
        </p>

        <Link href="/inquiry" className="primaryButton">
          Speak With BANK Privately
        </Link>
      </section>

      <footer>
        <div className="brand">
          <Image
            src="/Bank-logo.png"
            alt="BANK Atelier"
            width={54}
            height={36}
            className="brandLogo"
          />
          <div>
            <strong>BANK</strong>
            <small>BANKHEAD &amp; NOBLE KINSHIP</small>
          </div>
        </div>

        <div className="footerDetails">
          <Link href="/recycling-program">Recycling Program</Link>
          <Link href="/inquiry">Private Inquiry</Link>
          <a href="mailto:concierge@bnkatelier.com">concierge@bnkatelier.com</a>
          <p>Private stewardship. Quietly executed.</p>
        </div>
      </footer>
    </main>
  );
}
