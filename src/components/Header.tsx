import { useState } from "react";
import { LOGO_SRC, PHOTO_SRC } from "../config";
import type { Dict, Lang } from "../i18n";
import LanguageToggle from "./LanguageToggle";

type Props = { t: Dict; lang: Lang; onLangChange: (l: Lang) => void };

export default function Header({ t, lang, onLangChange }: Props) {
  const [photoOk, setPhotoOk] = useState(true);

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-dark to-medium px-6 pb-10 pt-5 text-white">
      {/* subtle decorative arcs echoing the logo's globe */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 opacity-[0.08]"
        viewBox="0 0 200 200"
        fill="none"
        stroke="white"
        strokeWidth="10"
      >
        <path d="M30 70c40-30 110-40 150-10" />
        <path d="M20 105c50-30 130-35 170-5" />
        <path d="M30 140c45-25 110-30 150-5" />
      </svg>

      <div className="relative flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm">
          <img src={LOGO_SRC} alt={t.logoAlt} width={44} height={44} className="h-full w-full object-cover" />
        </div>
        <LanguageToggle lang={lang} onChange={onLangChange} label={t.switchLabel} />
      </div>

      <div className="relative mt-6 flex flex-col items-center text-center animate-rise">
        <div className="h-32 w-32 overflow-hidden rounded-full border-[3px] border-white/90 bg-light shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
          {photoOk ? (
            <img
              src={PHOTO_SRC}
              alt={t.photoAlt}
              width={128}
              height={128}
              className="h-full w-full object-cover"
              onError={() => setPhotoOk(false)}
            />
          ) : (
            <div
              role="img"
              aria-label={t.photoAlt}
              className="flex h-full w-full items-center justify-center bg-light font-heading text-4xl font-semibold tracking-wide text-primary"
            >
              CT
            </div>
          )}
        </div>

        <h1 className="mt-5 font-heading text-[28px] font-bold leading-tight tracking-tight">Cilene Telles</h1>
        <p className="mt-1.5 text-[15px] font-medium text-white/95">{t.role}</p>
        <div className="mx-auto my-3 h-px w-10 bg-sage" aria-hidden />
        <p className="font-heading text-[15px] font-semibold tracking-wide">Grupo Ativa Brasil</p>
        <p className="mt-1 flex items-center gap-1.5 text-[13px] text-white/80">
          <svg aria-hidden width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
            <circle cx="12" cy="9.5" r="2.5" />
          </svg>
          {t.location}
        </p>
      </div>
    </header>
  );
}
