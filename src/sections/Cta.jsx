import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { resolveHref } from "@/lib/links";

// Big call-to-action banner
export default function Cta({ id, title, text, button, contact }) {
  return (
    <section id={id} className="sec">
      <Reveal className="grad-bg relative overflow-hidden rounded-theme p-8 text-white shadow-soft md:p-14">
        <i className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/15" /><i className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-white/10" />
        <div className="relative grid items-center gap-7 md:grid-cols-[1fr_auto]">
          <div><h2 className="text-[clamp(26px,3.6vw,40px)] font-extrabold leading-tight tracking-tight">{title}</h2><p className="mt-3 max-w-xl text-white/85">{text}</p></div>
          <a href={resolveHref(button.href, contact)} target="_blank" rel="noreferrer" className="btn bg-white text-ink shadow-soft">{button.label}<Icon name="arrow-right" className="h-[18px] w-[18px]" /></a>
        </div>
      </Reveal>
    </section>
  );
}
