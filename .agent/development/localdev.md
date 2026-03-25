# Local Dev IDE (Windsurf)

## Goal
Run the app locally in IDE.

## Prereqs
- Node.js 20+
- npm

## Steps
1. Open the project root in IDE.
2. In the integrated terminal, install dependencies:
   `npm install`
3. Start the dev server:
   `npm run dev`
4. Open the URL printed by Vite (usually `http://localhost:3000`).
5. Open in browser preview for IDE integration.

## Notes
- If port 3000 is busy, Vite will choose another port and print it in the terminal.
- Use `npm run build` for a production build and `npm run preview` to test it.
- All dependencies are automatically installed with `npm install`.
- The app runs on Vite development server with hot reload.
