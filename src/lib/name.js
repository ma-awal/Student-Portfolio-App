// "Dr. Ayesha Rahman" -> "Ayesha Rahman" -> "AR". Avatar ar Navbar duijon-i ekhane theke nei.
const TITLE = /^(Dr|Eng|Prof|Mr|Mrs|Ms|Md|Sir|Madam)\.?\s+/i;
export const stripTitle = (name = "") => name.replace(TITLE, "");
export const initials = (name = "", n = 2) => stripTitle(name).split(/\s+/).filter(Boolean).map((w) => w[0]).slice(0, n).join("").toUpperCase();
