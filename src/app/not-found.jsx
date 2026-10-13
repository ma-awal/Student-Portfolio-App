import { categories } from "@/data";
import { DEFAULT_TYPE, LOCK_TYPE } from "@/config";
import { themeVars } from "@/lib/theme";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  const data = categories[LOCK_TYPE || DEFAULT_TYPE];
  return (
    <div style={themeVars(data.theme, data.ui)} className="grid min-h-screen place-items-center px-4">
      <div className="glass rounded-theme p-10 text-center">
        <strong className="grad-text block text-7xl font-extrabold">404</strong>
        <h1 className="mt-2 text-2xl font-extrabold tracking-tight">Page not found</h1>
        <p className="mt-2 text-muted">The page you are looking for does not exist.</p>
        <a href="/" className="btn btn-primary mt-6">Back to home</a>
      </div>
    </div>
  );
}
