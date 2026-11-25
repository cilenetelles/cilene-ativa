// Public, definitive address of the card. The QR Code and the Share button use it.
// If the site moves to another domain, change only this line (and the URLs in index.html).
export const SITE_URL = "https://cilenetelles.github.io/cilene-ativa/";

const base = import.meta.env.BASE_URL;
export const asset = (path: string) => `${base}${path}`;

// To show the professional photo, add the file public/cilene.jpg (square, ~600×600).
// Until then, an elegant monogram is shown in its place.
export const PHOTO_SRC = asset("cilene-2.jpg");
export const LOGO_SRC = asset("logo.jpg");
export const VCARD_SRC = asset("cilene-telles.vcf");

export const LINKS = {
  whatsapp: "https://wa.me/5511994734405",
  linkedin: "https://www.linkedin.com/company/grupo-ativa-brasil/",
  website: "https://grupoativabrasil.com/",
  email: "mailto:cilenetelles@outlook.com",
};
