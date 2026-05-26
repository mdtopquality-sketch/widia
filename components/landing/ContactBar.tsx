import { MessageCircle } from "lucide-react";
import { WA_LINK } from "@/data/widia-content";

export default function ContactBar() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 z-50 flex items-center gap-2 bg-[hsl(142,70%,35%)] hover:bg-[hsl(142,70%,30%)] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-semibold text-sm group"
      aria-label="Scrivici su WhatsApp"
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
