import Link from "next/link";
import { cities, citiesByProvince } from "@/data/cities";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h4 className="text-lg font-bold mb-4">
              Widia<span className="text-primary"> Bari e Puglia</span>
            </h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Compriamo Widia, carburo di tungsteno, metallo duro e rottami metallici in tutta la Puglia.
            </p>
          </div>

          {/* Bari */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Widia Bari</h4>
            <ul className="space-y-1">
              {(citiesByProvince["Bari"] ?? []).slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link href={`/widia-${c.slug}`} className="text-white/50 text-xs hover:text-white transition-colors">
                    Widia {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Taranto */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Widia Taranto</h4>
            <ul className="space-y-1">
              {(citiesByProvince["Taranto"] ?? []).slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link href={`/widia-${c.slug}`} className="text-white/50 text-xs hover:text-white transition-colors">
                    Widia {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Lecce */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Widia Lecce</h4>
            <ul className="space-y-1">
              {(citiesByProvince["Lecce"] ?? []).slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link href={`/widia-${c.slug}`} className="text-white/50 text-xs hover:text-white transition-colors">
                    Widia {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* All cities for SEO */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <p className="text-xs text-white/40 mb-3">Tutte le zone servite:</p>
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/widia-${c.slug}`}
                className="text-[10px] text-white/30 hover:text-white/60 transition-colors"
              >
                Widia {c.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright + Legal */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {year} Widia Bari e Puglia - Compro Widia e Carburo di Tungsteno. Tutti i diritti riservati.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Cookie Policy
            </Link>
            <Link href="/termini-di-servizio" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Termini di Servizio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
