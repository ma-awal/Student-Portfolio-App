import Reveal from "@/components/Reveal";
import Heading from "@/components/Heading";
import Icon from "@/components/Icon";

// Pure HTML <details> accordion, JS lage na
export default function Faq({ id, eyebrow, title, subtitle, items = [] }) {
  return (
    <section id={id} className="sec">
      <Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="mx-auto grid max-w-3xl gap-3.5">
        {items.map((f, i) => (
          <Reveal key={f.q} delay={i * 70}>
            <details className="glass group rounded-theme-sm px-6 py-4 open:bg-white/85">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {f.q}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent/10 text-accent transition group-open:rotate-180"><Icon name="chevron-down" className="h-4 w-4" /></span>
              </summary>
              <p className="mt-3 text-[15px] text-muted">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
