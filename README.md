# delphitrade

Static **portfolio demo** of the [Delphi](https://delphi.trade/) marketing experience — built for GitHub Pages (`/docs`).

## Pages

| File | Mirrors |
|------|---------|
| [`docs/index.html`](docs/index.html) | Home / landing |
| [`docs/leaderboard.html`](docs/leaderboard.html) | `/leaderboard/` |
| [`docs/faq.html`](docs/faq.html) | `/faq/` |
| [`docs/events.html`](docs/events.html) | `/events/` (Markets) |
| [`docs/earn.html`](docs/earn.html) | `/earn/` |
| [`docs/portfolio.html`](docs/portfolio.html) | `/portfolio/` (logged-out state) |

## GitHub Pages

1. Repo **Settings → Pages**.
2. **Build and deployment**: Source **Deploy from a branch**.
3. Branch **main**, folder **`/docs`**, Save.

The site will be at `https://<user>.github.io/<repo>/` (or your custom domain).

## Local preview

```bash
cd docs && python3 -m http.server 8080
```

Open `http://127.0.0.1:8080/`.

## Notice

This is a **non-functional design demo**: no wallet, no backend, no affiliation with the live product. Marketing copy and visuals reference the public site for case-study purposes; asset files under `docs/assets/` were downloaded from `delphi.trade` for offline display in this demo.
