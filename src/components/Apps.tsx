"use client";

import { motion } from "framer-motion";
import { APPS } from "@/lib/site";

export function Apps() {
  return (
    <section id="apps" className="bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">Apps</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Three surfaces. One platform.
          </h2>
          <p className="mt-4 text-muted-foreground">
            CuboSites is a full stack: the contractor PWA your crews use daily, the Super Admin
            portal for platform operators, and the shared API that keeps tenants isolated.
          </p>
        </motion.div>

        <div className="mt-14 space-y-16">
          {APPS.map((app, idx) => (
            <motion.article
              key={app.id}
              id={app.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55 }}
              className={`grid items-start gap-8 lg:grid-cols-12 ${
                idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  {app.eyebrow}
                </p>
                <h3 className="font-display mt-2 text-2xl font-semibold sm:text-3xl">{app.name}</h3>
                <p className="mt-3 text-muted-foreground">{app.summary}</p>
                {app.href.startsWith("http") && (
                  <a
                    href={app.href}
                    className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline"
                  >
                    Open {app.name.toLowerCase()} →
                  </a>
                )}
              </div>
              <div className="lg:col-span-7">
                <ul className="divide-y divide-border border-y border-border">
                  {app.points.map((point) => (
                    <li key={point} className="flex gap-3 py-3.5 text-sm leading-relaxed">
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
