# Copilot Instructions for Browser Extensions Manager UI

## Project Overview
This is a static front-end project for a browser extensions manager UI, based on a Frontend Mentor challenge. The codebase consists of HTML, CSS, and JavaScript, with all assets and data stored locally. There is no build system or framework; the project runs directly in the browser.

## Key Files & Structure
- `index.html`: Main entry point. Contains the UI structure and links to CSS/JS.
- `style.css`: All styles, including CSS variables for colors and fonts. Uses local font files from `assets/fonts/`.
- `script.js`: Handles dynamic UI logic (e.g., filtering, toggling, removing extensions, theme switching).
- `data.json`: Contains extension data for dynamic rendering.
- `assets/`: Images, icons, and fonts used in the UI.
- `design/`: Reference JPGs for desktop and mobile layouts.
- `style-guide.md`: Defines the color palette, gradients, and typography conventions.

## Architecture & Data Flow
- The UI is rendered from `index.html` and styled via `style.css`.
- Extension data is loaded from `data.json` (typically via JS fetch or import).
- User actions (filter, toggle, remove, theme switch) are handled in `script.js` and update the DOM accordingly.
- No external dependencies or frameworks are used; all logic is vanilla JS.

## Developer Workflow
- No build or test commands; open `index.html` in a browser to view and debug.
- For responsive design, reference the `design/` JPGs and use CSS media queries.
- Use the color and font variables from `style-guide.md` and `style.css` for consistency.
- All assets are local; update paths in HTML/CSS/JS as needed.

## Project-Specific Conventions
- CSS variables use descriptive names and are mapped to style guide values (e.g., `--color-midnight` for Neutral 900).
- Font is set via local `@font-face` and CSS variable `--font-inter`.
- Theme switching uses icons (`icon-moon.svg`, `icon-sun.svg`) and toggles CSS classes or variables.
- Extension list UI is built from `data.json` and supports filtering and removal via JS.

## Examples
- To add a new color, update both `style-guide.md` and `style.css` with a descriptive variable name.
- To add a new extension, update `data.json` and ensure the JS logic renders it correctly.
- For layout changes, reference the appropriate design JPG and adjust CSS/media queries.

## Integration Points
- No external APIs or build tools; all integration is local and static.
- Fonts are loaded from `assets/fonts/` via `@font-face` in CSS.

## References
- See `README.md` and `style-guide.md` for design and workflow details.
- All code and assets are in the root or subfolders; no hidden dependencies.

---

If any conventions or workflows are unclear, please provide feedback so this guide can be improved for future AI agents.
