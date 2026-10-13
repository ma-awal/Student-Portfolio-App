"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import Heading from "@/components/Heading";
import Icon from "@/components/Icon";
import { waLink, socialsOf } from "@/lib/links";

const field = "w-full resize-y rounded-theme-sm border border-ink/10 bg-white/75 px-[18px] py-[15px] text-[15px] font-medium text-ink outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/15";

// Backend lage na: submit korle WhatsApp e message open hobe
function Form({ contact, buttonLabel, className = "" }) {
  const [f, setF] = useState({ name: "", message: "" });
  const submit = (e) => {
    e.preventDefault();
    window.open(waLink(contact.whatsapp || contact.phone, `Hello, I'm ${f.name || "a visitor"}.\n${f.message}`), "_blank");
  };
  return (
    <Reveal as="form" delay={120} onSubmit={submit} className={`glass grid gap-3.5 rounded-theme p-6 md:p-7 ${className}`}>
      <input className={field} required name="name" autoComplete="name" aria-label="Your name" placeholder="Your name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
      <textarea className={field} required name="message" aria-label="Your message" rows={4} placeholder="Your message" value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
      <button className="btn btn-primary" type="submit"><Icon name="send" className="h-[18px] w-[18px]" />{buttonLabel}</button>
    </Reveal>
  );
}
const getRows = (c) => [
  c.phone && { icon: "phone", label: "Phone", value: `+${c.phone}`, href: `tel:+${c.phone}` },
  c.email && { icon: "mail", label: "Email", value: c.email, href: `mailto:${c.email}` },
  c.address && { icon: "map-pin", label: "Address", value: c.address },
].filter(Boolean);
const Socials = ({ socials = [], className = "" }) => (
  <div className={`flex gap-2.5 ${className}`}>
    {socials.map((s) => (
      <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}
         className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white/70 transition hover:-translate-y-0.5 hover:bg-accent hover:text-white"><Icon name={s.icon} className="h-5 w-5" /></a>
    ))}
  </div>
);
const InfoCard = ({ r, i, center }) => (
  <Reveal delay={i * 80} className={`glass flex items-center gap-4 rounded-theme-sm px-5 py-4 ${center ? "flex-col text-center" : ""}`}>
    <span className="grad-bg grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white"><Icon name={r.icon} className="h-5 w-5" /></span>
    <div className="min-w-0"><small className="block text-xs font-semibold uppercase tracking-wider text-muted">{r.label}</small>
      {r.href ? <a className="break-words text-[15px] font-semibold" href={r.href}>{r.value}</a> : <p className="text-[15px] font-semibold">{r.value}</p>}</div>
  </Reveal>
);

// variant: "split" (doctor) | "stacked" (business) | "minimal" (engineer) | "centered" (student)
export default function Contact({ id, variant = "split", eyebrow, title, subtitle, buttonLabel = "Send on WhatsApp", contact }) {
  const rows = getRows(contact);
  let body;
  if (variant === "stacked") {
    body = (
      <>
        <div className="mb-5 grid gap-4 sm:grid-cols-3">{rows.map((r, i) => <InfoCard key={r.label} r={r} i={i} center />)}</div>
        <Form contact={contact} buttonLabel={buttonLabel} className="mx-auto max-w-3xl" />
      </>
    );
  } else if (variant === "minimal") {
    body = (
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <Reveal className="grid gap-5">
          {rows.map((r) => (
            <div key={r.label} className="flex items-center gap-4 border-b border-ink/10 pb-5">
              <span className="text-accent"><Icon name={r.icon} className="h-5 w-5" /></span>
              <div><small className="block font-mono text-xs text-muted">{r.label.toLowerCase()}</small>{r.href ? <a className="font-semibold" href={r.href}>{r.value}</a> : <b>{r.value}</b>}</div>
            </div>
          ))}
          <Socials socials={socialsOf(contact)} />
        </Reveal>
        <Form contact={contact} buttonLabel={buttonLabel} />
      </div>
    );
  } else if (variant === "centered") {
    body = (
      <div className="mx-auto max-w-2xl">
        <Reveal className="glass mb-5 rounded-theme p-6 text-center">
          <Socials socials={socialsOf(contact)} className="justify-center" />
          <div className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[15px] font-semibold">
            {rows.map((r) => <span key={r.label} className="flex items-center gap-2"><Icon name={r.icon} className="h-4 w-4 text-accent" />{r.href ? <a href={r.href}>{r.value}</a> : r.value}</span>)}
          </div>
        </Reveal>
        <Form contact={contact} buttonLabel={buttonLabel} />
      </div>
    );
  } else {
    body = (
      <div className="mx-auto grid max-w-[980px] gap-6 md:grid-cols-[1fr_1.1fr]">
        <div className="grid content-start gap-4">{rows.map((r, i) => <InfoCard key={r.label} r={r} i={i} />)}</div>
        <Form contact={contact} buttonLabel={buttonLabel} />
      </div>
    );
  }
  return <section id={id} className="sec"><Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />{body}</section>;
}
