---
description: Git-first deployment guide with automatic Cloudflare sync from GitHub
---

# Task
- Push the site to GitHub as the source of truth and backup
- Let Cloudflare Pages deploy automatically from the GitHub `main` branch
- Keep manual deployment as fallback only

# Deployment Guide

This project is a Vite app, so Cloudflare Pages can build it directly from GitHub without Wrangler.

## Deployment priority

1. Push tested code to GitHub on `main`
2. Let Cloudflare Pages auto-deploy from GitHub
3. Use a manual deployment path only if the Git integration fails

## GitHub repository

Target repository:
- `https://github.com/abhishekgupta1704-code/abhishekgupta.com.git`

HTTPS push:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/abhishekgupta1704-code/abhishekgupta.com.git
git push -u origin main
```

SSH push:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin git@github.com:abhishekgupta1704-code/abhishekgupta.com.git
git push -u origin main
```

GitHub account details:
- Username: `abhishekgupta1704-code`
- Email: `abhishekgupta1704@gmail.com`

## Cloudflare Pages setup

In Cloudflare Dashboard:

1. Go to `Workers & Pages` > `Create` > `Pages` > `Connect to Git`
2. Authorize GitHub if needed
3. Select `abhishekgupta1704-code/abhishekgupta.com`
4. Configure the build:
   - Project name: `abhishekgupta`
   - Production branch: `main`
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/`
5. Save and deploy

Default deployment URL:
- `https://abhishekgupta.pages.dev`

## Notes

- `.gitignore` should exclude `node_modules`, `dist`, `.env*`, and local Node installer files
- Every push to `main` becomes both a GitHub backup and a Cloudflare deployment trigger
- No Wrangler config is required for this Git-based workflow
