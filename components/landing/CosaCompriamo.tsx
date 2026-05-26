import Image from "next/image";
import { materialiAcquistati } from "@/data/widia-content";

export default function CosaCompriamo() {
  return (
    <section id="cosa-compriamo" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2>Cosa Compriamo</h2>
        <p className="mt-4 mb-12 text-muted-foreground max-w-2xl">
          Compriamo Widia e metallo duro in qualsiasi forma e quantità.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {materialiAcquistati.map((m) => (
            <div
              key={m.nome}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="mb-2">{m.nome}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Image
            src="/images/widia-inserts.jpg"
            alt="Inserti in widia carburo di tungsteno"
            width={600}
            height={450}
            className="rounded-2xl shadow-md w-full object-cover aspect-[4/3]"
            loading="lazy"
          />
          <Image
            src="/images/widia-scrap.jpg"
            alt="Rottami e scarti di widia metallo duro"
            width={600}
            height={450}
            className="rounded-2xl shadow-md w-full object-cover aspect-[4/3]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
