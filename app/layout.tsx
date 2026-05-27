import type { Metadata } from "next";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/data/widia-content";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Compro Widia, Carburo di Tungsteno e Metallo Duro`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Compro Widia usato, carburo di tungsteno, metallo duro, inserti, frese, punte e rottami metallici in Puglia. Contattaci su WhatsApp.",
  keywords: [
    "compro widia",
    "compro widia usato",
    "widia bari",
    "widia puglia",
    "carburo di tungsteno",
    "metallo duro",
    "compro metallo duro",
    "acquisto widia",
    "inserti widia usati",
    "frese widia usate",
    "rottami widia",
    "compro carburo di tungsteno",
    "vendere widia",
    "vendere metallo duro",
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
