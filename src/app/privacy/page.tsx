import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms of Use",
  description: `Privacy policy and terms for ${SITE.name} — how Cubixmet handles contractor workspace data, accounts, billing and backups.`,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: `Privacy & Terms | ${SITE.name}`,
    description: `How ${SITE.name} handles contractor workspace data and the terms for using the service.`,
    url: `${SITE.url}/privacy`,
    images: [
      {
        url: SITE.ogImage.url,
        width: SITE.ogImage.width,
        height: SITE.ogImage.height,
        alt: SITE.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Privacy & Terms | ${SITE.name}`,
    description: `How ${SITE.name} handles contractor workspace data.`,
    images: [SITE.ogImage.url],
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="bg-background pt-28 pb-20">
      <article className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">Legal</p>
        <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Privacy Policy & Terms of Use
        </h1>
        <p className="mt-4 text-muted-foreground">
          This page summarises how CuboSites (operated with Cubixmet) processes contractor
          workspace data for the web and PWA products. For in-app detail, see the same policy
          inside the contractor application.
        </p>

        <section className="mt-12 space-y-4">
          <h2 className="font-display text-xl font-semibold">What we collect</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Account details (name, email, phone), workspace and site records, ledger entries,
            uploaded media you choose to store, billing and wallet activity, and technical logs
            needed to keep the service secure.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="font-display text-xl font-semibold">How we use it</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            To run your tenant workspace, authenticate you (including Google Sign-In when enabled),
            send verification and product messages, process subscriptions and wallet top-ups, and
            improve reliability. We do not sell your project data.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="font-display text-xl font-semibold">Terms in brief</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            CuboSites is a bookkeeping aid, not accounting, tax or legal advice. Keep credentials
            secure, use the service lawfully, and respect other tenants. Liability is limited to
            fees paid in the three months before a claim, to the extent permitted by law.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="font-display text-xl font-semibold">Contact</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Privacy questions:{" "}
            <a className="font-medium text-primary hover:underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>{" "}
            · {SITE.phoneDisplay}
          </p>
        </section>

        <p className="mt-14 text-sm">
          <Link href="/" className="font-medium text-primary hover:underline">
            ← Back to home
          </Link>
        </p>
      </article>
    </div>
  );
}
