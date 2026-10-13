import { SITE_URL } from "@/config";

// Category data theke Google er jonno structured data (JSON-LD). Alada kichu likhte hoy na.
// data.meta.schemaType: "Person" (default) | "Physician" | "LocalBusiness" ... ; data.meta.jobTitle (Person er jonno)
export function buildJsonLd(data) {
  const { meta, brand, contact, sections } = data;
  const type = meta.schemaType || "Person";
  const sameAs = (contact.socials || []).map((s) => s.url).filter((u) => /^https?:\/\//.test(u));
  const entity = {
    "@context": "https://schema.org", "@type": type, name: brand.name, url: SITE_URL, description: meta.description,
    image: meta.image ? new URL(meta.image, SITE_URL).href : undefined,
    telephone: contact.phone ? `+${String(contact.phone).replace(/\D/g, "")}` : undefined, email: contact.email,
    address: contact.address ? { "@type": "PostalAddress", streetAddress: contact.address } : undefined,
    jobTitle: type === "Person" ? meta.jobTitle : undefined, sameAs: sameAs.length ? sameAs : undefined,
  };
  const faq = sections.find((s) => s.type === "faq" && s.items?.length);
  const faqLd = faq && {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return [entity, faqLd].filter(Boolean);
}

// "<" escape kora, jate </script> er moto kichu dhukle page na bhange
export const jsonLdString = (obj) => JSON.stringify(obj).replace(/</g, "\\u003c");
