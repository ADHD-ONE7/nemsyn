import { ArrowRight } from "lucide-react";
import videoUrl from "@/assets/hero-video.mp4";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative mx-auto max-w-4xl px-4 py-40 text-center sm:px-6 md:py-56 lg:px-8 lg:py-72">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          Herning · Midtjylland
        </span>
        <h1 className="mt-6 text-3xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
          Dit bilsyn –{" "}
          <span className="text-[color:var(--brand-red)]">vores ansvar</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/90 sm:text-xl">
          Drive ind synshal hvor du også har mulighed for booking online eller over telefonen, med dyb faglighed i fokus.
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
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/20 sm:w-auto"
          >
            Se priser
          </a>
        </div>
      </div>
    </section>
  );
}
