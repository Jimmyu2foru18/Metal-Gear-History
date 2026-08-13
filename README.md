# Metal Gear Solid — Canonical Timeline

> A interactive web app documenting the chronological history of the Metal Gear Solid universe.

---

## Project Overview

**Metal Gear Solid — Canonical Timeline** is a single-page web application that presents the entire chronology of the Metal Gear Solid franchise as an immersive, cinematic journey. Designed with the same aesthetic DNA as the games themselves, the interface merges tactical espionage UI, gritty industrial textures, and cyberpunk HUD elements to create a browsing experience that feels less like reading Wikipedia and more like accessing a classified military database.

The timeline is organized by **in-universe years**, allowing users to traverse decades of lore—from the early Cold War missions of **The Joy** and **Naked Snake** to the post-human conflicts of **Revolver Ocelot** and the **Patriots**. Each era features curated imagery, concise event summaries, and rich contextual metadata.

---

## Key Features

### 1. Cinematic Navigation & Motion Design
- **Parallax scrolling** with depth-aware layers; background elements move slower than foreground to create a 3D spatial feel.
- **Fade-in / fade-out transitions** triggered by intersection observers as timeline nodes enter the viewport.
- **Glitch & scanline effects** on headers, dividers, and image reveals—mimicking intercepted transmissions or corrupted data.
- **Smooth scroll snapping** between major timeline eras (e.g., "The 1960s," "The Shadow Moses Incident").
- **Custom cursor** styled as a tactical reticle or targeting crosshair that reacts to interactive elements.

### 2. Timeline Data Architecture
- **Chronological nodes** sorted by in-universe year, with branch markers for non-linear story arcs (e.g., parallel missions, flashbacks).
- **Knowledge cards** per era containing:
  - Event title and operative codename
  - High-resolution concept art / screenshot (via optimized lazy-loading)
  - Concise 150-word lore summary
  - Connected nodes (related characters, locations, or preceding/following missions)
- **Filter system** by era, protagonist, or major conflict (e.g., "Snake Eater," "Outer Heaven," "Liberia").

### 3. Immersive Atmosphere
- **Audio-reactive elements**: subtle static or radio-chatter ambience that intensifies during scroll transitions.
- **HUD overlays**: operational status indicators, coordinates, and encryption-level badges (mirroring the Codec interface).
- **Dark-mode default** with a palette of olive drab, tactical black, rust orange, and CRT phosphor green.

### 4. Responsive & Accessible
- Fully responsive layout optimized for desktop, tablet, and mobile.
- Keyboard-navigable timeline with focus states.
- Semantic HTML structure with ARIA labels for screen readers.

---

## Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Framework** | **React 18+** (Next.js recommended) | Component architecture suits nested timeline nodes; SSR/SSG improves SEO for lore content. |
| **Animation Engine** | **Framer Motion** + **GSAP** | Framer Motion for scroll-triggered reveals and layout animations; GSAP ScrollTrigger for complex parallax timelines. |
| **Styling** | **Tailwind CSS** | Rapid UI construction with custom plugin for glitch effects, scanlines, and HUD components. |
| **3D / Advanced FX** | **Three.js / React Three Fiber** | Optional: wireframe globe or tactical map for era selection. |
| **State Management** | **Zustand** or **React Context** | Lightweight state for active era, filters, and audio settings. |
| **Content Layer** | **MDX / Headless CMS** (Sanity or Strapi) | Editors can update lore entries without touching code; supports rich text and image assets. |
| **Image Optimization** | **Next.js Image** / **Cloudinary** | Auto WebP/AVIF conversion, responsive sizing, and lazy loading. |
| **Hosting** | **Vercel** or **Netlify** | Edge deployment for fast global CDN delivery; supports preview environments for content updates. |

---

## Design Language

- **Typography**: `Oswald` or `Barlow Condensed` for headlines (military stencil feel); `Inter` or `IBM Plex Sans` for body text.
- **Color Palette**:
  - Background: `#0a0e0f` (near-black tactical)
  - Primary: `#3a5f0b` (olive drab)
  - Accent: `#ff4d00` (rust orange / warning)
  - Text: `#e0e6ed` (off-white)
  - HUD Green: `#00ff41` (CRT terminal)
- **Textures**: Subtle noise grain, scanline overlays, and vignette effects rendered via CSS pseudo-elements and SVG filters.
- **Motion Principles**: Every scroll action should feel physical—heavy, grounded, but precise. Transitions are never purely decorative; they reinforce the "classified briefing" narrative.

---

*"Snake? Snake?! SNAKE!!!"*
