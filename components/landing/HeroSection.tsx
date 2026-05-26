import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { WA_LINK } from "@/data/widia-content";

interface HeroSectionProps {
  cityName?: string;
}

export default function HeroSection({ cityName }: HeroSectionProps) {
  const title = cityName ? `Widia ${cityName}` : "Widia Bari e Puglia";
  const subtitle = cityName
    ? `Compriamo Widia, carburo di tungsteno, metallo duro e rottami in zona ${cityName} e dintorni.`
    : "Compriamo Widia, carburo di tungsteno, metallo duro e rottami metallici in tutta la Puglia.";

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1>{title}</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">{subtitle}</p>
            <div className="mt-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[hsl(142,70%,35%)] hover:bg-[hsl(142,70%,30%)] text-white px-8 py-4 rounded-xl text-base font-semibold transition-colors"
              >
                <MessageCircle size={20} />
                Scrivici su WhatsApp
              </a>
            </div>
          </div>
          <div>
            <Image
              src="/images/widia-hero.jpg"
              alt={`Widia carburo di tungsteno ${cityName ?? "Puglia"} - frese punte inserti metallo duro`}
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl w-full"
              priority
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
