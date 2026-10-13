import Icon from "./Icon";
import { socialsOf } from "@/lib/links";

export default function Footer({ brand, contact }) {
  return (
    <footer className="mt-24 pb-28 text-sm text-muted">
      <div className="wrap flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-6">
        <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
        <div className="flex gap-2.5">
          {socialsOf(contact).map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}
               className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white/60 transition hover:-translate-y-0.5 hover:text-accent">
              <Icon name={s.icon} className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
