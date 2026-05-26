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
  title: `${SITE_NAME} | Ritiro Widia, Carburo di Tungsteno e Metallo Duro`,
  description:
    "Acquisto Widia, carburo di tungsteno, metallo duro, inserti, frese, punte e rottami in tutta la Puglia. Ritiro gratuito, valutazione trasparente, pagamento immediato. Bari, Taranto, Lecce, Foggia, Brindisi.",
  keywords: [
    "compro widia",
    "widia bari",
    "widia puglia",
    "carburo di tungsteno",
    "metallo duro",
    "ritiro widia",
    "acquisto widia",
    "inserti widia",
    "frese widia",
    "rottami widia",
    "widia taranto",
    "widia lecce",
    "widia foggia",
    "widia brindisi",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${SITE_NAME} | Ritiro Widia e Metallo Duro`,
    description:
      "Acquisto Widia, carburo di tungsteno e metallo duro in tutta la Puglia. Ritiro gratuito e pagamento immediato.",
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
