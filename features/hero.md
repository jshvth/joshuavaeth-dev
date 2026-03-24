# Hero

## Summary
The hero section introduces Joshua and positions him as a frontend developer. It blends bold typography, ambient glow effects, and a single clear call-to-action to download the CV.

## Highlights
- Large typographic headline with accent color emphasis.
- Soft background glow for depth without heavy imagery.
- CV download button wired to a static asset in `public/`.
- Optional quote block and email sidebar on larger screens.

## Implementation Notes
- Component: `src/components/Hero.jsx`
- CV file: `public/CV_JoshuaVaethSE.pdf`
- Accent color: `accent-orange` utilities from Tailwind config

## Behavior
- Full viewport height with center-aligned content.
- Hover on the headline increases tracking for subtle motion.
- CTA button reveals accent fill on hover.
