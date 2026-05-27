import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import CosaCompriamo from "@/components/landing/CosaCompriamo";
import AboutSection from "@/components/landing/AboutSection";
import ZoneServite from "@/components/landing/ZoneServite";
import Footer from "@/components/landing/Footer";
import ContactBar from "@/components/landing/ContactBar";
import { SITE_URL, SITE_NAME } from "@/data/widia-content";
import { cities } from "@/data/cities";

export const metadata: Metadata = {
  title: `Compro Widia Bari e Puglia | Carburo di Tungsteno e Metallo Duro`,
  description:
    "Compro Widia usato, carburo di tungsteno e metallo duro in tutta la Puglia. Inserti, frese, punte e rottami. Bari, Taranto, Lecce, Foggia, Brindisi. Contattaci su WhatsApp.",
  keywords: [
    "compro widia",
    "compro widia usato",
    "compro widia bari",
    "compro widia puglia",
    "widia bari",
    "widia puglia",
    "carburo di tungsteno",
    "compro carburo di tungsteno",
    "metallo duro",
    "compro metallo duro",
    "acquisto widia",
    "inserti widia usati",
    "frese widia usate",
    "punte widia usate",
    "rottami widia",
    "vendere widia",
    "vendere metallo duro puglia",
    "widia taranto",
    "widia lecce",
    "widia foggia",
    "widia brindisi",
    "tungsteno puglia",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `Compro Widia Bari e Puglia | Carburo di Tungsteno e Metallo Duro`,
    description:
      "Compro Widia usato, carburo di tungsteno e metallo duro in Puglia. Contattaci su WhatsApp.",
    url: SITE_URL,
    type: "website",
  },
  other: {
    "geo.region": "IT-BA",
    "geo.placename": "Bari, Puglia",
    "geo.position": "41.1171;16.8719",
    ICBM: "41.1171, 16.8719",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description:
    "Acquisto e ritiro Widia, carburo di tungsteno, metallo duro e rottami metallici in tutta la Puglia.",
  url: SITE_URL,
  telephone: "+39XXXXXXXXXX",
  email: "info@widiabariepuglia.it",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bari",
    addressRegion: "Puglia",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.1171,
    longitude: 16.8719,
  },
  areaServed: [
    { "@type": "State", name: "Puglia" },
    ...cities.map((c) => ({ "@type": "City", name: c.name })),
  ],
  priceRange: "€€",
  openingHours: "Mo-Fr 08:00-18:00",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <CosaCompriamo />
        <AboutSection />
        <ZoneServite />
        <Footer />
        <ContactBar />
      </div>
    </>
  );
}
