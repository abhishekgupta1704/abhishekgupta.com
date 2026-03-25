# Abhishek Gupta Portfolio

Personal portfolio site built with React and Vite.

## Local development

Prerequisites:
- Node.js 20+

Commands:
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## GitHub backup

Recommended repository:
- `https://github.com/abhishekgupta1704-code/abhishekgupta.com.git`

Suggested first push sequence:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/abhishekgupta1704-code/abhishekgupta.com.git
git push -u origin main
```

## Cloudflare Pages auto-deploy

Create a new Cloudflare Pages project and connect it to the GitHub repository above.

Use these build settings:
- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Production branch: `main`

After the GitHub repository is connected, every push to `main` will automatically trigger a new deployment on Cloudflare Pages.

## Custom project name

To aim for the Cloudflare Pages URL below, set the Pages project name to:
- `abhishekgupta`

Default Pages URL:
- `https://abhishekgupta.pages.dev`
# abhishekgupta.com
