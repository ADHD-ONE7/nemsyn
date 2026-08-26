import logoUrl from "@/assets/nemsyn-logo-navbar.png";

const links = [
  { href: "#om", label: "Om os" },
  { href: "#ydelser", label: "Ydelser" },
  { href: "#priser", label: "Priser" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer className="bg-[color:var(--brand-charcoal)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <img
              src={logoUrl}
              alt="NemSyn — dit bilsyn, vores ansvar"
              className="h-14 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
              Genveje
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/85 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
              Kontakt
            </p>
            <address className="mt-4 space-y-1 text-sm not-italic text-white/85">
              <p>NemSyn ApS</p>
              <p>Nr. Lindvej 1, 7400 Herning</p>
              <p>
                <a href="tel:+4555222506" className="hover:text-white">55 22 25 06</a>
              </p>
              <p>CVR-nr.: 45410595</p>
            </address>
            <div className="mt-4 text-xs text-white/60">
              <p className="font-semibold text-white/80">Åbningstider</p>
              <p className="mt-1">Man – tor: 08:00 – 16:00</p>
              <p>Fre: 08:00 – 15:00</p>
              <p>1. lørdag i mdr.: 08:00 – 12:00</p>
              <p>Søn: Lukket</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>© 2026 NemSyn ApS. Alle rettigheder forbeholdes.</p>
          <p>Herning · Midtjylland</p>
        </div>
      </div>
    </footer>
  );
}
