import { initials } from "@/lib/name";

// priority = true hole (hero photo) browser ke age load korte bole, baki photo lazy
export default function Avatar({ photo, name, textClass = "text-[96px]", priority = false }) {
  if (photo) {
    return <img className="h-full w-full object-cover" src={photo} alt={name} decoding="async"
      {...(priority ? { loading: "eager", fetchPriority: "high" } : { loading: "lazy" })} />;
  }
  return <div className={`grad-text font-extrabold ${textClass}`}>{initials(name)}</div>;
}
