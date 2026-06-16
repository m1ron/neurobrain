# NeuroBrain

Corporate website for the **Ινστιτούτο Νευροαγγειακής Καινοτομίας** (Institute of Neurovascular Innovation) — a Greek medical institute focused on neurovascular research and innovation.

## Tech Stack

- **Bootstrap 5.3** — layout, responsive grid & components (container max-width 1280px)
- **Sass** — custom styling via modular SCSS partials
- **Autoprefixer** — vendor prefixes via PostCSS
- **Aptos Narrow** — primary typeface (self-hosted, weights 400 & 700)
- **IBM Plex Sans** — Greek character fallback (Google Fonts CDN, unicode-range only)

## Getting Started

```bash
npm install
npm run dev
```

Compiles SCSS, runs autoprefixer, and starts a local dev server on port 3456.

## Scripts

| Command         | Description                                   |
|-----------------|-----------------------------------------------|
| `npm run dev`   | Watch SCSS + serve on port 3456               |
| `npm run build` | Compile & compress CSS with autoprefixer      |
| `npm run css`   | One-shot SCSS compile + autoprefix            |
| `npm run scss`  | Compile SCSS only (no autoprefixer)           |
| `npm run serve` | Start static server only (port 3456)          |

## Pages

| File         | Description |
|--------------|-------------|
| `index.html` | Homepage    |

## Project Structure

```
├── index.html
├── assets/
│   ├── scss/
│   │   ├── styles.scss             # Entry point
│   │   ├── _var.scss               # Design tokens & variables
│   │   ├── _mixins.scss            # Utility mixins & breakpoints
│   │   ├── _fonts.scss             # @font-face declarations
│   │   ├── base/
│   │   │   ├── root.scss           # CSS custom properties
│   │   │   ├── typography.scss     # Headings, body, link styles
│   │   │   ├── spacing.scss        # Extended spacing utilities
│   │   │   ├── buttons.scss        # Button variants
│   │   │   ├── pagination.scss     # Pagination overrides
│   │   │   └── form.scss           # Form control overrides
│   │   ├── components/
│   │   │   └── eyebrow.scss        # Eyebrow label component
│   │   ├── blocks/
│   │   │   ├── hero.scss           # Hero — two-column with image
│   │   │   ├── stats.scss          # Stats strip — 4-column with icons
│   │   │   ├── pillars.scss        # Pillars — 3-column cards
│   │   │   ├── why.scss            # Why section — text + image, dark bg
│   │   │   ├── news-council.scss   # News cards + council member grid
│   │   │   └── cta-banner.scss     # CTA banner — dark bg, radial gradient
│   │   └── layout/
│   │       ├── header.scss         # Sticky navbar with language switcher
│   │       ├── page.scss           # Page wrapper & section helpers
│   │       └── footer.scss         # Footer — dark navy, 5-column
│   ├── css/                        # Compiled CSS output
│   ├── js/
│   │   ├── bootstrap.bundle.min.js
│   │   └── script.js
│   ├── fonts/                      # Aptos Narrow (woff / woff2)
│   └── img/
│       ├── logo.svg
│       ├── _icons/                 # SVG icons
│       ├── hero.jpg / @2x / @3x
│       ├── why.jpg / @2x
│       ├── news/                   # News card images
│       └── council/                # Council member portraits
└── package.json
```

## Design Tokens

| Token            | Value     | Usage                            |
|------------------|-----------|----------------------------------|
| `$color-primary` | `#29a6a4` | Teal — accents, buttons, links   |
| `$color-dark`    | `#011734` | Dark navy — headings, dark sections |
| `$color-almost-white` | `#f4f5f7` | Light gray — section backgrounds |

## Conventions

- **Container**: max-width 1280px at `xxl` breakpoint
- **Fonts**: only 2 weights available (400 regular, 700 bold) — use accordingly
- **Greek text**: Aptos Narrow + IBM Plex Sans unicode-range fallback for full Greek glyph coverage
- **Images**: retina-ready with `srcset` (`1x`, `2x`, `3x`) and explicit `width`/`height`
- **Button variants**: `btn-primary` (teal), `btn-outline-primary`, `btn-outline-dark`, `btn-outline-light` (on dark bg), `btn-dark`
- **Icons**: inline SVG in HTML; decorative icons via `<figure><img>` from `assets/img/_icons/`
