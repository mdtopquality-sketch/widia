import { MessageCircle } from "lucide-react";
import { WA_LINK } from "@/data/widia-content";

export default function ContactBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-4 bg-[hsl(142,70%,35%)] hover:bg-[hsl(142,70%,30%)] text-white text-sm font-semibold w-full transition-colors"
      >
        <MessageCircle size={20} />
        SCRIVICI SU WHATSAPP
      </a>
    </div>
  );
}
