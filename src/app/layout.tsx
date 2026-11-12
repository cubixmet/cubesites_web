import type { Metadata, Viewport } from "next";
import { Figtree, Sora } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LenisProvider } from "@/components/LenisProvider";
import { SEO_KEYWORDS, SITE } from "@/lib/site";
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
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: "Cubixmet", url: SITE.url }],
  creator: "Cubixmet",
  publisher: "Cubixmet",
  category: "business",
  keywords: [...SEO_KEYWORDS],
  alternates: {
    canonical: "/",
    languages: { "en-IN": "/", en: "/" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: SITE.ogImage.url,
        width: SITE.ogImage.width,
        height: SITE.ogImage.height,
        alt: SITE.ogImage.alt,
        type: SITE.ogImage.type,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [SITE.ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png" }],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "geo.region": "IN",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2e6e4a" },
    { media: "(prefers-color-scheme: dark)", color: "#1f4a35" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cubixmet",
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phoneHref.replace("tel:", ""),
    logo: `${SITE.url}/logo.png`,
    sameAs: [SITE.url, SITE.appUrl],
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    publisher: { "@type": "Organization", name: "Cubixmet" },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Construction accounting",
    operatingSystem: "Web, PWA",
    url: SITE.appUrl,
    downloadUrl: SITE.appUrl,
    description: SITE.description,
    image: `${SITE.url}${SITE.ogImage.url}`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    featureList: [
      "Multi-site expense ledger",
      "Client payment tracking",
      "Staff permissions",
      "Progress photos and bills",
      "CSV and PDF reports",
      "Google Drive backups",
    ],
    publisher: {
      "@type": "Organization",
      name: "Cubixmet",
      email: SITE.email,
      telephone: SITE.phoneHref.replace("tel:", ""),
      url: SITE.url,
    },
  };

  return (
    <html lang="en-IN" className={`${figtree.variable} ${sora.variable}`}>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }}
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
