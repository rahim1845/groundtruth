/* Groundtruth section library — the data source of truth.
   Add a new section by appending an object to this array:
   { id, title, category:"Web"|"App", type, tools:[...], prompt, code }
   The card preview is rendered from `code` verbatim — keep them in sync. */
window.SECTIONS = [
  {
    id:"web-hero", title:"SaaS Hero", category:"Web", type:"Hero",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: senior product designer + front-end engineer.
Build a marketing HERO section for a B2B SaaS product.

Layout (single column, centered, max-width ~880px):
- Small pill badge above the headline ("New · <one feature>")
- H1, 2 lines max, tight tracking, confident not shouty
- One-sentence subhead, muted, max ~60 characters wide
- Two CTAs inline: primary (solid) + secondary (ghost with arrow)
- A thin trust row beneath: "Trusted by" + 4–5 muted wordmark placeholders

Style constraints:
- Neutral palette: white bg, near-black ink (#0f1115), one restrained accent
- System font stack, 12–14px base, generous line-height
- Rounded 12px, 1px hairline borders, no drop shadows on the hero itself
- No gradients, no hero image, no emoji

Do NOT: center every child arbitrarily, add stock photos, or use lorem — write real B2B copy for a product called "Northwind Analytics".
Output: one self-contained block, no external dependencies.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{--ink:#0f1115;--muted:#6b7280;--border:#e6e8eb;--accent:#111318}
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--ink);background:#fff}
  .hero{max-width:880px;margin:0 auto;padding:64px 24px 56px;text-align:center}
  .badge{display:inline-flex;align-items:center;gap:8px;font-size:12.5px;color:var(--muted);
    border:1px solid var(--border);border-radius:999px;padding:5px 12px}
  .badge b{color:var(--ink);font-weight:600}
  .dot{width:6px;height:6px;border-radius:50%;background:#1F45FF}
  h1{font-size:44px;line-height:1.05;letter-spacing:-.03em;margin:20px 0 0;font-weight:700}
  p.sub{color:var(--muted);font-size:17px;max-width:52ch;margin:16px auto 0;line-height:1.55}
  .cta{display:flex;gap:12px;justify-content:center;margin-top:28px;flex-wrap:wrap}
  .btn{font:inherit;font-size:14.5px;font-weight:600;border-radius:10px;padding:12px 20px;cursor:pointer;border:1px solid var(--accent);text-decoration:none}
  .btn.p{background:var(--accent);color:#fff}
  .btn.s{background:#fff;color:var(--ink);border-color:var(--border);display:inline-flex;align-items:center;gap:8px}
  .trust{margin-top:44px;color:var(--muted);font-size:12px;letter-spacing:.04em;text-transform:uppercase}
  .row{display:flex;gap:26px;justify-content:center;flex-wrap:wrap;margin-top:16px;opacity:.6}
  .row span{font-weight:700;font-size:15px;letter-spacing:-.02em;color:var(--ink)}
</style>
<section class="hero">
  <span class="badge"><span class="dot"></span><b>New</b>&nbsp;· Anomaly alerts, in real time</span>
  <h1>Know what your numbers are doing before your customers do.</h1>
  <p class="sub">Northwind Analytics turns raw product events into plain-language answers — no dashboards to babysit, no SQL to write.</p>
  <div class="cta">
    <a class="btn p" href="#">Start free</a>
    <a class="btn s" href="#">Book a demo →</a>
  </div>
  <div class="trust">Trusted by teams at</div>
  <div class="row"><span>Cedar</span><span>Halcyon</span><span>Northpeak</span><span>Verve</span><span>Lumen</span></div>
</section>`
  },

  {
    id:"web-pricing", title:"Three-Tier Pricing", category:"Web", type:"Pricing",
    tools:["v0","Lovable","Cursor","HTML"],
    prompt:
`Role: conversion-focused product designer.
Build a 3-tier PRICING section.

Layout:
- Section eyebrow + short H2 + one-line subhead, left or centered
- Three cards in a row (stack on mobile): Starter / Pro / Scale
- Middle card is emphasized: subtle accent border + "Most popular" ribbon
- Each card: plan name, price with /mo, one-line who-it's-for, 4–5 feature bullets with check icons, one CTA button
- Prices right-aligned to a baseline; use tabular figures

Style:
- Neutral, 1px borders, 14px radius, one accent for the popular card + checks
- No gradients, no shadows except a faint one on the popular card
- Real feature copy (seats, events/mo, support level), no lorem

Do NOT make all three cards identical weight — the popular tier must read as the default choice through form, not just a label.
Output: one self-contained block.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{--ink:#0f1115;--muted:#6b7280;--border:#e6e8eb;--accent:#4f46e5;--bg:#fff}
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--ink);background:var(--bg)}
  .wrap{max-width:940px;margin:0 auto;padding:52px 24px}
  .eyebrow{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);font-weight:700}
  h2{font-size:28px;letter-spacing:-.02em;margin:10px 0 6px}
  .sub{color:var(--muted);margin:0 0 30px}
  .cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
  .card{border:1px solid var(--border);border-radius:14px;padding:22px;display:flex;flex-direction:column;gap:14px;background:#fff}
  .card.pop{border-color:var(--accent);box-shadow:0 12px 30px -16px rgba(79,70,229,.5);position:relative}
  .ribbon{position:absolute;top:-11px;left:22px;background:var(--accent);color:#fff;font-size:11px;font-weight:700;letter-spacing:.03em;padding:4px 10px;border-radius:999px}
  .pname{font-weight:700;font-size:15px}
  .price{font-size:34px;font-weight:750;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
  .price small{font-size:14px;font-weight:500;color:var(--muted)}
  .who{color:var(--muted);font-size:13px;margin:-6px 0 0}
  ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:9px;font-size:13.5px}
  li{display:flex;gap:9px;align-items:flex-start;color:#374151}
  li svg{width:15px;height:15px;color:var(--accent);flex:none;margin-top:1px}
  .btn{margin-top:auto;font:inherit;font-size:13.5px;font-weight:650;text-align:center;border-radius:10px;padding:11px;cursor:pointer;text-decoration:none;border:1px solid var(--border);color:var(--ink)}
  .btn.p{background:var(--accent);color:#fff;border-color:transparent}
  @media(max-width:720px){.cards{grid-template-columns:1fr}}
</style>
<div class="wrap">
  <div class="eyebrow">Pricing</div>
  <h2>Simple plans that scale with your events.</h2>
  <p class="sub">No per-seat surprises. Change or cancel anytime.</p>
  <div class="cards">
    <div class="card">
      <div class="pname">Starter</div>
      <div class="price">$0<small>/mo</small></div>
      <p class="who">For side projects finding their footing.</p>
      <ul>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>3 seats</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>50k events / mo</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>7-day history</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>Community support</li>
      </ul>
      <a class="btn" href="#">Get started</a>
    </div>
    <div class="card pop">
      <span class="ribbon">Most popular</span>
      <div class="pname">Pro</div>
      <div class="price">$49<small>/mo</small></div>
      <p class="who">For teams shipping every week.</p>
      <ul>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>10 seats</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>2M events / mo</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>Unlimited history</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>Anomaly alerts</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>Priority support</li>
      </ul>
      <a class="btn p" href="#">Start 14-day trial</a>
    </div>
    <div class="card">
      <div class="pname">Scale</div>
      <div class="price">$199<small>/mo</small></div>
      <p class="who">For orgs with compliance needs.</p>
      <ul>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>Unlimited seats</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>25M events / mo</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>SSO + audit logs</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>Dedicated manager</li>
      </ul>
      <a class="btn" href="#">Contact sales</a>
    </div>
  </div>
</div>`
  },

  {
    id:"web-bento", title:"Feature Bento", category:"Web", type:"Features",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: product marketing designer.
Build a FEATURE section as a bento grid (asymmetric tiles).

Layout:
- Eyebrow + H2 + one-line subhead
- 4 tiles in a bento arrangement: one wide tile (2 cols) + three standard tiles
- Each tile: small monochrome icon, short title, one supporting sentence
- The wide tile gets a simple inline visual (a faux mini-chart drawn with divs/CSS, no images)

Style:
- Neutral surfaces, 1px borders, 16px radius, subtle differences in tile background to create rhythm
- One accent used sparingly (icons + the mini-chart)
- No gradients, no photos, no emoji

Do NOT let all tiles be the same size — the asymmetry is the point.
Output: one self-contained block, responsive (bento collapses to single column on mobile).`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{--ink:#0f1115;--muted:#6b7280;--border:#e6e8eb;--accent:#0d9488;--soft:#f7f8f8}
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--ink);background:#fff}
  .wrap{max-width:940px;margin:0 auto;padding:52px 24px}
  .eyebrow{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);font-weight:700}
  h2{font-size:28px;letter-spacing:-.02em;margin:10px 0 6px}
  .sub{color:var(--muted);margin:0 0 26px}
  .bento{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
  .tile{border:1px solid var(--border);border-radius:16px;padding:20px;background:#fff;display:flex;flex-direction:column;gap:10px}
  .tile.wide{grid-column:span 2;background:var(--soft)}
  .ic{width:34px;height:34px;border-radius:9px;background:#ecfdf5;color:var(--accent);display:flex;align-items:center;justify-content:center}
  .ic svg{width:18px;height:18px}
  .tile h3{margin:2px 0 0;font-size:15.5px;letter-spacing:-.01em}
  .tile p{margin:0;color:var(--muted);font-size:13.5px;line-height:1.5}
  .chart{display:flex;align-items:flex-end;gap:8px;height:90px;margin-top:auto;padding-top:12px}
  .chart i{flex:1;background:var(--accent);border-radius:5px 5px 0 0;opacity:.85}
  @media(max-width:700px){.bento{grid-template-columns:1fr}.tile.wide{grid-column:auto}}
</style>
<div class="wrap">
  <div class="eyebrow">Why teams switch</div>
  <h2>Everything you need to trust your metrics.</h2>
  <p class="sub">Built for the questions you actually ask on a Monday.</p>
  <div class="bento">
    <div class="tile wide">
      <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m7 14 3-4 4 3 5-7"/></svg></div>
      <h3>Trends that explain themselves</h3>
      <p>Every spike comes with a plain-language reason, not just a line going up.</p>
      <div class="chart"><i style="height:40%"></i><i style="height:62%"></i><i style="height:48%"></i><i style="height:78%"></i><i style="height:90%"></i><i style="height:70%"></i><i style="height:100%"></i></div>
    </div>
    <div class="tile">
      <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 4 6v6c0 5 3.4 8 8 10 4.6-2 8-5 8-10V6z"/></svg></div>
      <h3>Alerts you can trust</h3>
      <p>Tuned thresholds, so you hear about the anomalies that matter.</p>
    </div>
    <div class="tile">
      <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></div>
      <h3>Answers in seconds</h3>
      <p>Ask in your own words. Get the metric, not a query builder.</p>
    </div>
    <div class="tile">
      <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg></div>
      <h3>Shared, not siloed</h3>
      <p>Everyone reads the same numbers, defined once.</p>
    </div>
  </div>
</div>`
  },

  {
    id:"web-testi", title:"Testimonial + Logo Wall", category:"Web", type:"Social proof",
    tools:["v0","Lovable","Claude","HTML"],
    prompt:
`Role: brand designer.
Build a SOCIAL-PROOF section combining one featured testimonial with a logo wall.

Layout:
- Left (or top): a large pull-quote, real-sounding, 1–2 sentences, with attribution (name, role, company) and a small round avatar placeholder (initials)
- Right (or below): a tidy grid of 6 muted "customer" wordmarks
- A single stat line above the logos ("Teams that switched cut triage time by 40%")

Style:
- Big quotation set in a slightly larger, tighter type
- Muted logos (text wordmarks, uniform weight) so they read as a set
- Neutral palette, 1px divider between quote and logos, no photos, no emoji

Do NOT invent fake company names that look like real brands; use neutral invented names. Write a testimonial that sounds like a real practitioner, not marketing.
Output: one self-contained block, responsive.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{--ink:#0f1115;--muted:#6b7280;--border:#e6e8eb;--accent:#111318;--soft:#f7f8f8}
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--ink);background:#fff}
  .wrap{max-width:940px;margin:0 auto;padding:52px 24px;display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:center}
  blockquote{margin:0;font-size:23px;line-height:1.4;letter-spacing:-.015em;font-weight:500}
  .attr{display:flex;align-items:center;gap:12px;margin-top:22px}
  .av{width:42px;height:42px;border-radius:50%;background:var(--soft);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px}
  .who b{display:block;font-size:14px}
  .who span{color:var(--muted);font-size:13px}
  .right{border-left:1px solid var(--border);padding-left:40px}
  .stat{font-size:13px;color:var(--muted)}
  .stat b{color:var(--ink);font-weight:700}
  .logos{display:grid;grid-template-columns:repeat(3,1fr);gap:18px 12px;margin-top:20px}
  .logos span{font-weight:750;font-size:16px;letter-spacing:-.02em;color:#9aa1a9;text-align:center}
  @media(max-width:720px){.wrap{grid-template-columns:1fr;gap:28px}.right{border-left:0;border-top:1px solid var(--border);padding-left:0;padding-top:28px}}
</style>
<div class="wrap">
  <div>
    <blockquote>“We stopped arguing about whose dashboard was right. There's one number now, and when it moves, Northwind already tells us why.”</blockquote>
    <div class="attr">
      <div class="av">MA</div>
      <div class="who"><b>Mara Adeyemi</b><span>Head of Growth, Cedar Labs</span></div>
    </div>
  </div>
  <div class="right">
    <p class="stat">Teams that switched cut triage time by <b>40%</b>.</p>
    <div class="logos">
      <span>Cedar</span><span>Halcyon</span><span>Verve</span>
      <span>Lumen</span><span>Northpeak</span><span>Orbit</span>
    </div>
  </div>
</div>`
  },

  {
    id:"web-faq", title:"FAQ Accordion", category:"Web", type:"FAQ",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: content designer + front-end engineer.
Build an FAQ section using native <details>/<summary> accordions (no JS).

Layout:
- Eyebrow + H2 ("Questions, answered") + one-line subhead
- 5 FAQ items; first one open by default
- Each row: question as summary with a rotating chevron, answer in muted prose
- Hairline divider between rows; comfortable click target height

Style:
- Neutral, generous vertical rhythm, one accent on the open item's chevron
- Answers written to actually resolve doubt (pricing, migration, security, cancellation)
- Accessible: keyboard-operable by default (that's why we use <details>)

Do NOT use custom JS for open/close — rely on <details>. No emoji.
Output: one self-contained block.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{--ink:#0f1115;--muted:#6b7280;--border:#e6e8eb;--accent:#4f46e5}
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--ink);background:#fff}
  .wrap{max-width:720px;margin:0 auto;padding:52px 24px}
  .eyebrow{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);font-weight:700}
  h2{font-size:28px;letter-spacing:-.02em;margin:10px 0 6px}
  .sub{color:var(--muted);margin:0 0 22px}
  details{border-top:1px solid var(--border)}
  details:last-of-type{border-bottom:1px solid var(--border)}
  summary{list-style:none;cursor:pointer;padding:18px 2px;font-weight:600;font-size:15.5px;display:flex;justify-content:space-between;align-items:center;gap:16px}
  summary::-webkit-details-marker{display:none}
  summary svg{width:18px;height:18px;color:var(--muted);flex:none;transition:transform .2s}
  details[open] summary svg{transform:rotate(180deg);color:var(--accent)}
  .ans{color:var(--muted);font-size:14.5px;line-height:1.6;padding:0 2px 20px;max-width:60ch}
</style>
<div class="wrap">
  <div class="eyebrow">FAQ</div>
  <h2>Questions, answered.</h2>
  <p class="sub">Can't find it? Email support@northwind.example.</p>
  <details open>
    <summary>How long does migration take?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></summary>
    <p class="ans">Most teams are live the same day. Point us at your existing event stream, and we backfill up to 90 days automatically — no engineering sprint required.</p>
  </details>
  <details>
    <summary>Do you charge per seat?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></summary>
    <p class="ans">No. Plans are priced on events per month. Invite your whole team on any tier — analysts, PMs, and execs alike.</p>
  </details>
  <details>
    <summary>Is my data secure?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></summary>
    <p class="ans">Data is encrypted in transit and at rest. Scale plans add SSO, audit logs, and a signed DPA. We're SOC 2 Type II.</p>
  </details>
  <details>
    <summary>Can I cancel anytime?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></summary>
    <p class="ans">Yes — cancel in one click from billing. You keep access through the end of the period, and you can export everything first.</p>
  </details>
  <details>
    <summary>What if I outgrow my plan?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></summary>
    <p class="ans">You'll get a heads-up as you approach your event limit. Upgrading is instant and prorated — no lost data, no downtime.</p>
  </details>
</div>`
  },

  {
    id:"app-stats", title:"Dashboard Stat Cards", category:"App", type:"Dashboard",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: data-product designer.
Build a DASHBOARD stat-card row (the summary strip at the top of an app dashboard).

Layout:
- A row of 4 KPI cards (wrap to 2x2 on narrow screens)
- Each card: label (uppercase, muted), big value (tabular figures), and a delta chip (▲/▼ with % and "vs last week") colored by direction — green up, red down
- One card includes a tiny inline sparkline drawn with an SVG polyline

Style:
- This is app chrome, not marketing: denser, 1px borders, 12px radius, quiet surfaces
- Semantic colors for deltas are separate from any brand accent
- Numbers must use tabular-nums so they align

Do NOT use marketing-sized type; keep it operational. No emoji beyond the ▲▼ arrows.
Output: one self-contained block, responsive.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{--ink:#0f1115;--muted:#6b7280;--border:#e7e9ec;--soft:#fafafa;--up:#16a34a;--down:#dc2626}
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--ink);background:#f4f5f6}
  .row{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;max-width:920px;margin:0 auto;padding:28px 20px}
  .kpi{background:#fff;border:1px solid var(--border);border-radius:12px;padding:15px 16px;display:flex;flex-direction:column;gap:9px}
  .lbl{font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);font-weight:600}
  .val{font-size:27px;font-weight:700;letter-spacing:-.02em;font-variant-numeric:tabular-nums;line-height:1}
  .foot{display:flex;align-items:center;justify-content:space-between;gap:8px}
  .delta{display:inline-flex;align-items:center;gap:4px;font-size:12px;font-weight:650;font-variant-numeric:tabular-nums;padding:2px 7px;border-radius:6px}
  .delta.up{color:var(--up);background:#e9f7ef}
  .delta.down{color:var(--down);background:#fdeaea}
  .vs{font-size:11px;color:var(--muted)}
  svg.spark{width:64px;height:26px}
  @media(max-width:640px){.row{grid-template-columns:1fr 1fr}}
</style>
<div class="row">
  <div class="kpi">
    <span class="lbl">Active users</span>
    <span class="val">12,847</span>
    <div class="foot"><span class="delta up">▲ 8.2%</span><span class="vs">vs last week</span></div>
  </div>
  <div class="kpi">
    <span class="lbl">Events / day</span>
    <span class="val">1.94M</span>
    <div class="foot"><span class="delta up">▲ 3.1%</span><span class="vs">vs last week</span></div>
  </div>
  <div class="kpi">
    <span class="lbl">Error rate</span>
    <span class="val">0.42%</span>
    <div class="foot"><span class="delta down">▼ 1.4%</span><span class="vs">vs last week</span></div>
  </div>
  <div class="kpi">
    <span class="lbl">Avg. response</span>
    <span class="val">218<span style="font-size:14px;color:var(--muted)">ms</span></span>
    <div class="foot">
      <svg class="spark" viewBox="0 0 64 26" fill="none"><polyline points="0,20 10,17 20,19 30,11 40,13 50,6 64,4" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="vs">7-day</span>
    </div>
  </div>
</div>`
  },

  {
    id:"app-empty", title:"Empty State", category:"App", type:"Empty state",
    tools:["v0","Lovable","Claude","HTML"],
    prompt:
`Role: UX designer specializing in first-run experiences.
Build an EMPTY STATE for a feature that has no data yet (e.g. "No alerts configured").

Layout (centered, contained ~460px):
- A simple line-art icon in a soft circle (drawn with SVG, no image)
- A short, warm headline that names the situation without blame
- One sentence explaining what will appear here and why it's useful
- A primary CTA to create the first item + a subtle secondary "Learn how" link

Style:
- Quiet, generous whitespace, app-chrome scale (not marketing)
- One accent on the primary CTA and the icon
- Reassuring tone — an empty state is a moment to guide, not to sell

Do NOT use a sad-face or an apology. Frame it as a next step. No emoji.
Output: one self-contained block.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{--ink:#0f1115;--muted:#6b7280;--border:#e6e8eb;--accent:#4f46e5}
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--ink);background:#fff}
  .es{max-width:460px;margin:0 auto;padding:56px 24px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:12px}
  .ring{width:66px;height:66px;border-radius:50%;background:#eef2ff;color:var(--accent);display:flex;align-items:center;justify-content:center}
  .ring svg{width:30px;height:30px}
  h3{margin:6px 0 0;font-size:19px;letter-spacing:-.01em}
  p{margin:0;color:var(--muted);font-size:14.5px;line-height:1.55;max-width:42ch}
  .cta{display:flex;gap:10px;align-items:center;margin-top:8px}
  .btn{font:inherit;font-size:13.5px;font-weight:650;border-radius:10px;padding:10px 18px;cursor:pointer;text-decoration:none;border:1px solid transparent;background:var(--accent);color:#fff;display:inline-flex;align-items:center;gap:8px}
  .link{font-size:13.5px;color:var(--muted);text-decoration:none;font-weight:600}
  .link:hover{color:var(--ink)}
</style>
<div class="es">
  <div class="ring"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg></div>
  <h3>No alerts yet</h3>
  <p>Set a threshold once, and Northwind will ping you the moment a metric drifts — before it becomes a fire drill.</p>
  <div class="cta">
    <a class="btn" href="#"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>Create your first alert</a>
    <a class="link" href="#">Learn how →</a>
  </div>
</div>`
  },

  {
    id:"app-settings", title:"Settings Form Row", category:"App", type:"Settings",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: product designer for account/settings surfaces.
Build a SETTINGS section: a labeled group of form rows with a save bar.

Layout:
- Section title + one-line description
- 3 rows, each with a left label+helper and a right control:
  1) Text input (Workspace name)
  2) Toggle switch (Weekly summary email) — accessible, keyboard-focusable
  3) Segmented control (Theme: System / Light / Dark)
- Sticky-feeling save bar at the bottom: "Unsaved changes" text + Cancel + Save

Style:
- App chrome: 1px dividers between rows, aligned right-hand controls, 12px radius
- One accent for the active toggle/segment and the Save button
- Real labels + helper text, not placeholders

Do NOT stack labels above every control randomly — use the two-column row pattern (label left, control right) and collapse to stacked only on mobile.
Output: one self-contained block, responsive.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{--ink:#0f1115;--muted:#6b7280;--border:#e7e9ec;--accent:#4f46e5;--soft:#fafafa}
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--ink);background:#f4f5f6}
  .card{max-width:600px;margin:24px auto;background:#fff;border:1px solid var(--border);border-radius:14px;overflow:hidden}
  .head{padding:18px 20px;border-bottom:1px solid var(--border)}
  .head h3{margin:0;font-size:16px}
  .head p{margin:4px 0 0;color:var(--muted);font-size:13px}
  .row{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:16px 20px;border-bottom:1px solid var(--border)}
  .lab b{font-size:14px}
  .lab span{display:block;color:var(--muted);font-size:12.5px;margin-top:2px}
  input[type=text]{font:inherit;font-size:13.5px;border:1px solid var(--border);border-radius:9px;padding:8px 11px;width:190px;color:var(--ink)}
  input[type=text]:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 3px #eef2ff}
  .sw{position:relative;width:42px;height:24px;flex:none}
  .sw input{position:absolute;opacity:0;width:100%;height:100%;margin:0;cursor:pointer}
  .track{position:absolute;inset:0;background:#d1d5db;border-radius:999px;transition:background .18s}
  .knob{position:absolute;top:3px;left:3px;width:18px;height:18px;background:#fff;border-radius:50%;transition:transform .18s;box-shadow:0 1px 2px rgba(0,0,0,.25)}
  .sw input:checked + .track{background:var(--accent)}
  .sw input:checked + .track + .knob{transform:translateX(18px)}
  .sw input:focus-visible + .track{box-shadow:0 0 0 3px #eef2ff}
  .seg{display:inline-flex;background:var(--soft);border:1px solid var(--border);border-radius:9px;padding:2px}
  .seg button{font:inherit;font-size:12.5px;font-weight:600;color:var(--muted);border:0;background:transparent;border-radius:7px;padding:6px 12px;cursor:pointer}
  .seg button[aria-pressed=true]{background:#fff;color:var(--ink);box-shadow:0 1px 2px rgba(0,0,0,.12)}
  .bar{display:flex;align-items:center;justify-content:flex-end;gap:12px;padding:14px 20px;background:var(--soft)}
  .bar .unsaved{margin-right:auto;font-size:12.5px;color:var(--muted)}
  .btn{font:inherit;font-size:13px;font-weight:650;border-radius:9px;padding:9px 16px;cursor:pointer;border:1px solid var(--border);background:#fff;color:var(--ink)}
  .btn.p{background:var(--accent);color:#fff;border-color:transparent}
  @media(max-width:520px){.row{flex-direction:column;align-items:flex-start;gap:10px}input[type=text]{width:100%}}
</style>
<div class="card">
  <div class="head"><h3>General</h3><p>Manage how your workspace behaves.</p></div>
  <div class="row">
    <div class="lab"><b>Workspace name</b><span>Shown across the app and in emails.</span></div>
    <input type="text" value="Cedar Labs" aria-label="Workspace name">
  </div>
  <div class="row">
    <div class="lab"><b>Weekly summary email</b><span>A Monday digest of what moved.</span></div>
    <label class="sw"><input type="checkbox" checked aria-label="Weekly summary email"><span class="track"></span><span class="knob"></span></label>
  </div>
  <div class="row">
    <div class="lab"><b>Theme</b><span>Applies to your account only.</span></div>
    <div class="seg" role="group" aria-label="Theme">
      <button aria-pressed="true">System</button><button aria-pressed="false">Light</button><button aria-pressed="false">Dark</button>
    </div>
  </div>
  <div class="bar"><span class="unsaved">You have unsaved changes</span><button class="btn">Cancel</button><button class="btn p">Save changes</button></div>
</div>`
  },

  {
    id:"app-command", title:"Command Palette", category:"App", type:"Command menu",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: product designer for power-user software.
Build a COMMAND PALETTE (Cmd/Ctrl-K menu) as a centered overlay panel.

Layout:
- Rounded panel, max-width ~560px, soft elevated shadow
- Top: search row with a magnifier icon, placeholder input, and an ESC kbd hint
- Two labelled groups ("Navigation", "Actions"); each row = square icon tile +
  label + right-aligned keyboard shortcut hint
- First row is highlighted (selected) with the accent color
- Footer strip with legend: up/down navigate, enter select, Cmd-K to open

Style:
- Neutral surfaces, 1px hairlines, 12-14px radius, one accent for the selected row
- Real command labels; monospace-ish kbd chips; no emoji (use SVG icons)

Do NOT build a full page — just the palette panel. Keyboard hints must look like keys.
Output: one self-contained block.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  *{box-sizing:border-box}body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:#eef0f3;min-height:100vh;display:flex;align-items:flex-start;justify-content:center;padding:44px 20px}
  .pal{width:100%;max-width:560px;background:#fff;border:1px solid #e6e8eb;border-radius:14px;box-shadow:0 30px 60px -20px rgba(15,17,21,.35);overflow:hidden}
  .search{display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid #eef0f2}
  .search svg{width:18px;height:18px;color:#9aa1a9}
  .search input{border:0;outline:0;font:inherit;font-size:15px;flex:1;color:#0f1115;background:transparent}
  .search input::placeholder{color:#9aa1a9}
  .kbd{font-size:11px;color:#6b7280;border:1px solid #e6e8eb;border-bottom-width:2px;border-radius:6px;padding:2px 6px;background:#fafafa}
  .grp{padding:6px 8px}
  .lbl{font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:#9aa1a9;padding:8px 10px 4px}
  .row{display:flex;align-items:center;gap:11px;padding:9px 10px;border-radius:9px;font-size:14px;color:#374151;cursor:pointer}
  .row .i{width:26px;height:26px;border-radius:7px;background:#f3f4f6;display:flex;align-items:center;justify-content:center;color:#4b5563}
  .row .i svg{width:15px;height:15px}
  .row.active{background:#4f46e5;color:#fff}
  .row.active .i{background:rgba(255,255,255,.2);color:#fff}
  .row .sh{margin-left:auto;font-size:11px;color:#9aa1a9}
  .row.active .sh{color:#dcd9fb}
  .foot{display:flex;gap:16px;align-items:center;padding:10px 16px;border-top:1px solid #eef0f2;font-size:11.5px;color:#9aa1a9}
  .foot b{color:#6b7280;font-weight:600}
</style>
<div class="pal">
  <div class="search">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3-3"/></svg>
    <input placeholder="Type a command or search…">
    <span class="kbd">ESC</span>
  </div>
  <div class="grp">
    <div class="lbl">Navigation</div>
    <div class="row active"><span class="i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12l9-9 9 9M5 10v10h14V10"/></svg></span>Go to Dashboard<span class="sh">G then D</span></div>
    <div class="row"><span class="i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg></span>Open Profile<span class="sh">G then P</span></div>
  </div>
  <div class="grp">
    <div class="lbl">Actions</div>
    <div class="row"><span class="i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg></span>Create new project<span class="sh">C</span></div>
    <div class="row"><span class="i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/></svg></span>Invite teammate</div>
  </div>
  <div class="foot"><span><b>&uarr;&darr;</b> navigate</span><span><b>&crarr;</b> select</span><span><b>&#8984;K</b> to open</span></div>
</div>`
  },

  {
    id:"app-ai-composer", title:"AI Prompt Composer", category:"App", type:"AI composer",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: designer for an AI copilot product.
Build an AI PROMPT COMPOSER (the chat/prompt input bar of an AI assistant).

Layout:
- A row of suggestion chips above the input (short starter prompts)
- A rounded composer card: multi-line input area with a helpful placeholder
- A control bar inside the card: attach button (icon), a model selector chip
  (status dot + model name + chevron), and a send button pushed to the right
- A small disclaimer line beneath ("AI can make mistakes…")

Style:
- Generous rounding (14-16px), soft shadow, neutral palette, near-black send button
- 15px input text; chips are pill-shaped and subtle; SVG icons only, no emoji

Do NOT build a full chat log — just the composer. Make the send button the clear
primary. Output: one self-contained block.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  *{box-sizing:border-box}body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:#fff;padding:40px 20px;color:#0f1115}
  .wrap{max-width:680px;margin:0 auto}
  .sent{display:flex;flex-direction:column;gap:8px;margin-bottom:12px}
  .sent .b{align-self:flex-end;max-width:80%;background:#eef1ff;border:1px solid #dfe4ff;border-radius:14px 14px 4px 14px;padding:9px 12px;font-size:14px;line-height:1.45}
  .chips{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px}
  .chip{font-size:12.5px;color:#4b5563;background:#f4f5f7;border:1px solid #eceef1;border-radius:999px;padding:7px 12px;cursor:pointer}
  .chip:hover{border-color:#c9ccff;color:#1F45FF}
  .composer{border:1px solid #e2e4e8;border-radius:16px;padding:14px 16px;box-shadow:0 8px 24px -16px rgba(15,17,21,.25)}
  .composer:focus-within{border-color:#c9ccff}
  textarea{width:100%;border:0;outline:none;resize:none;font:inherit;font-size:15px;color:#0f1115;min-height:56px;line-height:1.5;background:transparent}
  textarea::placeholder{color:#9aa1a9}
  .bar{display:flex;align-items:center;gap:8px;margin-top:10px;position:relative}
  .tool{width:34px;height:34px;border-radius:9px;border:1px solid #eceef1;background:#fff;display:flex;align-items:center;justify-content:center;color:#6b7280;cursor:pointer}
  .tool svg{width:17px;height:17px}
  .model{display:flex;align-items:center;gap:7px;font-size:13px;color:#374151;border:1px solid #eceef1;border-radius:9px;padding:7px 11px;cursor:pointer;user-select:none}
  .model .dot{width:7px;height:7px;border-radius:50%;background:#1F45FF}
  .menu{position:absolute;bottom:46px;left:42px;background:#fff;border:1px solid #e2e4e8;border-radius:11px;box-shadow:0 16px 40px -16px rgba(15,17,21,.35);padding:5px;min-width:190px;display:none;z-index:5}
  .menu.open{display:block}
  .mi{display:flex;align-items:center;gap:9px;font-size:13px;padding:8px 10px;border-radius:8px;cursor:pointer}
  .mi:hover{background:#f4f5f7}
  .mi .dot{width:7px;height:7px;border-radius:50%;background:#1F45FF}
  .mi .ck{margin-left:auto;color:#1F45FF;opacity:0;width:14px;height:14px}
  .mi.sel .ck{opacity:1}
  .send{margin-left:auto;width:38px;height:38px;border-radius:11px;background:#0f1115;color:#fff;border:0;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .15s}
  .send:disabled{background:#c7cbd2;cursor:default}
  .send svg{width:18px;height:18px}
  .hint{font-size:11.5px;color:#9aa1a9;margin-top:10px;text-align:center}
</style>
<div class="wrap">
  <div class="sent" id="sent"></div>
  <div class="chips" id="chips"><span class="chip">Summarize this thread</span><span class="chip">Draft a reply</span><span class="chip">Find action items</span><span class="chip">Explain the diff</span></div>
  <div class="composer">
    <textarea id="ta" rows="1" placeholder="Ask anything, or describe what you want to build…"></textarea>
    <div class="bar">
      <button class="tool" title="Attach"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.5 12 21a5 5 0 0 1-7-7l9-9a3.5 3.5 0 1 1 5 5l-9 9a2 2 0 0 1-3-3l8.5-8.5"/></svg></button>
      <div class="model" id="model"><span class="dot"></span><span id="modelName">Claude · Sonnet</span><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div>
      <div class="menu" id="menu">
        <div class="mi" data-m="Claude · Opus"><span class="dot"></span>Claude · Opus<svg class="ck" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
        <div class="mi sel" data-m="Claude · Sonnet"><span class="dot"></span>Claude · Sonnet<svg class="ck" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
        <div class="mi" data-m="Claude · Haiku"><span class="dot"></span>Claude · Haiku<svg class="ck" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
      </div>
      <button class="send" id="send" title="Send" disabled><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11l5-5 5 5M12 6v13"/></svg></button>
    </div>
  </div>
  <div class="hint">AI can make mistakes. Double-check important info.</div>
</div>
<script>
(function(){
  var ta=document.getElementById("ta"),send=document.getElementById("send"),sent=document.getElementById("sent");
  var model=document.getElementById("model"),menu=document.getElementById("menu"),modelName=document.getElementById("modelName");
  function sync(){send.disabled=ta.value.trim()==="";ta.style.height="auto";ta.style.height=Math.min(ta.scrollHeight,160)+"px";}
  ta.addEventListener("input",sync);
  document.getElementById("chips").addEventListener("click",function(e){
    var c=e.target.closest(".chip");if(!c)return;
    ta.value=(ta.value?ta.value+" ":"")+c.textContent;ta.focus();sync();
  });
  function submit(){
    var v=ta.value.trim();if(!v)return;
    var b=document.createElement("div");b.className="b";b.textContent=v;sent.appendChild(b);
    ta.value="";sync();ta.focus();
  }
  send.addEventListener("click",submit);
  ta.addEventListener("keydown",function(e){if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();submit();}});
  model.addEventListener("click",function(e){e.stopPropagation();menu.classList.toggle("open");});
  menu.addEventListener("click",function(e){
    var mi=e.target.closest(".mi");if(!mi)return;
    modelName.textContent=mi.getAttribute("data-m");
    for(var i=0;i<menu.children.length;i++)menu.children[i].classList.remove("sel");
    mi.classList.add("sel");menu.classList.remove("open");
  });
  document.addEventListener("click",function(){menu.classList.remove("open");});
})();
</script>`
  },

  {
    id:"web-comparison", title:"Comparison Table", category:"Web", type:"Comparison",
    tools:["v0","Lovable","Cursor","HTML"],
    prompt:
`Role: product marketing designer.
Build a COMPARISON section contrasting "the old way" with your product.

Layout:
- Eyebrow + short H2
- A 3-column table: Feature | The old way | With <Product>
- Header row emphasized; the product column is tinted with the accent
- 4-5 feature rows; old-way cells use a muted cross icon, product cells use an
  accent check icon + short phrase

Style:
- 1px hairlines, 14px radius, rounded table container, neutral + one accent
- Real, specific rows (setup, who can use it, alerts, time-to-value), no lorem

Do NOT make it a pricing table — this contrasts approaches, not plans.
Output: one self-contained block, responsive.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  *{box-sizing:border-box}body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#0f1115;background:#fff}
  .wrap{max-width:820px;margin:0 auto;padding:48px 24px}
  .eyebrow{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#4f46e5;font-weight:700}
  h2{font-size:27px;letter-spacing:-.02em;margin:10px 0 22px}
  .tbl{border:1px solid #e6e8eb;border-radius:14px;overflow:hidden}
  .r{display:grid;grid-template-columns:1.5fr 1fr 1fr;border-top:1px solid #eef0f2}
  .r:first-child{border-top:0}
  .c{padding:15px 18px;font-size:14px;display:flex;align-items:center;gap:9px}
  .c.feat{color:#0f1115;font-weight:500}
  .c.old{color:#9aa1a9}
  .c.new{color:#374151;background:#f5f7ff}
  .head .c{font-weight:700;font-size:13px;color:#0f1115;background:#fafafb}
  .head .new{background:#eef1ff;color:#4f46e5}
  svg{width:17px;height:17px;flex:none}
  .x{color:#cbd0d6}.chk{color:#4f46e5}
  @media(max-width:640px){h2{font-size:22px}.c{padding:12px 12px;font-size:13px}}
</style>
<div class="wrap">
  <div class="eyebrow">Why switch</div>
  <h2>A different way to work with your numbers.</h2>
  <div class="tbl">
    <div class="r head"><div class="c feat">&nbsp;</div><div class="c old">The old way</div><div class="c new">With Northwind</div></div>
    <div class="r"><div class="c feat">Time to first insight</div><div class="c old"><svg class="x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>Days of SQL</div><div class="c new"><svg class="chk" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>Under a minute</div></div>
    <div class="r"><div class="c feat">Who can use it</div><div class="c old"><svg class="x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>Analysts only</div><div class="c new"><svg class="chk" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>Anyone on the team</div></div>
    <div class="r"><div class="c feat">Anomalies</div><div class="c old"><svg class="x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>Manual checks</div><div class="c new"><svg class="chk" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>Caught automatically</div></div>
    <div class="r"><div class="c feat">Setup</div><div class="c old"><svg class="x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>Build a pipeline</div><div class="c new"><svg class="chk" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>One-click connect</div></div>
  </div>
</div>`
  },

  {
    id:"web-integrations", title:"Integrations Grid", category:"Web", type:"Integrations",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: product marketing designer.
Build an INTEGRATIONS section: a grid of tools the product connects to.

Layout:
- Eyebrow + H2 + one-line subhead
- A responsive grid of tiles (4 across, wrap down); each tile = square logo mark
  (monogram placeholder), tool name, one-word category, and a subtle status
- Keep tiles calm and uniform so the set reads as a system

Style:
- 1px borders, 12px radius, neutral surfaces, one accent used sparingly
- Use 2-letter monograms in place of real brand logos (never fake real logos)

Do NOT use real company logos — neutral monograms only. No emoji.
Output: one self-contained block, responsive.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  *{box-sizing:border-box}body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#0f1115;background:#fff}
  .wrap{max-width:900px;margin:0 auto;padding:48px 24px}
  .eyebrow{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#4f46e5;font-weight:700}
  h2{font-size:27px;letter-spacing:-.02em;margin:10px 0 4px}
  .sub{color:#6b7280;margin:0 0 24px}
  .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
  .tile{border:1px solid #e6e8eb;border-radius:12px;padding:16px;display:flex;flex-direction:column;gap:10px}
  .logo{width:36px;height:36px;border-radius:9px;background:#f3f4f6;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;color:#4b5563;letter-spacing:-.02em}
  .tile b{font-size:13.5px}
  .tile .cat{font-size:11.5px;color:#9aa1a9}
  .tile .st{font-size:11px;color:#4f46e5;display:flex;align-items:center;gap:6px;margin-top:2px}
  .tile .st .d{width:6px;height:6px;border-radius:50%;background:#4f46e5}
  @media(max-width:720px){.grid{grid-template-columns:repeat(2,1fr)}}
</style>
<div class="wrap">
  <div class="eyebrow">Integrations</div>
  <h2>Connect the tools you already use.</h2>
  <p class="sub">Two-way sync, no code. Set up in a couple of clicks.</p>
  <div class="grid">
    <div class="tile"><div class="logo">Sl</div><b>Slack</b><span class="cat">Messaging</span><span class="st"><span class="d"></span>Connected</span></div>
    <div class="tile"><div class="logo">No</div><b>Notion</b><span class="cat">Docs</span><span class="st"><span class="d"></span>Connected</span></div>
    <div class="tile"><div class="logo">Gh</div><b>GitHub</b><span class="cat">Code</span><span class="st"><span class="d"></span>Connected</span></div>
    <div class="tile"><div class="logo">Fi</div><b>Figma</b><span class="cat">Design</span><span class="cat">Available</span></div>
    <div class="tile"><div class="logo">Li</div><b>Linear</b><span class="cat">Issues</span><span class="cat">Available</span></div>
    <div class="tile"><div class="logo">St</div><b>Stripe</b><span class="cat">Payments</span><span class="cat">Available</span></div>
    <div class="tile"><div class="logo">Zp</div><b>Zapier</b><span class="cat">Automation</span><span class="cat">Available</span></div>
    <div class="tile"><div class="logo">Gm</div><b>Gmail</b><span class="cat">Email</span><span class="cat">Available</span></div>
  </div>
</div>`
  },

  {
    id:"web-changelog", title:"Changelog Timeline", category:"Web", type:"Changelog",
    tools:["v0","Claude","Cursor","HTML"],
    prompt:
`Role: content + product designer.
Build a CHANGELOG section as a vertical release timeline.

Layout:
- Eyebrow + H2 ("What's new")
- 3 releases; each = left meta column (version tag + date) and a right body with
  a connecting vertical line, a node dot, a title, an optional "New" badge, and
  2-3 bullet points
- Most recent at the top

Style:
- Timeline line + node dots, neutral text, one accent on the node + the New badge
- Real, believable release notes; no lorem; SVG bullets or simple dashes

Do NOT make it a blog list — the timeline connective line is the point.
Output: one self-contained block, responsive.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  *{box-sizing:border-box}body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#0f1115;background:#fff}
  .wrap{max-width:640px;margin:0 auto;padding:48px 24px}
  .eyebrow{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#4f46e5;font-weight:700}
  h2{font-size:27px;letter-spacing:-.02em;margin:10px 0 26px}
  .item{display:grid;grid-template-columns:104px 1fr;gap:18px}
  .meta{padding-top:2px}
  .ver{font-weight:700;font-size:13.5px}
  .date{font-size:12px;color:#9aa1a9;margin-top:2px}
  .body{border-left:2px solid #eef0f2;padding:0 0 30px 24px;position:relative}
  .item:last-child .body{border-left-color:transparent}
  .body::before{content:"";position:absolute;left:-7px;top:3px;width:12px;height:12px;border-radius:50%;background:#4f46e5;border:3px solid #fff;box-shadow:0 0 0 1px #e6e8eb}
  .body h3{margin:0;font-size:16px;display:inline-flex;align-items:center;gap:9px}
  .new{font-size:10.5px;font-weight:700;letter-spacing:.03em;color:#4f46e5;background:#eef1ff;border-radius:999px;padding:2px 8px}
  ul{margin:10px 0 0;padding-left:18px;color:#6b7280;font-size:13.5px;line-height:1.65}
</style>
<div class="wrap">
  <div class="eyebrow">Changelog</div>
  <h2>What&rsquo;s new</h2>
  <div class="item"><div class="meta"><div class="ver">v2.4</div><div class="date">Aug 2026</div></div>
    <div class="body"><h3>Command palette<span class="new">NEW</span></h3><ul><li>Jump anywhere with Cmd-K fuzzy search</li><li>Run actions without leaving the keyboard</li></ul></div></div>
  <div class="item"><div class="meta"><div class="ver">v2.3</div><div class="date">Jul 2026</div></div>
    <div class="body"><h3>Anomaly alerts</h3><ul><li>Get pinged the moment a metric drifts</li><li>Tune thresholds per metric</li></ul></div></div>
  <div class="item"><div class="meta"><div class="ver">v2.2</div><div class="date">Jun 2026</div></div>
    <div class="body"><h3>Faster backfills</h3><ul><li>90-day history imports in seconds</li><li>Reduced query latency by 40%</li></ul></div></div>
</div>`
  },

  {
    id:"app-activity", title:"Activity Feed", category:"App", type:"Activity feed",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: product designer for collaborative app surfaces.
Build an ACTIVITY FEED (a list of recent team actions).

Layout:
- Section header ("Activity") with a subtle filter control on the right
- A vertical list of items; each = round avatar (initials), a sentence with the
  actor and target bolded, a small type icon, and a relative timestamp
- Hairline dividers between items

Style:
- App chrome scale (not marketing), 1px dividers, one accent for avatars/links
- Real actions (merged PR, opened issue, deployed, commented); tabular timestamps

Do NOT use marketing-sized type. No emoji (SVG type icons only).
Output: one self-contained block.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  *{box-sizing:border-box}body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#0f1115;background:#fff}
  .card{max-width:520px;margin:24px auto;border:1px solid #e6e8eb;border-radius:14px;overflow:hidden}
  .head{display:flex;align-items:center;justify-content:space-between;padding:16px 18px;border-bottom:1px solid #eef0f2}
  .head h3{margin:0;font-size:15px}
  .filter{font-size:12.5px;color:#6b7280;border:1px solid #e6e8eb;border-radius:8px;padding:5px 10px;display:flex;align-items:center;gap:6px}
  .filter svg{width:13px;height:13px}
  .item{display:flex;gap:12px;align-items:flex-start;padding:14px 18px;border-top:1px solid #f1f2f4}
  .item:first-of-type{border-top:0}
  .av{width:34px;height:34px;border-radius:50%;background:#eef1ff;color:#4f46e5;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12.5px;flex:none}
  .txt{font-size:13.5px;color:#4b5563;line-height:1.45}
  .txt b{color:#0f1115;font-weight:650}
  .time{font-size:12px;color:#9aa1a9;margin-top:3px;display:flex;align-items:center;gap:6px}
  .time svg{width:12px;height:12px}
</style>
<div class="card">
  <div class="head"><h3>Activity</h3><span class="filter"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5h18l-7 8v5l-4 2v-7z"/></svg>All</span></div>
  <div class="item"><div class="av">MA</div><div><div class="txt"><b>Mara Adeyemi</b> merged <b>#482 · Command palette</b> into main</div><div class="time"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3v12a3 3 0 0 0 3 3h6"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="6" r="3"/></svg>12 min ago</div></div></div>
  <div class="item"><div class="av">SL</div><div><div class="txt"><b>Sam Lorne</b> opened issue <b>Alerts miss weekend spikes</b></div><div class="time">1 hour ago</div></div></div>
  <div class="item"><div class="av">JP</div><div><div class="txt"><b>Jess Park</b> deployed <b>v2.4</b> to production</div><div class="time"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 4 6v6c0 5 3.4 8 8 10 4.6-2 8-5 8-10V6z"/></svg>3 hours ago</div></div></div>
  <div class="item"><div class="av">RK</div><div><div class="txt"><b>Ravi Kumar</b> commented on <b>Onboarding revamp</b></div><div class="time">Yesterday</div></div></div>
</div>`
  },
  {
    id:"app-login", title:"Sign-in Card", category:"App", type:"Auth",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: senior product designer + front-end engineer.
Build a centered SIGN-IN card for a web app.

Layout (single card, max-width ~400px, vertically centered on a soft page):
- Small square brand mark + product name at top
- Title "Welcome back" + one muted line of subtext
- Email field and password field, labels above 44px-tall inputs
- A row: "Remember me" on the left, "Forgot password?" link on the right
- Primary full-width "Sign in" button (solid accent)
- An "or" divider
- Two secondary full-width buttons: continue with Google, continue with GitHub
- Footer line: "New here? Create an account"

Style constraints:
- Neutral palette: near-white page (#f5f6f8), white card, near-black ink, one restrained accent (#1F45FF)
- System font, 13-14px base, 1px hairline borders, 10-12px radii, no heavy shadows
- No gradients, no stock imagery, no emoji

Do NOT: use lorem, add social clutter, or over-shadow the card. Real, calm copy.
Output: one self-contained block, no external dependencies.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{--ink:#0f1115;--muted:#6b7280;--border:#e6e8eb;--accent:#1F45FF;--page:#f5f6f8}
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--ink);
    background:var(--page);display:flex;align-items:center;justify-content:center;min-height:100vh;padding:40px 20px}
  .card{width:100%;max-width:400px;background:#fff;border:1px solid var(--border);border-radius:14px;padding:28px 26px}
  .brand{display:flex;align-items:center;gap:9px;font-weight:700;font-size:15px;letter-spacing:-.01em}
  .brand .mk{width:22px;height:22px;border-radius:6px;background:var(--accent)}
  h1{font-size:22px;letter-spacing:-.02em;margin:22px 0 4px}
  .sub{color:var(--muted);font-size:13.5px;margin:0 0 20px}
  label{display:block;font-size:12.5px;font-weight:600;margin:0 0 6px}
  .field{margin-bottom:14px}
  input{width:100%;height:44px;border:1px solid var(--border);border-radius:10px;padding:0 12px;font-size:14px;color:var(--ink);background:#fff;outline:none}
  input:focus{border-color:var(--accent)}
  .row{display:flex;align-items:center;justify-content:space-between;margin:2px 0 18px;font-size:12.5px}
  .rem{display:flex;align-items:center;gap:7px;color:var(--muted)}
  .rem input{width:14px;height:14px;accent-color:var(--accent)}
  .link{color:var(--accent);text-decoration:none;font-weight:600}
  .btn{width:100%;height:44px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;border:1px solid var(--border);background:#fff;color:var(--ink);display:flex;align-items:center;justify-content:center;gap:9px}
  .btn.primary{background:var(--accent);border-color:var(--accent);color:#fff;margin-bottom:16px}
  .btn.ghost{margin-top:10px}
  .btn svg{width:16px;height:16px}
  .div{display:flex;align-items:center;gap:12px;color:var(--muted);font-size:12px;margin:4px 0 14px}
  .div::before,.div::after{content:"";flex:1;height:1px;background:var(--border)}
  .foot{text-align:center;color:var(--muted);font-size:13px;margin-top:20px}
</style>
<div class="card">
  <div class="brand"><span class="mk"></span>Northwind</div>
  <h1>Welcome back</h1>
  <p class="sub">Sign in to your workspace to continue.</p>
  <div class="field"><label>Email</label><input type="email" value="you@company.com"></div>
  <div class="field"><label>Password</label><input type="password" value="............"></div>
  <div class="row"><span class="rem"><input type="checkbox" checked>Remember me</span><a class="link" href="#">Forgot password?</a></div>
  <button class="btn primary">Sign in</button>
  <div class="div">or</div>
  <button class="btn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 11v2.9h4.1c-.2 1.1-1.3 3.1-4.1 3.1a4.6 4.6 0 0 1 0-9.2c1.3 0 2.2.5 2.7 1l2-1.9A7.6 7.6 0 1 0 12 19.6c4.4 0 7.3-3.1 7.3-7.4 0-.5 0-.9-.1-1.2z"/></svg>Continue with Google</button>
  <button class="btn ghost"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>Continue with GitHub</button>
  <div class="foot">New here? <a class="link" href="#">Create an account</a></div>
</div>`
  },
  {
    id:"web-product", title:"Product Cards", category:"Web", type:"Commerce",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: senior product designer + front-end engineer.
Build a row of three e-commerce PRODUCT CARDS.

Each card (equal width, responsive grid, ~320px each):
- Square media area with a soft solid tint (no photo), a small "New" or "-20%" badge top-left, a wishlist heart top-right
- Product title (one line) + short muted category
- Price row: current price bold, optional compare-at price struck through
- A 5-star rating with a small review count
- Full-width "Add to cart" button, quiet until hover

Style constraints:
- Neutral palette: white cards on near-white page, near-black ink, one restrained accent (#1F45FF), muted greys
- System font, 13-14px base, 1px hairline borders, 14-16px radii, no drop shadows
- No gradients beyond a flat tint, no stock imagery, no emoji

Do NOT: use lorem or fake five stars on everything. Real names, honest ratings.
Output: one self-contained block, no external dependencies.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{--ink:#0f1115;--muted:#6b7280;--border:#e6e8eb;--accent:#1F45FF;--page:#f6f7f9}
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--ink);background:var(--page);padding:34px 24px}
  .grid{max-width:1040px;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
  .card{background:#fff;border:1px solid var(--border);border-radius:16px;overflow:hidden}
  .media{position:relative;aspect-ratio:4/3;background:var(--t)}
  .badge{position:absolute;top:12px;left:12px;background:var(--ink);color:#fff;font-size:11px;font-weight:600;padding:4px 9px;border-radius:999px}
  .heart{position:absolute;top:10px;right:10px;width:30px;height:30px;border-radius:50%;background:#fff;border:1px solid var(--border);display:flex;align-items:center;justify-content:center}
  .heart svg{width:15px;height:15px;color:var(--muted)}
  .body{padding:14px 15px 16px}
  .cat{font-size:11.5px;color:var(--muted);letter-spacing:.02em}
  h3{font-size:15.5px;letter-spacing:-.01em;margin:3px 0 8px}
  .price{display:flex;align-items:baseline;gap:8px;margin-bottom:8px}
  .price .now{font-weight:700;font-size:16px}
  .price .was{color:var(--muted);text-decoration:line-through;font-size:13px}
  .stars{display:flex;align-items:center;gap:6px;color:var(--muted);font-size:12px;margin-bottom:14px}
  .stars .s{color:var(--accent);letter-spacing:1px}
  .add{width:100%;height:40px;border-radius:10px;border:1px solid var(--ink);background:#fff;color:var(--ink);font-weight:600;font-size:13.5px;cursor:pointer}
  .add:hover{background:var(--accent);border-color:var(--accent);color:#fff}
</style>
<div class="grid">
  <div class="card">
    <div class="media" style="--t:#e9edff"><span class="badge">New</span><span class="heart"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"/></svg></span></div>
    <div class="body"><div class="cat">Desk</div><h3>Aperture Monitor Arm</h3><div class="price"><span class="now">$139</span><span class="was">$169</span></div><div class="stars"><span class="s">★★★★★</span>4.8 (212)</div><button class="add">Add to cart</button></div>
  </div>
  <div class="card">
    <div class="media" style="--t:#eef1f4"><span class="badge" style="background:var(--accent)">-20%</span><span class="heart"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"/></svg></span></div>
    <div class="body"><div class="cat">Audio</div><h3>Lumen Wireless Buds</h3><div class="price"><span class="now">$96</span><span class="was">$120</span></div><div class="stars"><span class="s">★★★★☆</span>4.3 (89)</div><button class="add">Add to cart</button></div>
  </div>
  <div class="card">
    <div class="media" style="--t:#eafaf1"><span class="heart"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"/></svg></span></div>
    <div class="body"><div class="cat">Paper</div><h3>Field Notebook, A5</h3><div class="price"><span class="now">$18</span></div><div class="stars"><span class="s">★★★★★</span>4.9 (540)</div><button class="add">Add to cart</button></div>
  </div>
</div>`
  },
  {
    id:"web-nav", title:"Navigation Bar", category:"Web", type:"Navigation",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: senior product designer + front-end engineer.
Build a top NAVIGATION BAR for a marketing site.

Layout (full-width bar, content max-width ~1120px):
- Left: square brand mark + wordmark
- Center: 5 nav links (Product, Solutions, Pricing, Docs, Changelog); one carries a small "New" tag
- Right: a ghost "Sign in" and a solid accent "Get started" pill
- A 1px hairline under the bar; calm, sticky-looking
- Beneath the bar, a thin page-context strip (breadcrumb) so the preview reads as the top of a real page

Style constraints:
- Neutral palette: white bar, near-black ink, muted link greys, one restrained accent (#1F45FF)
- System font, 13-14px, 999px pills, 1px borders, no shadows
- No gradients, no mega-menu, no emoji, no desktop hamburger

Do NOT: cram 8 links or use lorem.
Output: one self-contained block, no external dependencies.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{--ink:#0f1115;--muted:#5b626b;--border:#e6e8eb;--accent:#1F45FF}
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--ink);background:#fff}
  .bar{border-bottom:1px solid var(--border)}
  .in{max-width:1120px;margin:0 auto;height:64px;padding:0 24px;display:flex;align-items:center;gap:28px}
  .brand{display:flex;align-items:center;gap:9px;font-weight:700;font-size:15.5px;letter-spacing:-.01em}
  .brand .mk{width:22px;height:22px;border-radius:6px;background:var(--accent)}
  nav{display:flex;align-items:center;gap:22px;margin-left:8px}
  nav a{color:var(--muted);text-decoration:none;font-size:14px;font-weight:500;display:inline-flex;align-items:center;gap:7px}
  nav a:hover{color:var(--ink)}
  .tag{font-size:10px;font-weight:700;color:var(--accent);background:#eef1ff;border-radius:999px;padding:2px 6px}
  .right{margin-left:auto;display:flex;align-items:center;gap:10px}
  .btn{font-size:13.5px;font-weight:600;border-radius:999px;padding:9px 16px;cursor:pointer;text-decoration:none}
  .ghost{color:var(--ink);border:1px solid var(--border);background:#fff}
  .solid{color:#fff;background:var(--accent);border:1px solid var(--accent)}
  .strip{max-width:1120px;margin:0 auto;padding:20px 24px 26px;color:var(--muted);font-size:13px}
  .crumb{display:flex;align-items:center;gap:8px}
  .crumb b{color:var(--ink)}
  .crumb svg{width:13px;height:13px}
</style>
<div class="bar"><div class="in">
  <div class="brand"><span class="mk"></span>Northwind</div>
  <nav>
    <a href="#">Product</a>
    <a href="#">Solutions</a>
    <a href="#">Pricing</a>
    <a href="#">Docs</a>
    <a href="#">Changelog <span class="tag">New</span></a>
  </nav>
  <div class="right">
    <a class="btn ghost" href="#">Sign in</a>
    <a class="btn solid" href="#">Get started</a>
  </div>
</div></div>
<div class="strip">
  <div class="crumb"><span>Home</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg><b>Product</b></div>
</div>`
  },
  {
    id:"app-table", title:"Data Table", category:"App", type:"Table",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: senior product designer + front-end engineer.
Build a DATA TABLE for a web app (customers/invoices style).

Layout:
- A card containing a table with a header row and ~5 body rows
- Columns: checkbox, Name (avatar initials + name + email), Status (colored pill), Plan, MRR (right-aligned), a row-actions button
- The sorted header cell shows a small caret and is slightly bolder
- Rows separated by 1px hairlines, hover tint, no zebra striping
- A slim toolbar above: result count on the left, a ghost "Export" and a solid "Add customer" on the right

Style constraints:
- Neutral palette: white card on near-white page, near-black ink, muted greys, one restrained accent (#1F45FF); status pills in green/amber/grey tints
- System font, 13-14px, 1px hairlines, 12-14px card radius, no drop shadows
- Right-align numeric columns; tabular figures

Do NOT: use lorem or emoji. Real names, plausible numbers.
Output: one self-contained block, no external dependencies.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{--ink:#0f1115;--muted:#6b7280;--border:#e6e8eb;--accent:#1F45FF;--page:#f6f7f9}
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--ink);background:var(--page);padding:28px 24px}
  .card{max-width:1000px;margin:0 auto;background:#fff;border:1px solid var(--border);border-radius:14px;overflow:hidden}
  .bar{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid var(--border)}
  .bar .n{font-size:13px;color:var(--muted)}
  .bar .n b{color:var(--ink);font-weight:700}
  .actions{display:flex;gap:8px}
  .btn{font-size:13px;font-weight:600;border-radius:9px;padding:8px 13px;cursor:pointer;border:1px solid var(--border);background:#fff;color:var(--ink)}
  .btn.solid{background:var(--accent);border-color:var(--accent);color:#fff}
  table{width:100%;border-collapse:collapse}
  th,td{text-align:left;padding:12px 16px;font-size:13.5px;border-bottom:1px solid var(--border);white-space:nowrap}
  th{font-size:11.5px;letter-spacing:.03em;text-transform:uppercase;color:var(--muted);font-weight:600;background:#fbfbfc}
  th.sort{color:var(--ink)}
  th .car{margin-left:5px;vertical-align:middle}
  tbody tr:hover{background:#fafbff}
  tbody tr:last-child td{border-bottom:0}
  .r{text-align:right}
  .who{display:flex;align-items:center;gap:10px}
  .av{width:30px;height:30px;border-radius:50%;background:#eef1ff;color:var(--accent);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center}
  .who .nm{font-weight:600}
  .who .em{color:var(--muted);font-size:12px}
  .pill{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;padding:3px 9px;border-radius:999px}
  .pill.ok{background:#e7f6ec;color:#177a3d}
  .pill.pend{background:#fdf3e2;color:#8a5a12}
  .pill.off{background:#eef0f2;color:#5b626b}
  .pill .d{width:6px;height:6px;border-radius:50%;background:currentColor}
  .mrr{font-variant-numeric:tabular-nums;font-weight:600}
  .more{border:0;background:transparent;color:var(--muted);cursor:pointer;font-size:18px;line-height:1;padding:2px 8px;border-radius:6px;letter-spacing:1px}
  .more:hover{background:#f0f1f3;color:var(--ink)}
  .ck{width:15px;height:15px;accent-color:var(--accent)}
</style>
<div class="card">
  <div class="bar"><div class="n"><b>128</b> customers</div><div class="actions"><button class="btn">Export</button><button class="btn solid">Add customer</button></div></div>
  <table>
    <thead><tr>
      <th style="width:38px"><input class="ck" type="checkbox"></th>
      <th class="sort">Name <svg class="car" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></th>
      <th>Status</th><th>Plan</th><th class="r">MRR</th><th style="width:44px"></th>
    </tr></thead>
    <tbody>
      <tr><td><input class="ck" type="checkbox"></td><td><div class="who"><span class="av">MA</span><div><div class="nm">Mara Adeyemi</div><div class="em">mara@northwind.io</div></div></div></td><td><span class="pill ok"><span class="d"></span>Active</span></td><td>Scale</td><td class="r mrr">$1,290</td><td><button class="more">...</button></td></tr>
      <tr><td><input class="ck" type="checkbox"></td><td><div class="who"><span class="av">SL</span><div><div class="nm">Sam Lorne</div><div class="em">sam@vertex.co</div></div></div></td><td><span class="pill pend"><span class="d"></span>Trialing</span></td><td>Pro</td><td class="r mrr">$0</td><td><button class="more">...</button></td></tr>
      <tr><td><input class="ck" type="checkbox"></td><td><div class="who"><span class="av">JP</span><div><div class="nm">Jess Park</div><div class="em">jess@lumen.app</div></div></div></td><td><span class="pill ok"><span class="d"></span>Active</span></td><td>Scale</td><td class="r mrr">$980</td><td><button class="more">...</button></td></tr>
      <tr><td><input class="ck" type="checkbox"></td><td><div class="who"><span class="av">RK</span><div><div class="nm">Ravi Kumar</div><div class="em">ravi@halcyon.io</div></div></div></td><td><span class="pill off"><span class="d"></span>Churned</span></td><td>Pro</td><td class="r mrr">$0</td><td><button class="more">...</button></td></tr>
      <tr><td><input class="ck" type="checkbox"></td><td><div class="who"><span class="av">EN</span><div><div class="nm">Elin Norberg</div><div class="em">elin@cedar.co</div></div></div></td><td><span class="pill ok"><span class="d"></span>Active</span></td><td>Team</td><td class="r mrr">$460</td><td><button class="more">...</button></td></tr>
    </tbody>
  </table>
</div>`
  },
  {
    id:"web-footer", title:"Site Footer", category:"Web", type:"Footer",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: senior product designer + front-end engineer.
Build a marketing SITE FOOTER.

Layout (full width, content max-width ~1120px):
- Left block: brand mark + wordmark, a one-line description, and a small "All systems operational" status chip
- Right block: four link columns (Product, Company, Resources, Legal) with clear headings, 4-5 links each
- A 1px divider, then a bottom bar: copyright on the left, a row of small social icon buttons on the right

Style constraints:
- Neutral palette: white background, near-black ink, muted link greys that darken on hover, one restrained accent (#1F45FF) used only for the brand mark and status dot
- System font, 13-14px, generous column gaps, 1px hairlines, no shadows
- No newsletter form here, no gradients, no emoji

Do NOT: cram legal microtext or use lorem. Real, plausible labels.
Output: one self-contained block, no external dependencies.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{--ink:#0f1115;--muted:#6b7280;--border:#e6e8eb;--accent:#1F45FF}
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--ink);background:#fff}
  .ft{max-width:1120px;margin:0 auto;padding:48px 24px 26px}
  .top{display:grid;grid-template-columns:1.4fr 2fr;gap:40px}
  .brand{display:flex;align-items:center;gap:9px;font-weight:700;font-size:16px;letter-spacing:-.01em}
  .brand .mk{width:22px;height:22px;border-radius:6px;background:var(--accent)}
  .desc{color:var(--muted);font-size:13.5px;line-height:1.6;margin:14px 0 16px;max-width:34ch}
  .status{display:inline-flex;align-items:center;gap:8px;font-size:12.5px;color:var(--muted);border:1px solid var(--border);border-radius:999px;padding:5px 11px}
  .status .d{width:7px;height:7px;border-radius:50%;background:#22a559}
  .cols{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
  h4{font-size:12px;letter-spacing:.04em;text-transform:uppercase;color:var(--ink);margin:0 0 12px}
  .cols a{display:block;color:var(--muted);text-decoration:none;font-size:13.5px;padding:5px 0}
  .cols a:hover{color:var(--ink)}
  .barf{display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--border);margin-top:36px;padding-top:20px}
  .cp{color:var(--muted);font-size:12.5px}
  .soc{display:flex;gap:8px}
  .soc a{width:32px;height:32px;border:1px solid var(--border);border-radius:8px;display:flex;align-items:center;justify-content:center;color:var(--muted)}
  .soc a:hover{color:var(--ink);border-color:var(--ink)}
  .soc svg{width:15px;height:15px}
  @media(max-width:720px){.top{grid-template-columns:1fr;gap:28px}.cols{grid-template-columns:repeat(2,1fr)}}
</style>
<div class="ft">
  <div class="top">
    <div>
      <div class="brand"><span class="mk"></span>Northwind</div>
      <p class="desc">Product analytics that answer questions in plain language. Built for teams who would rather ship than babysit dashboards.</p>
      <span class="status"><span class="d"></span>All systems operational</span>
    </div>
    <div class="cols">
      <div><h4>Product</h4><a href="#">Overview</a><a href="#">Features</a><a href="#">Pricing</a><a href="#">Changelog</a><a href="#">Docs</a></div>
      <div><h4>Company</h4><a href="#">About</a><a href="#">Careers</a><a href="#">Customers</a><a href="#">Blog</a></div>
      <div><h4>Resources</h4><a href="#">Guides</a><a href="#">API</a><a href="#">Status</a><a href="#">Community</a></div>
      <div><h4>Legal</h4><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Security</a><a href="#">DPA</a></div>
    </div>
  </div>
  <div class="barf">
    <span class="cp">© 2026 Northwind Labs, Inc.</span>
    <div class="soc">
      <a href="#" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 3h3l-7 8 8 10h-6l-5-6-5 6H3l8-9L3 3h6l4 5z"/></svg></a>
      <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0zM3.4 8.4h3.1V21H3.4V8.4zM9 8.4h3v1.7h.05c.42-.8 1.45-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.9V21h-3.1v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9V8.4z"/></svg></a>
      <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.7-1.8C19.2 5 12 5 12 5s-7.2 0-8.9.5A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.7 1.8C4.8 19 12 19 12 19s7.2 0 8.9-.5a2.5 2.5 0 0 0 1.7-1.8C23 15.2 23 12 23 12zM10 15.5v-7l6 3.5-6 3.5z"/></svg></a>
    </div>
  </div>
</div>`
  },
  {
    id:"web-cta", title:"CTA / Newsletter", category:"Web", type:"Capture",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: senior product designer + front-end engineer.
Build a closing CALL-TO-ACTION band with email capture.

Layout (centered, max-width ~860px panel):
- Small eyebrow label
- One-line headline, tight tracking
- One muted supporting sentence
- An inline email form: email input + solid "Subscribe" button on one row (stacks on narrow)
- A tiny reassurance line under the form

Use the restrained treatment: near-black ink on a soft neutral panel with one accent, not a loud full-bleed color block.

Style constraints:
- Neutral palette: soft panel (#f4f5f7), near-black ink, one restrained accent (#1F45FF)
- System font, 13-15px, consistent radii, 1px borders, no shadows
- No gradients, no stock imagery, no emoji

Do NOT: overpromise or use lorem. Real, calm copy.
Output: one self-contained block, no external dependencies.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{--ink:#0f1115;--muted:#6b7280;--border:#e2e4e8;--accent:#1F45FF;--panel:#f4f5f7}
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--ink);background:#fff;padding:40px 24px}
  .band{max-width:860px;margin:0 auto;background:var(--panel);border:1px solid var(--border);border-radius:20px;padding:44px 32px;text-align:center}
  .eyebrow{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);font-weight:700}
  h2{font-size:30px;line-height:1.1;letter-spacing:-.03em;margin:14px 0 0;font-weight:700}
  p.sub{color:var(--muted);font-size:15px;max-width:46ch;margin:12px auto 22px;line-height:1.55}
  form{display:flex;gap:10px;max-width:440px;margin:0 auto}
  input{flex:1;height:46px;border:1px solid var(--border);border-radius:11px;padding:0 14px;font-size:14px;background:#fff;color:var(--ink);outline:none}
  input:focus{border-color:var(--accent)}
  button{height:46px;padding:0 20px;border-radius:11px;border:1px solid var(--accent);background:var(--accent);color:#fff;font-size:14px;font-weight:600;cursor:pointer;white-space:nowrap}
  .fine{color:var(--muted);font-size:12px;margin-top:12px}
  @media(max-width:520px){form{flex-direction:column}}
</style>
<div class="band">
  <div class="eyebrow">Ship faster</div>
  <h2>Get the weekly build log.</h2>
  <p class="sub">One email every Friday: what we shipped, what broke, and the patterns worth stealing. Read by 14,000+ builders.</p>
  <form>
    <input type="email" placeholder="you@company.com">
    <button type="button">Subscribe</button>
  </form>
  <div class="fine">No spam. Unsubscribe anytime.</div>
</div>`
  },
  {
    id:"app-confirm", title:"Confirmation Dialog", category:"App", type:"Dialog",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: senior product designer + front-end engineer.
Build a destructive CONFIRMATION DIALOG shown over a dimmed page.

Layout:
- A dimmed backdrop and a centered dialog card (max-width ~420px)
- Top: a small circular icon in a soft red tint (trash), then a title ("Delete project?")
- Body: one or two calm sentences naming the specific item and that it cannot be undone
- A small detail line summarizing the consequence
- Footer actions right-aligned: a ghost "Cancel" and a solid red "Delete project"

Style constraints:
- Neutral palette for page/card; the ONLY color is a destructive red used sparingly (icon tint + primary button)
- System font, 14px, 16px card radius, 10px button radius, one soft shadow on the dialog is OK
- No emoji

Do NOT: make both buttons look equally dangerous, or use lorem. Name the real item.
Output: one self-contained block, no external dependencies.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{--ink:#0f1115;--muted:#6b7280;--border:#e6e8eb;--danger:#d5342b;--page:#eef0f3}
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--ink);
    background:var(--page);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:40px 20px}
  .scrim{position:fixed;inset:0;background:rgba(15,17,21,.45)}
  .dlg{position:relative;width:100%;max-width:420px;background:#fff;border:1px solid var(--border);border-radius:16px;padding:24px;box-shadow:0 30px 70px -30px rgba(0,0,0,.5)}
  .ic{width:42px;height:42px;border-radius:50%;background:#fdeceb;color:var(--danger);display:flex;align-items:center;justify-content:center;margin-bottom:14px}
  .ic svg{width:20px;height:20px}
  h3{font-size:18px;letter-spacing:-.01em;margin:0 0 8px}
  p{color:var(--muted);font-size:14px;line-height:1.55;margin:0}
  p b{color:var(--ink);font-weight:700}
  .detail{margin-top:12px;font-size:12.5px;color:var(--muted);background:#f7f8fa;border:1px solid var(--border);border-radius:9px;padding:9px 11px}
  .row{display:flex;justify-content:flex-end;gap:10px;margin-top:20px}
  .btn{font-size:13.5px;font-weight:600;border-radius:10px;padding:9px 16px;cursor:pointer}
  .cancel{background:#fff;border:1px solid var(--border);color:var(--ink)}
  .del{background:var(--danger);border:1px solid var(--danger);color:#fff}
</style>
<div class="scrim"></div>
<div class="dlg">
  <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/></svg></div>
  <h3>Delete project?</h3>
  <p>You are about to delete <b>Northwind Analytics</b>. This permanently removes its dashboards, saved views, and API keys. This action cannot be undone.</p>
  <div class="detail">This will remove 3 dashboards and revoke 2 API keys.</div>
  <div class="row">
    <button class="btn cancel">Cancel</button>
    <button class="btn del">Delete project</button>
  </div>
</div>`
  },
  {
    id:"app-chat", title:"AI Chat Thread", category:"App", type:"Chat",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: senior product designer + front-end engineer.
Build an AI CHAT thread panel (assistant + user).

Layout (single column, max-width ~640px card):
- A slim header: assistant name + a small model tag pill, and a subtle "New chat" ghost button
- A thread of alternating messages. User messages right-aligned in a soft filled bubble; assistant messages left-aligned and borderless with a small square avatar mark. Include one assistant message containing a short inline code block.
- A composer at the bottom: rounded input with an attach (paperclip) icon on the left and a solid square send button on the right; a tiny helper line beneath

Style constraints:
- Neutral palette: white, near-black ink, muted greys, one restrained accent (#1F45FF) for the send button and model tag
- System font, 14px, 14-18px bubble radii, 1px hairlines, no shadows
- No emoji in the UI chrome

Write real, useful assistant/user copy (a short product question and a concise answer). No lorem.
Output: one self-contained block, no external dependencies.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{--ink:#0f1115;--muted:#6b7280;--border:#e6e8eb;--accent:#1F45FF;--page:#f6f7f9}
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--ink);background:var(--page);padding:24px}
  .panel{max-width:640px;margin:0 auto;background:#fff;border:1px solid var(--border);border-radius:16px;overflow:hidden;display:flex;flex-direction:column}
  .head{display:flex;align-items:center;justify-content:space-between;padding:13px 16px;border-bottom:1px solid var(--border)}
  .head .l{display:flex;align-items:center;gap:9px;font-weight:700;font-size:14px}
  .tag{font-size:11px;font-weight:700;color:var(--accent);background:#eef1ff;border-radius:999px;padding:3px 8px}
  .new{font-size:12.5px;font-weight:600;color:var(--muted);border:1px solid var(--border);border-radius:8px;padding:6px 11px;cursor:pointer;background:#fff}
  .thread{padding:18px 16px;display:flex;flex-direction:column;gap:16px}
  .msg{display:flex;gap:10px;max-width:88%}
  .msg.user{align-self:flex-end}
  .msg.user .bubble{background:#eef1ff;border:1px solid #dfe4ff;border-radius:16px 16px 4px 16px;padding:10px 13px;font-size:14px;line-height:1.5}
  .msg.ai .av{width:26px;height:26px;border-radius:7px;background:var(--accent);flex:none;margin-top:2px}
  .msg.ai .bubble{font-size:14px;line-height:1.6}
  pre{margin:10px 0 0;background:#0f1115;color:#e8e8ea;border-radius:10px;padding:12px 13px;overflow:auto;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12.5px;line-height:1.6}
  .composer{border-top:1px solid var(--border);padding:12px 14px}
  .box{display:flex;align-items:center;gap:8px;border:1px solid var(--border);border-radius:14px;padding:6px 6px 6px 12px}
  .box input{flex:1;border:0;outline:none;font-size:14px;color:var(--ink);background:transparent}
  .clip{color:var(--muted);display:flex}
  .clip svg{width:18px;height:18px}
  .send{width:36px;height:36px;border-radius:10px;border:0;background:var(--accent);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center}
  .send svg{width:17px;height:17px}
  .help{color:var(--muted);font-size:11.5px;margin:8px 2px 0}
</style>
<div class="panel">
  <div class="head"><div class="l"><span class="tag">Sonnet 4.5</span>Assistant</div><button class="new">New chat</button></div>
  <div class="thread">
    <div class="msg user"><div class="bubble">How do I show a toast only after the save actually succeeds?</div></div>
    <div class="msg ai"><div class="av"></div><div class="bubble">Fire it in the success branch, not on click. Await the call, then toast:<pre>await save(draft);
toast("Saved");   // only if save() resolved</pre>That way a failed save never shows a success toast.</div></div>
    <div class="msg user"><div class="bubble">Perfect — and for errors?</div></div>
    <div class="msg ai"><div class="av"></div><div class="bubble">Catch the rejection and show an error variant with a Retry action, so the user can recover without losing the draft.</div></div>
  </div>
  <div class="composer">
    <div class="box">
      <span class="clip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.5 12 21a5 5 0 0 1-7-7l8.5-8.5a3.3 3.3 0 0 1 4.7 4.7L9 18.3"/></svg></span>
      <input placeholder="Message the assistant...">
      <button class="send"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15M13 6l6 6-6 6"/></svg></button>
    </div>
    <div class="help">Enter to send, Shift+Enter for newline</div>
  </div>
</div>`
  },
  {
    id:"app-agent", title:"Agent Run Trace", category:"App", type:"Agent",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: senior product designer + front-end engineer.
Build an AGENT RUN trace: a vertical timeline of an agent's steps (plan, tool calls, result).

Layout (card, max-width ~560px):
- Header: a title ("Agent run") and a small live/duration meta on the right ("running · 12s")
- A vertical list of steps connected by a thin rail. Each step: a status node (done = filled check, active = accent ring, pending = hollow), a bold step label, and a muted one-line detail. Tool-call steps show a small monospace tag ("tool: web.search")
- Mix statuses: 3 done, 1 active, 1 pending
- A slim footer with a "Stop" ghost button and a subtle step/tool counter

Style constraints:
- Neutral palette: white card, near-black ink, muted greys, one restrained accent (#1F45FF) for the active node and tool tags; a green for the done checks
- System font, 13-14px, 12-14px card radius, 1px hairlines, monospace only for tool tags
- No emoji

Write plausible steps for an agent answering a data question. No lorem.
Output: one self-contained block, no external dependencies.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{--ink:#0f1115;--muted:#6b7280;--border:#e6e8eb;--accent:#1F45FF;--page:#f6f7f9;--ok:#177a3d}
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--ink);background:var(--page);padding:28px 24px}
  .card{max-width:560px;margin:0 auto;background:#fff;border:1px solid var(--border);border-radius:14px;overflow:hidden}
  .head{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--border)}
  .head h3{font-size:15px;margin:0;letter-spacing:-.01em}
  .meta{font-size:12px;color:var(--muted);display:flex;align-items:center;gap:7px}
  .meta .dot{width:7px;height:7px;border-radius:50%;background:var(--accent)}
  .steps{padding:8px 18px 6px;position:relative}
  .step{position:relative;padding:12px 0 12px 30px}
  .rail{position:absolute;left:9px;top:8px;bottom:8px;width:2px;background:var(--border)}
  .node{position:absolute;left:2px;top:14px;width:16px;height:16px;border-radius:50%;background:#fff;border:2px solid var(--border);display:flex;align-items:center;justify-content:center;z-index:1}
  .node.done{background:var(--ok);border-color:var(--ok);color:#fff}
  .node.done svg{width:9px;height:9px}
  .node.active{border-color:var(--accent);box-shadow:0 0 0 3px #eef1ff}
  .node.active .i{width:6px;height:6px;border-radius:50%;background:var(--accent)}
  .lbl{font-size:13.5px;font-weight:600}
  .sub{font-size:12.5px;color:var(--muted);margin-top:3px}
  .tt{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11.5px;color:var(--accent);background:#eef1ff;border-radius:6px;padding:1px 6px;margin-left:6px}
  .foot{display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--border);padding:12px 18px}
  .stop{font-size:12.5px;font-weight:600;color:var(--ink);border:1px solid var(--border);border-radius:8px;padding:7px 13px;background:#fff;cursor:pointer}
  .count{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11.5px;color:var(--muted)}
</style>
<div class="card">
  <div class="head"><h3>Agent run</h3><span class="meta"><span class="dot"></span>running · 12s</span></div>
  <div class="steps">
    <div class="rail"></div>
    <div class="step"><span class="node done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><div class="lbl">Plan the task</div><div class="sub">Break "which plan churns most?" into query + compare steps.</div></div>
    <div class="step"><span class="node done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><div class="lbl">Search the docs<span class="tt">tool: web.search</span></div><div class="sub">Found the churn definition and the events table schema.</div></div>
    <div class="step"><span class="node done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><div class="lbl">Read the dataset<span class="tt">tool: fs.read</span></div><div class="sub">Loaded 42,190 subscription rows from exports/subs.csv.</div></div>
    <div class="step"><span class="node active"><span class="i"></span></span><div class="lbl">Compute churn by plan<span class="tt">tool: sql.run</span></div><div class="sub">Grouping by plan across a 30-day window...</div></div>
    <div class="step"><span class="node"></span><div class="lbl">Write the summary</div><div class="sub">Pending — draft the answer with the top-churn plan.</div></div>
  </div>
  <div class="foot"><button class="stop">Stop</button><span class="count">4 / 5 steps · 3 tools</span></div>
</div>`
  },
  {
    id:"web-stats", title:"Stats Band", category:"Web", type:"Metrics",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: senior product designer + front-end engineer.
Build a marketing STATS / metrics band.

Layout (full width, content max-width ~1040px):
- A small centered eyebrow + one-line lead
- A row of four metrics separated by thin vertical rules (stack on narrow). Each metric: a big number with a unit/suffix, and a short muted label beneath
- The numbers are the hero; everything else stays quiet

Style constraints:
- Neutral palette: white, near-black ink for numbers, muted greys for labels, one restrained accent (#1F45FF) allowed on the eyebrow only
- System font; large numbers with tight tracking and tabular figures; 1px hairline rules; no cards, no shadows
- No emoji

Use plausible, non-round numbers. No lorem.
Output: one self-contained block, no external dependencies.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{--ink:#0f1115;--muted:#6b7280;--border:#e6e8eb;--accent:#1F45FF}
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--ink);background:#fff;padding:52px 24px}
  .wrap{max-width:1040px;margin:0 auto;text-align:center}
  .eyebrow{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);font-weight:700}
  .lead{font-size:20px;letter-spacing:-.02em;margin:10px 0 30px;font-weight:600}
  .row{display:grid;grid-template-columns:repeat(4,1fr)}
  .m{padding:8px 18px;border-left:1px solid var(--border)}
  .m:first-child{border-left:0}
  .num{font-size:42px;font-weight:800;letter-spacing:-.03em;line-height:1;font-variant-numeric:tabular-nums}
  .num .u{color:var(--muted);font-weight:700;font-size:26px}
  .lbl{color:var(--muted);font-size:13.5px;margin-top:10px}
  @media(max-width:720px){.row{grid-template-columns:repeat(2,1fr);gap:26px}.m{border-left:0}}
</style>
<div class="wrap">
  <div class="eyebrow">Trusted in production</div>
  <div class="lead">Teams ship on Northwind every day.</div>
  <div class="row">
    <div class="m"><div class="num">99.98<span class="u">%</span></div><div class="lbl">Uptime, last 12 months</div></div>
    <div class="m"><div class="num">12.4<span class="u">k</span></div><div class="lbl">Teams onboarded</div></div>
    <div class="m"><div class="num">340<span class="u">ms</span></div><div class="lbl">Median query time</div></div>
    <div class="m"><div class="num">4.9<span class="u">/5</span></div><div class="lbl">Average review score</div></div>
  </div>
</div>`
  },
  {
    id:"web-split", title:"Feature Split", category:"Web", type:"Feature",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: senior product designer + front-end engineer.
Build a FEATURE SPLIT section: text on one side, a visual on the other.

Layout (two columns, content max-width ~1080px; stacks on narrow):
- Left: a small eyebrow, a two-line headline, a short paragraph, a 3-item checklist with small check icons, and a ghost "Learn more" link with an arrow
- Right: a self-contained VISUAL built in CSS (no image) — a mini product mock: a card with a header bar, a highlighted metric, and a couple of rows. It should read like a real UI fragment
- Comfortable padding, generous gap between columns

Style constraints:
- Neutral palette: white background, near-black ink, muted greys, one restrained accent (#1F45FF) for the checks and the highlighted metric
- System font, 14-15px body, tight display tracking, 1px borders, at most one soft shadow on the mock
- No stock imagery, no gradients, no emoji

Write real feature copy. No lorem.
Output: one self-contained block, no external dependencies.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{--ink:#0f1115;--muted:#6b7280;--border:#e6e8eb;--accent:#1F45FF;--page:#f6f7f9}
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--ink);background:#fff;padding:56px 24px}
  .split{max-width:1080px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
  .eyebrow{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);font-weight:700}
  h2{font-size:32px;line-height:1.08;letter-spacing:-.03em;margin:12px 0 0;font-weight:700}
  p{color:var(--muted);font-size:15px;line-height:1.6;margin:14px 0 18px;max-width:42ch}
  ul{list-style:none;padding:0;margin:0 0 22px}
  li{display:flex;align-items:center;gap:10px;font-size:14.5px;padding:7px 0}
  li .ck{width:20px;height:20px;border-radius:50%;background:#eef1ff;color:var(--accent);display:flex;align-items:center;justify-content:center;flex:none}
  li .ck svg{width:12px;height:12px}
  .more{display:inline-flex;align-items:center;gap:7px;color:var(--accent);font-weight:600;font-size:14px;text-decoration:none}
  .more svg{width:15px;height:15px}
  .mock{background:var(--page);border:1px solid var(--border);border-radius:16px;padding:16px;box-shadow:0 24px 50px -30px rgba(0,0,0,.4)}
  .mhead{display:flex;align-items:center;gap:8px;margin-bottom:12px}
  .mhead .d{width:9px;height:9px;border-radius:50%;background:#d7dae0}
  .mrow{display:flex;align-items:center;justify-content:space-between;background:#fff;border:1px solid var(--border);border-radius:10px;padding:11px 13px;margin-bottom:9px}
  .mrow .t{font-size:13px;color:var(--muted)}
  .mrow .v{font-size:13px;font-weight:600}
  .big{background:#fff;border:1px solid var(--border);border-radius:10px;padding:14px}
  .big .k{font-size:12px;color:var(--muted)}
  .big .n{font-size:26px;font-weight:800;letter-spacing:-.02em;color:var(--accent);margin-top:4px}
  .big .n span{font-size:13px;color:#22a559;font-weight:700;margin-left:8px}
  @media(max-width:760px){.split{grid-template-columns:1fr;gap:32px}}
</style>
<div class="split">
  <div>
    <div class="eyebrow">Alerts</div>
    <h2>Catch anomalies before your customers do.</h2>
    <p>Northwind watches every metric against its own baseline and pings you the moment something drifts — no thresholds to hand-tune.</p>
    <ul>
      <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Baseline learned per metric, per segment</li>
      <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>Routed to Slack, email, or webhook</li>
      <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>One click to mute or snooze</li>
    </ul>
    <a class="more" href="#">Learn more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15M13 6l6 6-6 6"/></svg></a>
  </div>
  <div class="mock">
    <div class="mhead"><span class="d"></span><span class="d"></span><span class="d"></span></div>
    <div class="big"><div class="k">Signups, last 24h</div><div class="n">1,284 <span>+18%</span></div></div>
    <div style="height:9px"></div>
    <div class="mrow"><span class="t">Checkout errors</span><span class="v">0.4%</span></div>
    <div class="mrow"><span class="t">p95 latency</span><span class="v">340 ms</span></div>
    <div class="mrow"><span class="t">Active alerts</span><span class="v">2</span></div>
  </div>
</div>`
  },
  {
    id:"web-articles", title:"Article Cards", category:"Web", type:"Blog",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: senior product designer + front-end engineer.
Build a row of three BLOG / ARTICLE cards.

Each card (equal width, responsive grid):
- A thumbnail area with a soft solid tint (no photo) and a small category tag overlaid
- Title (up to two lines) and a one-line muted excerpt
- A footer row: a small round author avatar (initials), author name, a dot, a date, and a muted read-time on the right

Style constraints:
- Neutral palette: white cards, near-black ink, muted greys, one restrained accent (#1F45FF) for the category tag only
- System font, 13-15px, 1px hairlines, 14-16px radii, no drop shadows
- No stock imagery, no emoji

Write real, specific titles and excerpts (product/engineering blog voice). No lorem.
Output: one self-contained block, no external dependencies.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root{--ink:#0f1115;--muted:#6b7280;--border:#e6e8eb;--accent:#1F45FF;--page:#f6f7f9}
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--ink);background:var(--page);padding:34px 24px}
  .grid{max-width:1040px;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
  .card{background:#fff;border:1px solid var(--border);border-radius:16px;overflow:hidden;display:flex;flex-direction:column}
  .thumb{position:relative;aspect-ratio:16/9;background:var(--t)}
  .tag{position:absolute;top:12px;left:12px;background:var(--accent);color:#fff;font-size:11px;font-weight:700;letter-spacing:.02em;padding:4px 9px;border-radius:999px}
  .body{padding:15px 16px 16px;display:flex;flex-direction:column;flex:1}
  h3{font-size:16.5px;line-height:1.25;letter-spacing:-.01em;margin:0 0 7px}
  .ex{color:var(--muted);font-size:13.5px;line-height:1.5;margin:0 0 16px}
  .foot{display:flex;align-items:center;gap:9px;margin-top:auto;font-size:12.5px;color:var(--muted)}
  .av{width:26px;height:26px;border-radius:50%;background:#eef1ff;color:var(--accent);font-size:10.5px;font-weight:700;display:flex;align-items:center;justify-content:center}
  .who{color:var(--ink);font-weight:600}
  .dot{width:3px;height:3px;border-radius:50%;background:#c7cbd2}
  .rt{margin-left:auto}
</style>
<div class="grid">
  <div class="card">
    <div class="thumb" style="--t:#e9edff"><span class="tag">Engineering</span></div>
    <div class="body"><h3>How we cut p95 query time from 2.1s to 340ms</h3><p class="ex">The fix was not a bigger box — it was killing three accidental full scans.</p><div class="foot"><span class="av">JP</span><span class="who">Jess Park</span><span class="dot"></span><span>Aug 4</span><span class="rt">6 min</span></div></div>
  </div>
  <div class="card">
    <div class="thumb" style="--t:#eafaf1"><span class="tag">Product</span></div>
    <div class="body"><h3>Designing alerts people don't turn off</h3><p class="ex">Most alerting fails on trust. Here is the model we replaced thresholds with.</p><div class="foot"><span class="av">MA</span><span class="who">Mara Adeyemi</span><span class="dot"></span><span>Jul 28</span><span class="rt">8 min</span></div></div>
  </div>
  <div class="card">
    <div class="thumb" style="--t:#fdf3e2"><span class="tag">Guide</span></div>
    <div class="body"><h3>A practical guide to event schema design</h3><p class="ex">Name events for the question you will ask later, not the click you saw today.</p><div class="foot"><span class="av">RK</span><span class="who">Ravi Kumar</span><span class="dot"></span><span>Jul 19</span><span class="rt">11 min</span></div></div>
  </div>
</div>`
  },
  {
    id:"app-approval", title:"Agent Approval", category:"App", type:"Approval",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: designer for an AI agent product.
Build an AGENT APPROVAL card: the agent proposes a code edit and the human must
approve, edit, or reject it before it runs (a permission / edit-first pattern).

Layout:
- Header: agent avatar + "Assistant proposes an edit · review before it runs"
- A file path label (monospace)
- A real diff: context lines neutral, removed lines on a red tint with a minus gutter, added lines on a green tint with a plus gutter
- Footer: a status line on the left ("Waiting for your review"), then Reject / Edit / Approve & run buttons

Make it FUNCTIONAL:
- Edit toggles an editable textarea pre-filled with the proposed code; the button becomes "Done"
- Approve resolves to an "Approved — change applied" state and hides the buttons
- Reject resolves to a "Rejected — nothing was run" state
- Approving after editing keeps the edited version (the confirmation reflects the edit, not the stale draft)

Style: neutral palette, one accent (#1F45FF), green for additions, red for removals; monospace for code; 1px hairlines, 14px radius. No emoji.
Output: one self-contained block with inline JS, no external dependencies.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#0f1115;background:#f6f7f9;padding:28px 24px}
  .card{max-width:600px;margin:0 auto;background:#fff;border:1px solid #e6e8eb;border-radius:14px;overflow:hidden}
  .head{display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid #e6e8eb}
  .bot{width:26px;height:26px;border-radius:7px;background:#1F45FF;flex:none}
  .head .t{font-size:14px;font-weight:600}
  .head .t span{color:#6b7280;font-weight:400}
  .file{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px;color:#6b7280;background:#f4f5f7;border-bottom:1px solid #e6e8eb;padding:8px 16px}
  .diff{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12.5px;line-height:1.75;padding:10px 0}
  .ln{display:flex;padding:0 16px;white-space:pre-wrap}
  .ln .g{width:20px;color:#9aa1a9;flex:none;user-select:none}
  .ln.del{background:#fdeceb}
  .ln.del .g{color:#d5342b}
  .ln.add{background:#e7f6ec}
  .ln.add .g{color:#177a3d}
  .edit{display:none;padding:12px 16px}
  .edit textarea{width:100%;min-height:118px;border:1px solid #e6e8eb;border-radius:9px;padding:10px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12.5px;line-height:1.6;color:#0f1115;resize:vertical;outline:none}
  .edit textarea:focus{border-color:#1F45FF}
  .foot{display:flex;align-items:center;gap:8px;padding:12px 16px;border-top:1px solid #e6e8eb}
  .status{font-size:13px;color:#6b7280;margin-right:auto;display:flex;align-items:center;gap:7px}
  .status svg{width:15px;height:15px;flex:none}
  .btn{font-size:13px;font-weight:600;border-radius:9px;padding:9px 14px;cursor:pointer;border:1px solid #e6e8eb;background:#fff;color:#0f1115}
  .btn:hover{border-color:#c7cbd2}
  .btn.approve{background:#177a3d;border-color:#177a3d;color:#fff}
  .btn.reject{color:#d5342b}
  .done .btn{display:none}
  .done .status{color:#0f1115;font-weight:600}
</style>
<div class="card" id="card">
  <div class="head"><span class="bot"></span><div class="t">Assistant proposes an edit <span>· review before it runs</span></div></div>
  <div class="file">src/save.js</div>
  <div class="diff" id="diff">
    <div class="ln"><span class="g"> </span>async function save(draft){</div>
    <div class="ln del"><span class="g">-</span>  await db.write(draft);</div>
    <div class="ln del"><span class="g">-</span>  toast("Saved");</div>
    <div class="ln add"><span class="g">+</span>  const res = await db.write(draft);</div>
    <div class="ln add"><span class="g">+</span>  if (res.ok) toast("Saved");</div>
    <div class="ln add"><span class="g">+</span>  else toast("Save failed", "error");</div>
    <div class="ln"><span class="g"> </span>}</div>
  </div>
  <div class="edit" id="edit"><textarea id="ta" spellcheck="false"></textarea></div>
  <div class="foot">
    <span class="status" id="status"><svg viewBox="0 0 24 24" fill="none" stroke="#9aa1a9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><span>Waiting for your review</span></span>
    <button class="btn reject" id="reject">Reject</button>
    <button class="btn" id="editBtn">Edit</button>
    <button class="btn approve" id="approve">Approve &amp; run</button>
  </div>
</div>
<script>
(function(){
  var card=document.getElementById("card"),diff=document.getElementById("diff"),edit=document.getElementById("edit"),ta=document.getElementById("ta"),status=document.getElementById("status"),editBtn=document.getElementById("editBtn");
  var editing=false;
  function getAdds(){var out=[],nodes=document.querySelectorAll(".ln.add");for(var i=0;i<nodes.length;i++){var t=nodes[i].textContent;if(t.charAt(0)==="+")t=t.slice(1);while(t.charAt(0)===" ")t=t.slice(1);out.push(t);}return out.join(String.fromCharCode(10));}
  var proposed=getAdds(),original=proposed;
  editBtn.addEventListener("click",function(){
    editing=!editing;
    if(editing){ta.value=proposed;diff.style.display="none";edit.style.display="block";editBtn.textContent="Done";ta.focus();}
    else{proposed=ta.value;diff.style.display="";edit.style.display="none";editBtn.textContent="Edit";}
  });
  var check='<svg viewBox="0 0 24 24" fill="none" stroke="#177a3d" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
  var xmark='<svg viewBox="0 0 24 24" fill="none" stroke="#d5342b" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6 6 18"/></svg>';
  function finish(icon,txt,color){card.classList.add("done");status.innerHTML=icon+"<span>"+txt+"</span>";status.style.color=color;}
  document.getElementById("approve").addEventListener("click",function(){
    if(editing)proposed=ta.value;
    var edited=(proposed!==original)?" (edited)":"";
    finish(check,"Approved — change applied"+edited,"#177a3d");
  });
  document.getElementById("reject").addEventListener("click",function(){finish(xmark,"Rejected — nothing was run","#d5342b");});
})();
</script>`
  },
  {
    id:"app-answer", title:"AI Answer + Sources", category:"App", type:"AI answer",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: designer for an AI answers product.
Build an AI ANSWER card with reasoning disclosure and inline citations.

Layout:
- Role line: assistant avatar + "answered in 4s"
- A collapsible "Thought for 4s" disclosure (closed by default) that expands to a short reasoning summary
- The answer text with inline citation chips ([1], [2]) after the claims they support
- A "Sources" list below (numbered), each with a title and a domain
- A small toolbar: Copy, Helpful

Make it FUNCTIONAL:
- The reasoning disclosure expands/collapses on click
- Clicking a citation chip highlights and scrolls to its matching source
- Copy copies the answer text and briefly shows "Copied"

Style: neutral palette, one accent (#1F45FF); citation chips are small accent pills; 1px hairlines, 14px radius. No emoji.
Output: one self-contained block with inline JS, no external dependencies.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  *{box-sizing:border-box}body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#0f1115;background:#f6f7f9;padding:28px 24px}
  .card{max-width:620px;margin:0 auto;background:#fff;border:1px solid #e6e8eb;border-radius:14px;padding:20px}
  .role{display:flex;align-items:center;gap:9px;font-size:13px;color:#6b7280;margin-bottom:12px}
  .role .av{width:24px;height:24px;border-radius:7px;background:#1F45FF}
  details{border:1px solid #e6e8eb;border-radius:10px;margin-bottom:14px;overflow:hidden}
  summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:8px;padding:10px 12px;font-size:12.5px;color:#6b7280;background:#f7f8fa}
  summary::-webkit-details-marker{display:none}
  .chev{transition:transform .2s}
  details[open] .chev{transform:rotate(90deg)}
  .think{padding:12px;font-size:12.5px;color:#4b5563;line-height:1.6;border-top:1px solid #e6e8eb}
  .answer{font-size:15px;line-height:1.7}
  .answer p{margin:0 0 12px}
  .cite{display:inline-flex;align-items:center;justify-content:center;min-width:17px;height:17px;padding:0 4px;font-size:10.5px;font-weight:700;color:#1F45FF;background:#eef1ff;border:1px solid #dfe4ff;border-radius:5px;cursor:pointer;vertical-align:top;margin:0 1px;text-decoration:none}
  .cite:hover{background:#1F45FF;color:#fff}
  .sources{margin-top:16px;border-top:1px solid #eceef1;padding-top:14px}
  .sources h4{font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:#9aa1a9;margin:0 0 10px}
  .src{display:flex;gap:10px;padding:9px 10px;border:1px solid #e6e8eb;border-radius:9px;margin-bottom:8px;transition:border-color .2s,background .2s}
  .src.hi{border-color:#1F45FF;background:#f5f7ff}
  .src .n{font-size:11px;font-weight:700;color:#6b7280;flex:none;width:16px}
  .src .st{font-size:13px;font-weight:600}
  .src .u{font-size:12px;color:#6b7280}
  .tools{display:flex;gap:8px;margin-top:14px}
  .b{font-size:12.5px;font-weight:600;border:1px solid #e6e8eb;border-radius:8px;padding:7px 12px;background:#fff;color:#0f1115;cursor:pointer;display:inline-flex;align-items:center;gap:7px}
  .b:hover{border-color:#c7cbd2}
  .b svg{width:14px;height:14px}
</style>
<div class="card">
  <div class="role"><span class="av"></span>Assistant · answered in 4s</div>
  <details>
    <summary><svg class="chev" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>Thought for 4s · 3 steps</summary>
    <div class="think">Checked the pricing page for current Pro limits, confirmed the overage rate in the billing doc, then cross-checked the plan guide to make sure the recommendation still holds this quarter.</div>
  </details>
  <div class="answer">
    <p>The Pro plan includes <b>2M events per month</b><a class="cite" data-s="1" href="#">1</a>. Past that you are billed <b>$0.50 per extra 10k events</b><a class="cite" data-s="2" href="#">2</a>, and unused volume does not roll over<a class="cite" data-s="1" href="#">1</a>.</p>
    <p>For teams regularly above ~3M events, Scale is cheaper than Pro-plus-overage<a class="cite" data-s="3" href="#">3</a>.</p>
  </div>
  <div class="sources">
    <h4>Sources</h4>
    <div class="src" data-s="1"><span class="n">1</span><div><div class="st">Pricing — Plan limits</div><div class="u">northwind.io/pricing</div></div></div>
    <div class="src" data-s="2"><span class="n">2</span><div><div class="st">Billing — Overage rates</div><div class="u">docs.northwind.io/billing</div></div></div>
    <div class="src" data-s="3"><span class="n">3</span><div><div class="st">Guide — Choosing a plan</div><div class="u">docs.northwind.io/plans</div></div></div>
  </div>
  <div class="tools">
    <button class="b" id="copy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/></svg><span>Copy</span></button>
    <button class="b"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v11M2 13v6M14 4l-1 6h6a2 2 0 0 1 2 2l-1 6a2 2 0 0 1-2 2H7"/></svg>Helpful</button>
  </div>
</div>
<script>
(function(){
  var srcs={};[].forEach.call(document.querySelectorAll(".src"),function(s){srcs[s.getAttribute("data-s")]=s;});
  [].forEach.call(document.querySelectorAll(".cite"),function(c){
    c.addEventListener("click",function(e){
      e.preventDefault();
      [].forEach.call(document.querySelectorAll(".src"),function(s){s.classList.remove("hi");});
      var el=srcs[c.getAttribute("data-s")];el.classList.add("hi");el.scrollIntoView({block:"nearest",behavior:"smooth"});
    });
  });
  var copy=document.getElementById("copy"),lab=copy.querySelector("span");
  copy.addEventListener("click",function(){
    var t=document.querySelector(".answer").innerText;
    try{if(navigator.clipboard)navigator.clipboard.writeText(t);}catch(e){}
    lab.textContent="Copied";setTimeout(function(){lab.textContent="Copy";},1200);
  });
})();
</script>`
  },
  {
    id:"app-chart", title:"Analytics Chart", category:"App", type:"Chart",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: dashboard designer + front-end engineer.
Build an ANALYTICS CHART card with a working range toggle.

Layout:
- Top row: a metric label + big value with a green change badge on the left; a 7D / 30D / 90D segmented toggle on the right
- An area line chart drawn in SVG (line + soft gradient fill), with faint horizontal gridlines

Make it FUNCTIONAL:
- The SVG line + area are generated from data in JS
- Clicking 7D / 30D / 90D swaps the dataset, updates the big value and change, and smoothly morphs the chart path

Style: neutral palette, one accent (#1F45FF); tabular figures; 1px hairlines, 14px radius. No emoji.
Output: one self-contained block with inline JS + inline SVG, no external dependencies.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  *{box-sizing:border-box}body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#0f1115;background:#f6f7f9;padding:28px 24px}
  .card{max-width:600px;margin:0 auto;background:#fff;border:1px solid #e6e8eb;border-radius:14px;padding:20px}
  .top{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}
  .k{font-size:13px;color:#6b7280}
  .val{font-size:30px;font-weight:800;letter-spacing:-.02em;font-variant-numeric:tabular-nums;margin-top:2px}
  .val .chg{font-size:13px;font-weight:700;color:#177a3d;margin-left:8px}
  .seg{display:inline-flex;border:1px solid #e6e8eb;border-radius:9px;overflow:hidden;flex:none}
  .seg button{font-size:12px;font-weight:600;color:#6b7280;background:#fff;border:0;border-left:1px solid #e6e8eb;padding:7px 12px;cursor:pointer}
  .seg button:first-child{border-left:0}
  .seg button.on{background:#1F45FF;color:#fff}
  .chart{margin-top:16px}
  svg{display:block;width:100%;height:200px;overflow:visible}
  .line{fill:none;stroke:#1F45FF;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;transition:d .5s ease}
  .area{fill:url(#grad);transition:d .5s ease}
  .grid line{stroke:#eef0f2;stroke-width:1}
</style>
<div class="card">
  <div class="top">
    <div><div class="k">Events ingested</div><div class="val" id="val">1.94M<span class="chg" id="chg">+12%</span></div></div>
    <div class="seg" id="seg"><button data-r="7" class="on">7D</button><button data-r="30">30D</button><button data-r="90">90D</button></div>
  </div>
  <div class="chart">
    <svg viewBox="0 0 560 200" preserveAspectRatio="none">
      <defs><linearGradient id="grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1F45FF" stop-opacity="0.18"/><stop offset="1" stop-color="#1F45FF" stop-opacity="0"/></linearGradient></defs>
      <g class="grid"><line x1="0" y1="50" x2="560" y2="50"/><line x1="0" y1="100" x2="560" y2="100"/><line x1="0" y1="150" x2="560" y2="150"/></g>
      <path class="area" id="area" d="M0 200"></path>
      <path class="line" id="line" d="M0 200"></path>
    </svg>
  </div>
</div>
<script>
(function(){
  var W=560,H=200,PAD=12;
  var data={
    "7":{pts:[40,52,48,66,60,80,92],val:"1.94M",chg:"+12%"},
    "30":{pts:[30,34,33,42,40,54,50,62,58,71,66,80,74,90],val:"7.8M",chg:"+9%"},
    "90":{pts:[18,25,24,31,28,37,34,45,42,53,50,61,58,69,66,78,74,86,82,94],val:"22.4M",chg:"+27%"}
  };
  function build(pts){
    var max=Math.max.apply(null,pts),min=Math.min.apply(null,pts),n=pts.length;
    var x=function(i){return PAD+(W-2*PAD)*i/(n-1);};
    var y=function(v){return H-PAD-(H-2*PAD)*(v-min)/((max-min)||1);};
    var d="M"+x(0).toFixed(1)+" "+y(pts[0]).toFixed(1);
    for(var i=1;i<n;i++)d+=" L"+x(i).toFixed(1)+" "+y(pts[i]).toFixed(1);
    return {line:d,area:d+" L"+x(n-1).toFixed(1)+" "+H+" L"+x(0).toFixed(1)+" "+H+" Z"};
  }
  var line=document.getElementById("line"),area=document.getElementById("area"),val=document.getElementById("val"),chg=document.getElementById("chg"),seg=document.getElementById("seg");
  function render(r){var dd=data[r],b=build(dd.pts);line.setAttribute("d",b.line);area.setAttribute("d",b.area);val.childNodes[0].nodeValue=dd.val;chg.textContent=dd.chg;}
  seg.addEventListener("click",function(e){
    var btn=e.target.closest("button");if(!btn)return;
    for(var i=0;i<seg.children.length;i++)seg.children[i].classList.remove("on");
    btn.classList.add("on");render(btn.getAttribute("data-r"));
  });
  render("7");
})();
</script>`
  },
  {
    id:"web-counters", title:"Animated Stats", category:"Web", type:"Counters",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: marketing site designer + front-end engineer.
Build an ANIMATED STATS row: four KPI tiles whose numbers count up on load.

Layout:
- Four bordered tiles in a row (2x2 on narrow). Each: a muted label, a large number with a unit/suffix, and a thin progress bar beneath

Make it FUNCTIONAL:
- On load, each number animates from 0 to its target with an ease-out, respecting decimals and thousands separators
- Each progress bar animates its width in at the same time

Style: neutral palette, one accent (#1F45FF); tabular figures; 1px hairlines, 14px radius. No emoji. Honor prefers-reduced-motion by jumping to the final values.
Output: one self-contained block with inline JS, no external dependencies.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  *{box-sizing:border-box}body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#0f1115;background:#fff;padding:48px 24px}
  .wrap{max-width:1000px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
  .stat{border:1px solid #e6e8eb;border-radius:14px;padding:18px}
  .k{font-size:12.5px;color:#6b7280}
  .n{font-size:34px;font-weight:800;letter-spacing:-.03em;font-variant-numeric:tabular-nums;margin:6px 0 12px}
  .n .u{color:#1F45FF}
  .track{height:6px;border-radius:3px;background:#eef0f2;overflow:hidden}
  .fill{height:100%;background:#1F45FF;border-radius:3px;width:0;transition:width 1.1s cubic-bezier(.2,.8,.2,1)}
  @media(max-width:720px){.wrap{grid-template-columns:repeat(2,1fr)}}
</style>
<div class="wrap">
  <div class="stat"><div class="k">Uptime</div><div class="n"><span class="c" data-to="99.98" data-dec="2">0</span><span class="u">%</span></div><div class="track"><div class="fill" data-w="99"></div></div></div>
  <div class="stat"><div class="k">Teams onboarded</div><div class="n"><span class="c" data-to="12400">0</span></div><div class="track"><div class="fill" data-w="78"></div></div></div>
  <div class="stat"><div class="k">Median query</div><div class="n"><span class="c" data-to="340">0</span><span class="u">ms</span></div><div class="track"><div class="fill" data-w="60"></div></div></div>
  <div class="stat"><div class="k">Review score</div><div class="n"><span class="c" data-to="4.9" data-dec="1">0</span><span class="u">/5</span></div><div class="track"><div class="fill" data-w="98"></div></div></div>
</div>
<script>
(function(){
  var reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  function fmt(v,dec){if(dec)return v.toFixed(dec);if(v>=1000)return Math.round(v).toLocaleString();return String(Math.round(v));}
  [].forEach.call(document.querySelectorAll(".c"),function(el){
    var to=parseFloat(el.getAttribute("data-to")),dec=parseInt(el.getAttribute("data-dec")||"0",10);
    if(reduce){el.textContent=fmt(to,dec);return;}
    var start=null,dur=1100;
    function step(ts){if(!start)start=ts;var p=Math.min((ts-start)/dur,1),e=1-Math.pow(1-p,3);el.textContent=fmt(to*e,dec);if(p<1)requestAnimationFrame(step);}
    requestAnimationFrame(step);
  });
  requestAnimationFrame(function(){[].forEach.call(document.querySelectorAll(".fill"),function(f){f.style.width=(reduce?f.getAttribute("data-w"):f.getAttribute("data-w"))+"%";});});
})();
</script>`
  },
  {
    id:"web-marquee", title:"Testimonial Marquee", category:"Web", type:"Marquee",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: marketing site designer + front-end engineer.
Build a TESTIMONIAL MARQUEE: a horizontal row of quote cards that scrolls
continuously and seamlessly, pausing on hover.

Layout:
- Centered eyebrow + short heading
- A masked viewport (fade at both edges) containing a track of quote cards that scrolls left forever
- Each card: a short quote, then a small avatar (initials), name, and role

Make it FUNCTIONAL:
- The track is duplicated so the loop is seamless (CSS animation translating to -50%)
- Hovering the row pauses the scroll

Style: neutral palette, one accent (#1F45FF) for the avatars; 1px hairlines, 14px radius. No emoji. Respect prefers-reduced-motion (no auto-scroll).
Output: one self-contained block with inline JS, no external dependencies.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  *{box-sizing:border-box}body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#0f1115;background:#fff;padding:40px 0}
  .head{max-width:1040px;margin:0 auto 22px;padding:0 24px;text-align:center}
  .eyebrow{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#1F45FF;font-weight:700}
  h2{font-size:26px;letter-spacing:-.02em;margin:8px 0 0}
  .viewport{overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
  .marq{display:flex;gap:16px;width:max-content;padding:4px 16px;animation:scroll 30s linear infinite}
  .viewport:hover .marq{animation-play-state:paused}
  @keyframes scroll{to{transform:translateX(-50%)}}
  .q{width:320px;flex:none;border:1px solid #e6e8eb;border-radius:14px;padding:18px;background:#fff}
  .q p{margin:0 0 14px;font-size:14px;line-height:1.55}
  .who{display:flex;align-items:center;gap:10px}
  .av{width:32px;height:32px;border-radius:50%;background:#eef1ff;color:#1F45FF;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;flex:none}
  .nm{font-size:13px;font-weight:600}
  .rl{font-size:12px;color:#6b7280}
  @media(prefers-reduced-motion:reduce){.marq{animation:none}}
</style>
<div class="head"><div class="eyebrow">Loved by teams</div><h2>What builders say</h2></div>
<div class="viewport"><div class="marq" id="marq"></div></div>
<script>
(function(){
  var quotes=[
    ["The preview is the code. That one guarantee changed how much we trust a reference.","Mara Adeyemi","Design lead, Northwind"],
    ["We shipped a pricing page in an afternoon starting from a verified section.","Sam Lorne","Founder, Vertex"],
    ["Finally a library where I copy and it just works — no cleanup pass.","Jess Park","Engineer, Lumen"],
    ["The prompts are a genuinely good starting point for our stack.","Ravi Kumar","PM, Halcyon"],
    ["Reads like a real design artifact, not a parts bin. Bookmarked.","Elin Norberg","Designer, Cedar"]
  ];
  function initials(name){var p=name.split(" ");return ((p[0]||"")[0]||"")+((p[1]||"")[0]||"");}
  function card(q){return '<div class="q"><p>&ldquo;'+q[0]+'&rdquo;</p><div class="who"><span class="av">'+initials(q[1])+'</span><div><div class="nm">'+q[1]+'</div><div class="rl">'+q[2]+'</div></div></div></div>';}
  var html=quotes.map(card).join("");
  document.getElementById("marq").innerHTML=html+html;
})();
</script>`
  },
  {
    id:"web-hero-kinetic", title:"Kinetic Hero", category:"Web", type:"Animated hero",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: award-winning front-end designer.
Build an ANIMATED, cinematic HERO section (dark, premium, Awwwards-grade).

Layout & motion:
- Full-bleed dark stage with a soft animated "aurora" — 2-3 large blurred color blobs that drift on a loop, plus a faint grid overlay masked with a radial fade
- A small status pill that fades up
- A big headline whose words rise into place with a staggered reveal; one word uses an animated gradient text shine
- A muted subline and two CTAs (a bright primary, a glass ghost) that fade up last

Constraints:
- Pure CSS animation (no libraries); respect prefers-reduced-motion
- Restrained, tasteful — motion supports the message, no confetti
Output: one self-contained block, no external dependencies.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:#06070d;color:#fff;overflow:hidden}
  .hero{position:relative;min-height:520px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:80px 24px;isolation:isolate}
  .aurora{position:absolute;inset:-25%;z-index:-2;filter:blur(70px);opacity:.85}
  .blob{position:absolute;border-radius:50%;mix-blend-mode:screen;animation:drift 15s ease-in-out infinite}
  .b1{width:460px;height:460px;background:#4f46e5;top:-40px;left:8%}
  .b2{width:400px;height:400px;background:#0ea5e9;top:120px;right:6%;animation-delay:-5s}
  .b3{width:360px;height:360px;background:#db2777;bottom:-70px;left:34%;animation-delay:-9s}
  @keyframes drift{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(46px,-32px) scale(1.15)}66%{transform:translate(-32px,22px) scale(.92)}}
  .grid-ov{position:absolute;inset:0;z-index:-1;background-image:linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);background-size:44px 44px;-webkit-mask-image:radial-gradient(ellipse at center,#000 28%,transparent 72%);mask-image:radial-gradient(ellipse at center,#000 28%,transparent 72%)}
  .tag{display:inline-flex;align-items:center;gap:8px;font-size:12.5px;color:#c7d2fe;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.05);padding:6px 13px;border-radius:999px;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);opacity:0;animation:rise .7s .1s both}
  .tag .d{width:7px;height:7px;border-radius:50%;background:#34d399;box-shadow:0 0 10px #34d399}
  h1{font-size:clamp(38px,6.4vw,74px);line-height:1.03;letter-spacing:-.03em;font-weight:800;margin:20px 0 0;max-width:15ch}
  .w{display:inline-block;opacity:0;transform:translateY(115%) rotate(4deg);animation:word .9s cubic-bezier(.2,.9,.2,1) both}
  .grad{background:linear-gradient(90deg,#a5b4fc,#67e8f9,#f0abfc);-webkit-background-clip:text;background-clip:text;color:transparent;background-size:200% auto;animation:word .9s cubic-bezier(.2,.9,.2,1) both, shine 6s linear infinite}
  @keyframes shine{to{background-position:200% center}}
  .sub{color:#aab0c6;font-size:clamp(15px,1.8vw,18px);max-width:52ch;margin:22px 0 0;opacity:0;animation:rise .7s .95s both}
  .cta{display:flex;gap:12px;margin-top:30px;opacity:0;animation:rise .7s 1.1s both}
  .btn{font-size:14px;font-weight:600;border-radius:11px;padding:13px 22px;cursor:pointer;border:1px solid transparent;text-decoration:none}
  .primary{color:#0b1020;background:linear-gradient(180deg,#fff,#dbe2ff);box-shadow:0 12px 34px -12px rgba(140,160,255,.7)}
  .ghost{color:#fff;border-color:rgba(255,255,255,.18);background:rgba(255,255,255,.05)}
  @keyframes rise{to{opacity:1;transform:none}}
  @keyframes word{to{opacity:1;transform:none}}
  @media(prefers-reduced-motion:reduce){.blob{animation:none}.w,.grad,.tag,.sub,.cta{animation:none;opacity:1;transform:none}}
</style>
<div class="hero">
  <div class="aurora"><span class="blob b1"></span><span class="blob b2"></span><span class="blob b3"></span></div>
  <div class="grid-ov"></div>
  <span class="tag"><span class="d"></span>New — realtime anomaly alerts</span>
  <h1><span class="w" style="animation-delay:.15s">Ship</span> <span class="w" style="animation-delay:.24s">what</span> <span class="w" style="animation-delay:.33s">the</span> <span class="w grad" style="animation-delay:.42s">data</span> <span class="w" style="animation-delay:.51s">already</span> <span class="w" style="animation-delay:.6s">knows.</span></h1>
  <p class="sub">Northwind turns raw product events into plain-language answers — no dashboards to babysit, no SQL to write.</p>
  <div class="cta"><a class="btn primary" href="#">Start free</a><a class="btn ghost" href="#">Watch the tour</a></div>
</div>`
  },
  {
    id:"web-carousel-3d", title:"3D Coverflow Carousel", category:"Web", type:"Carousel",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: award-winning front-end designer.
Build a 3D COVERFLOW CAROUSEL.

Layout & motion:
- A perspective stage; cards sit on a 3D arc — the active card faces front and large, neighbors rotate away in depth and dim
- Prev / next circular controls, and pager dots; clicking a side card focuses it
- Smooth spring-like transitions; auto-advances and pauses on hover

Constraints:
- CSS 3D transforms + vanilla JS (no libraries); card art is CSS gradients (no images)
- Dark, glossy, premium
Output: one self-contained block with inline JS, no external dependencies.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:#0b0c12;color:#fff;overflow:hidden}
  .stage{min-height:460px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:26px;padding:40px 20px}
  .scene{position:relative;width:100%;max-width:900px;height:280px;perspective:1200px}
  .track{position:absolute;inset:0;transform-style:preserve-3d}
  .item{position:absolute;top:50%;left:50%;width:230px;height:262px;margin:-131px 0 0 -115px;border-radius:18px;overflow:hidden;border:1px solid rgba(255,255,255,.14);box-shadow:0 30px 60px -30px rgba(0,0,0,.85);transition:transform .6s cubic-bezier(.2,.85,.25,1),opacity .6s;display:flex;flex-direction:column;justify-content:flex-end;padding:18px;cursor:pointer}
  .item .t{position:relative;font-weight:700;font-size:18px;z-index:2}
  .item .s{position:relative;font-size:12px;color:rgba(255,255,255,.75);z-index:2;margin-top:2px}
  .item::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.6));z-index:1}
  .item::before{content:"";position:absolute;inset:0;background:linear-gradient(120deg,rgba(255,255,255,.25),transparent 40%);z-index:2;opacity:.5;pointer-events:none}
  .dots{display:flex;gap:8px}
  .dots button{width:8px;height:8px;border-radius:50%;border:0;background:rgba(255,255,255,.28);cursor:pointer;padding:0;transition:width .3s,background .3s}
  .dots button.on{background:#fff;width:22px;border-radius:5px}
  .nav{position:absolute;top:50%;transform:translateY(-50%);width:42px;height:42px;border-radius:50%;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.06);color:#fff;font-size:20px;cursor:pointer;z-index:30;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}
  .nav.prev{left:6px}.nav.next{right:6px}
</style>
<div class="stage">
  <div class="scene">
    <button class="nav prev" id="prev" aria-label="Previous">&lsaquo;</button>
    <div class="track" id="track"></div>
    <button class="nav next" id="next" aria-label="Next">&rsaquo;</button>
  </div>
  <div class="dots" id="dots"></div>
</div>
<script>
(function(){
  var slides=[
    {t:"Aurora",s:"Realtime alerts",c:"linear-gradient(135deg,#6366f1,#22d3ee)"},
    {t:"Bento",s:"Composable panels",c:"linear-gradient(135deg,#f43f5e,#f59e0b)"},
    {t:"Signals",s:"Anomaly detection",c:"linear-gradient(135deg,#10b981,#14b8a6)"},
    {t:"Atlas",s:"Usage explorer",c:"linear-gradient(135deg,#8b5cf6,#ec4899)"},
    {t:"Pulse",s:"Live dashboards",c:"linear-gradient(135deg,#0ea5e9,#6366f1)"}
  ];
  var track=document.getElementById("track"),dots=document.getElementById("dots"),cur=0,items=[];
  slides.forEach(function(sl,i){
    var el=document.createElement("div");el.className="item";el.style.backgroundImage=sl.c;
    el.innerHTML='<div class="t">'+sl.t+'</div><div class="s">'+sl.s+'</div>';
    el.addEventListener("click",function(){go(i);});track.appendChild(el);items.push(el);
    var d=document.createElement("button");d.addEventListener("click",function(){go(i);});dots.appendChild(d);
  });
  function layout(){
    items.forEach(function(el,i){
      var off=i-cur,abs=Math.abs(off);
      el.style.transform="translateX("+(off*150)+"px) translateZ("+(-abs*230)+"px) rotateY("+(off*-38)+"deg) scale("+(1-abs*0.06)+")";
      el.style.opacity=abs>2?"0":"1";el.style.zIndex=String(20-abs);
    });
    for(var i=0;i<dots.children.length;i++)dots.children[i].className=i===cur?"on":"";
  }
  function go(i){cur=(i+slides.length)%slides.length;layout();}
  document.getElementById("next").addEventListener("click",function(){go(cur+1);});
  document.getElementById("prev").addEventListener("click",function(){go(cur-1);});
  layout();
  var auto=setInterval(function(){go(cur+1);},2600);
  document.querySelector(".scene").addEventListener("pointerenter",function(){clearInterval(auto);});
})();
</script>`
  },
  {
    id:"web-carousel", title:"Image Carousel", category:"Web", type:"Slider",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: front-end designer + engineer.
Build a clean IMAGE CAROUSEL / slider.

Layout & motion:
- A rounded viewport; slides translate horizontally with a smooth spring ease
- Each slide has a gradient backdrop, a caption (eyebrow + title), and sits full-width
- Prev / next arrows, pager dots, autoplay that pauses on hover, and an animated progress line under the active slide

Constraints: vanilla JS (no libraries), no images (CSS gradients), tasteful.
Output: one self-contained block with inline JS, no external dependencies.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:#f6f7f9;color:#0f1115;padding:32px 24px}
  .car{max-width:780px;margin:0 auto;border-radius:18px;overflow:hidden;border:1px solid #e6e8eb;position:relative;background:#000}
  .vp{overflow:hidden}
  .track{display:flex;transition:transform .6s cubic-bezier(.2,.85,.25,1)}
  .slide{min-width:100%;aspect-ratio:16/9;display:flex;flex-direction:column;justify-content:flex-end;padding:28px;color:#fff}
  .eyebrow{font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;opacity:.85}
  .slide h3{font-size:26px;letter-spacing:-.02em;margin:6px 0 0;max-width:16ch}
  .nav{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;border-radius:50%;border:0;background:rgba(255,255,255,.85);color:#0f1115;font-size:19px;cursor:pointer;z-index:3;display:flex;align-items:center;justify-content:center}
  .nav.prev{left:12px}.nav.next{right:12px}
  .dots{position:absolute;left:0;right:0;bottom:16px;display:flex;gap:7px;justify-content:center;z-index:3}
  .dots button{width:26px;height:4px;border-radius:2px;border:0;background:rgba(255,255,255,.4);cursor:pointer;padding:0;overflow:hidden;position:relative}
  .dots button.on{background:rgba(255,255,255,.9)}
</style>
<div class="car">
  <div class="vp"><div class="track" id="track"></div></div>
  <button class="nav prev" id="prev">&lsaquo;</button>
  <button class="nav next" id="next">&rsaquo;</button>
  <div class="dots" id="dots"></div>
</div>
<script>
(function(){
  var slides=[
    {e:"01 — Realtime",t:"See anomalies the moment they happen.",c:"linear-gradient(135deg,#4f46e5,#0ea5e9)"},
    {e:"02 — Plain language",t:"Ask in words. Get the answer, not a query.",c:"linear-gradient(135deg,#0f766e,#22c55e)"},
    {e:"03 — Ship faster",t:"From signal to shipped in one afternoon.",c:"linear-gradient(135deg,#be123c,#f59e0b)"}
  ];
  var track=document.getElementById("track"),dots=document.getElementById("dots"),cur=0;
  slides.forEach(function(s,i){
    var el=document.createElement("div");el.className="slide";el.style.background=s.c;
    el.innerHTML='<div class="eyebrow">'+s.e+'</div><h3>'+s.t+'</h3>';track.appendChild(el);
    var d=document.createElement("button");d.addEventListener("click",function(){go(i);});dots.appendChild(d);
  });
  function go(i){cur=(i+slides.length)%slides.length;track.style.transform="translateX("+(-cur*100)+"%)";for(var k=0;k<dots.children.length;k++)dots.children[k].className=k===cur?"on":"";}
  document.getElementById("next").addEventListener("click",function(){go(cur+1);});
  document.getElementById("prev").addEventListener("click",function(){go(cur-1);});
  go(0);
  var auto=setInterval(function(){go(cur+1);},3200);
  document.querySelector(".car").addEventListener("pointerenter",function(){clearInterval(auto);});
})();
</script>`
  },
  {
    id:"web-scroll-3d", title:"3D Scroll Reveal", category:"Web", type:"Scroll effect",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: award-winning front-end designer.
Build a SCROLL-DRIVEN 3D REVEAL section.

Layout & motion:
- A fixed progress bar at the very top that fills as the section is scrolled
- An intro line, then a column of panels that start tilted back in 3D (rotateX) and low-opacity, and snap upright + fade in as they scroll into view
- Panels are glassy cards on a dark stage

Constraints:
- IntersectionObserver + a scroll listener (vanilla JS, no libraries)
- Respect prefers-reduced-motion (show panels upright)
Output: one self-contained block with inline JS. The preview scrolls.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:#0a0b12;color:#fff}
  .bar{position:fixed;top:0;left:0;height:3px;width:0;background:linear-gradient(90deg,#6366f1,#22d3ee);z-index:20}
  .intro{min-height:210px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:8px}
  .eyebrow{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#8ea0ff}
  .intro h2{font-size:30px;letter-spacing:-.02em;margin:0}
  .hint{color:#67708c;font-size:22px;animation:bob 1.6s ease-in-out infinite}
  @keyframes bob{50%{transform:translateY(6px)}}
  .panels{perspective:1100px;max-width:760px;margin:0 auto;padding:20px 24px 90px;display:flex;flex-direction:column;gap:26px}
  .panel{transform-origin:50% 100%;transform:rotateX(34deg) translateY(40px);opacity:.18;transition:transform .8s cubic-bezier(.2,.8,.2,1),opacity .8s;border-radius:18px;border:1px solid rgba(255,255,255,.1);background:linear-gradient(160deg,rgba(255,255,255,.09),rgba(255,255,255,.02));-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);padding:24px}
  .panel.in{transform:none;opacity:1}
  .panel .n{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px;color:#8ea0ff}
  .panel h3{font-size:20px;letter-spacing:-.01em;margin:8px 0 6px}
  .panel p{margin:0;color:#aab0c6;font-size:14px;line-height:1.6}
  @media(prefers-reduced-motion:reduce){.panel{transform:none;opacity:1}.hint{animation:none}}
</style>
<div class="bar" id="bar"></div>
<div class="intro"><div class="eyebrow">Scroll to reveal</div><h2>Built to unfold</h2><div class="hint">&darr;</div></div>
<div class="panels" id="panels"></div>
<script>
(function(){
  var items=[
    ["01","Capture","Every event lands in one place — no schema wrangling, no lost context."],
    ["02","Understand","Ask in plain language; the model writes the query and reads the result."],
    ["03","Alert","Baselines are learned per metric, so drift pings you before customers notice."],
    ["04","Ship","Take the finding straight to a fix — the loop closes in an afternoon."]
  ];
  var wrap=document.getElementById("panels");
  items.forEach(function(it){
    var p=document.createElement("div");p.className="panel";
    p.innerHTML='<div class="n">'+it[0]+'</div><h3>'+it[1]+'</h3><p>'+it[2]+'</p>';
    wrap.appendChild(p);
  });
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}});},{threshold:.25});
  [].forEach.call(document.querySelectorAll(".panel"),function(p){io.observe(p);});
  var bar=document.getElementById("bar");
  function onScroll(){var h=document.documentElement,max=h.scrollHeight-h.clientHeight;bar.style.width=(max>0?(h.scrollTop/max)*100:0)+"%";}
  window.addEventListener("scroll",onScroll,{passive:true});onScroll();
})();
</script>`
  },
  {
    id:"app-loaders", title:"Loading States", category:"App", type:"Loaders",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: interaction designer.
Build a gallery of tasteful LOADING ANIMATIONS (loaders + skeletons).

Layout:
- A responsive grid of tiles, each showing one loader with a small monospace label:
  a smooth spinner ring, three bouncing dots, an audio-style bars equalizer,
  an indeterminate progress bar, a shimmering skeleton card, and an orbiting dot
- Everything pure CSS keyframes, buttery and looped

Constraints: pure CSS (no JS, no images), neutral palette with one accent (#1F45FF), respect prefers-reduced-motion.
Output: one self-contained block, no external dependencies.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:#f6f7f9;color:#0f1115;padding:28px 24px}
  .grid{max-width:900px;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
  .tile{background:#fff;border:1px solid #e6e8eb;border-radius:14px;height:150px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px}
  .lab{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px;color:#9aa1a9}
  .stage{height:44px;display:flex;align-items:center;justify-content:center}
  .ring{width:34px;height:34px;border-radius:50%;border:3px solid #e6e8eb;border-top-color:#1F45FF;animation:spin .8s linear infinite}
  @keyframes spin{to{transform:rotate(360deg)}}
  .dots span{display:inline-block;width:9px;height:9px;margin:0 3px;border-radius:50%;background:#1F45FF;animation:bounce 1s ease-in-out infinite}
  .dots span:nth-child(2){animation-delay:.15s}.dots span:nth-child(3){animation-delay:.3s}
  @keyframes bounce{0%,80%,100%{transform:translateY(0);opacity:.5}40%{transform:translateY(-11px);opacity:1}}
  .eq{display:flex;align-items:flex-end;gap:4px;height:34px}
  .eq i{width:6px;background:#1F45FF;border-radius:2px;animation:eq 1s ease-in-out infinite}
  .eq i:nth-child(1){animation-delay:0s}.eq i:nth-child(2){animation-delay:.2s}.eq i:nth-child(3){animation-delay:.4s}.eq i:nth-child(4){animation-delay:.15s}.eq i:nth-child(5){animation-delay:.35s}
  @keyframes eq{0%,100%{height:8px}50%{height:32px}}
  .prog{width:130px;height:6px;border-radius:3px;background:#e6e8eb;overflow:hidden}
  .prog i{display:block;height:100%;width:40%;border-radius:3px;background:#1F45FF;animation:slide 1.3s ease-in-out infinite}
  @keyframes slide{0%{transform:translateX(-120%)}100%{transform:translateX(360%)}}
  .skel{width:150px}
  .skel .l{height:10px;border-radius:5px;margin:7px 0;background:linear-gradient(90deg,#eceef1 25%,#f6f7f9 37%,#eceef1 63%);background-size:400% 100%;animation:sh 1.3s ease infinite}
  .skel .l.s{width:60%}
  @keyframes sh{0%{background-position:100% 0}100%{background-position:-100% 0}}
  .orbit{width:36px;height:36px;position:relative;animation:spin 1.4s linear infinite}
  .orbit::before{content:"";position:absolute;top:0;left:50%;width:9px;height:9px;margin-left:-4.5px;border-radius:50%;background:#1F45FF}
  .orbit::after{content:"";position:absolute;inset:0;border-radius:50%;border:2px dashed #dfe2e7}
  @media(prefers-reduced-motion:reduce){*{animation:none!important}}
</style>
<div class="grid">
  <div class="tile"><div class="stage"><div class="ring"></div></div><div class="lab">spinner</div></div>
  <div class="tile"><div class="stage"><div class="dots"><span></span><span></span><span></span></div></div><div class="lab">dots</div></div>
  <div class="tile"><div class="stage"><div class="eq"><i></i><i></i><i></i><i></i><i></i></div></div><div class="lab">equalizer</div></div>
  <div class="tile"><div class="stage"><div class="prog"><i></i></div></div><div class="lab">progress</div></div>
  <div class="tile"><div class="stage"><div class="skel"><div class="l"></div><div class="l"></div><div class="l s"></div></div></div><div class="lab">skeleton</div></div>
  <div class="tile"><div class="stage"><div class="orbit"></div></div><div class="lab">orbit</div></div>
</div>`
  },
  {
    id:"web-spotlight", title:"Spotlight Cards", category:"Web", type:"Interactive",
    tools:["v0","Cursor","Claude","HTML"],
    prompt:
`Role: award-winning front-end designer.
Build a SPOTLIGHT CARD grid (cursor-reactive).

Layout & motion:
- A dark bento-ish grid of feature cards. A soft radial spotlight follows the cursor across the whole grid, and each hovered card shows a gradient border glow that tracks the pointer
- Cards have an icon chip, a title, and a line of copy

Constraints:
- Vanilla JS pointer tracking via CSS custom properties (no libraries)
- Degrades gracefully with no pointer (looks good static)
Output: one self-contained block with inline JS, no external dependencies.`,
    code:
`<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:#080a12;color:#fff;padding:30px 24px}
  .grid{max-width:940px;margin:0 auto;position:relative;display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
  .glow{position:absolute;width:420px;height:420px;left:0;top:0;transform:translate(-50%,-50%);pointer-events:none;background:radial-gradient(circle,rgba(99,102,241,.22),transparent 60%);opacity:0;transition:opacity .3s;z-index:0}
  .grid:hover .glow{opacity:1}
  .card{position:relative;z-index:1;border-radius:16px;padding:20px;background:#0d1018;border:1px solid rgba(255,255,255,.08);overflow:hidden}
  .card::before{content:"";position:absolute;inset:0;border-radius:16px;padding:1px;background:radial-gradient(180px circle at var(--mx,50%) var(--my,50%),rgba(120,140,255,.8),transparent 45%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0;transition:opacity .25s}
  .card:hover::before{opacity:1}
  .ic{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,#6366f1,#22d3ee);display:flex;align-items:center;justify-content:center;margin-bottom:14px}
  .ic svg{width:19px;height:19px;color:#fff}
  .card h3{font-size:16px;margin:0 0 6px;letter-spacing:-.01em}
  .card p{margin:0;font-size:13px;color:#9aa3b8;line-height:1.55}
</style>
<div class="grid" id="grid">
  <div class="glow" id="glow"></div>
  <div class="card"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h8l-1 8 10-12h-8z"/></svg></div><h3>Realtime</h3><p>Signals stream in and surface the moment they drift.</p></div>
  <div class="card"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M3 12h18"/></svg></div><h3>Composable</h3><p>Snap panels together into the view your team needs.</p></div>
  <div class="card"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5m5 14V9m5 10V4m5 15v-7"/></svg></div><h3>Explained</h3><p>Every number carries the why, in plain language.</p></div>
  <div class="card"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a9 9 0 1 0 9 9"/><path d="M12 7v5l3 2"/></svg></div><h3>Fast</h3><p>Median answer in under 400ms, tuned for scale.</p></div>
  <div class="card"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 6v6c0 5 3.4 8 8 10 4.6-2 8-5 8-10V6z"/></svg></div><h3>Trusted</h3><p>SSO, audit logs, and per-metric access out of the box.</p></div>
  <div class="card"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16M14 6l6 6-6 6"/></svg></div><h3>Portable</h3><p>Export anywhere — nothing is locked behind our walls.</p></div>
</div>
<script>
(function(){
  var grid=document.getElementById("grid"),glow=document.getElementById("glow"),cards=document.querySelectorAll(".card");
  grid.addEventListener("pointermove",function(e){
    var g=grid.getBoundingClientRect();
    glow.style.left=(e.clientX-g.left)+"px";glow.style.top=(e.clientY-g.top)+"px";
    for(var i=0;i<cards.length;i++){var r=cards[i].getBoundingClientRect();cards[i].style.setProperty("--mx",(e.clientX-r.left)+"px");cards[i].style.setProperty("--my",(e.clientY-r.top)+"px");}
  });
})();
</script>`
  }
];
