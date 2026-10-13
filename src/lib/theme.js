// "#0d9488" -> "13 148 136" (Tailwind alpha support er jonno)
export function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const f = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(f, 16);
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
}
export const themeVars = (t, ui = {}) => ({
  "--accent": hexToRgb(t.accent),
  "--accent-2": hexToRgb(t.accent2),
  "--r": ui.radius || "26px",
});
