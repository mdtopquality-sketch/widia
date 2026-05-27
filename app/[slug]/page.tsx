import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import CosaCompriamo from "@/components/landing/CosaCompriamo";
import AboutSection from "@/components/landing/AboutSection";
import ZoneServite from "@/components/landing/ZoneServite";
import Footer from "@/components/landing/Footer";
import ContactBar from "@/components/landing/ContactBar";
import { cities, getCityBySlug } from "@/data/cities";
import { SITE_URL, SITE_NAME } from "@/data/widia-content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({ slug: `widia-${city.slug}` }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (!slug.startsWith("widia-")) return {};
  const citySlug = slug.replace("widia-", "");
  const city = getCityBySlug(citySlug);
  if (!city) return {};

  const title = `Compro Widia ${city.name} | Carburo di Tungsteno e Metallo Duro`;
  const description = `Compro Widia usato a ${city.name} (${city.provincia}): inserti, frese, punte, carburo di tungsteno, metallo duro e rottami. Contattaci su WhatsApp.`;
  const url = `${SITE_URL}/widia-${city.slug}`;

  return {
    title,
    description,
    keywords: [
      `compro widia ${city.name.toLowerCase()}`,
      `widia ${city.name.toLowerCase()}`,
      `acquisto widia ${city.name.toLowerCase()}`,
      `carburo di tungsteno ${city.name.toLowerCase()}`,
      `metallo duro ${city.name.toLowerCase()}`,
      `inserti widia ${city.name.toLowerCase()}`,
      `frese widia ${city.name.toLowerCase()}`,
      `rottami widia ${city.provincia.toLowerCase()}`,
      `compro metallo duro ${city.provincia.toLowerCase()}`,
      "widia puglia",
      "compro widia puglia",
      "carburo di tungsteno puglia",
      "vendere widia puglia",
    ],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "it_IT",
      siteName: SITE_NAME,
    },
    other: {
      "geo.region": `IT-${city.provincia === "BAT" ? "BT" : city.provincia.substring(0, 2).toUpperCase()}`,
      "geo.placename": `${city.name}, Puglia`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;

  if (!slug.startsWith("widia-")) {
    notFound();
  }

  const citySlug = slug.replace("widia-", "");
  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  const url = `${SITE_URL}/widia-${city.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${SITE_NAME} - ${city.name}`,
    description: `Acquisto e ritiro Widia, carburo di tungsteno e metallo duro a ${city.name} e dintorni.`,
    url,
    telephone: "+39XXXXXXXXXX",
    email: "info@widiabariepuglia.it",
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: "Puglia",
      addressCountry: "IT",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `Provincia di ${city.provincia}`,
      },
    },
    priceRange: "€€",
    openingHours: "Mo-Fr 08:00-18:00",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection cityName={city.name} />
        <CosaCompriamo />
        <AboutSection />
        <ZoneServite />
        <Footer />
        <ContactBar />
      </div>
    </>
  );
}
