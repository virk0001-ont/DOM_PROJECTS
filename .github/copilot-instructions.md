# Project Guidelines

## Project Focus
- This is a small educational DOM manipulation project.
- Primary HTML entry point: `Index.html`.
- Main JavaScript examples and exercises live in `dom.js`.
- `EVENTS.js` is currently an unused stub file for event-related practice.

## Code Style
- Use plain vanilla JavaScript only; do not introduce frameworks or build tools.
- Keep code simple and readable for learners.
- Prefer comments that explain *why* a statement is used, not just *what* it does.
- Preserve the existing bilingual style when helpful: English plus Punjabi.

## DOM Conventions
- Use `querySelector()` for one element and `querySelectorAll()` for multiple elements.
- Access `NodeList` results by index: `divs[0]`, `divs[1]`, `divs[2]`.
- Create elements with `document.createElement()`.
- Set properties (`innerText`, `className`, etc.) before inserting.
- Insert elements with `append()`, `prepend()`, `before()`, `after()`, or `insertAdjacentElement()`.
- Use insertion position values carefully: `beforebegin`, `afterbegin`, `beforeend`, `afterend`.

## File / Task Guidance
- `Index.html` contains the page structure and loads `dom.js`.
- Avoid changing the page structure dramatically; keep exercises small and focused.
- Check whether new JavaScript is actually loaded by `Index.html` before assuming it runs.
- Use `EVENTS.js` only if you also update `Index.html` to include it.

## Testing
- No build step is required.
- Open `Index.html` directly in a browser and refresh after changes.
- Optionally run a local static server from the project root:
  - `python -m http.server`

## Common Pitfalls
- `querySelector('.box')` returns only the first matching element.
- `querySelectorAll('.box')` returns a `NodeList`, not an array.
- `insertAdjacentElement()` position strings are easy to mix up; verify placement in browser.
- Multiple `h1` elements are present; generic selectors may select the first one unexpectedly.
- `append()` moves an existing node if reused, so create a new element for each insertion.

## Agent Notes
- Keep responses focused on DOM/basic JavaScript exercises.
- Do not add package managers, frameworks, or tooling beyond the static browser workflow.
- When suggesting code, keep it compatible with the existing HTML structure and simple enough for learners.