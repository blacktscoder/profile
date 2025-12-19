
---

````md
# Tatenda Makandigona — Portfolio

This repository contains the source code for my personal portfolio website.

It’s a space where I document what I’m building, what I’ve learned, and how I think about backend engineering, systems, and software in general. The site includes project write-ups, blog posts, and background information about my work.

🌐 **Live site:** _(add your Vercel / custom domain URL here once deployed)_

---

## About the Site

This portfolio is intentionally simple and content-driven.

Instead of acting as a résumé replacement, it focuses on:
- Writing about real projects I’ve worked on
- Sharing lessons learned from building backend systems
- Documenting ideas and engineering decisions over time

Most content is written in **MDX**, so posts feel closer to essays than documentation.

---

## Tech Stack

- **Framework:** Next.js
- **Content:** MDX (blog posts & projects)
- **UI System:** Once UI (customized)
- **Language:** TypeScript
- **Deployment:** Vercel

The codebase is structured to be easy to extend, not over-engineered.

---

## Local Development

### 1. Install dependencies
```bash
npm install
````

### 2. Run the dev server

```bash
npm run dev
```

The site will be available at:

```
http://localhost:3000
```

---

## Writing Content

### Blog posts

Add a new `.mdx` file to:

```
app/blog/posts/
```

Each post supports frontmatter like:

```yaml
---
title: "Post title"
description: "Short summary"
date: "2025-02-01"
---
```

### Projects

Project write-ups live in:

```
app/work/projects/
```

These are written as reflective articles rather than technical documentation.

---

## Customization

Most site content and metadata can be adjusted from:

```
src/resources/
```

This includes:

* Personal information
* Social links
* Page visibility
* Navigation labels

---

## License & Credits

This project is built on top of **Once UI** and the original Magic Portfolio template.

The template has been customized and adapted for personal use and content.
All written content and project descriptions are my own.

Template credit:

* Once UI — [https://once-ui.com](https://once-ui.com)

---

## Contact

* GitHub: [https://github.com/blacktscoder](https://github.com/blacktscoder)
* Email: [example@gmail.com](mailto:example@gmail.com)

---

© Tatenda Makandigona. All rights reserved.

```

---


