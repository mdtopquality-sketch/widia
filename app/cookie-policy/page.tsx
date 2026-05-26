import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL, SITE_EMAIL } from "@/data/widia-content";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Informativa sull'utilizzo dei cookie ai sensi del D.Lgs. 196/2003 e del GDPR.",
  alternates: { canonical: `${SITE_URL}/cookie-policy` },
  robots: { index: true, follow: true },
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Widia<span className="text-primary"> Bari e Puglia</span>
          </Link>
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Torna alla Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold mb-2">Cookie Policy</h1>
        <p className="text-muted-foreground mb-10 text-sm">
          Ultimo aggiornamento: maggio 2026
        </p>

        <div className="space-y-8 text-foreground">

          <section>
            <h2 className="text-xl font-semibold mb-3">1. Cosa sono i Cookie</h2>
            <p className="text-muted-foreground leading-relaxed">
              I cookie sono piccoli file di testo che i siti web salvano sul dispositivo dell&apos;utente durante
              la navigazione. Vengono utilizzati per far funzionare il sito in modo efficiente e per fornire
              informazioni ai proprietari del sito.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Cookie Utilizzati da Questo Sito</h2>

            <h3 className="text-base font-semibold mb-2 mt-4">Cookie Tecnici (necessari)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Questo sito utilizza esclusivamente cookie tecnici strettamente necessari al funzionamento.
              Non richiedono il consenso dell&apos;utente ai sensi dell&apos;art. 122 D.Lgs. 196/2003.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-2 text-left font-semibold">Nome</th>
                    <th className="border border-border px-4 py-2 text-left font-semibold">Tipo</th>
                    <th className="border border-border px-4 py-2 text-left font-semibold">Durata</th>
                    <th className="border border-border px-4 py-2 text-left font-semibold">Scopo</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="border border-border px-4 py-2">_vercel_*</td>
                    <td className="border border-border px-4 py-2">Tecnico</td>
                    <td className="border border-border px-4 py-2">Sessione</td>
                    <td className="border border-border px-4 py-2">Gestione infrastruttura Vercel</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-base font-semibold mb-2 mt-6">Cookie di Terze Parti</h3>
            <p className="text-muted-foreground leading-relaxed">
              Il sito non installa cookie di profilazione o di terze parti. I link a WhatsApp (Meta) sono
              link esterni: Meta potrebbe installare propri cookie solo se l&apos;utente clicca e accede alla
              piattaforma WhatsApp Web, secondo la propria{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy-eea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Privacy Policy
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Come Gestire i Cookie</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Poiché questo sito utilizza solo cookie tecnici, non è richiesto alcun banner di consenso.
              È comunque possibile disabilitare i cookie dal proprio browser:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Chrome</strong>: Impostazioni → Privacy e sicurezza → Cookie</li>
              <li><strong className="text-foreground">Firefox</strong>: Opzioni → Privacy e sicurezza → Cookie</li>
              <li><strong className="text-foreground">Safari</strong>: Preferenze → Privacy → Cookie</li>
              <li><strong className="text-foreground">Edge</strong>: Impostazioni → Privacy → Cookie</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              La disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Contatti</h2>
            <p className="text-muted-foreground leading-relaxed">
              Per qualsiasi domanda relativa alla Cookie Policy, contattare:{" "}
              <a href={`mailto:${SITE_EMAIL}`} className="text-primary underline">{SITE_EMAIL}</a>
            </p>
          </section>

        </div>
      </main>

      <footer className="border-t border-border py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4 justify-between items-center text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} {SITE_NAME}</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/cookie-policy" className="hover:text-foreground transition-colors">Cookie Policy</Link>
            <Link href="/termini-di-servizio" className="hover:text-foreground transition-colors">Termini di Servizio</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
