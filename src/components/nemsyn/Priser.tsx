import { ScrollReveal } from "./ScrollReveal";

const groups: { title: string; items: { name: string; detail: string; price: string }[] }[] = [
  {
    title: "Periodisk syn",
    items: [
      { name: "Personbil", detail: "Syn", price: "599 kr" },
      { name: "Personbil", detail: "Omsyn", price: "349 kr" },
      { name: "Personbil", detail: "Lille omsyn", price: "199 kr" },
      { name: "Varebil", detail: "Syn", price: "599 kr" },
      { name: "Varebil", detail: "Omsyn", price: "349 kr" },
      { name: "Varebil", detail: "Lille omsyn", price: "199 kr" },
    ],
  },
  {
    title: "Registreringssyn",
    items: [
      { name: "Personbil", detail: "Syn", price: "599 kr" },
      { name: "Personbil", detail: "Omsyn", price: "349 kr" },
      { name: "Personbil", detail: "Lille omsyn", price: "199 kr" },
      { name: "Varebil", detail: "Syn", price: "599 kr" },
      { name: "Varebil", detail: "Omsyn", price: "349 kr" },
      { name: "Varebil", detail: "Lille omsyn", price: "199 kr" },
      { name: "Motorcykel", detail: "Syn", price: "399 kr" },
      { name: "Motorcykel", detail: "Omsyn", price: "349 kr" },
      { name: "Motorcykel", detail: "Lille omsyn", price: "199 kr" },
      { name: "Påhængskøretøj op til 750 kg", detail: "Syn", price: "399 kr" },
      { name: "Påhængskøretøj op til 750 kg", detail: "Omsyn", price: "349 kr" },
      { name: "Påhængskøretøj op til 750 kg", detail: "Lille omsyn", price: "199 kr" },
    ],
  },
  {
    title: "Øvrige ydelser",
    items: [
      { name: "Toldsyn", detail: "Tillæg til registreringssyn ved import eller eksport af køretøjer", price: "499 kr" },
      { name: "Indscanning til FS", detail: "Tillæg ved toldsyn, konstruktive ændringer mv.", price: "99 kr" },
      { name: "Afmelding af nummerplader", detail: "Pr. afmelding", price: "100 kr" },
      { name: "Miljømærke Grøn", detail: "Tysk miljømærke", price: "200 kr" },
      { name: "Miljømærke Blå", detail: "Tysk miljømærke", price: "250 kr" },
      { name: "Registrering af konstruktive ændringer", detail: "Pr. registrering", price: "299 kr" },
      { name: "Brugtbilsattest", detail: "Inkl. syn", price: "1.499 kr" },
      { name: "Nummerplader", detail: "1 sæt", price: "1.495 kr" },
      { name: "Nummerplade", detail: "1 stk.", price: "849 kr" },
      { name: "Omregistrering", detail: "Ejerskifte", price: "499 kr" },
    ],
  },
];

export function Priser() {
  return (
    <section id="priser" className="bg-[color:var(--brand-bg)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-red)]">
            Priser
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            Faste priser — ingen skjulte tillæg
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Du ved altid præcis hvad det koster, før du booker.
          </p>
        </ScrollReveal>

        <div className="mt-14 space-y-12">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-xl font-extrabold text-foreground">{g.title}</h3>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((p, i) => (
                  <ScrollReveal key={`${g.title}-${p.name}-${p.detail}`} delay={i * 30}>
                    <article className="flex h-full items-center justify-between gap-4 rounded-xl border border-border border-l-4 border-l-[color:var(--brand-red)] bg-white p-6 transition-shadow hover:shadow-md">
                      <div className="min-w-0">
                        <h4 className="text-base font-bold text-foreground">{p.name}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{p.detail}</p>
                      </div>
                      <p className="shrink-0 text-base font-extrabold text-[color:var(--brand-red)] sm:text-lg">
                        {p.price}
                      </p>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          <strong className="font-semibold text-foreground">
            Lille omsyn gælder ved højst 3 fejl, som kan kontrolleres uden brug
            af lift, bremsefelt eller andet kontroludstyr.
          </strong>{" "}
          Alle priser er inkl. moms og myndighedsgebyrer.
        </p>
      </div>
    </section>
  );
}
