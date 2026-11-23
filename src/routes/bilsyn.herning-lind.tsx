import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Phone, MapPin, Mail, Clock, Car, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/nemsyn/Navbar";
import { Footer } from "@/components/nemsyn/Footer";
import { CallBubble } from "@/components/nemsyn/CallBubble";
import { Priser } from "@/components/nemsyn/Priser";

const SITE = "https://www.nemsyn.dk";
// Cloudflare Pages serves prerendered folders with a trailing slash and 308s
// the bare path, so the canonical URL and every internal link use the slash.
const PATH = "/bilsyn/herning-lind/";
const PAGE_URL = `${SITE}${PATH}`;
const BOOKING = "https://booking.synsdata.dk/10449-470";
const PHOTO = "/images/nemsyn-bilsyn-herning-lind.jpg";
const PHOTO_BG = "/images/nemsyn-bilsyn-herning-lind-bg.jpg";

const title = "Bilsyn Herning – NemSyn i Lind, Nr. Lindvej 1 | Book tid online";
const description =
  "Drive-in bilsyn i Herning hos NemSyn, Nr. Lindvej 1, 7400 Herning (Lind). Åbent man–fre og 1. lørdag i måneden. Syn fra 599 kr. Book tid online døgnet rundt.";

const hours = [
  { day: "Mandag – torsdag", time: "08:00 – 16:00" },
  { day: "Fredag", time: "08:00 – 15:00" },
  { day: "Første lørdag i måneden", time: "08:00 – 12:00" },
  { day: "Øvrige lørdage og søndag", time: "Lukket" },
];

const services = [
  "Periodisk syn af personbil og varebil",
  "Registreringssyn og toldsyn",
  "Omsyn og lille omsyn",
  "Syn af motorcykel og påhængskøretøj op til 750 kg",
  "Batteritest af elbil med battericertifikat",
  "Nummerplader, afmelding og omregistrering",
];

const faq = [
  {
    q: "Skal jeg bestille tid til bilsyn?",
    a: "Du kan booke tid online døgnet rundt eller ringe på 55 22 25 06. Vi er en drive-in synshal, så du er også velkommen til at køre direkte ind i åbningstiden.",
  },
  {
    q: "Hvad koster et bilsyn i Herning hos NemSyn?",
    a: "Periodisk syn af personbil og varebil koster 599 kr. Omsyn koster 349 kr, og lille omsyn 199 kr. Alle priser er inkl. moms og myndighedsgebyrer.",
  },
  {
    q: "Hvad sker der, hvis bilen ikke består synet?",
    a: "Så får du en liste over fejlene og skal til omsyn, når de er udbedret. Ved højst 3 fejl, som kan kontrolleres uden lift, bremsefelt eller andet kontroludstyr, er det et lille omsyn til 199 kr.",
  },
  {
    q: "Har I åbent om lørdagen?",
    a: "Ja, den første lørdag i hver måned fra 08:00 til 12:00. Øvrige lørdage og søndage har vi lukket.",
  },
  {
    q: "Kan I teste batteriet på min elbil?",
    a: "Ja. En batteritest i synshallen koster 995 kr inkl. battericertifikat. Vi kan også køre ud til bilen inden for Herning Kommune for 1.499 kr.",
  },
  {
    q: "Hvor ligger synshallen?",
    a: "På Nr. Lindvej 1, 7400 Herning i Lind. NemSyns port ligger lige ved siden af Lind Autoværksted – kig efter det røde NemSyn-skilt.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutomotiveBusiness",
      "@id": `${PAGE_URL}#synshal`,
      name: "NemSyn – Bilsyn Herning (Lind)",
      legalName: "NemSyn ApS",
      description,
      url: PAGE_URL,
      image: `${SITE}${PHOTO}`,
      logo: `${SITE}/favicon.png`,
      telephone: "+4555222506",
      email: "info@nemsyn.dk",
      taxID: "45410595",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Nr. Lindvej 1",
        postalCode: "7400",
        addressLocality: "Herning",
        addressCountry: "DK",
      },
      hasMap: "https://www.google.com/maps?q=Nr.%20Lindvej%201%2C%207400%20Herning",
      areaServed: ["Herning", "Lind", "Ikast", "Sunds", "Vildbjerg", "Kibæk"],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "08:00",
          closes: "16:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Friday",
          opens: "08:00",
          closes: "15:00",
        },
      ],
      potentialAction: {
        "@type": "ReserveAction",
        target: BOOKING,
        name: "Book tid til bilsyn",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Forside", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Bilsyn Herning", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export const Route = createFileRoute("/bilsyn/herning-lind")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: `${SITE}${PHOTO}` },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${SITE}${PHOTO}` },
    ],
    links: [
      { rel: "canonical", href: PAGE_URL },
      { rel: "preload", as: "image", href: PHOTO_BG },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: BilsynHerningLind,
});

/** First Saturday of the month on or after today (local time). */
function nextFirstSaturday(now: Date) {
  const firstSat = (y: number, m: number) => {
    const d = new Date(y, m, 1);
    d.setDate(1 + ((6 - d.getDay() + 7) % 7));
    return d;
  };
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const thisMonth = firstSat(now.getFullYear(), now.getMonth());
  return thisMonth >= today ? thisMonth : firstSat(now.getFullYear(), now.getMonth() + 1);
}

function NextSaturday() {
  // Computed after hydration: the HTML is prerendered at build time, so a date
  // rendered on the server would be stale (and mismatch) on the next visit.
  const [label, setLabel] = useState<string | null>(null);
  useEffect(() => {
    const d = nextFirstSaturday(new Date());
    setLabel(
      d.toLocaleDateString("da-DK", { weekday: "long", day: "numeric", month: "long" }),
    );
  }, []);
  if (!label) return null;
  return (
    <p className="mt-4 rounded-xl bg-[color:var(--brand-red)]/10 px-4 py-3 text-sm text-foreground">
      Næste åbne lørdag: <span className="font-semibold">{label}</span>, 08:00 – 12:00
    </p>
  );
}

function BilsynHerningLind() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero: blurred aerial photo of the hall, headline and booking */}
        <section className="relative overflow-hidden">
          <img
            src={PHOTO_BG}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full scale-110 object-cover blur-[6px]"
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative mx-auto max-w-4xl px-4 py-28 text-center sm:px-6 md:py-40 lg:px-8">
            <nav aria-label="Brødkrumme" className="mb-6 text-xs text-white/70">
              <a href="/" className="hover:text-white">
                Forside
              </a>
              <ChevronRight size={12} className="mx-1 inline" />
              <span className="text-white">Bilsyn Herning</span>
            </nav>
            <h1 className="text-3xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Bilsyn i Herning –{" "}
              <span className="text-[color:var(--brand-red)]">NemSyn Lind</span>
            </h1>
            <p className="mx-auto mt-5 flex max-w-xl items-center justify-center gap-2 text-lg text-white/90 sm:text-xl">
              <MapPin size={20} className="shrink-0" />
              Nr. Lindvej 1, 7400 Herning
            </p>
            <p className="mx-auto mt-3 max-w-xl text-base text-white/80">
              Drive-in synshal med faste priser. Book online døgnet rundt.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={BOOKING}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--brand-red)] px-8 py-4 text-lg font-semibold text-white shadow-sm transition-all hover:bg-[#b40e12] hover:shadow-lg sm:w-auto"
              >
                Book tid nu
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="tel:+4555222506"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-colors hover:border-white/50 hover:bg-white/20 sm:w-auto"
              >
                <Phone size={20} />
                55 22 25 06
              </a>
            </div>
          </div>
        </section>

        {/* Address, contact and opening hours */}
        <section className="bg-[color:var(--brand-bg)] py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
            <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
              <h2 className="text-xl font-extrabold text-foreground">Adresse og kontakt</h2>
              <address className="mt-5 space-y-4 text-sm not-italic">
                <p className="flex gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-[color:var(--brand-red)]" />
                  <span className="text-foreground">
                    <span className="font-semibold">NemSyn ApS</span>
                    <br />
                    Nr. Lindvej 1, 7400 Herning
                  </span>
                </p>
                <p className="flex gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-[color:var(--brand-red)]" />
                  <a
                    href="tel:+4555222506"
                    className="font-medium text-foreground hover:text-[color:var(--brand-red)]"
                  >
                    55 22 25 06
                  </a>
                </p>
                <p className="flex gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-[color:var(--brand-red)]" />
                  <a
                    href="mailto:info@nemsyn.dk"
                    className="font-medium text-foreground hover:text-[color:var(--brand-red)]"
                  >
                    info@nemsyn.dk
                  </a>
                </p>
                <p className="flex gap-3">
                  <Car size={18} className="mt-0.5 shrink-0 text-[color:var(--brand-red)]" />
                  <span className="text-muted-foreground">
                    Drive-in synshal – kør direkte ind i åbningstiden, eller book tid først.
                  </span>
                </p>
              </address>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-foreground">
                <Clock size={20} className="text-[color:var(--brand-red)]" />
                Åbningstider
              </h2>
              <dl className="mt-5 divide-y divide-border text-sm">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4 py-2.5">
                    <dt className="text-muted-foreground">{h.day}</dt>
                    <dd className="font-semibold text-foreground">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs text-muted-foreground">Lukket på helligdage.</p>
              <NextSaturday />
            </div>
          </div>
        </section>

        {/* How to find us: sharp aerial photo + map */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-red)]">
                Find vej
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
                Sådan finder du NemSyn i Lind
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Synshallen ligger på Nr. Lindvej 1 i Lind ved Herning – nemt at nå fra Herning
                centrum, Ikast, Sunds, Vildbjerg og Kibæk. NemSyns port ligger lige ved siden af
                Lind Autoværksted. Kig efter det røde NemSyn-skilt.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <figure className="overflow-hidden rounded-2xl border border-border shadow-sm">
                <img
                  src={PHOTO}
                  alt="NemSyn bilsyn i Herning set fra luften – synshallen på Nr. Lindvej 1 i Lind"
                  width={1200}
                  height={1600}
                  loading="lazy"
                  className="h-full max-h-[640px] w-full object-cover"
                />
                <figcaption className="sr-only">
                  Luftfoto af NemSyns synshal på Nr. Lindvej 1, 7400 Herning
                </figcaption>
              </figure>
              <div className="min-h-80 overflow-hidden rounded-2xl border border-border shadow-sm">
                <iframe
                  title="NemSyn Bilsyn Herning på kort"
                  src="https://www.google.com/maps?q=Nr.%20Lindvej%201%2C%207400%20Herning&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full min-h-80 w-full border-0"
                />
              </div>
            </div>
          </div>
        </section>

        <Priser />

        {/* Services */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-extrabold text-foreground sm:text-4xl">
              Det kan du få lavet i synshallen
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 rounded-xl border border-border border-l-4 border-l-[color:var(--brand-red)] bg-white p-4 text-sm font-medium text-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border bg-white py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-extrabold text-foreground sm:text-4xl">
              Ofte stillede spørgsmål om bilsyn i Herning
            </h2>
            <div className="mt-10 space-y-3">
              {faq.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-xl border border-border bg-[color:var(--brand-bg)] p-5 open:bg-white"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
                    {f.q}
                    <ChevronRight
                      size={18}
                      className="shrink-0 text-[color:var(--brand-red)] transition-transform group-open:rotate-90"
                    />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Closing call to action */}
        <section className="bg-[color:var(--brand-charcoal)] py-16 text-center text-white">
          <div className="mx-auto max-w-2xl px-4">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Klar til bilsyn i Herning?</h2>
            <p className="mt-3 text-white/75">Find en ledig tid og book online – døgnet rundt.</p>
            <a
              href={BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-red)] px-8 py-4 text-lg font-semibold text-white shadow-sm transition-all hover:bg-[#b40e12] hover:shadow-lg"
            >
              Book tid nu
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <CallBubble />
    </div>
  );
}
