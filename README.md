# Digimon Tools

Printable tools and references for the 2020 Digimon Card Game.

The site is built with [Astro](https://astro.build/) and is published at
[digimon.tools](https://digimon.tools).

## What's Included

- **Home** (`/`) - Links to the available tools.
- **Printable playmat** (`/playmat`) - A browser-printable Digimon Card Game
  playmat with memory gauge, battle area, security stack, breeding area, deck,
  and trash zones.
- **Printable quick start guide** (`/quickstart`) - A condensed rules reference
  for new players covering setup, turn flow, card types, victory conditions, and
  common keywords.
- **Keyword and rule lookup** (`/keywords`) - A searchable reference for Digimon
  Card Game keyword effects and rule mechanics, with a plaintext markdown endpoint at
  `/keywords.md`.

## Getting Started

Install dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

Astro serves the app at `http://localhost:4321` by default.

## Commands

Run these from the repository root:

| Command                   | Description                                                     |
| ------------------------- | --------------------------------------------------------------- |
| `npm run dev`             | Start the local Astro development server.                       |
| `npm test`                | Run Node tests for structured resource data and search helpers. |
| `npm run build`           | Build the static production site into `dist/`.                  |
| `npm run preview`         | Preview the production build locally.                           |
| `npm run astro -- --help` | Show Astro CLI help.                                            |

## Project Structure

```text
/
├── public/
│   └── favicon.png
├── src/
│   ├── assets/
│   │   └── digimonToolsLogo.png
│   ├── components/
│   │   ├── Playmat.astro
│   │   └── QuickStart.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── keywords.astro
│       ├── keywords.md.ts
│       ├── playmat.astro
│       └── quickstart.astro
├── astro.config.mjs
└── package.json
```

Astro uses file-based routing, so new files in `src/pages/` become new routes.
Most page content lives in `src/components/`, with `src/layouts/Layout.astro`
providing shared document metadata and analytics.

## Printing

The playmat and quick start guide are designed to be printed directly from the
browser. For best results:

- Open the page you want to print.
- Use your browser's print dialog.
- Disable browser headers and footers if they interfere with the layout.
- Adjust scale or orientation as needed for your printer and paper size.

## Deployment

This is a static Astro site. A production build can be generated with:

```sh
npm run build
```

The generated `dist/` directory can be deployed to any static host. The canonical
site URL is configured in `astro.config.mjs`.

## Disclaimer

Digimon is owned by Akiyoshi Hongo and Toei Animation. This project is an
unofficial fan-made utility and is not affiliated with or endorsed by the rights
holders.
