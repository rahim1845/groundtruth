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

It's a static site — no build step, no dependencies.

```bash
# any static server works; here's one:
npx serve .
# then open the printed localhost URL
```

Opening `index.html` directly via `file://` also works (the data loads via a `<script>` tag, not `fetch`).

## Add a section

All content lives in one file: [`data/sections.js`](data/sections.js). Append an object:

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

## Structure

```
index.html         # the app (chrome, filtering, copy, modal, theming)
data/sections.js   # the section library — the source of truth
```

## Deploy

- **Vercel / Netlify:** import the repo, framework preset "Other", output = repo root. No build command.
- **GitHub Pages:** enable Pages on the `main` branch, root folder. (Public repo required on the free plan.)

## Credits

Built by **Rahim**, product designer — a study in trustworthy AI-native design.
More of the thinking: [rahim1845.vercel.app](https://rahim1845.vercel.app)

## License

[MIT](LICENSE) — use the sections and prompts however you like.
