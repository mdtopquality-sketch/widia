"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, ChevronDown } from "lucide-react";
import { citiesByProvince, province } from "@/data/cities";

const provLabel: Record<string, string> = {
  Bari: "Provincia di Bari",
  Taranto: "Provincia di Taranto",
  Lecce: "Provincia di Lecce",
  Foggia: "Provincia di Foggia",
  Brindisi: "Provincia di Brindisi",
  BAT: "Provincia BAT (Barletta-Andria-Trani)",
};

export default function ZoneServite() {
  const [open, setOpen] = useState<string | null>("Bari");

  return (
    <section id="zone-servite" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2>Zone Servite in Puglia</h2>
        <p className="mt-4 mb-10 text-muted-foreground max-w-2xl">
          Compriamo Widia e metallo duro in tutti i comuni della Puglia. Clicca sulla tua provincia per vedere le città servite.
        </p>

        <div className="space-y-3">
          {province.map((prov) => {
            const cities = citiesByProvince[prov] ?? [];
            const isOpen = open === prov;

            return (
              <div
                key={prov}
                className="border border-border rounded-xl overflow-hidden"
              >
                {/* Header accordion */}
                <button
                  onClick={() => setOpen(isOpen ? null : prov)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-muted/30 hover:bg-muted/60 transition-colors text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <MapPin size={18} className="text-primary flex-shrink-0" />
                    <span className="font-semibold text-foreground">
                      {provLabel[prov]}
                    </span>
                    <span className="text-xs text-muted-foreground font-normal">
                      ({cities.length} comuni)
                    </span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {/* Contenuto espandibile */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-5 py-5 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {cities.map((city) => (
                        <Link
                          key={city.slug}
                          href={`/widia-${city.slug}`}
                          className="inline-flex items-center px-3 py-1.5 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                        >
                          {city.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
