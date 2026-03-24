# Interactions

## Summary
A set of subtle motion and interaction layers adds polish without distracting from content.

## Highlights
- Custom cursor ring and dot on large screens.
- Scroll progress indicator anchored to the right edge.
- Section reveal animations on scroll.
- Smooth scrolling via Lenis.

## Implementation Notes
- Cursor: `src/components/CustomCursor.jsx`
- Scroll progress: `src/components/ScrollProgress.jsx`
- Reveal wrapper: `src/components/Reveal.jsx`
- Smooth scroll init: `src/App.jsx` and Lenis CDN in `index.html`

## Behavior
- Cursor and progress are hidden on small viewports to reduce clutter.
- Reveal animations trigger once per section for crisp entry.
