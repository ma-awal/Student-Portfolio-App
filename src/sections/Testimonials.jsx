import Reveal from "@/components/Reveal";
import Heading from "@/components/Heading";
import Icon from "@/components/Icon";

const Stars = () => <div className="mb-3 flex gap-0.5 text-[#f5b301]">{[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" className="h-4 w-4 fill-current" />)}</div>;
const Initial = ({ name }) => <span className="grad-bg grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold text-white">{name[0]}</span>;

// variant: "grid" (doctor) | "featured" (business) | "minimal" (engineer)
export default function Testimonials({ id, variant = "grid", eyebrow, title, subtitle, items = [] }) {
  let body;
  if (variant === "featured") {
    const [first, ...rest] = items;
    body = (
      <div className="grid gap-5 lg:grid-cols-[1.25fr_1fr]">
        <Reveal className="grad-bg relative overflow-hidden rounded-theme p-8 text-white shadow-soft md:p-10">
          <Icon name="quote" className="absolute right-6 top-6 h-24 w-24 text-white/15" />
          <Stars />
          <p className="relative text-xl font-medium leading-relaxed md:text-2xl">“{first.text}”</p>
          <div className="mt-7 flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full bg-white/20 font-bold">{first.name[0]}</span><div className="leading-tight"><b className="block">{first.name}</b><span className="text-sm text-white/80">{first.role}</span></div></div>
        </Reveal>
        <div className="grid gap-5">
          {rest.map((t, i) => (
            <Reveal key={t.name} delay={(i + 1) * 100} className="glass rounded-theme p-6">
              <Stars /><p className="text-[15.5px]">“{t.text}”</p>
              <div className="mt-4 flex items-center gap-3"><Initial name={t.name} /><div className="leading-tight"><b className="block">{t.name}</b><span className="text-[13.5px] text-muted">{t.role}</span></div></div>
            </Reveal>
          ))}
        </div>
      </div>
    );
  } else if (variant === "minimal") {
    body = (
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((t, i) => (
          <Reveal key={t.name} delay={i * 90} className="glass rounded-theme-sm border-l-[3px] !border-l-accent p-6">
            <Icon name="quote" className="mb-3 h-6 w-6 text-accent/70" />
            <p className="text-[15px] font-medium">{t.text}</p>
            <div className="mt-5 flex items-center gap-3"><Initial name={t.name} /><div className="leading-tight"><b className="block">{t.name}</b><span className="font-mono text-xs text-muted">{t.role}</span></div></div>
          </Reveal>
        ))}
      </div>
    );
  } else {
    body = (
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t, i) => (
          <Reveal key={t.name} delay={i * 90} className="glass rounded-theme p-7 transition duration-300 hover:-translate-y-1.5">
            <Stars /><p className="text-[15.5px]">“{t.text}”</p>
            <div className="mt-5 flex items-center gap-3"><Initial name={t.name} /><div className="leading-tight"><b className="block">{t.name}</b><span className="text-[13.5px] text-muted">{t.role}</span></div></div>
          </Reveal>
        ))}
      </div>
    );
  }
  return <section id={id} className="sec"><Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />{body}</section>;
}
