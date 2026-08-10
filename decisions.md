# Groundtruth — decisions log

Running record of product decisions so any collaborator (or future-me) can pick up
without re-litigating. Newest context at the bottom of each section.

## Problem statement
Designers and AI-tool builders assembling web/app UIs face a trust gap: prompt
libraries hand over text with no proof it reproduces, and component libraries hand
over code with no prompt. Nobody bundles a **prompt + a verified preview + the code**
as one trustworthy unit. The loudest pain in the category is that AI prompts don't
reproduce ("the same prompt never works twice").

## Target segment (beachhead)
Product/UI designers who build with AI tools (v0, Lovable, Cursor, Claude). Chosen
over "developers" because the differentiator is *trust + curation + taste*, which is
what this segment values and what a solo designer-author can credibly deliver.

## Riskiest assumption + status
**Desirability/differentiation:** will designers choose a curated, *verified* small
set over a free 600-prompt list or a 12,000-component MCP?
Status: **untested with users.** The product is built and live, but no usage/behavioral
data yet. Next honest step: ship to Vercel, add basic analytics, run a 5-user test.

## Decisions made (with rationale)
- **Curated, not community (v1).** Prove people want the blocks before building
  submission/auth/moderation machinery. Community contribution is the hardest thing to
  bootstrap; defer until usage justifies it.
- **"Verified" defined precisely = preview is rendered from the exact code you copy.**
  This link is provable; the prompt→output link is *not* (AI is non-deterministic).
  The copy never overclaims the second link. This honesty *is* the brand.
- **New repo, not the demo repo.** Clean home: `github.com/rahim1845/groundtruth`.
- **Name: Groundtruth.** ML term for the verified reference; signals AI-literacy.
- **Deploy:** live Claude Artifact for an instant shareable URL; source in the repo;
  Vercel import for a custom domain (owner action — needs their Vercel account).
- **Visual system v2 (after review): terminal × bold-editorial.** Monochrome ink-on-paper
  + a single electric-cobalt accent (#1F45FF). Type: Archivo (Black display + body) +
  JetBrains Mono (labels/data/readouts), self-hosted inline. Light "editorial" primary,
  dark "console" secondary.
- **Restrained ambition over full immersive.** Protects the 30% usability weight
  (Awwwards scoring) and ships faster; the signature moment is the per-specimen
  "verification" cue, not scroll-jacking.
- **Sample sections keep realistic variety.** Specimen components use their own accents
  (incl. semantic green up/red down in the dashboard — correct UX convention). Only the
  one *decorative* green (hero sample status dot) was recolored to cobalt to avoid a
  stray brand-clashing green at the top of the grid.

## Options explicitly rejected (and why)
- **Dark + green + serif + rounded-card grid (v1 look).** Read as AI-generated; the
  exact default cluster. Replaced wholesale.
- **Green as brand color.** Rejected by owner; also collides with "success green."
- **Inter / Space Grotesk display.** The "safe AI font" jurors are numb to.
- **Community submissions in v1.** Scope + cold-start risk before demand is proven.
- **Volume play (thousands of items).** Can't beat incumbents on count; competing on
  curation + trust instead.

## Accessibility baseline (v2, post-audit)
Primary text ≥ 4.5:1 both themes (measured); modal traps + returns focus; copy success
announced via `aria-live`; sequential headings; reduced-motion honored; the one measured
contrast fail (meta text at 2.67:1) fixed to use `--grey`.

## Current phase
**Ship → Measure.** Front-end built and audited; live via Artifact; repo ready for Vercel.

## Next bet
Get it on Vercel with analytics, then a 5-user usability test on the core loop
(browse → filter → preview → copy). If a curated ~8–14 set clearly beats users'
current habit, expand the library; if not, revisit the segment or the wedge before
adding scope. Kill criterion: a small curated set that doesn't beat the current habit
means don't scale it.
