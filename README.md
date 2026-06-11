# S. Lynn Cox — Author Site

Eleventy + Netlify + Decap CMS via DecapBridge.

## Stack
- **Eleventy 2.x** — static site generator
- **Nunjucks** — templating
- **Decap CMS** — content management via `/admin`
- **Netlify Forms** — contact form (no backend needed)
- **Netlify Identity** — CMS authentication

## Setup

1. Push repo to GitHub
2. Connect to Netlify (Build: `npm run build`, Publish: `public`)
3. Enable Netlify Identity in site dashboard
4. Enable Git Gateway under Identity settings
5. Connect via DecapBridge if using external Git provider
6. Invite yourself as a user under Identity > Users
7. Visit `/admin` to manage content

## Content
All editable content lives in `src/_data/*.json`. The CMS maps to these files.

## Assets
Drop images into `src/images/` — they're referenced in the data files and passed through to the build output.

## Local dev
```
npm install
npm start
```
