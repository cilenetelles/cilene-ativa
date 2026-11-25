export type Lang = "en" | "pt";

const en = {
    switchLabel: "Language",
    photoAlt: "Portrait of Cilene Telles",
    logoAlt: "Grupo Ativa Brasil logo",
    role: "Head of Product & Innovation",
    location: "São Paulo, Brazil",
    headline: "Connecting Innovation, Manufacturing & Global Opportunities",
    description1:
      "Representing Grupo Ativa Brasil, a Brazilian contract manufacturing company specializing in cosmetics, dermocosmetics, wellness products and dietary supplements.",
    description2:
      "Connecting international partners, product innovation and integrated industrial manufacturing solutions.",
    contactsLabel: "Contact options",
    whatsapp: "Connect on WhatsApp",
    linkedin: "Connect with Grupo Ativa Brasil",
    website: "Visit Our Company Website",
    email: "Send Me an Email",
    save: "Save My Contact",
    aboutTitle: "About Us",
    about1:
      "With over 25 years of experience, Grupo Ativa Brasil provides integrated contract manufacturing and product development solutions for the cosmetics, dermocosmetics, wellness and dietary supplement industries.",
    about2:
      "Our expertise connects research and development, innovation, formulation and industrial manufacturing.",
    categories: ["Cosmetics", "Dermocosmetics", "Wellness Products", "Dietary Supplements"],
    opportunitiesTitle: "Let’s Explore Opportunities",
    tags: [
      "Product Innovation",
      "Contract Manufacturing",
      "Private Label",
      "Research & Development",
      "Technology Partnerships",
      "International Business",
      "Global Market Opportunities",
      "Brazilian Market",
    ],
    share: "Share Business Card",
    showQr: "Show QR Code",
    linkCopied: "Link copied to clipboard",
    copyFailed: "Copy this link:",
    qrTitle: "Scan to open this card",
    downloadQr: "Download PNG",
    close: "Close",
    shareText: "Cilene Telles — Head of Product & Innovation, Grupo Ativa Brasil",
    footerTagline: "Innovation · Manufacturing · Global Partnerships",
    opensNewTab: "(opens in a new tab)",
    scanCaption: "Scan to open this card",
    qrAlt: "QR Code that opens this digital business card",
};

export type Dict = typeof en;

const pt: Dict = {
    switchLabel: "Idioma",
    photoAlt: "Retrato de Cilene Telles",
    logoAlt: "Logotipo do Grupo Ativa Brasil",
    role: "Diretora de Produto e Inovação",
    location: "São Paulo, Brasil",
    headline: "Conectando Inovação, Manufatura e Oportunidades Globais",
    description1:
      "Representando o Grupo Ativa Brasil, empresa brasileira de manufatura terceirizada especializada em cosméticos, dermocosméticos, produtos de bem-estar e suplementos alimentares.",
    description2:
      "Conectando parceiros internacionais, inovação de produtos e soluções industriais integradas de manufatura.",
    contactsLabel: "Opções de contato",
    whatsapp: "Fale comigo no WhatsApp",
    linkedin: "Conecte-se com o Grupo Ativa Brasil",
    website: "Visite o site da empresa",
    email: "Envie-me um e-mail",
    save: "Salvar meu contato",
    aboutTitle: "Sobre Nós",
    about1:
      "Com mais de 25 anos de experiência, o Grupo Ativa Brasil oferece soluções integradas de manufatura terceirizada e desenvolvimento de produtos para as indústrias de cosméticos, dermocosméticos, bem-estar e suplementos alimentares.",
    about2:
      "Nossa expertise conecta pesquisa e desenvolvimento, inovação, formulação e produção industrial.",
    categories: ["Cosméticos", "Dermocosméticos", "Produtos de Bem-Estar", "Suplementos Alimentares"],
    opportunitiesTitle: "Vamos Explorar Oportunidades",
    tags: [
      "Inovação de Produtos",
      "Manufatura Terceirizada",
      "Marca Própria",
      "Pesquisa e Desenvolvimento",
      "Parcerias Tecnológicas",
      "Negócios Internacionais",
      "Oportunidades no Mercado Global",
      "Mercado Brasileiro",
    ],
    share: "Compartilhar cartão",
    showQr: "Mostrar QR Code",
    linkCopied: "Link copiado",
    copyFailed: "Copie este link:",
    qrTitle: "Escaneie para abrir este cartão",
    downloadQr: "Baixar PNG",
    close: "Fechar",
    shareText: "Cilene Telles — Diretora de Produto e Inovação, Grupo Ativa Brasil",
    footerTagline: "Inovação · Manufatura · Parcerias Globais",
    opensNewTab: "(abre em nova aba)",
    scanCaption: "Escaneie e acesse",
    qrAlt: "QR Code que abre este cartão de visita digital",
};

export const translations: Record<Lang, Dict> = { en, pt };

export function detectInitialLang(): Lang {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "pt") return saved;
  } catch {
    /* storage unavailable */
  }
  return "en"; // English is the default language
}

export function persistLang(lang: Lang) {
  try {
    localStorage.setItem("lang", lang);
  } catch {
    /* storage unavailable */
  }
}
