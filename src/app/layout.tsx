import type { Metadata, Viewport } from "next";
import { Figtree, Sora } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LenisProvider } from "@/components/LenisProvider";
import { SITE } from "@/lib/site";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Bookkeeping for contractors`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: "Cubixmet", url: SITE.url }],
  creator: "Cubixmet",
  keywords: [
    "construction bookkeeping",
    "contractor software",
    "site expense tracker",
    "construction PWA",
    "CuboSites",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Bookkeeping for contractors`,
    description: SITE.description,
    images: [{ url: "/logo.png", width: 512, height: 256, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Bookkeeping for contractors`,
    description: SITE.description,
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#2e6e4a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE.url,
    description: SITE.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    publisher: {
      "@type": "Organization",
      name: "Cubixmet",
      email: SITE.email,
      telephone: SITE.phoneHref.replace("tel:", ""),
      url: SITE.url,
    },
  };

  return (
    <html lang="en" className={`${figtree.variable} ${sora.variable}`}>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LenisProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
