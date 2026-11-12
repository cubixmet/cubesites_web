import type { Metadata } from "next";
import { Apps } from "@/components/Apps";
import { Contact } from "@/components/Contact";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Insights } from "@/components/Insights";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: SITE.title },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
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
    title: SITE.title,
    description: SITE.description,
    images: [SITE.ogImage.url],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Apps />
      <Insights />
      <Contact />
    </>
  );
}
