import Reveal from "@/components/Reveal";
import Heading from "@/components/Heading";
import Icon from "@/components/Icon";

const COLS = { 2: "md:grid-cols-2", 3: "md:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" };
const Wrap = ({ p, children }) => (
  <section id={p.id} className="sec"><Heading eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />{children}</section>
);
const hover = "transition duration-300 hover:-translate-y-1.5 hover:bg-white/85 hover:shadow-[0_28px_60px_-22px_rgb(var(--accent)/.45)]";

/* iconGrid (doctor services) */
function IconGrid(p) {
  const c = p.columns || 3;
  return (
    <Wrap p={p}>
      <div className={`grid gap-5 ${COLS[c]}`}>
        {p.items.map((it, i) => (
          <Reveal key={it.title} delay={(i % c) * 90} className={`glass rounded-theme p-7 ${hover}`}>
            <div className="grad-bg mb-5 grid h-14 w-14 place-items-center rounded-2xl text-white shadow-[0_10px_24px_-10px_rgb(var(--accent))]"><Icon name={it.icon} className="h-6 w-6" /></div>
            <h3 className="mb-2 text-[19px] font-bold tracking-tight">{it.title}</h3>
            <p className="text-[15px] text-muted">{it.text}</p>
            {it.meta && <span className="mt-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">{it.meta}</span>}
          </Reveal>
        ))}
      </div>
    </Wrap>
  );
}

/* bento (engineer projects): first & fourth card wide */
function Bento(p) {
  return (
    <Wrap p={p}>
      <div className="grid gap-4 md:grid-cols-3">
        {p.items.map((it, i) => (
          <Reveal key={it.title} delay={(i % 3) * 80}
            className={`glass group flex flex-col rounded-theme p-6 hover:border-accent/40 ${hover} ${i === 0 || i === 3 || i === 5 ? "md:col-span-2" : ""}`}>
            <div className="mb-5 flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent"><Icon name={it.icon} className="h-5 w-5" /></span>
              <div className="flex gap-2 text-muted">
                {it.repo && <a href={it.repo} target="_blank" rel="noreferrer" aria-label="Source code" className="hover:text-accent"><Icon name="github" className="h-5 w-5" /></a>}
                {it.link && <a href={it.link} target="_blank" rel="noreferrer" aria-label="Live demo" className="hover:text-accent"><Icon name="external-link" className="h-5 w-5" /></a>}
              </div>
            </div>
            <h3 className="mb-2 text-lg font-bold tracking-tight">{it.title}</h3>
            <p className="mb-5 text-[15px] text-muted">{it.text}</p>
            <div className="mt-auto flex flex-wrap gap-2">{(it.tags || []).map((t) => <span key={t} className="rounded-md border border-ink/10 bg-white/60 px-2.5 py-1 font-mono text-xs font-semibold text-muted">{t}</span>)}</div>
          </Reveal>
        ))}
      </div>
    </Wrap>
  );
}

/* numbered (business services): big numbers, accent left border */
function Numbered(p) {
  return (
    <Wrap p={p}>
      <div className="grid gap-5 md:grid-cols-2">
        {p.items.map((it, i) => (
          <Reveal key={it.title} delay={(i % 2) * 90} className={`glass group flex gap-5 rounded-theme border-l-4 !border-l-accent p-6 ${hover}`}>
            <span className="grad-text text-5xl font-extrabold leading-none tracking-tighter">{String(i + 1).padStart(2, "0")}</span>
            <div className="flex-1">
              <div className="mb-1.5 flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold tracking-tight">{it.title}</h3>
                <span className="text-accent"><Icon name={it.icon} className="h-5 w-5" /></span>
              </div>
              <p className="text-[15px] text-muted">{it.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Wrap>
  );
}

/* rows (student projects): wide horizontal cards */
function Rows(p) {
  return (
    <Wrap p={p}>
      <div className="mx-auto grid max-w-4xl gap-5">
        {p.items.map((it, i) => (
          <Reveal key={it.title} delay={i * 80} className={`glass flex flex-col gap-5 rounded-theme p-5 sm:flex-row sm:items-center ${hover}`}>
            <div className="grad-bg grid h-24 w-full shrink-0 place-items-center rounded-theme-sm text-white sm:w-28"><Icon name={it.icon} className="h-9 w-9" /></div>
            <div className="flex-1">
              <h3 className="text-lg font-bold tracking-tight">{it.title}</h3>
              <p className="my-1.5 text-[15px] text-muted">{it.text}</p>
              <div className="flex flex-wrap gap-2">{(it.tags || []).map((t) => <span key={t} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">{t}</span>)}</div>
            </div>
            {it.link && <a href={it.link} target="_blank" rel="noreferrer" aria-label={`Open ${it.title}`} className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink/10 bg-white/70 transition hover:bg-accent hover:text-white"><Icon name="arrow-up-right" className="h-5 w-5" /></a>}
          </Reveal>
        ))}
      </div>
    </Wrap>
  );
}

/* badges (student achievements): centered compact cards */
function Badges(p) {
  return (
    <Wrap p={p}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {p.items.map((it, i) => (
          <Reveal key={it.title} delay={i * 80} className={`glass rounded-theme p-6 text-center ${hover}`}>
            <div className="grad-bg mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full text-white ring-8 ring-accent/10"><Icon name={it.icon} className="h-7 w-7" /></div>
            <h3 className="font-bold leading-snug">{it.title}</h3>
            <p className="mt-1.5 text-sm text-muted">{it.text}</p>
          </Reveal>
        ))}
      </div>
    </Wrap>
  );
}

const VARIANTS = { iconGrid: IconGrid, bento: Bento, numbered: Numbered, rows: Rows, badges: Badges };
export default function CardGrid({ variant = "iconGrid", ...rest }) {
  const V = VARIANTS[variant] || IconGrid;
  return <V {...rest} />;
}
