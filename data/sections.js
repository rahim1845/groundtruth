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
  *{box-sizing:border-box}body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:#fff;padding:40px 20px}
  .wrap{max-width:680px;margin:0 auto}
  .chips{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px}
  .chip{font-size:12.5px;color:#4b5563;background:#f4f5f7;border:1px solid #eceef1;border-radius:999px;padding:7px 12px;cursor:pointer}
  .chip:hover{border-color:#d7dbe0}
  .composer{border:1px solid #e2e4e8;border-radius:16px;padding:14px 16px;box-shadow:0 8px 24px -16px rgba(15,17,21,.25)}
  .ta{font-size:15px;color:#0f1115;min-height:56px;line-height:1.5}
  .ta .ph{color:#9aa1a9}
  .bar{display:flex;align-items:center;gap:8px;margin-top:10px}
  .tool{width:34px;height:34px;border-radius:9px;border:1px solid #eceef1;background:#fff;display:flex;align-items:center;justify-content:center;color:#6b7280;cursor:pointer}
  .tool svg{width:17px;height:17px}
  .model{display:flex;align-items:center;gap:7px;font-size:13px;color:#374151;border:1px solid #eceef1;border-radius:9px;padding:7px 11px;cursor:pointer}
  .model .dot{width:7px;height:7px;border-radius:50%;background:#4f46e5}
  .send{margin-left:auto;width:38px;height:38px;border-radius:11px;background:#0f1115;color:#fff;border:0;display:flex;align-items:center;justify-content:center;cursor:pointer}
  .send svg{width:18px;height:18px}
  .hint{font-size:11.5px;color:#9aa1a9;margin-top:10px;text-align:center}
</style>
<div class="wrap">
  <div class="chips"><span class="chip">Summarize this thread</span><span class="chip">Draft a reply</span><span class="chip">Find action items</span><span class="chip">Explain the diff</span></div>
  <div class="composer">
    <div class="ta"><span class="ph">Ask anything, or describe what you want to build…</span></div>
    <div class="bar">
      <button class="tool" title="Attach"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.5 12 21a5 5 0 0 1-7-7l9-9a3.5 3.5 0 1 1 5 5l-9 9a2 2 0 0 1-3-3l8.5-8.5"/></svg></button>
      <div class="model"><span class="dot"></span>Claude · Sonnet<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div>
      <button class="send" title="Send"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11l5-5 5 5M12 6v13"/></svg></button>
    </div>
  </div>
  <div class="hint">AI can make mistakes. Double-check important info.</div>
</div>`
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
  }
];
