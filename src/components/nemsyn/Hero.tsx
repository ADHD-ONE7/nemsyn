import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[color:var(--brand-bg)]">
      {/* subtle grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(36,43,48,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(36,43,48,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      {/* red glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[color:var(--brand-red)] opacity-[0.06] blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-28 lg:px-8 lg:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-red)]/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-red)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-red)]" />
          Herning · Midtjylland
        </span>
        <h1 className="mt-6 text-3xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
          Dit bilsyn –{" "}
          <span className="text-[color:var(--brand-red)]">vores ansvar</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
          Professionelt og hurtigt bilsyn i Midtjylland. Drive-in synshal med
          ærlige priser og teknisk ekspertise i fokus.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="#kontakt"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--brand-red)] px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#b40e12] hover:shadow-lg sm:w-auto"
          >
            Book tid nu
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#priser"
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-foreground/15 bg-white px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-foreground/30 hover:bg-[color:var(--brand-neutral)] sm:w-auto"
          >
            Se priser
          </a>
        </div>
      </div>
    </section>
  );
}
