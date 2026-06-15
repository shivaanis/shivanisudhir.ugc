# Shivani Sudhir — UGC & Lifestyle Portfolio

A modern, responsive, aesthetic portfolio website for **Shivani Sudhir**, UGC & Lifestyle Content Creator based in Sydney, Australia.

Built with **HTML, CSS, and JavaScript only** — no backend, no frameworks, no build step. Just open it in a browser or host it free on GitHub Pages.

---

## ✨ Features

- Warm, premium, Pinterest-style design (cream / beige / taupe / muted brown)
- Classy serif headings (Cormorant Garamond) + clean sans body (Jost)
- Fully responsive — mobile, tablet, and desktop
- Smooth scrolling + subtle hover & scroll-reveal animations
- Mobile hamburger menu
- All sections: Hero, About, Why UGC, Portfolio, Services, Process, Packages, Contact
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

**Example — Hero photo.** Find this block in `index.html`:

```html
<div class="placeholder placeholder--portrait">
  <span>Your hero photo<br />1000 × 1250px</span>
</div>
```

Replace it with:

```html
<img src="assets/images/hero.jpg" alt="Shivani Sudhir" class="placeholder--portrait" />
```

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

Put your `.mp4` files in `assets/videos/`. In `index.html`, find a portfolio card:

```html
<figure class="work">
  <div class="placeholder placeholder--reel"><span>Product unboxing<br />9:16 reel</span></div>
  <figcaption>Product Unboxing</figcaption>
</figure>
```

**Option A — self-hosted video** (replace the `.placeholder` div):

```html
<figure class="work">
  <video class="placeholder--reel" controls muted playsinline poster="assets/images/unboxing-cover.jpg">
    <source src="assets/videos/unboxing.mp4" type="video/mp4" />
  </video>
  <figcaption>Product Unboxing</figcaption>
</figure>
```

**Option B — embed from Instagram/TikTok/YouTube:** paste their embed `<iframe>` code in place of the `.placeholder` div.

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
