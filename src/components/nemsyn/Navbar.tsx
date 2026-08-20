import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoUrl from "@/assets/nemsyn-logo-menu.png";

const links = [
  { href: "#om", label: "Om os" },
  { href: "#ydelser", label: "Ydelser" },
  { href: "#priser", label: "Priser" },
  { href: "#find", label: "Find os" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-transparent bg-gray-50 transition-all ${
        scrolled ? "border-border py-2 shadow-[0_2px_16px_-8px_rgba(36,43,48,0.15)]" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 pl-6 pr-4 sm:pr-6 lg:pr-8">
        <a href="#top" className="flex shrink-0 items-center" aria-label="NemSyn forside">
          <img
            src={logoUrl}
            alt="NemSyn"
            className={`h-auto transition-all duration-300 ${scrolled ? "max-w-40 max-h-9" : "max-w-56 max-h-12"}`}
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-[color:var(--brand-red)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--brand-red)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#b40e12] hover:shadow-md"
          >
            Book tid
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground md:hidden"
            aria-label={open ? "Luk menu" : "Åbn menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[64px] bottom-0 z-40 bg-white transition-all duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-4 text-lg font-semibold text-foreground bg-[color:var(--brand-neutral)] transition-colors hover:bg-[color:var(--brand-red)] hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-[color:var(--brand-red)] px-5 py-4 text-base font-semibold text-white"
          >
            Book tid
          </a>
        </nav>
      </div>
    </header>
  );
}
