# Shivani Sudhir — UGC & Lifestyle Portfolio

A modern, responsive, aesthetic portfolio website for **Shivani Sudhir**, UGC & Lifestyle Content Creator based in Sydney, Australia.

Built with **HTML, CSS, and JavaScript only** — no backend, no frameworks, no build step. Just open it in a browser or host it free on GitHub Pages.

---

## ✨ Features

- Warm **retro / vintage** aesthetic — ivory, terracotta, gold & olive, with a subtle film-grain texture
- Vintage-inspired serif headings (Fraunces) + clean sans body (Jost)
- Retro arched hero photo frame with a gold badge
- Fully responsive — mobile, tablet, and desktop
- Smooth scrolling + subtle hover & scroll-reveal animations
- Mobile hamburger menu
- **Filterable portfolio gallery** with category tabs (Lifestyle & Home, Fashion, Travel, Beauty, Motherhood, Food)
- Conversion-focused layout: trust chips, value/benefits band, and a mid-page call-to-action
- All sections: Hero, Highlights, About, Why UGC, Portfolio, Services, Process, Packages, Contact
- Clearly commented placeholders so you know exactly where to add your photos, videos, and links

---

## 📁 Folder structure

```
shivanisudhir.ugc/
├── index.html          # All page content & sections
├── style.css           # All styling + responsive rules
├── script.js           # Menu, scroll reveal, footer year
├── README.md           # This file
└── assets/
    ├── images/         # Your photos go here (hero, about, portfolio thumbnails)
    └── videos/         # Your UGC videos go here (.mp4)
```

---

## 🚀 Deploy to GitHub Pages (free hosting)

1. Push these files to your GitHub repo (`shivaanis/shivanisudhir.ugc`):
   ```bash
   git add .
   git commit -m "Add UGC portfolio website"
   git push origin main
   ```
2. On GitHub, open your repo → **Settings** → **Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Set **Branch** to `main` and folder to `/ (root)`, then click **Save**.
5. Wait ~1 minute. Your site will be live at:
   ```
   https://shivaanis.github.io/shivanisudhir.ugc/
   ```

> 💡 Make sure the file is named exactly `index.html` (lowercase) — GitHub Pages looks for it automatically.

---

## 🖼️ Adding your photos

Drop your images into `assets/images/`, then replace a placeholder in `index.html`.

**Hero / cover photo — already wired up.** Just save your photo as:

```
assets/images/hero.jpg
```

It appears automatically in the retro arched frame. No code editing needed. Until that file exists, a styled "Save your photo as…" placeholder shows in its place. (Recommended ~1000 × 1250px portrait.)

### Recommended image dimensions

| Where              | Ratio | Suggested size   |
|--------------------|-------|------------------|
| Hero photo         | 4:5   | 1000 × 1250px    |
| About photo        | 4:5   | 800 × 1000px     |
| Portfolio thumbs   | 9:16  | 720 × 1280px     |
| Social share image | 1.9:1 | 1200 × 630px     |

Use `.jpg` for photos (smaller files) and keep each image under ~500KB for fast loading. Free tools like [Squoosh](https://squoosh.app) can compress them.

---

## 🎬 Adding your portfolio videos

The portfolio is a **filterable gallery** with tabs: *Lifestyle & Home, Fashion, Travel, Beauty & Skincare, Motherhood & Family, Food & Kitchen*. Each card belongs to a category via `data-category`.

Put your `.mp4` files in `assets/videos/`. In `index.html`, find a portfolio card:

```html
<figure class="work" data-category="lifestyle">
  <div class="work__media placeholder placeholder--reel">
    <span class="work__play">▶</span>
    <span class="work__hint">Add reel · 9:16</span>
  </div>
  <figcaption><strong>Morning Routine</strong><span>Lifestyle &amp; Home</span></figcaption>
</figure>
```

**Option A — self-hosted video** (replace the inner `<div class="work__media …">` block):

```html
<video class="work__media" controls muted playsinline poster="assets/images/cover.jpg">
  <source src="assets/videos/your-clip.mp4" type="video/mp4" />
</video>
```

**Option B — embed from Instagram/TikTok/YouTube:** paste their `<iframe>` embed code in place of that same `<div class="work__media …">` block.

**To add more work:** copy a whole `<figure class="work" …>` block and set its `data-category` to one of:
`lifestyle` · `fashion` · `travel` · `beauty` · `motherhood` · `food`
(it must match a filter button's `data-filter` so the tab shows it).

**To add or remove a category:** edit the `<div class="filters">` buttons near the top of the portfolio section — each `data-filter` value pairs with the cards' `data-category`.

> Tip: keep self-hosted videos short and compressed. For longer reels, embedding from Instagram/TikTok keeps your repo light and loads faster.

---

## 🔗 Updating your contact links

In `index.html`, search for these and edit if anything changes:

- **Email:** `mailto:shivaanisudhir@gmail.com`
- **Instagram:** `https://instagram.com/shivaanisudhir`

They appear in the **Contact** section near the bottom.

---

## ✏️ Other easy edits

- **Prices** — search `from $___` in the Packages section and add your rates.
- **Portfolio categories** — duplicate a `<figure class="work">` block to add more work.
- **Testimonials** — none for now; a commented note in `index.html` (above the Contact section) marks where to add a reviews section once you've collected real brand feedback.
- **Colors** — all colors live at the top of `style.css` under `:root` (`--cream`, `--beige`, `--brown`, etc.). Change them in one place to retheme the whole site.

---

## 🧪 Preview locally

Just double-click `index.html` to open it in your browser. No server needed.

(Optional, if you have Python installed, for a cleaner local server):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

---

Made with warmth for **Shivani Sudhir** ✨
