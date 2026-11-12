import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="relative mb-4 h-9 w-[11rem]">
            <Image src="/logo.png" alt={SITE.name} fill className="object-contain object-left" />
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {SITE.tagline}. Bookkeeping for contractors who run multiple construction sites —
            from first bag of cement to final client payment.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-foreground/50 uppercase">
            Product
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/#product" className="hover:text-foreground">
                Features
              </Link>
            </li>
            <li>
              <Link href="/#apps" className="hover:text-foreground">
                Apps
              </Link>
            </li>
            <li>
              <a href={SITE.appUrl} className="hover:text-foreground">
                Contractor login
              </a>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-foreground">
                Privacy & Terms
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-foreground/50 uppercase">
            Contact
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-foreground">
                {SITE.email}
              </a>
            </li>
            <li>
              <a href={SITE.phoneHref} className="hover:text-foreground">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>{SITE.domain}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-xs text-muted-foreground sm:px-8">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Built by Cubixmet</p>
        </div>
      </div>
    </footer>
  );
}
