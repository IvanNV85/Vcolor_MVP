---
name: frontend-design
description: >-
  Use this skill when designing, building, or modifying frontend UI components,
  pages, sections, or layouts for the Vibe Color (Lumière Palette) project.
  Activate when the user asks to create new pages, add sections, redesign
  components, implement responsive layouts, add animations/interactions, or
  improve the visual design. Also use when discussing color palette choices,
  typography decisions, component patterns, or accessibility improvements.
---

# Frontend Design Skill — Vibe Color (Lumière Palette)

This skill provides comprehensive design guidelines, component patterns, and
implementation standards for the Vibe Color MVP project.

---

## 1. Tech Stack

| Layer        | Technology                                                  |
| :----------- | :---------------------------------------------------------- |
| Markup       | Semantic HTML5                                              |
| Styling      | Tailwind CSS (CDN) + custom `css/main.css`                  |
| Config       | `js/tailwind.config.js` (extended Material Design 3 tokens) |
| Interactivity| Vanilla JavaScript (`js/main.js`)                           |
| Fonts        | Google Fonts — Playfair Display, Plus Jakarta Sans          |
| Icons        | Material Symbols Outlined (Google Fonts)                    |

> [!IMPORTANT]
> This project uses **Tailwind CSS via CDN** (`cdn.tailwindcss.com`). Do NOT
> install Tailwind via npm or use PostCSS. Configuration is done through the
> global `tailwind.config` object in `js/config/tailwind.config.js`.

---

## 2. Design System Overview

The design system follows **Material Design 3** color tokens with a
**haute-couture editorial beauty** aesthetic. Refer to
[DESIGN.md](../../../docs/DESIGN.md) for the full brand & style specification.

### 2.1 Color Tokens

All colors are defined as M3 semantic tokens in `tailwind.config.js`. Use
**semantic class names** — never hardcode hex values unless creating one-off
swatch samples.

```
Primary:            bg-primary / text-primary           (#775A19 — champagne gold)
Primary Container:  bg-primary-container                (#C5A059 — muted gold)
Secondary Container: bg-secondary-container             (#EEDFE1 — rose petal)
Surface:            bg-surface                          (#FBF9F5 — porcelain cream)
Surface Container:  bg-surface-container-lowest/low/high/highest
On Surface:         text-on-surface                     (#1B1C1A — deep espresso)
On Surface Variant: text-on-surface-variant             (#4E4639 — muted editorial)
Outline:            text-outline / border-outline       (#7F7667)
```

### 2.2 Typography Scale

| Role               | Font Family        | Tailwind Class                       |
| :------------------ | :----------------- | :----------------------------------- |
| Display (hero)     | Playfair Display   | `font-display-lg text-display-lg`    |
| Display (mobile)   | Playfair Display   | `text-display-lg-mobile`             |
| Headline Large     | Playfair Display   | `font-headline-lg text-headline-lg`  |
| Headline Medium    | Playfair Display   | `font-headline-md text-headline-md`  |
| Headline Small     | Playfair Display   | `font-headline-sm text-headline-sm`  |
| Body Large         | Plus Jakarta Sans  | `font-body-lg text-body-lg`          |
| Body Medium        | Plus Jakarta Sans  | `font-body-md text-body-md`          |
| Body Small         | Plus Jakarta Sans  | `font-body-sm text-body-sm`          |
| Label Medium       | Plus Jakarta Sans  | `font-label-md text-label-md`        |
| Label Small        | Plus Jakarta Sans  | `font-label-sm text-label-sm`        |

> [!TIP]
> For headlines, use **both** `font-*` (family) and `text-*` (size) classes
> together. Example: `font-headline-lg text-headline-lg text-on-surface`.
> Use `italic` sparingly within headlines to emphasize key beauty concepts.

### 2.3 Spacing Tokens

```
space-xs:       0.25rem (4px)
space-sm:       0.5rem  (8px)
space-md:       1rem    (16px)
space-lg:       1.75rem (28px)
space-xl:       2.5rem  (40px)
gutter:         1.5rem  (24px)  — column gap
gutter-mobile:  1rem    (16px)
margin:         3rem    (48px)  — page side margin desktop
margin-mobile:  1.25rem (20px)  — page side margin mobile
```

### 2.4 Elevation & Depth

Four levels of warm-toned elevation:

1. **Level 0** — Flat surface (`bg-surface`)
2. **Level 1** — Cards (`bg-surface-container-lowest shadow-md`)
3. **Level 2** — Floating overlays (`backdrop-blur-xl bg-surface/90 shadow-xl`)
4. **Level 3** — Modals & active selections (`shadow-2xl` + gold accent border)

> [!NOTE]
> Avoid cold/grey shadows. Use warm ambient diffusion:
> `shadow-[0_8px_32px_-4px_rgba(31,27,24,0.04)]`

---

## 3. Component Patterns

### 3.1 Section Layout

Every section follows this structure:

```html
<section class="w-full px-margin-mobile md:px-margin py-space-xl [bg-variant]">
  <div class="max-w-7xl mx-auto">
    <!-- Section Header -->
    <div class="flex flex-col items-center text-center mb-space-xl">
      <!-- Badge / Kicker -->
      <div class="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high mb-space-xs">
        <span class="material-symbols-outlined text-primary text-[16px]">icon_name</span>
        <span class="font-label-sm text-label-sm text-primary uppercase tracking-widest">SECTION LABEL</span>
      </div>
      <!-- Heading -->
      <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-space-xs">
        Section Title Here
      </h2>
      <!-- Description -->
      <p class="font-body-md text-body-md text-on-surface-variant max-w-2xl">
        Description text...
      </p>
    </div>
    <!-- Section Content Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
      <!-- Cards/content here -->
    </div>
  </div>
</section>
```

### 3.2 Buttons

**Primary CTA (Pill):**
```html
<a class="inline-flex items-center justify-center gap-space-xs px-space-xl py-space-sm
          rounded-full bg-primary-container text-on-primary-container
          font-label-md text-label-md uppercase tracking-wider
          transition-all duration-300 hover:bg-primary hover:text-on-primary
          shadow-lg hover:shadow-xl" href="#">
  <span class="material-symbols-outlined text-[18px]">icon</span>
  <span>Button Text</span>
</a>
```

**Secondary / Ghost Button:**
```html
<button class="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm
               rounded-full bg-surface-container-low hover:bg-surface-container
               text-on-surface font-label-md text-label-md transition-all duration-300">
  <span class="material-symbols-outlined text-[18px]">icon</span>
  <span>Button Text</span>
</button>
```

### 3.3 Cards

```html
<div class="group relative rounded-xl bg-surface-container-lowest p-space-md
            shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
  <!-- Image -->
  <div class="relative w-full h-56 rounded-lg overflow-hidden mb-space-md bg-surface-container">
    <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
         src="..." alt="...">
    <!-- Optional badge -->
    <span class="absolute top-3 left-3 px-space-sm py-1 rounded-full
                 bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm
                 tracking-wider uppercase shadow-sm">Badge</span>
  </div>
  <!-- Content -->
  <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Title</h3>
  <p class="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Description</p>
  <!-- Footer / Swatch bar -->
  <div class="flex items-center justify-between py-space-xs bg-surface-container-low rounded-lg px-space-sm">
    <!-- ... -->
  </div>
</div>
```

### 3.4 Badge / Pill

```html
<div class="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full
            bg-surface-container-low shadow-sm">
  <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
  <span class="font-label-sm text-label-sm text-primary uppercase tracking-widest">Label</span>
</div>
```

### 3.5 Color Swatches

```html
<div class="flex items-center gap-1.5">
  <span class="w-5 h-5 rounded-full shadow-inner" style="background-color: #E89F82;" title="Color Name"></span>
  <!-- more swatches... -->
</div>
```

### 3.6 Floating Glassmorphism Overlay

```html
<div class="absolute [position] z-30 px-space-md py-space-xs rounded-full
            bg-surface-container-lowest/95 backdrop-blur-md shadow-xl
            flex items-center gap-space-xs">
  <span class="material-symbols-outlined text-primary text-[18px]">icon</span>
  <span class="font-label-sm text-label-sm text-on-surface font-semibold">Text</span>
</div>
```

### 3.7 Banner / CTA Bar

```html
<div class="p-space-lg rounded-xl bg-surface-container-high
            flex flex-col md:flex-row items-center justify-between gap-space-md shadow-sm">
  <div class="flex items-center gap-space-md">
    <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center
                text-on-primary shrink-0 shadow-md">
      <span class="material-symbols-outlined text-[24px]">icon</span>
    </div>
    <div>
      <h4 class="font-headline-sm text-headline-sm text-on-surface">Heading</h4>
      <p class="font-body-sm text-body-sm text-on-surface-variant">Subtitle</p>
    </div>
  </div>
  <a class="px-space-xl py-space-sm rounded-full bg-primary text-on-primary
            font-label-md text-label-md uppercase tracking-wider transition-colors
            shadow-md shrink-0" href="#">CTA Text</a>
</div>
```

---

## 4. Responsive Design Rules

| Breakpoint | Tailwind Prefix | Layout Columns | Margin         |
| :--------- | :-------------- | :------------- | :------------- |
| Mobile     | (default)       | 1 column       | `px-margin-mobile` |
| Tablet     | `md:`           | 2–3 columns    | `px-margin`    |
| Desktop    | `lg:`           | 3–4 columns    | `px-margin`    |
| Wide       | `xl:`           | Full nav shown | `px-margin`    |

### Key responsive patterns:
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` (or `lg:grid-cols-4`)
- Hero: `grid-cols-1 lg:grid-cols-12` with `lg:col-span-6`
- Typography: `text-display-lg-mobile md:text-display-lg`
- Hide on mobile: `hidden md:inline-flex` or `hidden xl:flex`
- Full width on mobile: `w-full sm:w-auto`

---

## 5. Animation & Interaction Guidelines

### Standard transitions:
```
transition-all duration-300        — general state changes
transition-transform duration-500  — image hover scales
transition-colors                  — simple color shifts
```

### Hover effects:
- Cards: `hover:shadow-xl hover:-translate-y-1`
- Images in cards: `group-hover:scale-105`
- Buttons: `hover:bg-primary hover:text-on-primary`
- Floating elements: `hover:rotate-0` (from slight rotation)

### Animations:
- Pulse dot: `animate-pulse` on status indicators
- Use `group` + `group-hover:` for coordinated card animations

---

## 6. Icon Usage

Use **Material Symbols Outlined** from Google Fonts:

```html
<span class="material-symbols-outlined text-[20px]">icon_name</span>
```

For filled variants:
```html
<span class="material-symbols-outlined text-[18px]"
      style="font-variation-settings: 'FILL' 1;">star</span>
```

Common icons used in this project:
- `auto_awesome` — AI/magic features
- `palette` — color/season related
- `photo_camera` — photo capture
- `layers` — draping/analysis
- `assignment` — reports/dossier
- `verified` — trust signals
- `bookmark`, `notifications` — user actions
- `play_circle` — video playback
- `arrow_back`, `arrow_forward` — navigation
- `format_quote` — testimonials

---

## 7. Navigation Pattern

The header is **fixed** with glassmorphism:
```
fixed top-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-xl
```

Navigation uses `data-path` attributes for SPA-like active state management
handled in `js/main.js`. When adding new sections/pages:
1. Add a `data-path="slug-name"` to the nav `<a>` tag
2. Add matching `data-path` to any CTA that links to that section
3. The JS handles active class toggling automatically

---

## 8. Image Guidelines

- Use `object-cover` for all imagery
- Wrap in overflow-hidden container for hover scale effects
- Always include descriptive `data-alt` attributes (Vietnamese)
- Profile images: `w-8 h-8 rounded-full object-cover` (or `w-10 h-10`)
- Hero images: full container height (`h-[480px] md:h-[540px]`)
- Card images: `h-56` or `h-80`

---

## 9. Seasonal Color System (Hệ Sắc Diện)

The project's core concept is the 4-season personal color analysis system.
Each season has its own accent color mapping:

| Season    | Vietnamese        | Badge Style                                | Accent Colors                    |
| :-------- | :---------------- | :----------------------------------------- | :------------------------------- |
| Spring    | Xuân Rạng Rỡ     | `bg-primary-fixed text-on-primary-fixed`   | Coral, Apricot, Butter, Mint     |
| Summer    | Hạ Thanh Nhã      | `bg-secondary-container text-on-secondary` | Dusty Rose, Lavender, Sky, Pewter|
| Autumn    | Thu Trầm Ấm       | `bg-tertiary-fixed text-on-tertiary-fixed` | Terracotta, Olive, Amber, Chestnut|
| Winter    | Đông Quyền Lực    | `bg-inverse-surface text-inverse-on-surface`| Ruby, Black, Sapphire, Icy Lavender|

---

## 10. File Structure & Conventions

```
VcolorMVP/
├── index.html                  ← Main landing page (all sections)
├── pages/                      ← Sub-pages (studio, dossier, cosmetics)
├── docs/DESIGN.md              ← Full design system specification (YAML + prose)
├── css/main.css                ← Base resets, scrollbar hiding
├── js/
│   ├── config/tailwind.config.js ← M3 color tokens, typography, spacing
│   ├── modules/                ← Feature modules (slider, modal, navigation)
│   └── main.js                 ← Entry point initializing modules
└── assets/                     ← Images, icons, and document assets
```

### Code conventions:
- **Vietnamese** for all user-facing text
- **Semantic HTML** — use `<section>`, `<nav>`, `<header>`, `<main>`, `<footer>`
- Keep all styles in Tailwind utility classes (minimize custom CSS)
- Use **template comments** `<!-- Section Name -->` to mark sections
- All interactive elements need accessible labels (`aria-label`, `title`)
- JavaScript uses IIFE pattern, `'use strict'`, and JSDoc comments

---

## 11. Checklist for New Sections/Components

When creating a new section or component, verify:

- [ ] Uses semantic token colors (not hardcoded hex)
- [ ] Responsive: mobile-first, tested at all breakpoints
- [ ] Typography uses both `font-*` and `text-*` classes
- [ ] Follows section layout pattern (section → max-w-7xl → header → grid)
- [ ] Cards have hover effects (shadow + translate + image scale)
- [ ] Icons use Material Symbols Outlined
- [ ] Vietnamese text content
- [ ] Accessible: alt text, aria labels, keyboard navigation
- [ ] Warm shadows (not grey/cold)
- [ ] Consistent spacing with design tokens

