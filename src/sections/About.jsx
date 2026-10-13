import Reveal from "@/components/Reveal";
import Heading from "@/components/Heading";
import Icon from "@/components/Icon";

/* ---------- shared pieces ---------- */
const Paras = ({ text = [] }) => text.map((p, i) => <Reveal key={i} as="p" delay={i * 80} className="mb-3.5 text-muted">{p}</Reveal>);
const Tags = ({ tags = [], mono }) => tags.length > 0 && (
  <Reveal className="mt-5 flex flex-wrap gap-2.5">
    {tags.map((t) => <span key={t} className={`bg-accent/10 px-4 py-1.5 text-[13.5px] font-semibold text-accent ${mono ? "rounded-md font-mono" : "rounded-full"}`}>{t}</span>)}
  </Reveal>
);
const Stat = ({ s, i }) => (
  <Reveal key={s.label} delay={i * 90} className="rounded-theme-sm border border-white/80 bg-white/70 px-6 py-5">
    <strong className="grad-text block text-[32px] font-extrabold leading-tight">{s.value}</strong>
    <span className="text-sm font-medium text-muted">{s.label}</span>
  </Reveal>
);

/* ---------- credentials (doctor) ---------- */
function Credentials(p) {
  return (
    <section id={p.id} className="sec">
      <div className="grid items-start gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal className="glass rounded-theme p-7">
          <h3 className="mb-5 flex items-center gap-2.5 text-lg font-bold"><Icon name="badge-check" className="h-5 w-5 text-accent" />Qualifications</h3>
          <div className="grid gap-4">
            {(p.credentials || []).map((c) => (
              <div key={c.title} className="flex items-start gap-4 rounded-theme-sm bg-white/60 p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent"><Icon name={c.icon} className="h-5 w-5" /></span>
                <div><b className="block leading-tight">{c.title}</b><span className="text-sm text-muted">{c.text}</span></div>
              </div>
            ))}
          </div>
        </Reveal>
        <div>
          <Heading align="left" eyebrow={p.eyebrow} title={p.title} />
          <Paras text={p.text} /><Tags tags={p.tags} />
          <div className="mt-7 grid gap-4 sm:grid-cols-3">{(p.stats || []).map((s, i) => <Stat key={s.label} s={s} i={i} />)}</div>
        </div>
      </div>
    </section>
  );
}

/* ---------- stats-row (engineer): text + principles, stats strip below ---------- */
function StatsRow(p) {
  return (
    <section id={p.id} className="sec">
      <div className="glass rounded-theme p-7 md:p-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div><Heading align="left" eyebrow={p.eyebrow} title={p.title} /><Paras text={p.text} /></div>
          <div className="grid gap-4 self-center">
            {(p.points || []).map((pt, i) => (
              <Reveal key={pt.title} delay={i * 80} className="flex items-start gap-4 border-l-2 border-accent/60 pl-4">
                <span className="mt-0.5 text-accent"><Icon name={pt.icon} className="h-5 w-5" /></span>
                <div><b className="block leading-tight">{pt.title}</b><span className="text-sm text-muted">{pt.text}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-9 grid gap-px overflow-hidden rounded-theme-sm bg-ink/10 sm:grid-cols-3">
          {(p.stats || []).map((s) => (
            <div key={s.label} className="bg-white/80 p-6 text-center"><strong className="grad-text block font-mono text-4xl font-bold">{s.value}</strong><span className="text-sm font-medium text-muted">{s.label}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- story (business): gradient visual + checklist ---------- */
function Story(p) {
  return (
    <section id={p.id} className="sec">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal className="grad-bg relative overflow-hidden rounded-theme p-8 text-white shadow-soft md:p-10">
          <i className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15" /><i className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-white/10" />
          <div className="relative">
            <span className="text-sm font-semibold uppercase tracking-widest text-white/80">{p.badge?.label}</span>
            <strong className="block text-7xl font-extrabold tracking-tighter md:text-8xl">{p.badge?.value}</strong>
            <div className="mt-8 grid gap-3">
              {(p.pillars || []).map((pl) => (
                <div key={pl.title} className="flex items-center gap-3 rounded-2xl bg-white/15 px-4 py-3 backdrop-blur">
                  <Icon name={pl.icon} className="h-5 w-5" /><b className="text-[15px]">{pl.title}</b><span className="ml-auto text-sm text-white/80">{pl.text}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <div>
          <Heading align="left" eyebrow={p.eyebrow} title={p.title} />
          <Paras text={p.text} />
          <Reveal className="mt-5 grid gap-3 sm:grid-cols-2">
            {(p.points || []).map((t) => <div key={t} className="flex items-center gap-2.5 text-[15px] font-medium"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent"><Icon name="check" className="h-3.5 w-3.5" /></span>{t}</div>)}
          </Reveal>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">{(p.stats || []).map((s, i) => <Stat key={s.label} s={s} i={i} />)}</div>
        </div>
      </div>
    </section>
  );
}

/* ---------- facts (student): bio + quick facts card ---------- */
function Facts(p) {
  return (
    <section id={p.id} className="sec">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
        <Reveal className="glass rounded-theme p-7 md:p-9">
          <Heading align="left" eyebrow={p.eyebrow} title={p.title} />
          <Paras text={p.text} /><Tags tags={p.tags} />
        </Reveal>
        <div className="grid gap-4">
          <Reveal delay={100} className="glass rounded-theme p-6">
            <h3 className="mb-4 text-lg font-bold">Quick facts</h3>
            <div className="grid gap-3.5">
              {(p.facts || []).map((f) => (
                <div key={f.label} className="flex items-center gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent"><Icon name={f.icon} className="h-[18px] w-[18px]" /></span>
                  <div className="leading-tight"><small className="text-xs font-semibold uppercase tracking-wider text-muted">{f.label}</small><b className="block text-[15px]">{f.value}</b></div>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="grid grid-cols-3 gap-3">
            {(p.stats || []).map((s, i) => (
              <Reveal key={s.label} delay={150 + i * 80} className="glass rounded-theme-sm p-4 text-center"><strong className="grad-text block text-2xl font-extrabold">{s.value}</strong><span className="text-xs font-medium text-muted">{s.label}</span></Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const VARIANTS = { credentials: Credentials, "stats-row": StatsRow, story: Story, facts: Facts };
export default function About({ variant = "credentials", ...rest }) {
  const V = VARIANTS[variant] || Credentials;
  return <V {...rest} />;
}
