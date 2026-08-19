# NemSyn Website — Build Plan

Single-page Danish bilsyn site for NemSyn ApS with anchor navigation, red/charcoal branding on light background, fully responsive.

## Design tokens (src/styles.css)
- Add brand tokens: `--brand-red: #D81116`, `--brand-charcoal: #242B30`, `--brand-bg: #F8F9FA`, `--brand-neutral: #EAEEF2`
- Override `--primary` → brand red, `--background` → light off-white, `--foreground` → charcoal
- Register Inter via `<link>` in `__root.tsx` head; set `--font-sans` in `@theme`
- Radius bump to ~14px

## Logo asset
- Upload `NemSyn_horizontal_1.svg` via `lovable-assets` CLI → `src/assets/nemsyn-logo.svg.asset.json`
- Import pointer JSON, use `.url` in `<img>` for navbar + footer (footer version filtered white via CSS `brightness(0) invert(1)` since charcoal bg)

## Route & metadata
- Rewrite `src/routes/index.tsx` (replace placeholder) with full page
- Update `__root.tsx` head: title "NemSyn – Professionelt bilsyn i Herning, Midtjylland", meta description, og tags, Inter font `<link>`

## Components (all in `src/components/nemsyn/`)
1. `Navbar.tsx` — sticky, shrinks on scroll (useEffect scroll listener toggling padding class), logo left, desktop nav links (anchor `#om`, `#ydelser`, `#priser`, `#find`, `#kontakt`), red pill "Book tid" CTA. Mobile: hamburger (Lucide `Menu`/`X`) opens full-screen dropdown with same links + CTA. Smooth open/close via transition classes.
2. `Hero.tsx` — light bg with subtle SVG geometric pattern overlay, H1 "Dit bilsyn – vores ansvar", subheadline, two CTAs (red filled + outlined), decorative shield-check SVG icon (Lucide `ShieldCheck`). Stack buttons on mobile, responsive text sizes.
3. `Features.tsx` — 3-col grid desktop, 1-col mobile. 6 cards with Lucide icons (Car, Search, Smartphone, Wrench, ClipboardList, Star). Subtle shadow, rounded, hover lift.
4. `OmOs.tsx` — 2-col desktop (text + illustration/image placeholder generated via imagegen), 1-col mobile.
5. `Ydelser.tsx` — vertical card list, red left-border accent (border-l-4 border-[--brand-red]).
6. `Priser.tsx` — grid of 6 price cards, red left-border, price big, footnote below.
7. `Kontakt.tsx` — 2-col desktop: form left (Navn, Telefon, Email, Besked + red send button) with Zod validation + inline errors + success toast state; info block right with clickable `tel:` link; Google Maps iframe embed for Nr. Lindvej 1, 7400 Herning.
8. `Footer.tsx` — charcoal bg, white logo, quick links, company info, tagline, copyright.
9. `ScrollReveal.tsx` — small wrapper using IntersectionObserver adding fade-in-up class; used on section wrappers.

Index page composes: Navbar + Hero + Features + OmOs + Ydelser + Priser + Kontakt + Footer.

## Om Os illustration
- Generate one clean automotive-themed image (e.g. modern inspection bay) via `imagegen` → `src/assets/om-os.jpg`

## Utilities
- `smooth scroll` via CSS `html { scroll-behavior: smooth; scroll-padding-top: 80px }` in styles.css
- Hero pattern: inline SVG data URL background (subtle grid or diagonal lines at low opacity)

## Validation
- Zod schema in Kontakt form: navn 2–100, telefon regex 8 digits (Danish), email, besked 5–1000; show inline errors; simulated submit (no backend)

## Tech notes
- No new deps needed (lucide-react, zod, tailwind, shadcn already present)
- All copy in Danish exactly per brief
- No dark mode
- Test breakpoints: sm/md/lg via Tailwind classes; hamburger below `md`
