import Reveal from "@/components/Reveal";
import Heading from "@/components/Heading";
import Icon from "@/components/Icon";
import { resolveHref } from "@/lib/links";

// Chamber time / Office hours
export default function Schedule({ id, eyebrow, title, subtitle, items = [], place, note, cta, contact }) {
  return (
    <section id={id} className="sec">
      <Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <Reveal className="glass mx-auto grid max-w-[920px] gap-8 rounded-theme p-6 md:grid-cols-[1.2fr_1fr] md:p-10">
        <div className="grid gap-3">
          {items.map((r) => (
            <div key={r.day} className="flex items-center gap-4 rounded-theme-sm bg-white/60 px-4 py-3.5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent"><Icon name="clock" className="h-5 w-5" /></span>
              <div className="leading-tight"><b className="block">{r.day}</b><span className={`text-sm font-semibold ${/closed|বন্ধ/i.test(r.time) ? "text-red-500" : "text-accent"}`}>{r.time}</span></div>
            </div>
          ))}
        </div>
        <div className="grid content-center justify-items-start gap-4">
          {place && <p className="flex items-start gap-2.5 font-medium"><Icon name="map-pin" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />{place}</p>}
          {note && <p className="rounded-theme-sm bg-accent/10 px-4 py-3 text-sm text-ink/80">{note}</p>}
          {cta && <a className="btn btn-primary" href={resolveHref(cta.href, contact)} target="_blank" rel="noreferrer"><Icon name="calendar-check" className="h-[18px] w-[18px]" />{cta.label}</a>}
        </div>
      </Reveal>
    </section>
  );
}
