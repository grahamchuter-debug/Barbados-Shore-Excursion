# Barbados Shore Excursion

Authority website for cruise passengers visiting Barbados via the Bridgetown cruise port.

**Domain:** [barbadosshoreexcursion.com](https://barbadosshoreexcursion.com)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

Static output is in `dist/`.

## Deploy to Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare Dashboard → Workers & Pages → Create → Connect to Git.
3. Select the repository and configure:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 22 or later
4. Add custom domain `barbadosshoreexcursion.com`.

Alternatively, use `wrangler pages deploy dist` after building locally.

## Project Structure

- `src/pages/` — Homepage and dynamic tour/guide pages
- `src/data/` — Tour and guide content
- `src/components/` — Reusable UI components
- `public/images/` — Barbados excursion images
- `public/robots.txt` — Search engine directives

## Content

Tour inventory based on [Shore Excursions Group Barbados](https://www.shoreexcursionsgroup.com/port/barbados-shore-excursions).
