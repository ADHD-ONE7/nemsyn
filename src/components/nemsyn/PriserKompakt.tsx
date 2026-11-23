import { BatteryCharging } from "lucide-react";

/**
 * Compact price list: the same three prices (syn / omsyn / lille omsyn) are
 * shared by several vehicle types and by both periodic and registration
 * inspections, so they are shown once as a matrix instead of one card each.
 * Prices must stay in sync with Priser.tsx until that one is replaced.
 */
const synRows = [
  {
    vehicle: "Personbil og varebil",
    note: "Periodisk syn og registreringssyn",
    prices: ["599", "349", "199"],
  },
  {
    vehicle: "Motorcykel og påhængskøretøj op til 750 kg",
    note: "Registreringssyn",
    prices: ["399", "349", "199"],
  },
];

const extras: { title: string; items: { name: string; hint?: string; price: string }[] }[] = [
  {
    title: "Tillæg ved syn",
    items: [
      { name: "Toldsyn", hint: "Ved import eller eksport", price: "499 kr" },
      { name: "Indscanning til FS", hint: "Ved toldsyn, konstruktive ændringer mv.", price: "99 kr" },
      { name: "Registrering af konstruktive ændringer", price: "299 kr" },
      { name: "Brugtbilsattest", hint: "Inkl. syn", price: "1.499 kr" },
    ],
  },
  {
    title: "Motorkontor",
    items: [
      { name: "Omregistrering", hint: "Ejerskifte", price: "499 kr" },
      { name: "Nummerplader", hint: "1 sæt / 1 stk.", price: "1.495 / 849 kr" },
      { name: "Afmelding af nummerplader", price: "100 kr" },
      { name: "Tysk miljømærke", hint: "Grøn / blå", price: "200 / 250 kr" },
    ],
  },
];

export function PriserKompakt() {
  return (
    <section id="priser" className="bg-[color:var(--brand-bg)] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-red)]">
            Priser
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            Faste priser — ingen skjulte tillæg
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Alle priser er inkl. moms og myndighedsgebyrer.
          </p>
        </div>

        {/* Syn matrix */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[color:var(--brand-charcoal)] text-white">
                <th scope="col" className="px-3 py-3 text-xs font-semibold uppercase tracking-wider sm:px-6">
                  Bilsyn
                </th>
                {["Syn", "Omsyn", "Lille omsyn"].map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="px-2 py-3 text-right text-xs font-semibold uppercase tracking-wider sm:px-6"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {synRows.map((r) => (
                <tr key={r.vehicle}>
                  <th scope="row" className="px-3 py-4 align-top sm:px-6">
                    <span className="block text-sm font-bold text-foreground sm:text-base">
                      {r.vehicle}
                    </span>
                    <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                      {r.note}
                    </span>
                  </th>
                  {r.prices.map((p, i) => (
                    <td
                      key={i}
                      className={`whitespace-nowrap px-2 py-4 text-right align-top font-extrabold sm:px-6 ${
                        i === 0
                          ? "text-base text-[color:var(--brand-red)] sm:text-xl"
                          : "text-sm text-foreground sm:text-lg"
                      }`}
                    >
                      {p} kr
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="border-t border-border bg-[color:var(--brand-bg)] px-3 py-3 text-xs text-muted-foreground sm:px-6">
            <span className="font-semibold text-foreground">Lille omsyn</span> gælder ved højst 3
            fejl, som kan kontrolleres uden lift, bremsefelt eller andet kontroludstyr.
          </p>
        </div>

        {/* Battery test highlight */}
        <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-[color:var(--brand-charcoal)] p-6 text-white sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <BatteryCharging size={24} className="mt-0.5 shrink-0 text-[color:var(--brand-red)]" />
            <div>
              <p className="font-bold">Batteritest af elbil</p>
              <p className="mt-1 text-sm text-white/70">Inkl. battericertifikat</p>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-6 text-sm sm:text-right">
            <div>
              <dt className="text-white/70">I synshallen</dt>
              <dd className="text-xl font-extrabold">995 kr</dd>
            </div>
            <div>
              <dt className="text-white/70">Vi kører ud*</dt>
              <dd className="text-xl font-extrabold">1.499 kr</dd>
            </div>
          </dl>
        </div>
        <p className="mt-2 text-right text-xs text-muted-foreground">
          * Inden for Herning Kommune
        </p>

        {/* Other services */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {extras.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-white p-6">
              <h3 className="text-lg font-extrabold text-foreground">{g.title}</h3>
              <ul className="mt-4 divide-y divide-border">
                {g.items.map((it) => (
                  <li key={it.name} className="flex items-baseline justify-between gap-4 py-2.5">
                    <span className="min-w-0 text-sm text-foreground">
                      {it.name}
                      {it.hint && (
                        <span className="block text-xs text-muted-foreground">{it.hint}</span>
                      )}
                    </span>
                    <span className="shrink-0 text-sm font-bold text-foreground">{it.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
