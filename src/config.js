// ====== SITE SETTINGS ======
export const DEFAULT_TYPE = "student";
export const SHOW_DEMO_BAR = false;
export const LOCK_TYPE = "student";      // fixed: ei site shudhu student dekhabe (fully static)
export const LANG = "en";             // <html lang> : "en" ba "bn"

// Live site er domain (SEO: canonical, Open Graph, sitemap). .env / Vercel env e NEXT_PUBLIC_SITE_URL=https://yourdomain.com
const isUrl = (u) => { try { return !!new URL(u); } catch { return false; } };
const envUrl = (process.env.NEXT_PUBLIC_SITE_URL || "").trim().replace(/\/+$/, "");
export const SITE_URL = isUrl(envUrl) ? envUrl : "http://localhost:3000";
