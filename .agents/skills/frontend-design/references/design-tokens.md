# Vibe Color — Design Tokens Quick Reference

Cheatsheet of all semantic design tokens for copy-paste convenience.

---

## Color Classes (Most Used)

### Backgrounds
```
bg-surface                    → #FBF9F5 (porcelain cream — main canvas)
bg-surface-container-lowest   → #FFFFFF (purest white — cards)
bg-surface-container-low      → #F5F3EF (subtle elevation)
bg-surface-container          → #EFEEEA (medium elevation)
bg-surface-container-high     → #EAE8E4 (footer, banners)
bg-surface-container-highest  → #E4E2DE (highest elevation)
bg-primary                    → #775A19 (champagne gold dark)
bg-primary-container          → #C5A059 (champagne gold — primary CTA)
bg-primary-fixed              → #FFDEA5 (warm gold tint)
bg-secondary-container        → #EEDFE1 (rose petal)
bg-tertiary-fixed             → #EAE1DB (warm neutral)
bg-inverse-surface            → #30312E (dark cards/badges)
```

### Text
```
text-on-surface               → #1B1C1A (main body text)
text-on-surface-variant       → #4E4639 (secondary/muted text)
text-primary                  → #775A19 (accent text)
text-on-primary               → #FFFFFF (text on primary bg)
text-on-primary-container     → #4E3700 (text on gold bg)
text-on-primary-fixed         → #261900 (text on light gold)
text-outline                  → #7F7667 (tertiary muted text)
text-inverse-on-surface       → #F2F0ED (text on dark bg)
```

### Borders
```
border-outline-variant        → #D1C5B4 (subtle dividers)
border-primary                → #775A19 (accent borders)
border-surface                → #FBF9F5 (ring around avatars)
```

---

## Typography Pattern Combos

```html
<!-- Display (Hero headlines) -->
<h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">

<!-- Headline Large (Section titles) -->
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">

<!-- Headline Medium (Subsection titles) -->
<h3 class="font-headline-md text-headline-md text-on-surface">

<!-- Headline Small (Card titles) -->
<h3 class="font-headline-sm text-headline-sm text-on-surface">

<!-- Body Large (Lead paragraphs) -->
<p class="font-body-lg text-body-md md:text-body-lg text-on-surface-variant">

<!-- Body Medium (Standard paragraphs) -->
<p class="font-body-md text-body-md text-on-surface-variant">

<!-- Body Small (Descriptions, metadata) -->
<p class="font-body-sm text-body-sm text-on-surface-variant">

<!-- Label Medium (Buttons, tags) -->
<span class="font-label-md text-label-md uppercase tracking-wider">

<!-- Label Small (Micro-copy, badges) -->
<span class="font-label-sm text-label-sm uppercase tracking-widest">
```

---

## Spacing Shortcuts

```
gap-space-xs    → 4px
gap-space-sm    → 8px
gap-space-md    → 16px
gap-space-lg    → 28px
gap-gutter      → 24px (grid gaps)
p-space-md      → 16px
p-space-lg      → 28px
px-margin-mobile→ 20px (section padding mobile)
px-margin       → 48px (section padding desktop)
py-space-xl     → 40px (section vertical padding)
mb-space-xs     → 4px
mb-space-md     → 16px
mb-space-lg     → 28px
mb-space-xl     → 40px
```

---

## Shadow Presets

```
shadow-sm       → subtle card shadow
shadow-md       → standard card elevation
shadow-xl       → hover/floating elements
shadow-2xl      → hero images, modals
```

Custom warm shadows (use for special cases):
```
shadow-[0_4px_16px_-2px_rgba(197,160,89,0.35)]   → gold glow (CTA buttons)
shadow-[0_8px_32px_-4px_rgba(31,27,24,0.04)]     → warm ambient (cards)
shadow-[0_1px_12px_rgba(31,27,24,0.03)]           → header blur shadow
shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]    → inner glow (active nav)
```

