# Human in the AI Era

A working argument about how people live well when thinking, reasoning and
cognitive labour are increasingly performed by machines.

**Live:** _(Railway URL — see below)_

Eleven essays, a delegation framework, and an interactive self-assessment. It is
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
| 11 | Steelman | Seven serious objections to everything above |

Plus **the Delegation Ladder** (`/ladder`) — the five-rung rubric every essay
uses — and the **Cognitive Autonomy Audit** (`/audit`), a fifteen-question
self-assessment that runs entirely in the browser and transmits nothing.

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
- Type: Fraunces (display), Newsreader (body), IBM Plex Mono (labels)
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
`Counter`, `Sidenote`, `Practices` + `Practice`, `Table`, and `Ladder`.
Routing, prev/next navigation and the contents listing all derive from `order`,
so nothing else needs updating.

## Deployment

Pushes to `main` deploy automatically to Railway. `railway.json` pins the build
and start commands and points the healthcheck at `/healthz`.

## Contributing

The most valuable contribution is **a better objection**. If you can break an
argument here, open an issue — surviving objections go on the
[steelman page](https://github.com/jdmunta/human-in-the-ai-era) with
attribution. Corrections to sources are equally welcome; every claim the essays
lean on is listed at `/about#sources`.

## Licence

Content: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Code: MIT.
