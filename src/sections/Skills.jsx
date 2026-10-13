import Reveal from "@/components/Reveal";
import Heading from "@/components/Heading";
import Icon from "@/components/Icon";

// variant: "bars" (engineer, level % bar) | "chips" (student, pill tags)
// groups: [{ title, icon, items: [{ name, level }] }]
export default function Skills({ id, variant = "bars", eyebrow, title, subtitle, groups = [] }) {
  const cols = groups.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";
  return (
    <section id={id} className="sec">
      <Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className={`grid gap-5 md:grid-cols-2 ${cols}`}>
        {groups.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 90} className="glass rounded-theme p-6">
            <h3 className="mb-5 flex items-center gap-3 font-bold">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent"><Icon name={g.icon} className="h-5 w-5" /></span>{g.title}
            </h3>
            {variant === "bars" ? (
              <div className="grid gap-4">
                {g.items.map((s) => (
                  <div key={s.name}>
                    <div className="mb-1.5 flex justify-between font-mono text-[13px] font-semibold"><span>{s.name}</span><span className="text-muted">{s.level}%</span></div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-ink/10"><div className="grad-bg h-full rounded-full" style={{ width: `${s.level}%` }} /></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2.5">
                {g.items.map((s) => <span key={s.name} className="rounded-full border border-accent/15 bg-white/70 px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent">{s.name}</span>)}
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
