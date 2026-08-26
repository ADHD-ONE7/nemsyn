import {
  Car,
  Search,
  Smartphone,
  Handshake,
  Star,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import showcaseImage from "@/assets/nemsyn-hero.jpg";

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
      "Vores synsmænd har teknisk erfaring og faglig viden. Du får et grundigt syn – ikke bare et stempel.",
  },
  {
    icon: Smartphone,
    title: "Book online — 24/7",
    body:
      "Tidsbestilling direkte fra mobilen, når det passer dig. Ingen telefonkø, ingen ventetid på svar.",
  },
  {
    icon: Handshake,
    title: "Personlig service",
    body:
      "Hos os møder du synsmænd, der tager sig tid til både din bil og dine spørgsmål.",
  },
];

export function Features() {
  return (
    <section
      className="relative py-20 md:py-28 bg-cover bg-center"
      style={{ backgroundImage: `url(${showcaseImage})` }}
    >
      <div className="absolute inset-0 bg-white/20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-64 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <ScrollReveal key={f.title} delay={i * 60}>
                <article className="group h-full rounded-2xl border border-white/20 bg-white/45 p-7 transition-all hover:-translate-y-1 hover:border-[color:var(--brand-red)]/30 hover:shadow-[0_20px_40px_-20px_rgba(36,43,48,0.2)] backdrop-blur">
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
