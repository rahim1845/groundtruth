# CLAUDE.md — Groundtruth

A curated library of web & app **specimen** sections. Each *specimen* = one card:
a `prompt → live preview → code` triple. Two files matter:

- `index.html` — the whole app (layout, hero, filtering, copy, modal, theming, inlined
  GSAP motion). Static, **no build step**. Fonts and GSAP are inlined (CSP-safe).
- `data/sections.js` — the section library, the source of truth (`window.SECTIONS = [ … ]`).

## Working agreement — honor this exactly

### 1. "Add specimen:" means DATA ONLY
When a user message **starts with `Add specimen:`**, do ONLY this — nothing else:

- Append new object(s) to the `SECTIONS` array in `data/sections.js`.
- **Do NOT touch `index.html`**, the design, layout, hero, CSS, colors, motion, or copy.
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
Only edit `index.html` / the design when the user explicitly asks for a design or layout
change **without** the `Add specimen:` keyword. Never bundle a redesign into an
`Add specimen:` request — that is the exact mistake this agreement exists to prevent.

### 3. Keep the claim honest
`preview ⇄ code` is guaranteed (same source). `prompt → output` is directional (AI is
non-deterministic). Don't overclaim "verified" beyond the preview⇄code link.

## Deploy
Static site. Vercel/Netlify: import repo, framework "Other", no build command, output =
root. Every push to `main` auto-deploys once connected.
