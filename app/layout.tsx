import type { Metadata } from "next";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/data/widia-content";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Ritiro Widia, Carburo di Tungsteno e Metallo Duro`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Acquisto Widia, carburo di tungsteno, metallo duro, inserti, frese, punte e rottami in tutta la Puglia. Ritiro gratuito, valutazione trasparente, pagamento immediato.",
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
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
