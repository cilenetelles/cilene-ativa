import type { ReactNode } from "react";
import { ArrowIcon } from "./Icons";

type Props = {
  href: string;
  icon: ReactNode;
  label: string;
  primary?: boolean;
  external?: boolean;
  download?: string;
  newTabHint?: string;
};

export default function ContactButton({ href, icon, label, primary, external, download, newTabHint }: Props) {
  const base =
    "group flex w-full items-center gap-3.5 rounded-2xl px-4 text-left font-semibold transition-all duration-200 active:scale-[0.99]";
  const style = primary
    ? "min-h-[60px] bg-primary text-white text-[16px] shadow-[0_6px_18px_rgba(0,107,84,0.25)] hover:bg-dark"
    : "min-h-[54px] border border-line bg-white text-deep text-[15px] hover:border-sage hover:bg-light/60";
  const iconWrap = primary
    ? "bg-white/15 text-white"
    : "bg-light text-primary";

  return (
    <a
      href={href}
      className={`${base} ${style}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download } : {})}
    >
      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${iconWrap}`}>{icon}</span>
      <span className="flex-1">
        {label}
        {external && newTabHint ? <span className="sr-only"> {newTabHint}</span> : null}
      </span>
      <ArrowIcon
        className={`shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 ${
          primary ? "text-white/80" : "text-sage"
        }`}
      />
    </a>
  );
}
