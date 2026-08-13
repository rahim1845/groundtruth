# Groundtruth

**A curated library of web & app sections where the live preview is rendered from the exact code you copy.**

Most section/prompt libraries ask you to trust a screenshot or a wall of prompt text you have to gamble on. Groundtruth makes one guarantee the others don't:

> **The preview is the code, byte for byte.** What you see rendered is generated from the exact HTML/CSS you copy — nothing staged.

Each entry is a `prompt → live preview → code` triple:

- **Prompt** — a constraint-rich, tuned starting point for regenerating the section in your AI tool (v0, Lovable, Cursor, Claude…) in *your* framework.
- **Preview** — a live render of the section, produced from the code below it.
- **Code** — self-contained HTML/CSS you can copy and ship with no build step and no dependencies.

## Why "verified" is an honest claim here

There are two links in the chain, and we're precise about which one is guaranteed:

| Link | Guaranteed? | Why |
|---|---|---|
| **preview ⇄ code** | ✅ Yes | The preview iframe is rendered from the entry's `code` string verbatim. It's provably the same source. |
| **prompt → output** | ⚠️ Directional | AI tools are non-deterministic; the same prompt varies by tool and model. The prompt is a strong, tested starting point — not a promise of pixel-identical output. |

This distinction *is* the product's point of view: prompt libraries elsewhere overclaim reproducibility. Groundtruth only claims what it can prove.

## Run it

It's a static site — no build step, no dependencies. `index.html` is fully self-contained:
fonts, motion, and the section data are all inlined, so there are no external requests that
can fail (and no empty-library surprises on a host that serves paths differently).

```bash
# any static server works; here's one:
npx serve .
# then open the printed localhost URL
```

Opening `index.html` directly via `file://` works too — everything it needs is in the file.

## Add a section

Section content lives in [`data/sections.js`](data/sections.js) — the readable source of
truth — and is also inlined into `index.html` (the deployed page reads the inline copy, so
keep the two in sync). Append an object:

```js
{
  id: "web-newsletter",           // unique slug
  title: "Newsletter Signup",
  category: "Web",                // "Web" | "App"
  type: "Capture",                // shown in the spec label
  tools: ["v0", "Cursor", "HTML"],
  prompt: `Role: ...\nBuild a ...`,   // your tuned prompt
  code:  `<!doctype html>...`          // self-contained HTML/CSS that renders the preview
}
```

The only rule: **`code` must be exactly what renders the preview** — that's the whole promise. Write the section as portable HTML/CSS so it works anywhere and the preview stays honest.

### Working agreement — `Add specimen:`

To add cards (aka **specimens**) to the library, start the request with the keyword **`Add specimen:`**. It means one thing precisely: **append entries to `data/sections.js` only — do not change the site design, layout, hero, CSS, or motion.**

> **Add specimen:** research trending web sections and add the 6 best, tagged v0 + Cursor.

Anything about design or layout is a **separate** request and must never be triggered by `Add specimen:`. The full rule (auto-loaded by an AI assistant working in this repo) lives in [`CLAUDE.md`](CLAUDE.md).

## Structure

```
index.html         # the whole app, self-contained (chrome, filtering, copy, modal,
                   # theming, inlined fonts + motion + section data)
data/sections.js   # the section library — the readable source of truth (mirrored inline)
```

## Deploy

- **Vercel / Netlify:** import the repo, framework preset "Other", output = repo root. No build command.
- **GitHub Pages:** enable Pages on the `main` branch, root folder. (Public repo required on the free plan.)

## Credits

Built by **Rahim**, product designer — a reference library for building with AI.
More of the thinking: [rahim1845.vercel.app](https://rahim1845.vercel.app)

## License

[MIT](LICENSE) — use the sections and prompts however you like.
