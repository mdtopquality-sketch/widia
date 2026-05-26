import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL, SITE_EMAIL } from "@/data/widia-content";

export const metadata: Metadata = {
  title: "Termini di Servizio",
  description: "Termini e condizioni di utilizzo del sito widiabariepuglia.it.",
  alternates: { canonical: `${SITE_URL}/termini-di-servizio` },
  robots: { index: true, follow: true },
};

export default function TerminiDiServizio() {
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
        <h1 className="text-3xl font-bold mb-2">Termini di Servizio</h1>
        <p className="text-muted-foreground mb-10 text-sm">
          Ultimo aggiornamento: maggio 2026
        </p>

        <div className="space-y-8 text-foreground">

          <section>
            <h2 className="text-xl font-semibold mb-3">1. Accettazione dei Termini</h2>
            <p className="text-muted-foreground leading-relaxed">
              Accedendo e utilizzando il sito <strong className="text-foreground">widiabariepuglia.it</strong>,
              l&apos;utente accetta integralmente i presenti Termini di Servizio. In caso di disaccordo,
              si prega di non utilizzare il sito.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Descrizione del Servizio</h2>
            <p className="text-muted-foreground leading-relaxed">
              {SITE_NAME} è un servizio di acquisto e ritiro di Widia (carburo di tungsteno cementato),
              metallo duro, inserti, frese, punte e rottami metallici in tutta la regione Puglia.
              Il sito ha finalità informativa e di contatto: non effettua vendite online né transazioni digitali.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Utilizzo del Sito</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">L&apos;utente si impegna a:</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Utilizzare il sito esclusivamente per finalità lecite</li>
              <li>Non tentare di accedere in modo non autorizzato a sistemi o dati</li>
              <li>Non inviare comunicazioni spam, fraudolente o offensive tramite WhatsApp</li>
              <li>Fornire informazioni veritiere nelle richieste di valutazione materiali</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Valutazioni e Prezzi</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le valutazioni economiche dei materiali sono indicative e soggette a verifica fisica al momento
              del ritiro. Il prezzo definitivo è concordato al momento del ritiro, in base al peso verificato
              con bilancia certificata e alla qualità effettiva del materiale. Nessuna valutazione comunicata
              via WhatsApp è vincolante prima della verifica fisica.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Proprietà Intellettuale</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tutti i contenuti del sito (testi, immagini, loghi, grafica) sono di proprietà di {SITE_NAME}
              o dei rispettivi titolari e sono protetti dalla normativa sul diritto d&apos;autore.
              È vietata la riproduzione, distribuzione o utilizzo commerciale senza previa autorizzazione scritta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Limitazione di Responsabilità</h2>
            <p className="text-muted-foreground leading-relaxed">
              {SITE_NAME} non garantisce la continuità del servizio né l&apos;assenza di errori nel sito.
              Le informazioni sui prezzi di mercato del tungsteno hanno valore puramente indicativo.
              Il Titolare non è responsabile per eventuali danni diretti o indiretti derivanti dall&apos;utilizzo
              del sito o dall&apos;impossibilità di accedervi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Link Esterni</h2>
            <p className="text-muted-foreground leading-relaxed">
              Il sito contiene link a servizi di terze parti (WhatsApp/Meta). {SITE_NAME} non ha controllo
              su tali servizi e non è responsabile dei loro contenuti, politiche sulla privacy o funzionamento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Legge Applicabile e Foro Competente</h2>
            <p className="text-muted-foreground leading-relaxed">
              I presenti Termini sono regolati dalla legge italiana. Per qualsiasi controversia derivante
              dall&apos;utilizzo del sito, è competente in via esclusiva il Foro di Bari.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Modifiche ai Termini</h2>
            <p className="text-muted-foreground leading-relaxed">
              {SITE_NAME} si riserva il diritto di modificare i presenti Termini in qualsiasi momento.
              Le modifiche entrano in vigore dalla data di pubblicazione sul sito. L&apos;utilizzo continuato
              del sito dopo la pubblicazione costituisce accettazione delle modifiche.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">10. Contatti</h2>
            <p className="text-muted-foreground leading-relaxed">
              Per qualsiasi domanda relativa ai presenti Termini:{" "}
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
