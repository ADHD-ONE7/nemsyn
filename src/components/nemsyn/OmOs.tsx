import { MapPin, Award } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import omOsUrl from "@/assets/nemsyn-hal.jpg";

export function OmOs() {
  return (
    <section id="om" className="bg-[color:var(--brand-bg)] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-red)]">
            Om NemSyn
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            Lokal bilsynsvirksomhed med teknisk fokus
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            NemSyn ApS er en moderne synshal på Nr. Lindvej 1 i Herning, der
            forener drive-in bekvemmelighed med teknisk faglighed. Ærlighed,
            gennemsigtighed og kvalitet er fundamentet for vores service.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Uanset om det er periodisk syn, registreringssyn eller omsyn,
            leverer vi et professionelt bilsyn — hurtigt og uden overraskelser.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[color:var(--brand-red)] shadow-sm">
                <MapPin size={20} />
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-foreground">Nr. Lindvej 1, Herning</p>
                <p className="text-sm text-muted-foreground">Central beliggenhed i Midtjylland</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[color:var(--brand-red)] shadow-sm">
                <Award size={20} />
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-foreground">Ærlighed & kvalitet</p>
                <p className="text-sm text-muted-foreground">Faglig dybde i hvert syn</p>
              </div>
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[color:var(--brand-red)]/8" />
            <img
              src={omOsUrl}
              alt="NemSyn synshal i Herning med lift og venteområde"
              width={1820}
              height={845}
              loading="lazy"
              className="relative aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-[0_25px_60px_-20px_rgba(36,43,48,0.3)] sm:aspect-[16/9] lg:aspect-[4/3]"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
