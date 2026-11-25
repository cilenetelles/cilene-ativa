import { useEffect, useState } from "react";
import { LINKS, VCARD_SRC } from "./config";
import { detectInitialLang, persistLang, translations, type Lang } from "./i18n";
import Header from "./components/Header";
import Section from "./components/Section";
import ContactButton from "./components/ContactButton";
import ShareBar from "./components/ShareBar";
import {
  CapsuleIcon,
  ContactIcon,
  DropIcon,
  FlaskIcon,
  GlobeIcon,
  LeafIcon,
  LinkedInIcon,
  MailIcon,
  WhatsAppIcon,
} from "./components/Icons";

const CATEGORY_ICONS = [DropIcon, FlaskIcon, LeafIcon, CapsuleIcon];

export default function App() {
  const [lang, setLang] = useState<Lang>(detectInitialLang);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    persistLang(lang);
  }, [lang]);

  return (
    <div className="min-h-screen bg-offwhite sm:py-8">
      <main className="mx-auto w-full max-w-[480px] overflow-hidden bg-white sm:rounded-[28px] sm:border sm:border-line sm:shadow-[0_10px_40px_rgba(22,61,50,0.08)]">
        <Header t={t} lang={lang} onLangChange={setLang} />

        {/* Contacts first, so they are visible with minimal scrolling */}
        <nav aria-label={t.contactsLabel} className="relative -mt-6 rounded-t-[28px] bg-white px-5 pt-6">
          <div className="space-y-2.5">
            <div className="animate-rise" style={{ animationDelay: "80ms" }}>
              <ContactButton href={LINKS.whatsapp} icon={<WhatsAppIcon />} label={t.whatsapp} primary external newTabHint={t.opensNewTab} />
            </div>
            <div className="animate-rise space-y-2.5" style={{ animationDelay: "160ms" }}>
              <ContactButton href={LINKS.linkedin} icon={<LinkedInIcon />} label={t.linkedin} external newTabHint={t.opensNewTab} />
              <ContactButton href={LINKS.website} icon={<GlobeIcon />} label={t.website} external newTabHint={t.opensNewTab} />
              <ContactButton href={LINKS.email} icon={<MailIcon />} label={t.email} />
              <ContactButton href={VCARD_SRC} icon={<ContactIcon />} label={t.save} download="Cilene-Telles.vcf" />
            </div>
          </div>
        </nav>

        <Section id="positioning" className="pt-9">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-medium">Grupo Ativa Brasil</p>
          <h2 className="font-heading text-[21px] font-bold leading-snug tracking-tight text-deep">{t.headline}</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-neutral">{t.description1}</p>
          <p className="mt-2.5 text-[15px] leading-relaxed text-neutral">{t.description2}</p>
        </Section>

        <div className="mx-6 h-px bg-line" aria-hidden />

        <Section id="about" title={t.aboutTitle}>
          <p className="text-[15px] leading-relaxed text-neutral">{t.about1}</p>
          <p className="mt-2.5 text-[15px] leading-relaxed text-neutral">{t.about2}</p>
          <ul className="mt-5 grid grid-cols-2 gap-3">
            {t.categories.map((name, i) => {
              const Icon = CATEGORY_ICONS[i];
              return (
                <li key={name} className="flex min-h-[96px] flex-col justify-between rounded-2xl bg-light p-4">
                  <Icon className="text-primary" />
                  <span className="mt-3 text-[14px] font-semibold leading-snug text-deep">{name}</span>
                </li>
              );
            })}
          </ul>
        </Section>

        <Section id="opportunities" title={t.opportunitiesTitle} className="pt-2">
          <ul className="flex flex-wrap gap-2">
            {t.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line bg-offwhite px-3.5 py-1.5 text-[13px] font-medium text-deep"
              >
                {tag}
              </li>
            ))}
          </ul>
        </Section>

        <Section className="pt-2">
          <ShareBar t={t} />
        </Section>

        <footer className="mt-2 bg-gradient-to-br from-dark to-medium px-6 py-8 text-center text-white">
          <p className="font-heading text-[13px] font-semibold tracking-wide">{t.footerTagline}</p>
          <div className="mx-auto my-4 h-px w-10 bg-sage/70" aria-hidden />
          <p className="font-heading text-[15px] font-semibold">Grupo Ativa Brasil</p>
          <p className="mt-1 text-[13px] text-white/80">{t.location}</p>
          <p className="mt-4 text-xs text-white/70">© 2026 Grupo Ativa Brasil</p>
        </footer>
      </main>
    </div>
  );
}
