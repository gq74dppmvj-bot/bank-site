import { NextResponse } from "next/server";

const RECIPIENT = "concierge@bnkatelier.com";

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 60);
  const topic = clean(body.topic, 80);
  const message = clean(body.message, 4000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide your name, a valid email and a short message." },
      { status: 400 },
    );
  }

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${RECIPIENT}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: `BANK Atelier private inquiry: ${topic || "General"}`,
        _template: "table",
        _captcha: "false",
        name,
        email,
        phone: phone || "Not provided",
        topic: topic || "General",
        message,
      }),
    });
    if (!res.ok) throw new Error(`Upstream ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: `We could not send your inquiry just now. Please email ${RECIPIENT} directly.`,
      },
      { status: 502 },
    );
  }
}
