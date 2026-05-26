import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL, SITE_EMAIL } from "@/data/widia-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Informativa sul trattamento dei dati personali ai sensi del GDPR - Regolamento UE 2016/679.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10 text-sm">
          Ultimo aggiornamento: maggio 2026
        </p>

        <div className="prose prose-gray max-w-none space-y-8 text-foreground">

          <section>
            <h2 className="text-xl font-semibold mb-3">1. Titolare del Trattamento</h2>
            <p className="text-muted-foreground leading-relaxed">
              Il Titolare del trattamento dei dati personali è <strong className="text-foreground">{SITE_NAME}</strong>,
              contattabile all&apos;indirizzo email: <a href={`mailto:${SITE_EMAIL}`} className="text-primary underline">{SITE_EMAIL}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Tipologie di Dati Raccolti</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Il presente sito non raccoglie dati personali tramite form o registrazioni. L&apos;unico canale di
              contatto è WhatsApp, un servizio di terze parti gestito da Meta Platforms Ireland Ltd.
              I dati eventualmente forniti tramite WhatsApp (nome, numero di telefono, messaggi) sono trattati
              esclusivamente per rispondere alle richieste degli utenti.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Vengono inoltre raccolti automaticamente dati tecnici di navigazione (indirizzo IP, tipo di browser,
              pagine visitate, orario di accesso) attraverso i log del server e strumenti di analisi anonimi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Finalità del Trattamento</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Rispondere alle richieste di preventivo e ritiro Widia inviate tramite WhatsApp</li>
              <li>Garantire il corretto funzionamento del sito web</li>
              <li>Analisi aggregata e anonima del traffico per migliorare il servizio</li>
              <li>Adempimento di obblighi legali</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Base Giuridica</h2>
            <p className="text-muted-foreground leading-relaxed">
              Il trattamento si basa sul consenso dell&apos;interessato (art. 6, par. 1, lett. a GDPR) per le
              comunicazioni tramite WhatsApp, e sul legittimo interesse del Titolare (art. 6, par. 1, lett. f GDPR)
              per i dati tecnici di navigazione.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Conservazione dei Dati</h2>
            <p className="text-muted-foreground leading-relaxed">
              I dati di contatto forniti tramite WhatsApp sono conservati per il tempo strettamente necessario
              a evadere la richiesta e, successivamente, per un massimo di 12 mesi. I dati tecnici di navigazione
              sono conservati per un massimo di 12 mesi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Comunicazione a Terzi</h2>
            <p className="text-muted-foreground leading-relaxed">
              I dati personali non sono ceduti a terzi né diffusi, salvo obbligo di legge. Il sito è ospitato
              su infrastruttura Vercel Inc. (USA), che garantisce adeguati livelli di protezione ai sensi del
              GDPR tramite le Standard Contractual Clauses.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Diritti dell&apos;Interessato</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Ai sensi degli artt. 15-22 del GDPR, l&apos;utente ha diritto di:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Accedere ai propri dati personali</li>
              <li>Richiedere la rettifica o la cancellazione</li>
              <li>Opporsi al trattamento o richiederne la limitazione</li>
              <li>Richiedere la portabilità dei dati</li>
              <li>Revocare il consenso in qualsiasi momento</li>
              <li>Proporre reclamo all&apos;Autorità Garante per la protezione dei dati personali (www.garanteprivacy.it)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Per esercitare i propri diritti, contattare: <a href={`mailto:${SITE_EMAIL}`} className="text-primary underline">{SITE_EMAIL}</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Cookie</h2>
            <p className="text-muted-foreground leading-relaxed">
              Per informazioni dettagliate sull&apos;utilizzo dei cookie, consultare la{" "}
              <Link href="/cookie-policy" className="text-primary underline">Cookie Policy</Link>.
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
