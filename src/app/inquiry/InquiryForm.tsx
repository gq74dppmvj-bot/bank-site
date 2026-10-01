"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function InquiryForm({ defaultTopic }: { defaultTopic: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="formSuccess" role="status">
        <p className="sectionLabel">INQUIRY RECEIVED</p>
        <h2>
          Thank you.
          <br />
          <em>We will be in touch personally.</em>
        </h2>
        <p>
          Every inquiry receives a personal reply within one business day.
          Nothing you have shared will be passed beyond BANK Atelier.
        </p>
      </div>
    );
  }

  return (
    <form className="inquiryForm" onSubmit={onSubmit} noValidate={false}>
      <div className="fieldRow">
        <label>
          <span>Full name</span>
          <input name="name" type="text" required autoComplete="name" maxLength={120} />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" required autoComplete="email" maxLength={200} />
        </label>
      </div>

      <div className="fieldRow">
        <label>
          <span>Phone (optional)</span>
          <input name="phone" type="tel" autoComplete="tel" maxLength={60} />
        </label>
        <label>
          <span>Area of interest</span>
          <select name="topic" defaultValue={defaultTopic}>
            <option>Private Mobility</option>
            <option>Family Stewardship</option>
            <option>Special Situations</option>
            <option>Recycling Program</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <label>
        <span>How can we help?</span>
        <textarea name="message" required rows={6} maxLength={4000} />
      </label>

      {/* Honeypot for automated spam; hidden from people and assistive tech */}
      <div className="hpField" aria-hidden="true">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === "error" && (
        <p className="formError" role="alert">
          {error}
        </p>
      )}

      <div className="formFooter">
        <button type="submit" className="primaryButton" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send Private Inquiry"}
        </button>
        <p>
          Your details are used only to respond to this inquiry. Prefer email?{" "}
          <a href="mailto:concierge@bnkatelier.com">concierge@bnkatelier.com</a>
        </p>
      </div>
    </form>
  );
}
