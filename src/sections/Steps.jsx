import Reveal from "@/components/Reveal";
import Heading from "@/components/Heading";
import Icon from "@/components/Icon";

// Process / How it works: numbered steps with connecting line
export default function Steps({ id, eyebrow, title, subtitle, items = [] }) {
  return (
    <section id={id} className="sec">
      <Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <i className="absolute left-[12%] right-[12%] top-[52px] hidden border-t-2 border-dashed border-accent/30 lg:block" />
        {items.map((s, i) => (
          <Reveal key={s.title} delay={i * 100} className="glass relative rounded-theme p-6 text-center">
            <div className="grad-bg relative mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full text-white shadow-[0_10px_24px_-10px_rgb(var(--accent))] ring-8 ring-white/70">
              <Icon name={s.icon} className="h-6 w-6" />
              <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-ink text-xs font-bold text-white">{i + 1}</span>
            </div>
            <h3 className="mb-1.5 font-bold">{s.title}</h3>
            <p className="text-sm text-muted">{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
