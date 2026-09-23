import { PlugZap, FileCheck2, UserCheck, Phone, ArrowRight, type LucideIcon } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const points: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: PlugZap,
    title: "Test via bilens OBD-stik",
    body: "Batteriets data aflæses direkte gennem bilens OBD-stik.",
  },
  {
    icon: FileCheck2,
    title: "Dokumenteret battericertifikat",
    body: "Efter testen modtager du et professionelt battericertifikat med testresultaterne, som kan bruges ved køb, salg eller vurdering af bilen.",
  },
  {
    icon: UserCheck,
    title: "Udføres af erfarne synsmedarbejdere",
    body: "Testen udføres af vores erfarne fagfolk efter en fast og professionel procedure.",
  },
];

const prices: { name: string; detail: string; price: string }[] = [
  {
    name: "Hos os i synshallen",
    detail: "Nr. Lindvej 1, Herning — testen udføres i vores synshal.",
    price: "995 kr",
  },
  {
    name: "Vi kører ud til dig",
    detail: "Inden for Herning Kommune — vi tester bilen dér, hvor den holder.",
    price: "1.499 kr",
  },
];

const cases: { title: string; body: string }[] = [
  {
    title: "Før du køber brugt elbil",
    body: "Få batteriets reelle tilstand på bordet, inden du skriver under.",
  },
  {
    title: "Når bilen skal sælges",
    body: "Et certifikat på et sundt batteri gør bilen lettere at sælge — og prisen lettere at forsvare.",
  },
  {
    title: "Leasing og firmabiler",
    body: "Dokumentér batteriets tilstand ved indlevering, overtagelse eller tilbagelevering.",
  },
];

export function Batteritest() {
  return (
    <section
      id="batteritest"
      style={{
        backgroundImage: `linear-gradient(rgba(36, 43, 48, 0.75), rgba(36, 43, 48, 0.75)), url('/assets/batteritest-bg.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Batteritest af elbil – med battericertifikat
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            Batteriet er elbilens dyreste komponent. Vores kvalificerede medarbejdere udfører en
            grundig test af højvoltsbatteriet og udsteder et dokumenteret battericertifikat med en
            tydelig vurdering af batteriets tilstand.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <ScrollReveal delay={120}>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-red)]">
                Priser
              </p>
              <h3 className="mt-2 text-xl font-bold text-white">
                Batteritest inkl. battericertifikat
              </h3>

              <ul className="mt-6 space-y-4">
                {prices.map((p) => (
                  <li
                    key={p.name}
                    className="flex items-start justify-between gap-4 rounded-xl border border-white/20 border-l-4 border-l-[color:var(--brand-red)] bg-white/5 p-4"
                  >
                    <div className="min-w-0">
                      <p className="text-base font-bold text-white">{p.name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-white/70">{p.detail}</p>
                    </div>
                    <p className="shrink-0 text-base font-extrabold text-[color:var(--brand-red)] sm:text-lg">
                      {p.price}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mt-6 font-semibold text-white">Bestil tid allerede i dag</p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+4555222506"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[color:var(--brand-red)] px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#b40e12] hover:shadow-md"
                >
                  <Phone size={18} />
                  Ring 55 22 25 06
                </a>
                <a
                  href="https://booking.synsdata.dk/10449-470"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:border-[color:var(--brand-red)] hover:bg-[color:var(--brand-red)]/10"
                >
                  Book tid
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </a>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-white/60">
                Priserne er inkl. moms og inkluderer battericertifikat. Vi tester de fleste el- og
                plugin-hybridmodeller. Battericertifikatet udstedes i samarbejde med AVILOO.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <ul className="space-y-6">
              {points.map((p) => {
                const Icon = p.icon;
                return (
                  <li key={p.title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color:var(--brand-red)] text-white">
                      <Icon size={20} strokeWidth={2} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-bold">{p.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-white/70">{p.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {cases.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 60}>
              <article className="h-full rounded-xl border border-white/15 bg-white/5 p-6">
                <h3 className="text-base font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{c.body}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
