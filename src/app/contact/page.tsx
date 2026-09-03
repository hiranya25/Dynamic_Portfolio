import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { profile } from "@/lib/data/profile";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Dyuti Parruck for business setup, advisory, media, or speaking enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let's Build Something"
        title="Start a Conversation"
        lead="For business setup, advisory, media, or speaking enquiries."
      />
      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-gold">
              Direct
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-between border border-rule px-5 py-4 hover:border-gold-line"
              >
                <span className="text-ivory">LinkedIn</span>
                <ArrowUpRight size={15} className="text-taupe-dim group-hover:text-gold-bright" />
              </a>
              <a
                href={profile.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-between border border-rule px-5 py-4 hover:border-gold-line"
              >
                <span className="text-ivory">Instagram</span>
                <ArrowUpRight size={15} className="text-taupe-dim group-hover:text-gold-bright" />
              </a>
            </div>
            <p className="mt-6 text-sm text-taupe-dim">
              These are the only two contact channels currently verified. A dedicated business
              email is a Phase 6 item once Dyuti&rsquo;s team confirms one.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
