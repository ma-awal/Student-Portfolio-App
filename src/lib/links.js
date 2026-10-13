// href-e special token: "@whatsapp", "@call", "@email", "#section-id", ba normal URL
export const waLink = (number, text = "") =>
  `https://wa.me/${String(number).replace(/\D/g, "")}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export function resolveHref(href = "#", contact = {}) {
  if (href === "@whatsapp") return waLink(contact.whatsapp || contact.phone, contact.waText || "Hello, I want to know more.");
  if (href === "@call") return `tel:+${String(contact.phone || "").replace(/\D/g, "")}`;
  if (href === "@email") return `mailto:${contact.email || ""}`;
  return href;
}
export const isExternal = (href = "") => href.startsWith("@") ? href !== "@call" : /^https?:/.test(href);

// url faka thakle social icon dekhabe na (dead link thake na)
export const socialsOf = (contact = {}) => (contact.socials || []).filter((s) => s && s.url);
