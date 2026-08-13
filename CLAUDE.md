# CLAUDE.md — Groundtruth

A curated library of web & app **specimen** sections. Each *specimen* = one card:
a `prompt → live preview → code` triple. Two files matter:

- `index.html` — the whole app (layout, hero, filtering, copy, modal, theming, inlined
  GSAP motion). Static, **no build step**. Fonts, GSAP, **and the section data** are all
  inlined, so the page is fully self-contained (CSP-safe, works as a single file and on any
  static host with no external requests). This is deliberate: an external data file that
  fails to load leaves the library empty, which breaks the entire product promise.
- `data/sections.js` — the section library kept as the readable source of truth
  (`window.SECTIONS = [ … ]`). `index.html` embeds an identical copy of this array inline;
  the two must stay in sync.

## Working agreement — honor this exactly

### 1. "Add specimen:" means DATA ONLY
When a user message **starts with `Add specimen:`**, do ONLY this — nothing else:

- Append new object(s) to the `SECTIONS` array in **both** `data/sections.js` and the
  inline `window.SECTIONS = [ … ]` block in `index.html` (search for `window.SECTIONS`).
  Both hold the same array; keep them identical so the deployed page shows the new cards.
- **Do NOT touch anything else in `index.html`** — not the design, layout, hero, CSS,
  colors, motion, or copy. The ONLY permitted `index.html` edit under this keyword is
  extending that data array. If in doubt, don't.
- Do NOT redesign, "improve," refactor, or clean up anything. Just add the requested
  specimens. If research is asked for (e.g. "trending sections"), research, then add.

Each specimen object:

```js
{
  id: "web-newsletter",           // unique slug: <category>-<name>
  title: "Newsletter Signup",
  category: "Web",                // "Web" | "App"
  type: "Capture",                // short label, shown in the spec tag as web/capture
  tools: ["v0", "Cursor", "HTML"],// AI tools the prompt is tuned for
  prompt: `Role: ...`,            // constraint-rich, tuned prompt
  code:  `<!doctype html>...`     // SELF-CONTAINED HTML/CSS that renders the preview
}
```

**Hard rule:** `code` must be *exactly* what renders the preview — never a screenshot or a
description. Write portable, self-contained HTML/CSS (no external dependencies) so the
preview is provably the copied code. The "verified" promise depends on this.

### 2. Design / layout changes are a SEPARATE request
Only edit `index.html`'s design/layout/CSS/motion/copy when the user explicitly asks for a
design change **without** the `Add specimen:` keyword. (Adding a specimen may touch the
inline data array in `index.html`, per rule 1 — that is data, not design.) Never bundle a
redesign into an `Add specimen:` request — that is the exact mistake this agreement exists
to prevent.

### 3. Keep the claim honest
`preview ⇄ code` is guaranteed (same source). `prompt → output` is directional (AI is
non-deterministic). Don't overclaim "verified" beyond the preview⇄code link.

## Deploy
Static site, single self-contained file. Vercel/Netlify: import repo, framework "Other", no
build command, output = root. Every push to `main` auto-deploys once connected. Because
`index.html` inlines everything (fonts, GSAP, data), it renders identically whether served
from a host or opened directly as a file — there are no external requests that can fail.
