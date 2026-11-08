# Stashly

Stashly is a completely free, public recipe-saving web app built for one simple purpose: store the recipes you love, organize them by tags, and find them quickly when you're cooking.

## Features

- Save recipes locally in the browser
- Add/edit/delete recipes
- Search by title, ingredients, or tag
- Optional prep/cook time, servings, and image URL
- Export recipes as JSON
- Import recipes from a saved backup
- Free public hosting via GitHub Pages

## Local development

Open `index.html` directly in a browser, or serve the repository locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Launching on GitHub Pages

1. Push this repository to GitHub.
2. Open the repository on GitHub.
3. Go to Settings > Pages.
4. Under Build and deployment, set Source to GitHub Actions.
5. The included Pages workflow will deploy the app automatically.

The app will be available at:

`https://yurajh.github.io/stashly/`

## Notes

This first version is designed to be free, public, and easy to use without a backend. Data is stored in the user's browser using `localStorage`, which means recipes are saved on the device used to view the app.
