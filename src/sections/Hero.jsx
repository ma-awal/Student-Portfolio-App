import Reveal from "@/components/Reveal";
import Avatar from "@/components/Avatar";
import Icon from "@/components/Icon";
import { resolveHref, isExternal, socialsOf } from "@/lib/links";

/* ---------- shared pieces ---------- */
function Headline({ headline, highlight, className }) {
  const parts = highlight && headline.includes(highlight) ? headline.split(highlight) : [headline];
  return <h1 className={className}>{parts[0]}{parts.length > 1 && <span className="grad-text">{highlight}</span>}{parts[1]}</h1>;
}
function Ctas({ ctas = [], contact, className = "" }) {
  return (
    <div className={`flex flex-wrap gap-3.5 ${className}`}>
      {ctas.map((c) => (
        <a key={c.label} className={`btn ${c.variant === "ghost" ? "btn-ghost" : "btn-primary"}`} href={resolveHref(c.href, contact)}
           {...(isExternal(c.href) ? { target: "_blank", rel: "noreferrer" } : {})}>
          {c.icon && <Icon name={c.icon} className="h-[18px] w-[18px]" />}{c.label}
        </a>
      ))}
    </div>
  );
}
function Badge({ children, dot }) {
  if (!children) return null;
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-[13px] font-semibold text-accent">
      {dot && <i className="h-2 w-2 animate-ring rounded-full bg-accent" />}{children}
    </span>
  );
}
function FloatCard({ item, className = "" }) {
  return (
    <div className={`glass absolute flex animate-bob items-center gap-3 rounded-2xl px-4 py-3 ${className}`}>
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent"><Icon name={item.icon} className="h-5 w-5" /></span>
      <div><b className="block text-sm leading-tight">{item.text}</b>{item.sub && <span className="text-xs text-muted">{item.sub}</span>}</div>
    </div>
  );
}

/* ---------- 1. appointment (doctor): arch portrait + trust row ---------- */
function Appointment(p) {
  const [f1, f2] = p.floating || [];
  return (
    <section id={p.id} className="wrap grid min-h-screen items-center gap-12 pb-12 pt-32 lg:grid-cols-[1.1fr_.9fr]">
      <div>
        <Reveal><Badge dot>{p.badge}</Badge></Reveal>
        <Reveal delay={80}><Headline {...p} className="my-5 text-[clamp(34px,5vw,58px)] font-extrabold leading-[1.1] tracking-tight" /></Reveal>
        <Reveal delay={160}><p className="max-w-[520px] text-lg text-muted">{p.subtitle}</p></Reveal>
        <Reveal delay={240} className="mt-8"><Ctas {...p} /></Reveal>
        {p.trust && (
          <Reveal delay={320} className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
            {p.trust.map((t) => (
              <div key={t.text} className="flex items-center gap-2 text-sm font-semibold text-muted">
                <Icon name={t.icon} className="h-[18px] w-[18px] text-accent" />{t.text}
              </div>
            ))}
          </Reveal>
        )}
      </div>
      <Reveal delay={200} className="relative mx-auto w-full max-w-[400px] px-3 pb-10 pt-4">
        <div className="glass overflow-hidden rounded-b-theme rounded-t-[999px]">
          <div className="grid aspect-[4/5] place-items-center bg-gradient-to-b from-accent/10 to-accent2/25">
            <Avatar photo={p.photo} name={p.brand.name} textClass="text-[110px]" priority />
          </div>
        </div>
        {f1 && <FloatCard item={f1} className="left-0 top-[14%]" />}
        {f2 && <FloatCard item={f2} className="bottom-0 right-0 [animation-delay:-3s]" />}
      </Reveal>
    </section>
  );
}

/* ---------- 2. terminal (engineer): code window ---------- */
const TOKEN = /(\b(?:const|let|export|default|return|await|async)\b|'[^']*'|"[^"]*"|\/\/.*$)/g;
function Code({ line }) {
  return line.split(TOKEN).filter(Boolean).map((t, i) => {
    if (/^(const|let|export|default|return|await|async)$/.test(t)) return <span key={i} className="text-accent">{t}</span>;
    if (/^['"]/.test(t)) return <span key={i} className="text-accent2">{t}</span>;
    if (t.startsWith("//")) return <span key={i} className="text-muted/70">{t}</span>;
    return <span key={i}>{t}</span>;
  });
}
function Terminal(p) {
  return (
    <section id={p.id} className="wrap grid min-h-screen items-center gap-12 pb-12 pt-32 lg:grid-cols-[1fr_1fr] [&>*]:min-w-0">
      <div>
        <Reveal><Badge dot>{p.badge}</Badge></Reveal>
        <Reveal delay={80}><Headline {...p} className="my-5 text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.08] tracking-tight" /></Reveal>
        <Reveal delay={160}><p className="max-w-[520px] text-lg text-muted">{p.subtitle}</p></Reveal>
        <Reveal delay={240} className="mt-8"><Ctas {...p} /></Reveal>
        {p.techs && (
          <Reveal delay={320} className="mt-9 flex flex-wrap gap-2">
            {p.techs.map((t) => <span key={t} className="rounded-md border border-ink/10 bg-white/60 px-3 py-1 font-mono text-xs font-semibold text-muted">{t}</span>)}
          </Reveal>
        )}
      </div>
      <Reveal delay={200} className="relative pb-6">
        <div className="glass overflow-hidden rounded-theme">
          <div className="flex items-center gap-2 border-b border-ink/10 bg-white/50 px-4 py-3">
            <i className="h-3 w-3 rounded-full bg-red-400/80" /><i className="h-3 w-3 rounded-full bg-yellow-400/80" /><i className="h-3 w-3 rounded-full bg-green-400/80" />
            <span className="ml-3 font-mono text-xs text-muted">{p.filename || "about.js"}</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-7 sm:text-sm">
            {(p.code || []).map((l, i) => (
              <div key={i} className="flex gap-4">
                <span className="w-4 shrink-0 select-none text-right text-muted/50">{i + 1}</span>
                <span className="whitespace-pre"><Code line={l} /></span>
              </div>
            ))}
          </pre>
          <div className="flex items-center gap-3 border-t border-ink/10 bg-white/50 px-5 py-3.5">
            <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-accent/20 to-accent2/20">
              <Avatar photo={p.photo} name={p.brand.name} textClass="text-sm" />
            </span>
            <div className="text-sm leading-tight"><b className="block">{p.brand.name}</b><span className="text-muted">{p.role}</span></div>
            <span className="ml-auto flex items-center gap-2 font-mono text-xs text-muted"><i className="h-2 w-2 rounded-full bg-green-500" />online</span>
          </div>
        </div>
        {p.floating?.[0] && <FloatCard item={p.floating[0]} className="-top-5 right-4" />}
      </Reveal>
    </section>
  );
}

/* ---------- 3. banner (business): centered + stats bar ---------- */
function Banner(p) {
  return (
    <section id={p.id} className="wrap pb-10 pt-36 text-center">
      <Reveal>
        <div className="glass mx-auto mb-7 inline-flex items-center gap-3 rounded-full p-1.5 pr-5">
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-accent/20 to-accent2/20">
            <Avatar photo={p.photo} name={p.brand.name} textClass="text-base" />
          </span>
          <span className="text-left text-sm leading-tight"><b className="block">{p.brand.name}</b><span className="text-muted">{p.badge}</span></span>
        </div>
      </Reveal>
      <Reveal delay={80}><Headline {...p} className="mx-auto max-w-4xl text-[clamp(36px,6vw,68px)] font-extrabold leading-[1.06] tracking-tighter" /></Reveal>
      <Reveal delay={160}><p className="mx-auto mt-5 max-w-2xl text-lg text-muted">{p.subtitle}</p></Reveal>
      <Reveal delay={240} className="mt-8"><Ctas {...p} className="justify-center" /></Reveal>
      {p.stats && (
        <Reveal delay={320} className="glass mx-auto mt-14 grid max-w-4xl grid-cols-2 rounded-theme md:grid-cols-4">
          {p.stats.map((s) => (
            <div key={s.label} className="border-ink/10 p-6 md:border-l md:first:border-l-0">
              <strong className="grad-text block text-3xl font-extrabold">{s.value}</strong>
              <span className="text-sm font-medium text-muted">{s.label}</span>
            </div>
          ))}
        </Reveal>
      )}
    </section>
  );
}

/* ---------- 4. profile (student): sticky-style profile card ---------- */
function Profile(p) {
  return (
    <section id={p.id} className="wrap grid items-center gap-8 pb-12 pt-32 lg:min-h-screen lg:grid-cols-[380px_1fr] lg:gap-14">
      <Reveal delay={100} className="glass rounded-theme p-7 text-center">
        <div className="mx-auto grid h-40 w-40 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-accent/15 to-accent2/25 ring-4 ring-accent/25 ring-offset-4 ring-offset-white/60">
          <Avatar photo={p.photo} name={p.brand.name} textClass="text-6xl" priority />
        </div>
        <h2 className="mt-5 text-2xl font-extrabold tracking-tight">{p.brand.name}</h2>
        <p className="text-sm font-medium text-accent">{p.role}</p>
        <ul className="mt-5 grid gap-2.5 text-left text-sm text-muted">
          {(p.facts || []).map((f) => (
            <li key={f.text} className="flex items-center gap-3 rounded-xl bg-white/60 px-3.5 py-2.5">
              <Icon name={f.icon} className="h-[18px] w-[18px] shrink-0 text-accent" />{f.text}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex justify-center gap-2.5">
          {socialsOf(p.contact).map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}
               className="grid h-10 w-10 place-items-center rounded-full bg-white/70 transition hover:-translate-y-0.5 hover:text-accent"><Icon name={s.icon} className="h-[18px] w-[18px]" /></a>
          ))}
        </div>
      </Reveal>
      <div>
        <Reveal><Badge dot>{p.badge}</Badge></Reveal>
        <Reveal delay={80}><Headline {...p} className="my-5 text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.1] tracking-tight" /></Reveal>
        <Reveal delay={160}><p className="max-w-xl text-lg text-muted">{p.subtitle}</p></Reveal>
        <Reveal delay={240} className="mt-8"><Ctas {...p} /></Reveal>
        {p.learning && (
          <Reveal delay={320} className="mt-9">
            <p className="mb-3 flex items-center gap-2 text-sm font-bold"><Icon name="sparkles" className="h-4 w-4 text-accent" />Currently learning</p>
            <div className="flex flex-wrap gap-2">{p.learning.map((t) => <span key={t} className="rounded-full bg-accent/10 px-4 py-1.5 text-[13.5px] font-semibold text-accent">{t}</span>)}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

const VARIANTS = { appointment: Appointment, terminal: Terminal, banner: Banner, profile: Profile };

export default function Hero({ id = "home", variant = "appointment", ...rest }) {
  const V = VARIANTS[variant] || Appointment;
  return <V id={id} {...rest} />;
}
