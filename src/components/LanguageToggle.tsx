import type { Lang } from "../i18n";

type Props = { lang: Lang; onChange: (l: Lang) => void; label: string };

const OPTIONS: { value: Lang; text: string; full: string }[] = [
  { value: "en", text: "EN", full: "English" },
  { value: "pt", text: "PT", full: "Português" },
];

export default function LanguageToggle({ lang, onChange, label }: Props) {
  return (
    <div role="group" aria-label={label} className="flex rounded-full border border-white/30 bg-white/10 p-0.5 backdrop-blur-sm">
      {OPTIONS.map((o) => {
        const active = o.value === lang;
        return (
          <button
            key={o.value}
            type="button"
            lang={o.value}
            aria-pressed={active}
            aria-label={o.full}
            onClick={() => onChange(o.value)}
            className={`min-h-[36px] min-w-[44px] rounded-full px-3 text-xs font-semibold tracking-wider transition-colors ${
              active ? "bg-white text-dark" : "text-white/85 hover:text-white"
            }`}
          >
            {o.text}
          </button>
        );
      })}
    </div>
  );
}
