"use client";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { resolveHref } from "@/lib/links";
import { stripTitle } from "@/lib/name";

// variant: "pill" (floating glass) | "bar" (full width)
export default function Navbar({ variant = "pill", brand, links = [], contact }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // scroll-spy: je section screen e ache tar link highlight hobe
  useEffect(() => {
    const els = links.map((s) => document.getElementById(s.id)).filter(Boolean);
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-40% 0px -55% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [links]);

  // Escape chaple mobile menu bondho
  useEffect(() => {
    if (!open) return;
    const esc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  const initial = stripTitle(brand.name)[0];
  const Brand = (
    <a href="#home" className="brand flex items-center gap-2.5 font-extrabold tracking-tight">
      {variant === "bar"
        ? <span className="grad-bg grid h-8 w-8 place-items-center rounded-lg text-sm font-bold text-white">{initial}</span>
        : <span className="grad-bg h-3 w-3 rounded-full" />}
      {brand.name}
    </a>
  );
  const Cta = (
    <a className="btn btn-primary btn-sm" href={resolveHref("@whatsapp", contact)} target="_blank" rel="noreferrer">
      {brand.navCta || "Contact"}<Icon name="arrow-up-right" className="h-4 w-4" />
    </a>
  );
  const Links = (
    <nav className="hidden items-center gap-4 text-[13.5px] font-medium text-muted md:flex lg:gap-7 lg:text-[14.5px]">
      {links.map((s) => (
        <a key={s.id} href={`#${s.id}`}
           className={`relative transition hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded after:bg-accent after:transition-all ${active === s.id ? "text-ink after:w-full" : "after:w-0"}`}>
          {s.nav}
        </a>
      ))}
      {Cta}
    </nav>
  );
  const Toggle = (
    <button className="grid h-10 w-10 place-items-center rounded-full md:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
      <Icon name={open ? "x" : "menu"} className="h-5 w-5" />
    </button>
  );
  const Mobile = (cls) => (
    <div className={`${cls} flex flex-col gap-1 border border-white/80 bg-white/95 p-3.5 shadow-soft backdrop-blur-xl transition md:hidden ${open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"}`}>
      {links.map((s) => (
        <a key={s.id} href={`#${s.id}`} onClick={() => setOpen(false)}
           className={`rounded-xl px-3.5 py-2.5 font-medium hover:bg-accent/10 ${active === s.id ? "bg-accent/10 text-accent" : "text-muted"}`}>{s.nav}</a>
      ))}
      <div className="mt-2 flex justify-center">{Cta}</div>
    </div>
  );

  if (variant === "bar") {
    return (
      <header className={`fixed inset-x-0 top-0 z-50 border-b border-ink/10 backdrop-blur-xl transition ${scrolled ? "bg-white/85 shadow-soft" : "bg-white/60"}`}>
        <div className="wrap flex h-16 items-center justify-between">{Brand}{Links}{Toggle}</div>
        {Mobile("absolute left-0 right-0 top-full rounded-b-3xl")}
      </header>
    );
  }
  return (
    <header className={`glass fixed left-1/2 top-3.5 z-50 flex w-[min(1120px,94%)] -translate-x-1/2 items-center justify-between rounded-full py-2.5 pl-5 pr-3 transition ${scrolled ? "!bg-white/85" : ""}`}>
      {Brand}{Links}{Toggle}
      {Mobile("absolute left-0 right-0 top-[calc(100%+10px)] rounded-3xl")}
    </header>
  );
}
