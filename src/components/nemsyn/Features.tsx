import {
  Car,
  Search,
  Smartphone,
  ClipboardList,
  Star,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const features: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Car,
    title: "Drive-in synshal",
    body:
      "Kør direkte ind i hallen og bliv betjent i vores åbningstider. Du er altid velkommen — vi tager dig i den rækkefølge du ankommer.",
  },
  {
    icon: Search,
    title: "Teknisk ekspertise i fokus",
    body:
      "Vores synsmænd har baggrund i automotive og teknisk fagområde. Du får et syn med faglig dybde, ikke bare et stempel.",
  },
  {
    icon: Smartphone,
    title: "Book online — 24/7",
    body:
      "Tidsbestilling direkte fra mobilen, når det passer dig. Ingen telefonkø, ingen ventetid på svar.",
  },
  {
    icon: ClipboardList,
    title: "Gennemsigtige priser",
    body:
      "Faste priser uden skjulte tillæg. Du ved præcis hvad det koster, før du booker — ingen ubehagelige overraskelser.",
  },
  {
    icon: Star,
    title: "Klar besked — ingen overraskelser",
    body:
      "Du får en præcis gennemgang af hvad der er godkendt, hvad der skal udbedres og hvad det koster at rette. Ingen teknisk snak uden forklaring.",
  },
];

export function Features() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-red)]">
            Fordele
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            Hvorfor vælge NemSyn
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Konkrete fordele — ikke tomme løfter. Sådan gør vi bilsyn nemmere.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <ScrollReveal key={f.title} delay={i * 60}>
                <article className="group h-full rounded-2xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:border-[color:var(--brand-red)]/30 hover:shadow-[0_20px_40px_-20px_rgba(36,43,48,0.2)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--brand-red)]/10 text-[color:var(--brand-red)] transition-colors group-hover:bg-[color:var(--brand-red)] group-hover:text-white">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {f.body}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
