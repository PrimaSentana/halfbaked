# Halfbaked (Reel & Record)

A personal blog for movie and music reviews. Built with Astro, styled in a restrained Swiss/editorial design, with GSAP + Lenis for motion. Content is just markdown files — no database.

## Stack

- **[Astro](https://astro.build)** — static site generator, content collections
- **GSAP** (+ ScrollTrigger) — scroll reveals, hover animations
- **Lenis** — smooth scroll
- **Markdown + frontmatter** — every review is a `.md` file, validated against a schema in `src/content.config.ts`
- **Vercel** — hosting, auto-deploys on push to `main`

## Project structure

```
src/
  content/
    movies/          # one .md file per movie review
    music/           # one .md file per music review
    profile/          # standalone page content (philosophy, how-to-use)
  content.config.ts   # schema for all collections
  layouts/
    Layout.astro       # shared nav, footer, preloader, GSAP + Lenis setup
  components/
    ReviewCard.astro   # list item used on /movies, /music, homepage
  pages/
    index.astro         # homepage — A24-style hover list + recent feed
    movies/
      index.astro        # all movie reviews
      [slug].astro        # single movie review page
    music/
      index.astro         # all music reviews
      [slug].astro         # single music review page
    profile.astro         # about + philosophy + how-to-use
    how-to-use.astro       # visitor-facing usage guide
  styles/
    global.css            # design tokens (colors, type, grid), base styles
```

## Adding a review

Create a new markdown file in `src/content/movies/` or `src/content/music/`:

```markdown
---
title: "Movie or Album Title"
creator: "Director or Artist"
year: 2024
rating: 8
tags: ["genre-one", "genre-two"]
date: 2026-07-28
excerpt: "One-line teaser shown in lists."
---

The full review, written in markdown.
```

The filename becomes the URL slug (e.g. `parasite.md` → `/movies/parasite`). No other code changes needed — it'll show up in listings and the homepage feed automatically, sorted by `date`.

## Design principles

- **Swiss-inspired**: strict 12-column grid, hairline dividers, one accent color, zero decoration for its own sake
- **Typography does the work**: Space Grotesk (display), Literata (body), IBM Plex Mono (labels/meta)
- **Rating shown as a typographic numeral** (e.g. `9 / 10`) instead of stars
- **Motion is purposeful**: staggered scroll reveals, hover crossfades — not animation for its own sake, and everything respects `prefers-reduced-motion`

See `AGENTS.md` for the full design brief (useful if handing sections of this off to an AI coding agent).

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

## Deployment

Connected to Vercel — every push to `main` triggers a production deploy automatically. Pushes to other branches / PRs get their own preview URL.

If using the Spotify "Now Playing" widget or TMDB posters, make sure the relevant environment variables are set in Vercel's project settings (Settings → Environment Variables):

- `TMDB_TOKEN`
- `SPOTIFY_CLIENT_ID`
- `SPOTIFY_CLIENT_SECRET`
- `SPOTIFY_REFRESH_TOKEN`

## Notes

- This is a personal, for-fun project — not trying to be a full publication or social platform.
- No database, no comments, no accounts. Just markdown in, static site out.
