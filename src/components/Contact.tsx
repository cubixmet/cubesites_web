"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, white, transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.75 0.12 85), transparent 35%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold tracking-[0.16em] text-white/60 uppercase">Contact</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Talk to us about CuboSites
          </h2>
          <p className="mt-4 max-w-lg text-white/80">
            Whether you are a contractor ready to leave spreadsheets behind, or a partner evaluating
            the platform — we are here.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SITE.appUrl}
              className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-[oklch(0.28_0.05_160)] transition hover:bg-white/90"
            >
              Open contractor app
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="rounded-md border border-white/35 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              Email us
            </a>
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.55 }}
          className="space-y-6 border-t border-white/20 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
        >
          <div>
            <dt className="text-xs tracking-[0.14em] text-white/55 uppercase">Email</dt>
            <dd className="mt-1.5 text-lg font-medium">
              <a href={`mailto:${SITE.email}`} className="hover:underline">
                {SITE.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.14em] text-white/55 uppercase">Phone</dt>
            <dd className="mt-1.5 text-lg font-medium">
              <a href={SITE.phoneHref} className="hover:underline">
                {SITE.phoneDisplay}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.14em] text-white/55 uppercase">Web</dt>
            <dd className="mt-1.5 text-lg font-medium">{SITE.domain}</dd>
          </div>
        </motion.dl>
      </div>
    </section>
  );
}
