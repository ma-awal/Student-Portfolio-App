import Reveal from "@/components/Reveal";
import Heading from "@/components/Heading";

// variant: "vertical" (single line, left) | "alternate" (zig-zag on desktop)
export default function Timeline({ id, variant = "vertical", eyebrow, title, subtitle, items = [] }) {
  const alt = variant === "alternate";
  return (
    <section id={id} className="sec">
      <Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className={`relative mx-auto grid gap-5 before:absolute before:bottom-2 before:top-2 before:w-0.5 before:-translate-x-1/2 before:rounded before:bg-gradient-to-b before:from-accent before:to-accent2 before:opacity-40 before:content-[''] ${alt ? "max-w-5xl before:left-[9px] md:before:left-1/2" : "max-w-3xl before:left-[9px]"}`}>
        {items.map((it, i) => {
          const odd = i % 2 === 1;
          return (
            <Reveal key={it.title + i} delay={i * 80}
              className={`relative pl-9 ${alt ? `md:w-1/2 ${odd ? "md:ml-auto md:pl-10" : "md:pl-0 md:pr-10"}` : ""}`}>
              <i className={`absolute left-0 top-7 h-[19px] w-[19px] rounded-full border-4 border-accent bg-white ${alt ? (odd ? "md:-left-[10px]" : "md:left-auto md:-right-[10px]") : ""}`} />
              <div className="glass rounded-theme-sm px-6 py-5">
                <span className="text-[13px] font-bold text-accent">{it.period}</span>
                <h3 className="mb-0.5 mt-1 text-lg font-bold">{it.title}</h3>
                {it.place && <span className="text-[14.5px] font-medium text-muted">{it.place}</span>}
                {it.text && <p className="mt-2 text-[15px] text-muted">{it.text}</p>}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
