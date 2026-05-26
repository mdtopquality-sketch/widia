import { MessageCircle } from "lucide-react";
import { WA_LINK } from "@/data/widia-content";

export default function ContactBar() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivici su WhatsApp"
      className="fixed bottom-10 right-6 z-50 flex items-center gap-3 bg-[hsl(142,70%,35%)] hover:bg-[hsl(142,70%,30%)] text-white pl-4 pr-5 py-3.5 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.18)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 transition-all duration-200 font-semibold text-sm"
    >
      <span className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-xl">
        <MessageCircle size={18} className="fill-white/30" />
      </span>
      <span className="hidden sm:inline tracking-wide">Scrivici su WhatsApp</span>
    </a>
  );
}
