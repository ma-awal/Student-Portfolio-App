import Icon from "./Icon";
import { resolveHref } from "@/lib/links";

export default function FloatingContact({ contact }) {
  return (
    <a href={resolveHref("@whatsapp", contact)} target="_blank" rel="noreferrer" aria-label="WhatsApp"
       className="fixed bottom-20 right-4 z-40 grid h-[54px] w-[54px] place-items-center rounded-full bg-[#25d366] text-white shadow-[0_12px_28px_-8px_rgba(37,211,102,.7)] transition hover:-rotate-6 hover:scale-110 sm:right-6">
      <Icon name="message-circle" className="h-6 w-6" />
    </a>
  );
}
