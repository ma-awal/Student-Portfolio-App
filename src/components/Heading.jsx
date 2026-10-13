import Reveal from "./Reveal";

// align="left" dile force left. Noyto wrapper er data-align onujayi hoy.
export default function Heading({ eyebrow, title, subtitle, align }) {
  return (
    <Reveal className={`heading ${align === "left" ? "heading--left" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 className="text-[clamp(28px,3.6vw,42px)] font-extrabold leading-tight tracking-tight">{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
    </Reveal>
  );
}
