# Project Guidelines

## Code Style
- Use plain vanilla JavaScript for DOM manipulation without frameworks
- Comments include explanations of why certain approaches are chosen (e.g., `+=` for appending vs `=` for replacing)
- Bilingual comments (English + Punjabi) for educational purposes

## Architecture
- Simple educational project with HTML structure and JavaScript exercises
- No build tools or dependencies; direct browser execution
- Key files: [Index.html](Index.html) for structure, [dom.js](dom.js) for DOM manipulation examples

## Build and Test
- No build commands required; open [Index.html](Index.html) in browser to test
- Manual testing by refreshing the page after code changes
- For local server (optional): `python -m http.server` in project root

## Conventions
- Use `querySelector()` for single elements, `querySelectorAll()` for multiple (returns NodeList)
- Access NodeList elements with bracket notation: `divs[0]`, `divs[1]`
- Element creation: `createElement()` → set properties → `append()` or `insertAdjacentElement()`
- Position strings for insertion: `beforebegin`, `afterbegin`, `beforeend`, `afterend`
- ID selectors: `#myheading`, class selectors: `.box`

## Potential Pitfalls
- `querySelector('.box')` selects only the first match; use `querySelectorAll()` for all
- Multiple `h1` elements exist; selectors may pick the first one
- Confusing `insertAdjacentElement` positions; test in browser