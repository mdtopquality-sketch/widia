import Image from "next/image";
import { widiaHistory } from "@/data/widia-content";

function parseWidiaMarkdown(text: string) {
  const blocks = text.split("\n\n").filter(Boolean);

  return blocks.map((block, i) => {
    if (block.startsWith("### ")) {
      return (
        <h3 key={i} className="mt-8 mb-3 text-xl font-semibold text-foreground">
          {block.replace("### ", "")}
        </h3>
      );
    }

    if (block.startsWith("- ") || block.includes("\n- ")) {
      const items = block.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i} className="my-3 space-y-2">
          {items.map((item, j) => {
            const content = item.replace("- ", "");
            return (
              <li key={j} className="text-sm text-muted-foreground leading-relaxed pl-5 relative">
                <span className="absolute left-1 top-0 text-primary">•</span>
                <span dangerouslySetInnerHTML={{ __html: renderInline(content) }} />
              </li>
            );
          })}
        </ul>
      );
    }

    return (
      <p
        key={i}
        className="text-muted-foreground leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: renderInline(block) }}
      />
    );
  });
}

function renderInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

export default function AboutSection() {
  return (
    <section id="cos-e-il-widia" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2>Cos&apos;è il Widia</h2>
        <p className="mt-4 mb-12 text-muted-foreground max-w-2xl">
          Tutto quello che c&apos;è da sapere sul carburo di tungsteno cementato: storia, proprietà e applicazioni.
        </p>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {parseWidiaMarkdown(widiaHistory)}
          </div>
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <Image
                src="/images/widia-closeup.jpg"
                alt="Widia carburo di tungsteno - dettaglio materiale"
                width={500}
                height={700}
                className="rounded-2xl shadow-md w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
