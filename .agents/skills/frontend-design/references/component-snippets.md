# Vibe Color — Component Snippets Reference

Quick-copy snippets for common UI patterns. Import into new sections as needed.

---

## Testimonial Card

```html
<div class="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
  <p class="font-body-sm text-body-sm text-on-surface-variant italic mb-space-md">
    "Quote text here"
  </p>
  <div class="flex items-center gap-space-sm pt-space-xs">
    <img class="w-10 h-10 rounded-full object-cover shadow-sm"
         src="..." alt="User Name">
    <div class="flex flex-col">
      <span class="font-label-sm text-label-sm text-on-surface font-semibold">User Name</span>
      <span class="font-label-sm text-label-sm text-primary">Season Palette</span>
    </div>
  </div>
</div>
```

---

## Stats Counter Row

```html
<div class="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
  <div class="flex flex-col items-center p-space-md">
    <span class="font-display-lg text-display-lg text-primary mb-space-xs">250K+</span>
    <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
      Thượng khách
    </span>
  </div>
  <!-- Repeat for other stats -->
</div>
```

---

## Feature List Item

```html
<div class="flex items-start gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
  <div class="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed shrink-0">
    <span class="material-symbols-outlined text-[20px]">icon_name</span>
  </div>
  <div>
    <h4 class="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Feature Title</h4>
    <p class="font-body-sm text-body-sm text-on-surface-variant">Feature description text.</p>
  </div>
</div>
```

---

## FAQ Accordion Item

```html
<details class="group rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden">
  <summary class="flex items-center justify-between p-space-md cursor-pointer
                   hover:bg-surface-container-low transition-colors">
    <span class="font-headline-sm text-headline-sm text-on-surface">Question text?</span>
    <span class="material-symbols-outlined text-primary transition-transform
                 group-open:rotate-180">expand_more</span>
  </summary>
  <div class="px-space-md pb-space-md">
    <p class="font-body-sm text-body-sm text-on-surface-variant">Answer text.</p>
  </div>
</details>
```

---

## Footer Section

```html
<footer class="w-full bg-surface-container-high px-margin-mobile md:px-margin py-space-xl">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
    <!-- Brand Column -->
    <div class="md:col-span-1">
      <div class="flex items-center gap-space-sm mb-space-md">
        <img alt="Logo" class="h-8 w-auto" src="...">
        <span class="font-headline-sm text-headline-sm text-primary">Vibe Color</span>
      </div>
      <p class="font-body-sm text-body-sm text-on-surface-variant">
        Haute Colorimétrie Digitale
      </p>
    </div>
    <!-- Link Columns -->
    <div>
      <h4 class="font-label-md text-label-md text-on-surface uppercase tracking-widest mb-space-md">Khám phá</h4>
      <ul class="space-y-space-xs">
        <li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Link</a></li>
      </ul>
    </div>
    <!-- Repeat columns as needed -->
  </div>
  <div class="max-w-7xl mx-auto mt-space-xl pt-space-md border-t border-outline-variant/30">
    <p class="font-label-sm text-label-sm text-outline text-center">
      © 2024 Vibe Color. All rights reserved.
    </p>
  </div>
</footer>
```

---

## Modal / Dialog

```html
<div class="fixed inset-0 z-[100] hidden items-center justify-center bg-inverse-surface/60 backdrop-blur-sm"
     id="myModal">
  <div class="relative w-full max-w-2xl mx-4 rounded-2xl bg-surface-container-lowest p-space-lg shadow-2xl">
    <button class="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container
                    hover:bg-surface-container-high text-on-surface flex items-center justify-center
                    transition-colors" id="closeMyModal" type="button">
      <span class="material-symbols-outlined text-[20px]">close</span>
    </button>
    <h3 class="font-headline-lg text-headline-lg text-on-surface mb-space-md">Modal Title</h3>
    <div class="font-body-md text-body-md text-on-surface-variant">
      <!-- Modal content -->
    </div>
  </div>
</div>
```

---

## Pricing Card

```html
<div class="rounded-xl bg-surface-container-lowest p-space-lg shadow-md
            hover:shadow-xl transition-all duration-300 flex flex-col">
  <div class="mb-space-md">
    <span class="font-label-sm text-label-sm text-primary uppercase tracking-widest">Plan Name</span>
    <div class="flex items-baseline gap-space-xs mt-space-xs">
      <span class="font-display-lg text-display-lg text-on-surface">299K</span>
      <span class="font-body-sm text-body-sm text-on-surface-variant">VNĐ/tháng</span>
    </div>
  </div>
  <ul class="space-y-space-sm mb-space-lg flex-1">
    <li class="flex items-center gap-space-xs">
      <span class="material-symbols-outlined text-primary text-[18px]">check_circle</span>
      <span class="font-body-sm text-body-sm text-on-surface-variant">Feature item</span>
    </li>
  </ul>
  <a class="w-full inline-flex items-center justify-center py-space-sm rounded-full
            bg-primary-container text-on-primary-container font-label-md text-label-md
            uppercase tracking-wider transition-colors hover:bg-primary hover:text-on-primary" href="#">
    Chọn gói này
  </a>
</div>
```

---

## Form Input

```html
<div class="flex flex-col gap-space-xs">
  <label class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest"
         for="inputId">Label</label>
  <input class="w-full px-space-md py-space-sm rounded-lg bg-surface-container-lowest
                border border-outline-variant/25 text-on-surface font-body-md text-body-md
                placeholder:text-outline transition-all duration-300
                focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none"
         id="inputId" placeholder="Placeholder text..." type="text">
</div>
```

