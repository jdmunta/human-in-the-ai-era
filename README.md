# Human in the AI Era

A working argument about how people live well when thinking, reasoning and
cognitive labour are increasingly performed by machines.

**Live:** <https://humanai.up.railway.app>

Thirteen essays, a delegation framework, and an interactive self-assessment. It is
not a news site and not futurism: it makes no capability forecast, and nothing
in it depends on a particular timeline being right.

## The argument in one line

> Cognitive offloading is ancient — writing, maps, calculators, GPS. What is new
> is not that we outsource thinking, but that we now outsource *judgment about
> what is worth thinking about*. Meaning survives automation; agency does not
> survive automatically.

## Contents

| # | Topic | Claim |
|---|-------|-------|
| 01 | Meaning | Meaning was never the job — the bundle is two centuries old and dissolvable |
| 02 | Purpose | Scarcity used to assign purpose; now it has to be chosen, which is harder |
| 03 | Curiosity | AI is both the infinite tutor and the curiosity anaesthetic |
| 04 | Judgment | Automation removes the easy 95% and leaves you accountable for the hard 5% |
| 05 | Responsibility | You can delegate the decision, never the answerability |
| 06 | Cognitive fitness | We built forklifts, then we built gyms. The mind's gym doesn't exist yet |
| 07 | Learning & education | Is a degree still worth it? A function-by-function answer |
| 08 | Relationships | Frictionless intimacy is not intimacy — the cost *was* the signal |
| 09 | Work & economy | Comparative advantage promises you a task, not a wage |
| 10 | Civilization | Four adjustable levers: what we measure, distribute, decide and honour |
| 11 | Working with machines | Prompting is a specification problem, not a syntax problem |
| 12 | Titles & pay | A job bundles five things; automation attacks one. What titles actually encode |
| 13 | Steelman | Seven serious objections to everything above |

### Beyond the essays

| Page | What it is |
|---|---|
| `/playbook` | All 58 practices from the essays in one filterable list — by cadence (in the moment / scheduled / review / standing / structural) and by topic. Tick off what you've adopted; kept in `localStorage`. |
| `/reflect` | 64 questions turned on the reader, one set per essay, answered privately in `localStorage` with a copy-as-markdown export. Each essay also closes with its own set inline. |
| `/map` | The argument's dependency structure — which claim is load-bearing for which, hand-authored in `src/data/map.ts` and rendered as inline SVG with a text equivalent below it. |
| `/read` | Every essay on one page, for reading offline, printing or saving as a PDF. |
| `/you` | Where you stand — essays read, practices adopted, reflections answered and your last audit, assembled from `localStorage` alone. |
| `/judging` | The Judgment Checklist — 23 questions staged from framing to accountability, filtered by a reversible/silent 2×2 that sets how much scrutiny the decision warrants. |
| `/ladder` | The Delegation Ladder — the five-rung rubric every essay applies to its subject, plus a three-question rule for choosing a rung. |
| `/audit` | Cognitive Autonomy Audit: 15 behavioural questions across five dimensions, half reverse-scored. Retakes show per-dimension drift against your last run. |
| `/glossary` | 28 concepts defined — verification gap, jagged frontier, moral crumple zone, latent deprivation, phronesis, conviviality. |
| `/rss.xml` | Feed of all essays. |

Site-wide search is on `/` or `⌘K` — a ~90KB index built at compile time from
the MDX, fetched lazily on first open, with phrase-match ranking. No search
service, no runtime dependency.

`/topics` opens with **reading paths** — curated routes through the essays
("if you have twenty minutes", "if you are choosing a degree", "if you lead
people", "if you think this is overblown"), defined in `src/data/paths.ts`.

**Share cards** are generated at build time by `satori` + `resvg-js` into
`/og/<slug>.png` — one per essay plus the tool pages, rendered in the site's own
palette and typefaces from the TTFs in `src/assets/fonts/`. Pages opt in with
`<Base ogSlug="…">`.

## How the essays argue

Every page follows the same discipline: state a claim that could be false, give
the named evidence it rests on, state the strongest objection as its best
proponent would put it, then answer it or concede. Several pages concede. One
whole page is objections.

## Stack

- **[Astro](https://astro.build)** 5 with MDX content collections — static output,
  no client framework
- Custom CSS design system (`src/styles/global.css`). Two-colour semantic axis:
  **teal = machine, sienna = human**; the Delegation Ladder interpolates between
  them
- Type: Fraunces (display), Newsreader (body), IBM Plex Mono (labels) — self-hosted
  woff2 in `public/fonts`, so the site makes no third-party requests at all
- Served by a ~40-line Express static server (`server.js`) so Railway gets a
  proper `PORT` binding, hashed-asset caching and a `/healthz` endpoint
- Total client JavaScript: theme toggle, reading-progress bar, audit scoring

## Local development

```bash
npm install
npm run dev          # http://localhost:4321 with HMR
```

Production build, exactly as Railway runs it:

```bash
npm run build        # -> dist/
npm start            # serves dist/ on $PORT (default 4321)
```

## Adding or editing a topic

Each essay is one MDX file in `src/content/topics/`. Frontmatter is validated by
the Zod schema in `src/content.config.ts`, so a malformed page fails the build
rather than shipping broken:

```yaml
---
order: 12               # position in the sequence
title: ...              # essay title
kicker: ...             # short subject label, e.g. "Judgment"
tension: ...            # the argument in one sentence, shown on index cards
summary: ...            # meta description + contents listing
reading: 9 min
---
```

Available prose components (import from `../../components/`): `Lede`, `Claim`,
`Counter`, `Sidenote`, `Table`, and `Ladder`. Routing, prev/next navigation,
the per-essay contents block, the search index and the RSS feed all derive from
frontmatter, so nothing else needs updating.

**Practices** are the exception: they live in `src/data/practices.ts`, not in
the MDX, because `/playbook` renders them too. An essay pulls its own with
`<Practices topic="your-slug" />`. Each entry carries a `cadence` and a ladder
`rung`, which is what the playbook filters on.

**Glossary** terms live in `src/data/glossary.ts`, **citations** in
`src/data/sources.ts` (tagged by topic, so each essay shows only what it leans
on while `/about` shows all of them), **reading paths** in
`src/data/paths.ts`, the **judgment questions** in `src/data/judging.ts`, and the **reflection
questions** in `src/data/reflections.ts`
(each tagged with the minimum scrutiny level at which it applies).

## Deployment

Pushes to `main` deploy automatically to Railway. `railway.json` pins the build
and start commands and points the healthcheck at `/healthz`.

## Contributing

The most valuable contribution is **a better objection**. If you can break an
argument here, open an issue — surviving objections go on the
[steelman page](https://humanai.up.railway.app/topics/steelman/)
with attribution. Corrections to sources are equally welcome; every claim the essays
lean on is listed at `/about#sources`.

## Licence

Content: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Code: MIT.
