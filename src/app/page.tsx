import { Apps } from "@/components/Apps";
import { Contact } from "@/components/Contact";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Insights } from "@/components/Insights";

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
