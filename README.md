# JerryMain's Blog

A personal website and blog built with pure HTML, CSS, and JavaScript.

🌐 **Live Site:** [jerrymainblog.github.io](https://jerrymain.github.io)

---

## Features

- Dark / Light mode toggle with system preference detection
- Blog posts organized by newest and by category
- Smooth animations and transitions
- Fully responsive layout

## File Structure

```
├── index.html      # Home page
├── blog.html       # Blog listing page
├── style.css       # All styles
└── main.js         # Theme toggle & blog category logic
```

## Adding a New Blog Post

In `blog.html`, add a new `<article>` block inside `.ins-grid`:

```html
<article class="ins-item blog-item" data-category="Your Category">
  <div class="ins-photo ins-photo-1"></div>
  <div class="ins-meta">
    <div class="ins-row">
      <span class="ins-title">Your Post Title</span>
      <span class="ins-date">Your Category</span>
    </div>
    <p class="ins-caption">A short description of your post.</p>
  </div>
</article>
```

The category view is generated automatically — no extra steps needed.

## Deployment

Hosted via [GitHub Pages](https://pages.github.com/). Any push to the `main` branch will automatically update the live site.

---

© JerryMain