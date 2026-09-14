import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const services: { title: string; body: string; badge?: string }[] = [
  {
    title: "Periodisk syn",
    body: "For personbil, varebil og motorcykel — det lovpligtige syn med grundig gennemgang.",
  },
  {
    title: "Omsyn",
    body: "Omsyn efter udbedring af fejl på personbil, varebil, motorcykel eller påhængskøretøj.",
    badge: "Fra 299 kr",
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
    title: "Registreringssyn",
    body: "Til import, ombygning og ændringer i Motorregisteret (DMR). Vi sørger for en enkel proces.",
  },
  {
    title: "Motorkontor",
    body: "Vi hjælper med nummerplader, afmelding, omregistrering og andre opgaver i Motorregisteret.",
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
            Bilsyn og motorkontor under samme tag
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Få klaret syn og nummerplader ét sted — nemt, hurtigt og enkelt.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          <ScrollReveal className="md:col-span-2">
            <a
              href="#batteritest"
              className="group flex h-full flex-col justify-between gap-5 rounded-xl border border-border border-l-4 border-l-[color:var(--brand-red)] bg-[color:var(--brand-charcoal)] p-6 text-white transition-shadow hover:shadow-md sm:flex-row sm:items-center"
            >
              <div className="min-w-0">
                <span className="inline-flex items-center rounded-full bg-[color:var(--brand-red)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  Nyhed
                </span>
                <h3 className="mt-3 text-base font-bold">Batteritest af elbil</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Grundig test af højvoltsbatteriet — med dokumenteret battericertifikat. Vi kører
                  også ud til bilen i Herning Kommune.
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold">
                Fra 995 kr
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </a>
          </ScrollReveal>

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
