# CLAUDE.md — Field Notes (field-notes.hs108.in)

## What this project is

Field Notes is the editorial / thought-keeping arm of HS108 Design Studio. It lives at `field-notes.hs108.in` and is part of the hs108.in network of properties. It's a public-facing journal — design thinking, process writing, studio notes — not a marketing site.

**Parent studio:** [hs108.in](https://hs108.in) · GitHub: `error420notfound/HS108Website`
**This repo:** `error420notfound/field-notes` · Branch: `main` (only branch — no gh-pages)

---

## Stack

- **Framework:** Astro 4.16 (static output)
- **Styling:** Custom CSS only — no Tailwind, no utility frameworks
- **Animations:** `motion` library (scroll reveals, entrance animations)
- **Content:** Astro Content Collections with Zod schemas (Markdown)
- **Deployment:** GitHub Actions → GitHub Pages (source: "GitHub Actions", not a branch)

**Run locally:** `npm run dev` → `http://localhost:4321`
**Build:** `npm run build` → outputs to `dist/`

---

## Content structure

Three modes, each a separate content collection:

| Mode | Path | Schema type | Purpose |
|------|------|-------------|---------|
| Archive | `src/content/archive/` | reading / signal / application / calibration | Timeless thinking, curated entries |
| Journal | `src/content/journal/` | project-log / reflection / decision / weekly | Process, evolution, studio notes |
| Zine | `src/content/zine/` | published / upcoming | Composed, edited publication issues |

Content schemas are defined in `src/content/config.ts`. Always check this before adding new content.

**Archive frontmatter:**
```yaml
title: string
thesis: string          # one-line thesis shown in listings
type: reading | signal | application | calibration
tags: [string]
source: string          # optional URL/citation for readings
date: YYYY-MM-DD
featured: boolean       # true = homepage hero
```

**Journal frontmatter:**
```yaml
title: string
subtitle: string        # optional, shown as sub-heading
type: project-log | reflection | decision | weekly
project: string         # optional, which project this relates to
date: YYYY-MM-DD
draft: boolean          # true = hidden from build
```

**Zine frontmatter:**
```yaml
issue: number
title: string
theme: string           # one-word theme
thesis: string
season: string          # e.g. "Winter 2025"
coverAccent: "#HEX"
date: YYYY-MM-DD
status: published | upcoming
```

---

## File structure

```
src/
├── components/
│   ├── Nav.astro          # Fixed top nav, mode links with colored dots
│   └── Footer.astro       # Studio links + mode links
├── content/
│   ├── config.ts          # Content schemas — always check this
│   ├── archive/           # .md files
│   ├── journal/           # .md files
│   └── zine/              # .md files
├── layouts/
│   └── BaseLayout.astro   # Wraps all pages: Nav + slot + Footer
└── pages/
    ├── index.astro         # Homepage
    ├── 404.astro
    ├── archive/
    │   ├── index.astro     # Filterable grid
    │   └── [slug].astro    # Entry detail
    ├── journal/
    │   ├── index.astro     # Timeline grouped by month
    │   └── [slug].astro    # Entry detail
    └── zine/
        ├── index.astro     # Issues listing
        └── [slug].astro    # Issue detail

public/
├── styles/
│   ├── global.css         # ALL design tokens + reset + layout
│   ├── typography.css     # Font imports + type utility classes
│   └── brutalist.css      # Component classes (buttons, tags, cards, nav)
├── CNAME                  # field-notes.hs108.in
└── favicon.svg

.github/workflows/
└── deploy.yml             # Build + deploy to GitHub Pages via Actions
```

---

## Design system quick reference

See `docs/DESIGN-SYSTEM.md` for the full reference.

**Theme:** `theme-teal` — applied to `<body>` in BaseLayout
**Border rule:** All borders are `2px solid var(--border)` — no border-radius anywhere
**Fonts:** Instrument Serif (display/headlines) · Geist (body) · Geist Mono (UI/labels)
**Hover:** Fill-swap only (teal accent background fills in) — no scale transforms, no shadows
**Animations:** Motion library — fade + translateY, `cubic-bezier(0.16, 1, 0.3, 1)` easing

---

## Deployment

Push to `main` → GitHub Actions builds → deploys to GitHub Pages automatically.
GitHub Pages source must be set to **"GitHub Actions"** (not a branch) in repo Settings → Pages.

**Do not:**
- Create or push to a `gh-pages` branch — the workflow handles deployment
- Commit `node_modules/` or `dist/`

---

## Design constraints (non-negotiable)

- No `border-radius` on any element
- No box-shadows or blur effects
- No gradients
- No hardcoded hex colors in components — always use CSS variables
- No Tailwind or CSS frameworks
- Instrument Serif is always weight 400, often italic — never bold, never uppercase
- No spring/bounce animations; no scale transforms on hover
- No infinite animation loops (except the homepage marquee)
