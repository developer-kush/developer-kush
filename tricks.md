# GitHub Flavored Markdown (GFM) Styling Tricks & Hacks

This document compiles the working quirks and exploits available for customizing a GitHub Profile README.

---

## 1. SVG `<foreignObject>` Layout Trick
Since GitHub strips raw `<style>` and `<style>` blocks inside Markdown, you can host styling within an external SVG using `<foreignObject>`.

*   **How it works:** Wrap XHTML elements (like `div`, `span`) inside a `<foreignObject>` inside the SVG. You can write custom inline stylesheets inside the SVG.
*   **Syntax:**
    ```xml
    <svg fill="none" viewBox="0 0 800 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <style>
            .box { background: #2b2d30; color: white; padding: 20px; font-family: monospace; }
          </style>
          <div class="box">Styled content here!</div>
        </div>
      </foreignObject>
    </svg>
    ```
*   **The Sandbox Constraint:** Because the SVG is rendered as an `<img>` tag on GitHub, the browser executes it in a sandboxed, static mode:
    *   **No relative fonts or imports:** `@import url(...)` or `src: url('./font.ttf')` will fail.
    *   **No hover interactions:** `:hover` or `:active` states are ignored because mouse coordinates are not passed down to the image canvas.
    *   **No scripts:** `<script>` tags are completely stripped.

---

## 2. Base64 Font Embedding (Bypassing the sandbox)
If you want to render a custom font (like **JetBrains Mono**) inside an SVG on GitHub, you cannot import it from Google Fonts or load it from a local file.
*   **The Hack:** Convert the font file (preferably `.woff` or `.woff2` for compression) to a Base64 string and embed it as a data URI:
    ```css
    @font-face {
      font-family: 'JetBrains Mono';
      src: url('data:font/woff2;charset=utf-8;base64,d09GMgABAAAAA...') format('woff2');
      font-weight: 400;
      font-style: normal;
    }
    ```

---

## 3. Light / Dark Mode Theme Adaptation
You can make your SVG adapt automatically to the user's GitHub theme (light or dark mode) by using media queries in the SVG stylesheet:
```css
.highlight {
  color: #2ed573; /* Light mode default */
}

@media (prefers-color-scheme: dark) {
  .highlight {
    color: #38bdf8; /* Dark mode color */
  }
}
```
Alternatively, wrap different SVGs in a `<picture>` tag inside your `README.md`:
```html
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="svgs/dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="svgs/light.svg">
  <img src="svgs/fallback.svg">
</picture>
```

---

## 4. Camo Cache-Busting
GitHub uses a caching proxy server (Camo) to serve images. If you update an SVG file and it is still showing the old/broken version:
*   **The Hack:** Append a cache-busting query parameter (like `?v=1` or `?cache=bust`) to the image source in `README.md`:
    ```html
    <img src="./svgs/art.svg?v=1" />
    ```

---

## 5. Pure HTML Linkless Interactivity (Nested Details)
You can build interactive trees, choices, or games using nested `<details>` and `<summary>` tags inside the Markdown document:
```html
<details>
  <summary>🚪 Enter the Room</summary>
  <p>You are inside a cave.</p>
  <details>
    <summary>⬅️ Go Left</summary>
    <p>Game Over!</p>
  </details>
  <details>
    <summary>➡️ Go Right</summary>
    <p>You Win!</p>
  </details>
</details>
```

---

## 6. The Ghost Commit Hack (Accessing Unreachable Blobs by SHA)
GitHub retains commits that have been pushed to its database even if the references (branches/tags) pointing to those commits are deleted or overwritten.

*   **How it works:**
    1.  Create a secret file (e.g. `secret.md`) on a temporary branch (e.g. `ghost-branch`).
    2.  Commit the file and push the branch to GitHub: `git push origin ghost-branch`.
    3.  Delete the branch from GitHub: `git push origin --delete ghost-branch`.
*   **Result:** The file is no longer in your repository's worktree on any branch. It is hidden from standard visitors. However, if a user has the commit SHA (which you can hide in a puzzle), they can navigate directly to the file via:
    `https://github.com/username/repo/blob/<SHA>/secret.md`
    or the raw version:
    `https://raw.githubusercontent.com/username/repo/<SHA>/secret.md`
    GitHub's servers will still render and serve the file perfectly!
