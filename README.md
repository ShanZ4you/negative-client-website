# Negative Client — Website

Official marketing/download site for Negative Client. React + TypeScript + Tailwind v4 + Framer Motion + React Router.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3, etc).

## Publishing a new release (the only files you need to touch)

### 1. `src/config/release.json`
This drives the entire Downloads page and the "Download" button everywhere on the site.

```json
{
  "version": "1.4.2",
  "releaseDate": "2026-06-18",
  "fileName": "NegativeClient-Setup-1.4.2.exe",
  "fileSizeMB": 84.6,
  "sha256": "…",
  "downloadUrl": "/downloads/NegativeClient-Setup-1.4.2.exe",
  "notes": ["…"],
  "previousVersions": [ … ]
}
```

When you release a new version:
1. Move the current `version` block into `previousVersions` (trimmed to `version`, `releaseDate`, `fileSizeMB`, `downloadUrl`).
2. Fill in the new top-level fields.
3. Drop the new `.exe` into `public/downloads/` with the matching `fileName`, or point `downloadUrl` at an external host (e.g. a GitHub Release asset or S3 URL) — it accepts any absolute or relative URL.
4. Compute the checksum: `certutil -hashfile NegativeClient-Setup-1.4.2.exe SHA256` (Windows) or `shasum -a 256 file.exe` (macOS/Linux), and paste it into `sha256`.

The "Download for Windows" button in the nav, hero, and Downloads page all read from this one file — there's nothing else to update.

### 2. `src/config/changelog.json`
Add a new object to the top of the array for the Changelog page's timeline:

```json
{
  "version": "1.4.2",
  "date": "2026-06-18",
  "added": ["…"],
  "improved": ["…"],
  "fixed": ["…"]
}
```

Leave any of `added` / `improved` / `fixed` as an empty array if there's nothing to list — empty sections are hidden automatically.

## Where hosted files live

Static assets referenced by `downloadUrl` (when using a relative path) should be placed in `public/downloads/`. Anything in `public/` is copied as-is into `dist/` at build time and served at the site root.

## Structure

```
src/
  components/   shared UI (NavBar, Footer, cards, carousel, etc.)
  pages/        Home, Features, Downloads, Changelog, FAQ, About
  config/       release.json + changelog.json — the only files you edit per release
  lib/          small utilities (scroll restoration)
```
