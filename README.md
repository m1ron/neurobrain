# NeuroBrain

Corporate website for WinMedica — a Greek pharmaceutical company specialising in the in-licensing, registration, and commercialisation of innovative treatments.

## Tech Stack

- **Bootstrap 5.3** — layout, responsive grid & components
- **Sass** — custom styling via modular SCSS partials
- **Autoprefixer** — vendor prefixes via PostCSS
- **BrowserSync** — live reload during development
- **TWK Lausanne Pan** — primary typeface (self-hosted)
- **IBM Plex Sans** — body typeface (Google Fonts, Greek + Latin)

## Getting Started

```bash
npm install
npm run dev
```

This compiles SCSS, runs autoprefixer, and starts a BrowserSync server with live reload.

## Scripts

| Command         | Description                                      |
|-----------------|--------------------------------------------------|
| `npm run dev`   | Watch SCSS + live reload via BrowserSync          |
| `npm run build` | Compile & compress CSS with autoprefixer          |
| `npm run css`   | One-shot SCSS compile + autoprefix                |
| `npm run scss`  | Compile SCSS only                                 |
| `npm run serve` | Start BrowserSync server only                     |

## Pages

| File                  | Description                        |
|-----------------------|------------------------------------|
| `index.html`          | Homepage                           |
| `company.html`        | About / Company page               |
| `sustainability.html` | ESG & sustainability               |
| `people.html`         | Team & careers                     |
| `press.html`          | Press center / news listing        |
| `products.html`       | Product catalogue & search         |
| `article.html`        | Single article / press release     |
| `contact.html`        | Contact form & department emails   |

## Project Structure

```
├── index.html
├── company.html
├── sustainability.html
├── people.html
├── press.html
├── products.html
├── article.html
├── contact.html
├── assets/
│   ├── scss/
│   │   ├── styles.scss             # Entry point
│   │   ├── _var.scss               # Design tokens & variables
│   │   ├── _mixins.scss            # Utility mixins & breakpoints
│   │   ├── _fonts.scss             # @font-face declarations
│   │   ├── base/
│   │   │   ├── root.scss           # CSS custom properties
│   │   │   ├── typography.scss     # Type styles
│   │   │   ├── spacing.scss        # Extended spacing utilities
│   │   │   ├── buttons.scss        # Button variants
│   │   │   ├── pagination.scss     # Bootstrap pagination override
│   │   │   └── form.scss          # Bootstrap form overrides (labels, inputs, checkboxes)
│   │   ├── blocks/
│   │   │   ├── index.scss          # Homepage hero
│   │   │   ├── section.scss        # Generic content section
│   │   │   ├── hero.scss           # Inner-page hero
│   │   │   ├── article.scss        # Article/blog post
│   │   │   ├── featured.scss       # Featured content block
│   │   │   ├── featured-article.scss # Featured article card
│   │   │   ├── features.scss       # Feature cards grid
│   │   │   ├── logos.scss          # Partner logos marquee
│   │   │   ├── split.scss          # Two-column CTA cards
│   │   │   ├── news.scss           # Press center grid & cards
│   │   │   ├── csr.scss            # CSR block with background image & glass card
│   │   │   ├── quote.scss          # Centered italic blockquote
│   │   │   ├── products.scss       # Product list, search bar & alphabet nav
│   │   │   ├── latest-news.scss   # Homepage latest-news section (teal bg, 3 cards)
│   │   │   ├── timeline.scss     # Vertical timeline (Company — Our History)
│   │   │   ├── contact.scss     # Contact page (hero, details, form card)
│   │   │   └── facilities.scss  # Facility image cards (Company page)
│   │   ├── components/
│   │   │   ├── eyebrow.scss        # Label/tag component
│   │   │   ├── audioplayer.scss    # Audio player widget
│   │   │   ├── author-card.scss    # Author info card
│   │   │   ├── glass-card.scss     # Glassmorphism card
│   │   │   ├── numbered-list.scss  # Numbered list component
│   │   │   ├── esg-card.scss       # ESG card component
│   │   │   ├── filter-dropdown.scss # Reusable filter dropdown
│   │   │   └── departments.scss # Department contact cards grid
│   │   └── layout/
│   │       ├── utilitybar.scss     # Top utility nav + language dropdown
│   │       ├── header.scss         # Sticky navbar + nav dropdowns
│   │       ├── page.scss           # Page wrapper
│   │       └── footer.scss         # Footer with background image
│   ├── css/                        # Compiled CSS output
│   ├── js/
│   │   ├── bootstrap.bundle.min.js
│   │   └── script.js               # Marquee, filters, nav dropdowns, timeline
│   ├── fonts/                      # TWK Lausanne Pan (woff2/woff)
│   └── img/                        # Images, icons & SVGs
└── package.json
```

## JavaScript Modules

| Function              | Description                                                        |
|-----------------------|--------------------------------------------------------------------|
| `initMarquee()`       | Clones logo list for seamless infinite scroll, respects reduced motion |
| `initFilterDropdowns()` | Locks min-width on `.filter-dropdown` toggles, wires active state + label updates |
| `initNewsFilters()`   | Data-attribute card filtering for press page, shows empty state when no results (only runs if `.news` exists) |
| `initNavDropdowns()`  | Mobile tap-to-open for nav dropdowns + nested sub-menu toggling    |
| `initNavbarOverlay()` | Closes mobile nav when overlay backdrop is tapped                  |
| `initProducts()`    | Accordion toggle for product details + alphabet letter filtering (only runs if `.products-list` exists) |
| `initTimeline()`    | Scroll-driven teal progress fill on the vertical timeline (only runs if `.timeline` exists) |

## Conventions

- **Icons**: button/UI icons are base64-encoded in CSS pseudo-elements; decorative/gradient icons use external SVGs from `assets/img/_icons/` via `<figure><img>`
- **Bootstrap overrides**: via `--bs-*` CSS custom properties, not deep SCSS overrides
- **Dividers**: `box-shadow: inset` instead of borders where appropriate
- **Filters**: generic data-attribute system (`data-filter`, `data-value`) for reusable filtering
- **Nav dropdowns**: hover-triggered on desktop, tap-to-open on mobile; clicking the link always navigates
- **Hamburger**: CSS-only animated icon (3 bars → cross) via `::before`/`::after` with staggered transitions
- **Mobile nav**: scroll-constrained to viewport height with hidden scrollbar, sub-menus in rounded translucent cards
- **Utilitybar**: language dropdown on left, utility links on right; links duplicated in mobile nav as `d-lg-none` items
- **Images**: retina-ready with `srcset` (`1x`, `2x`, `3x`) and explicit `width`/`height` attributes
- **Button variants**: `btn-primary`, `btn-outline-primary`, `btn-outline-light` (white border/text on dark bg, arrow turns white via `brightness` filter and reverts on hover), `btn-text` (borderless with teal circle arrow), `btn-secondary`
- **Forms**: Bootstrap `.form-label`, `.form-control`, `.form-select`, `.form-check` with site-wide overrides in `base/form.scss` (borderless inputs, uppercase labels, custom select chevron)
