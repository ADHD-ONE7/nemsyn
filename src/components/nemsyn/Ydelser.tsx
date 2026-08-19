import { ScrollReveal } from "./ScrollReveal";

const services: { title: string; body: string; badge?: string }[] = [
  {
    title: "Periodisk syn",
    body: "For personbil, varebil og motorcykel — det lovpligtige syn med grundig gennemgang.",
  },
  {
    title: "Registreringssyn",
    body: "Syn ved ejerskifte, import eller ombygning. Vi klarer papirarbejdet med.",
  },
  {
    title: "Toldsyn",
    body: "Toldsyn af importerede køretøjer forud for registrering i Danmark.",
  },
  {
    title: "Lille omsyn",
    body: "Gælder ved maks. 3 fejl, som kan kontrolleres uden brug af kontroludstyr som lift, bremsefelt eller lignende.",
    badge: "Fra 199 kr",
  },
  {
    title: "Omsyn",
    body: "Omsyn efter udbedring af fejl på personbil, varebil, motorcykel eller påhængskøretøj.",
    badge: "Fra 299 kr",
  },
  {
    title: "Nummerplader & omregistrering",
    body: "Nummerplader, afmelding, omregistrering, brugtbilsattest og tyske miljømærker.",
  },
];

export function Ydelser() {
  return (
    <section id="ydelser" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-red)]">
            Ydelser
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            Alt inden for bilsyn — ét sted
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Vi tilbyder hele paletten af syn og diagnostik til privat og erhverv.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 40}>
              <article className="h-full rounded-xl border border-border border-l-4 border-l-[color:var(--brand-red)] bg-white p-6 transition-shadow hover:shadow-md">
                <h3 className="text-base font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                {s.badge && (
                  <span className="mt-3 inline-flex items-center rounded-full bg-[color:var(--brand-red)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--brand-red)]">
                    {s.badge}
                  </span>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
