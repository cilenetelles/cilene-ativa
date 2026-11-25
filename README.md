<p align="center"><a href="https://cilenetelles.github.io/cilene-ativa/"><img src="public/og-image.jpg" alt="Cilene Telles — Head of Product & Innovation, Grupo Ativa Brasil" width="100%"></a></p>

# Cilene Telles — Digital Business Card

Cartão de visita digital (página única, bilíngue EN | PT) de Cilene Telles, Head of Product & Innovation do Grupo Ativa Brasil.

**Endereço público:** https://cilenetelles.github.io/cilene-ativa/

Feito com React, TypeScript, Tailwind CSS e Vite. Sem banco de dados, login ou backend.

## O que tem
- Botões: WhatsApp (principal), LinkedIn, site, e-mail e **Salvar contato** (vCard `public/cilene-telles.vcf`, compatível com iOS e Android)
- Seletor de idioma EN | PT (inglês padrão)
- Compartilhar (API nativa do celular; sem ela, copia o link)
- QR Code real gerado pela biblioteca `qrcode` a partir do endereço público, com download em PNG
- SEO, Open Graph (`public/og-image.jpg`) e favicon com o logotipo

## Como trocar a foto
A foto fica em `public/cilene.jpg` (quadrada, 640×640). Para trocar, substitua esse arquivo.

## Publicação
Cada push na branch `main` gera o site e publica no GitHub Pages (`.github/workflows/deploy.yml`).
Uma vez só: em **Settings → Pages → Build and deployment → Source**, escolha **GitHub Actions**.

Se mudar de endereço, atualize `SITE_URL` em `src/config.ts`, as URLs em `index.html` e `base` em `vite.config.ts`.

## Rodar localmente
```bash
npm install
npm run dev
```
