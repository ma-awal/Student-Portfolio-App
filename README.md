# Maisha Tabassum — Portfolio website

Next.js 15 + Tailwind. Backend/database lage na: shob content `src/data/student.js` file theke ashe.

## Chalano
    npm install
    npm run dev                  # http://localhost:3000
    npm run build && npm start   # production

> Fonts Google Fonts theke load hoy, tai internet lage.

## Content edit (shob ekhane: src/data/student.js)
| Ki change korbe | Kothay |
|---|---|
| Naam, nav button text | `brand` |
| Phone / WhatsApp (880 diye, + charao) / email / address / social link | `contact` (phone, whatsapp, email, address, socials) |
| WhatsApp e age theke lekha message | `contact.waText` |
| Google title / description / keywords / share image | `meta` |
| Section er lekha | `sections` array (prottek section er item, text, button) |
| Section order bodlano / section remove | `sections` array er object ta move / delete |
| Rong | `theme: { accent: "#ec4899", accent2: "#8b5cf6" }` (ek line, pura site update) |

Social icon er `url: "#"` hole real link boshao. `url: ""` rakhle oi icon hide hoye jay.

## Photo
1. Photo ta `public/images/profile.jpg` e rakho (square ba 4:5, ~600px+, 200KB er niche hole bhalo).
2. Data file e hero section e `photo: "/images/profile.jpg"` likho. Faka thakle naam er initials dekhay.
Share image (WhatsApp/Facebook preview) er jonno `meta.image: "/images/og.jpg"` (1200x630).

## Live korar age checklist
- [ ] Phone, WhatsApp, email, address, social link thik ache
- [ ] `meta` title/description client er naam e
- [ ] Photo boshano
- [ ] `NEXT_PUBLIC_SITE_URL` set kora (`.env` file banao, `.env.example` copy kore)
- [ ] Bangla content hole `src/config.js` e `LANG = "bn"`

## Deploy (Vercel)
GitHub e push → Vercel e Import → Environment Variables e `NEXT_PUBLIC_SITE_URL` dao → Deploy. Custom domain Vercel Settings > Domains e.

## SEO (auto)
Title, description, Open Graph, canonical, `sitemap.xml`, `robots.txt`, favicon (`src/app/icon.svg`) ar Google structured data (JSON-LD, FAQ shoho) data file theke auto toiri hoy.

## Icon / section
- Icon: data te `icon: "heart-pulse"` likhle hoy. Notun icon: lucide.dev/icons theke naam dekhe `src/components/Icon.jsx` e import + MAP e ekta line. Naam bhul hole dev console e warning ashe.
- Notun section type: `src/sections/X.jsx` + `src/sections/registry.js` e ekta line.
