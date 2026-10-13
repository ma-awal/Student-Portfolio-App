import { categories } from "@/data";
import { DEFAULT_TYPE, LOCK_TYPE, SITE_URL } from "@/config";
import { themeVars } from "@/lib/theme";
import { buildJsonLd, jsonLdString } from "@/lib/seo";
import { registry } from "@/sections/registry";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const revalidate = 86400; // static site e footer er year din-e ekbar fresh hoy

// ?type=doctor theke category ber kore. LOCK_TYPE thakle query param read-i hoy na (static site).
async function getType(searchParams) {
  if (LOCK_TYPE) return LOCK_TYPE;
  const t = (await searchParams)?.type;
  return typeof t === "string" && categories[t] ? t : DEFAULT_TYPE;
}

export async function generateMetadata({ searchParams }) {
  const { meta, brand } = categories[await getType(searchParams)];
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: "/" },
    openGraph: { title: meta.title, description: meta.description, type: "website", url: SITE_URL, siteName: brand.name, images: meta.image ? [meta.image] : undefined },
    twitter: { card: meta.image ? "summary_large_image" : "summary", title: meta.title, description: meta.description, images: meta.image ? [meta.image] : undefined },
  };
}

export default async function Home({ searchParams }) {
  const type = await getType(searchParams);
  const data = categories[type];
  // Navbar client component, tai shudhu dorkari ta-i pathai (poora sections nay)
  const links = data.sections.filter((s) => s.nav).map((s) => ({ id: s.id, nav: s.nav }));
  const { whatsapp, phone, waText } = data.contact;

  return (
    <div style={themeVars(data.theme, data.ui)} data-pattern={data.ui.pattern} data-eyebrow={data.ui.eyebrow} data-align={data.ui.align}>
      {buildJsonLd(data).map((ld, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(ld) }} />)}
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-soft">Skip to content</a>

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <i className="absolute -left-24 -top-32 h-[480px] w-[480px] animate-float rounded-full bg-accent/35 blur-[90px]" />
        <i className="absolute -right-32 top-1/3 h-[420px] w-[420px] animate-float rounded-full bg-accent2/35 blur-[90px] [animation-delay:-6s]" />
        <i className="absolute -bottom-24 left-1/3 h-[360px] w-[360px] animate-float rounded-full bg-accent/25 blur-[90px] [animation-delay:-12s]" />
      </div>

      <div className="pattern" aria-hidden="true" />
      <Navbar variant={data.ui.nav} brand={data.brand} links={links} contact={{ whatsapp, phone, waText }} />
      <main id="main">
        {data.sections.map((s, i) => {
          const Section = registry[s.type];
          if (!Section) {
            if (process.env.NODE_ENV !== "production") console.warn(`[sections] unknown type "${s.type}" (registry.js e add korun)`);
            return null;
          }
          return <Section key={s.id || i} {...s} brand={data.brand} contact={data.contact} />;
        })}
      </main>
      <Footer brand={data.brand} contact={data.contact} />
      <FloatingContact contact={data.contact} />
          </div>
  );
}
