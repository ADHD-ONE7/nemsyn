import { useState, type FormEvent } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Building2, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const schema = z.object({
  navn: z.string().trim().min(2, "Navn skal være mindst 2 tegn").max(100),
  telefon: z
    .string()
    .trim()
    .regex(/^(\+?\d[\d\s]{6,14})$/, "Indtast et gyldigt telefonnummer"),
  email: z.string().trim().email("Indtast en gyldig email").max(255),
  besked: z.string().trim().min(5, "Beskeden er for kort").max(1000),
});

type FormValues = z.infer<typeof schema>;
type FormErrors = Partial<Record<keyof FormValues, string>>;

export function Kontakt() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      navn: String(fd.get("navn") ?? ""),
      telefon: String(fd.get("telefon") ?? ""),
      email: String(fd.get("email") ?? ""),
      besked: String(fd.get("besked") ?? ""),
    };
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs: FormErrors = {};
      for (const issue of res.error.issues) {
        const key = issue.path[0] as keyof FormValues;
        if (!errs[key]) errs[key] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSent(false), 6000);
    }, 700);
  }

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-red)]/30 transition-colors";

  return (
    <section id="kontakt" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-red)]">
            Kontakt
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            Skriv til os — vi vender hurtigt tilbage
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Har du et spørgsmål? Udfyld formularen, så hører du fra os.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <ScrollReveal>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl border border-border bg-[color:var(--brand-bg)] p-6 sm:p-8"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="navn" className="mb-1.5 block text-sm font-semibold text-foreground">
                    Navn
                  </label>
                  <input
                    id="navn"
                    name="navn"
                    type="text"
                    autoComplete="name"
                    placeholder="Dit fulde navn"
                    className={`${inputBase} ${errors.navn ? "border-[color:var(--brand-red)]" : "border-border"}`}
                  />
                  {errors.navn && (
                    <p className="mt-1.5 text-xs text-[color:var(--brand-red)]">{errors.navn}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="telefon" className="mb-1.5 block text-sm font-semibold text-foreground">
                      Telefon
                    </label>
                    <input
                      id="telefon"
                      name="telefon"
                      type="tel"
                      autoComplete="tel"
                      placeholder="12 34 56 78"
                      className={`${inputBase} ${errors.telefon ? "border-[color:var(--brand-red)]" : "border-border"}`}
                    />
                    {errors.telefon && (
                      <p className="mt-1.5 text-xs text-[color:var(--brand-red)]">{errors.telefon}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="dig@eksempel.dk"
                      className={`${inputBase} ${errors.email ? "border-[color:var(--brand-red)]" : "border-border"}`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-[color:var(--brand-red)]">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="besked" className="mb-1.5 block text-sm font-semibold text-foreground">
                    Besked
                  </label>
                  <textarea
                    id="besked"
                    name="besked"
                    rows={5}
                    placeholder="Skriv din besked her…"
                    className={`${inputBase} resize-none ${errors.besked ? "border-[color:var(--brand-red)]" : "border-border"}`}
                  />
                  {errors.besked && (
                    <p className="mt-1.5 text-xs text-[color:var(--brand-red)]">{errors.besked}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--brand-red)] px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#b40e12] hover:shadow-md disabled:opacity-70 sm:w-auto"
                >
                  {submitting ? "Sender…" : "Send besked"}
                </button>

                {sent && (
                  <div
                    role="status"
                    className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800"
                  >
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
                    <p>Tak for din besked! Vi vender tilbage hurtigst muligt.</p>
                  </div>
                )}
              </div>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div id="find" className="flex h-full flex-col gap-6">
              <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-red)]">
                  Find os
                </p>
                <h3 className="mt-2 text-xl font-bold text-foreground">NemSyn ApS</h3>

                <ul className="mt-6 space-y-4 text-sm">
                  <li className="flex gap-3">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-[color:var(--brand-red)]" />
                    <span className="text-foreground">Nr. Lindvej 1, 7400 Herning</span>
                  </li>
                  <li className="flex gap-3">
                    <Phone size={18} className="mt-0.5 shrink-0 text-[color:var(--brand-red)]" />
                    <a
                      href="tel:+4555222506"
                      className="font-medium text-foreground hover:text-[color:var(--brand-red)]"
                    >
                      55 22 25 06
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Mail size={18} className="mt-0.5 shrink-0 text-[color:var(--brand-red)]" />
                    <a
                      href="mailto:info@nemsyn.dk"
                      className="font-medium text-foreground hover:text-[color:var(--brand-red)]"
                    >
                      info@nemsyn.dk
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Building2 size={18} className="mt-0.5 shrink-0 text-[color:var(--brand-red)]" />
                    <span className="text-muted-foreground">CVR-nr.: 45410595</span>
                  </li>
                  <li className="flex gap-3">
                    <Clock size={18} className="mt-0.5 shrink-0 text-[color:var(--brand-red)]" />
                    <div className="min-w-0 text-foreground">
                      <p className="font-semibold">Åbningstider</p>
                      <dl className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <div className="flex justify-between gap-4">
                          <dt>Mandag – torsdag</dt>
                          <dd className="font-medium text-foreground">08:00 – 16:00</dd>
                        </div>
                        <div className="flex justify-between gap-4">
                          <dt>Fredag</dt>
                          <dd className="font-medium text-foreground">08:00 – 15:00</dd>
                        </div>
                        <div className="flex justify-between gap-4">
                          <dt>Første lørdag i måneden</dt>
                          <dd className="font-medium text-foreground">08:00 – 12:00</dd>
                        </div>
                        <div className="flex justify-between gap-4">
                          <dt>Søndag</dt>
                          <dd className="font-medium text-foreground">Lukket</dd>
                        </div>
                      </dl>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                <iframe
                  title="NemSyn placering på kort"
                  src="https://www.google.com/maps?q=Nr.%20Lindvej%201%2C%207400%20Herning&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full border-0"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
