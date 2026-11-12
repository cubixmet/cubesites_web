"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero-mesh relative min-h-[100svh] overflow-hidden text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 md:justify-center md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="relative mb-8 h-12 w-[14rem] sm:h-14 sm:w-[16rem]">
            <Image
              src="/logo.png"
              alt={SITE.name}
              fill
              className="object-contain object-left brightness-0 invert"
              priority
            />
          </div>
          <h1 className="font-display text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.05] font-semibold tracking-tight">
            Construction bookkeeping for every site — money, bills and progress.
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
            CuboSites is mobile-first bookkeeping for construction contractors. Capture expenses and
            client payments on site, keep staff permissions tight, and export reports without
            spreadsheet chaos.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={SITE.appUrl}
              className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-[oklch(0.28_0.05_160)] shadow-lg shadow-black/10 transition hover:bg-white/90"
            >
              Start in the app
            </a>
            <a
              href="#apps"
              className="rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              See every app
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-4%] bottom-[12%] hidden h-48 w-[22rem] md:block"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 0.9, x: 0 }}
        transition={{ delay: 0.35, duration: 0.9 }}
      >
        <div className="flex h-full items-end gap-2 px-4">
          {[40, 62, 48, 78, 55, 88, 70].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t-sm bg-white/25"
              initial={{ height: 8 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.55 + i * 0.08, duration: 0.7, ease: "easeOut" }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
