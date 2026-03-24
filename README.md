# Joshua Vaeth Portfolio

A single-page portfolio built with React, Vite, Tailwind CSS, and Framer Motion. The site focuses on bold typography, smooth scroll, and a clean section flow for fast scanning.

## Overview
- Hero section with CV download
- About profile and portrait
- Experience timeline
- Tech stack grid
- Contact and social links

## Features
- Hero and CTA: `features/hero.md`
- About section: `features/about.md`
- Experience timeline: `features/experience.md`
- Tech stack grid: `features/tech-stack.md`
- Navigation overlay: `features/navigation.md`
- Interactions and motion: `features/interactions.md`
- Contact footer: `features/contact.md`

## Tech Stack
- React 19
- Vite 7
- Tailwind CSS 4
- Framer Motion
- React Icons
- Lenis (CDN for smooth scrolling)

## Local Development
1. `npm install`
2. `npm run dev`

## Scripts
- `npm run dev` starts the dev server
- `npm run build` builds for production
- `npm run preview` previews the production build
- `npm run lint` runs ESLint

## Project Structure
- `src/components/` contains all site sections and UI effects
- `src/App.jsx` wires the layout and smooth scrolling
- `public/` stores the CV PDF, portrait, and icons
- `features/` documents key sections and behaviors

## Notes
- Smooth scrolling is initialized in `src/App.jsx` and depends on the Lenis script in `index.html`.
