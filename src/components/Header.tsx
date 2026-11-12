"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-background/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="relative block h-9 w-[10.5rem]" aria-label={SITE.name}>
          <Image
            src="/logo.png"
            alt={SITE.name}
            fill
            className={`object-contain object-left transition ${
              scrolled ? "" : "brightness-0 invert"
            }`}
            priority
          />
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                scrolled
                  ? "text-foreground/75 hover:text-foreground"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={SITE.appUrl}
          className={`rounded-md px-3.5 py-2 text-sm font-semibold transition ${
            scrolled
              ? "bg-primary text-primary-foreground hover:opacity-90"
              : "bg-white text-[oklch(0.32_0.06_160)] hover:bg-white/90"
          }`}
        >
          Open app
        </a>
      </div>
    </header>
  );
}
