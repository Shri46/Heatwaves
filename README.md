# Climate Intelligence — Heatwave Monitoring

Simple static site demonstrating a heatwave monitoring UI. Ready to host on GitHub Pages or Netlify.

Contents
- `index.html`, `about.html`, `prediction.html`, `warning.html`, `contact.html`
- `style.css` — site styles
- `script.js` — nav toggle + alert + year

Prerequisites
- A modern browser
- (Optional) Git and a GitHub account to push the repo

Preview locally
1. Open a terminal in the project folder (`c:\Users\Exam\Documents\heatwave-website`).
2. Start a simple HTTP server (Python):

```powershell
python -m http.server 8000
```

3. Open http://localhost:8000 in your browser.

Push to GitHub (example)
```powershell
cd C:\Users\Exam\Documents\heatwave-website
git init
git add .
git commit -m "Initial site: Climate Intelligence — Heatwave monitoring"
git branch -M main
git remote add origin https://github.com/Shri46/Heatwaves.git
git push -u origin main
```

Deploy options
- GitHub Pages: push to the `main` branch and enable Pages from repository Settings → Pages (select `main`/`/ (root)`).
- Netlify: drag & drop the project folder into Netlify Drop or connect the GitHub repo and set the publish directory to `/`.

Notes
- This site is static and intended for demo purposes only. Replace dummy content and contact details before publishing.

License
- Feel free to reuse and modify.
