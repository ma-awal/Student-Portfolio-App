import "./globals.css";
import { LANG, SITE_URL } from "@/config";

export const metadata = { metadataBase: new URL(SITE_URL) };

export default function RootLayout({ children }) {
  return (
    <html lang={LANG}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        {/* JS off thakle scroll-reveal er hidden content o jate dekha jay */}
        <noscript><style>{".reveal{opacity:1!important;transform:none!important;filter:none!important}"}</style></noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
