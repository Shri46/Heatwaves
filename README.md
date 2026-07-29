 # Climate Intelligence — Heatwave Monitoring

Professional static site skeleton for heatwave information and alerts.

What's included
- `index.html`, `about.html`, `prediction.html`, `warning.html`, `contact.html`
- `style.css` — site styles
- `script.js` — minimal interactive JS

Goals
- Make the project easy to develop locally with fast refresh
- Produce optimized production builds
- Provide CI that lints, builds, and (optionally) deploys to GitHub Pages

Requirements
- Node.js 18+ and npm (for dev tooling)
- A modern browser

Quick start (development)
1. Install dependencies:

```bash
npm install
```

2. Start the dev server with live reload:

```bash
npm run dev
```

3. Open http://localhost:5173 (Vite default) in your browser.

Build for production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

CI / Deployment
- A GitHub Actions workflow is included at `.github/workflows/ci.yml` that runs linting and builds on push/pull-request to `main`. On a push to `main` it will deploy the `dist` folder to GitHub Pages using the provided `GITHUB_TOKEN`.

Recommended next steps
- Review `package.json` devDependencies and run `npm install` locally.
- Add a `CNAME` file if you plan to use a custom domain for GitHub Pages.
- Replace placeholder content and verify accessibility (ARIA, contrast) and SEO meta tags in `index.html`.

Contributing
- Fork, create a branch, run `npm install`, work on changes, then open a PR.

License
- This project is free to reuse and adapt.

