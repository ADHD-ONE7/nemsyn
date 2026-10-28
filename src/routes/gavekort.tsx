import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/nemsyn/Navbar";
import { Footer } from "@/components/nemsyn/Footer";
import { CallBubble } from "@/components/nemsyn/CallBubble";

const description =
  "Betingelser for NemSyns gratis gavekort på 100 kr. og 50 kr. — hvad de kan bruges til, og hvilke regler der gælder.";

export const Route = createFileRoute("/gavekort")({
  head: () => ({
    meta: [
      { title: "Betingelser for gavekort – NemSyn" },
      { name: "description", content: description },
      { property: "og:title", content: "Betingelser for gavekort – NemSyn" },
      { property: "og:description", content: description },
    ],
  }),
  component: Gavekort,
});

const cards = [
  {
    amount: "100 kr.",
    text: "Giver 100 kr. i rabat ved syn af køretøjer hos NemSyn.",
    note: "Gavekortet kan ikke anvendes til øvrige ydelser eller produkter.",
  },
  {
    amount: "50 kr.",
    text: "Giver 50 kr. i rabat på alle ydelser, der udføres af NemSyn.",
    note: "Gavekortet kan ikke anvendes ved køb af produkter, herunder nummerplader og miljøzonemærker.",
  },
];

const terms = [
  "Gavekortene udleveres gratis og fungerer udelukkende som rabat ved køb af de omfattede ydelser.",
  "Gavekortene kan ikke ombyttes til kontanter.",
  "Det originale gavekort skal medbringes og afleveres ved betaling.",
  "Hvert gavekort kan kun anvendes én gang.",
  "Der kan maksimalt anvendes ét gavekort pr. betaling.",
  "Gavekortene kan ikke kombineres med andre rabatter eller kampagnetilbud.",
  "Rabatten kan ikke overstige prisen på den pågældende ydelse, og en eventuel resterende rabatværdi udbetales ikke.",
];

function Gavekort() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="bg-[color:var(--brand-bg)] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-red)]">
            Gavekort
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            Betingelser for gavekort
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Hos NemSyn uddeler vi gratis gavekort som en del af vores markedsføring.
            Gavekortene giver rabat på udvalgte ydelser hos NemSyn ApS.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {cards.map((c) => (
              <div
                key={c.amount}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-muted-foreground">Gavekort på</p>
                <p className="mt-1 text-3xl font-extrabold text-[color:var(--brand-red)]">
                  {c.amount}
                </p>
                <p className="mt-4 text-sm text-foreground">{c.text}</p>
                <p className="mt-3 text-sm text-muted-foreground">{c.note}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-14 text-2xl font-extrabold text-foreground">Generelle betingelser</h2>
          <ol className="mt-5 space-y-3">
            {terms.map((t, i) => (
              <li key={i} className="flex gap-4 rounded-xl bg-white p-4 text-sm text-foreground shadow-sm">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-red)] text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="pt-1">{t}</span>
              </li>
            ))}
          </ol>

          <address className="mt-14 space-y-1 border-t border-border pt-8 text-sm not-italic text-muted-foreground">
            <p className="font-semibold text-foreground">NemSyn ApS</p>
            <p>Nr. Lindvej 1, 7400 Herning</p>
            <p>
              Telefon:{" "}
              <a href="tel:+4555222506" className="hover:text-[color:var(--brand-red)]">
                55 22 25 06
              </a>
            </p>
            <p>
              <a href="/" className="hover:text-[color:var(--brand-red)]">
                www.nemsyn.dk
              </a>
            </p>
          </address>
        </div>
      </main>
      <Footer />
      <CallBubble />
    </div>
  );
}
