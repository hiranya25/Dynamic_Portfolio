"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="grid gap-5"
    >
      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-taupe-dim">
          Name
        </span>
        <input
          required
          type="text"
          className="border border-gold-line bg-obsidian px-4 py-3 text-ivory outline-none focus:border-gold"
        />
      </label>
      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-taupe-dim">
          Email
        </span>
        <input
          required
          type="email"
          className="border border-gold-line bg-obsidian px-4 py-3 text-ivory outline-none focus:border-gold"
        />
      </label>
      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-taupe-dim">
          What are you looking to build?
        </span>
        <textarea
          required
          rows={4}
          className="border border-gold-line bg-obsidian px-4 py-3 text-ivory outline-none focus:border-gold"
        />
      </label>
      <button
        type="submit"
        className="mt-2 bg-gold px-6 py-3 font-mono text-[12px] uppercase tracking-[0.1em] text-obsidian transition-colors hover:bg-gold-bright"
      >
        Send Enquiry
      </button>
      {submitted && (
        <p className="text-sm text-taupe-dim">
          This form isn&rsquo;t wired to a mailbox yet — that&rsquo;s Phase 6 work. Until then,
          reach out directly via LinkedIn or Instagram above.
        </p>
      )}
    </form>
  );
}
