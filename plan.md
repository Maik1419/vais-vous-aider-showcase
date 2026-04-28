# David Maikandi — World-Class Digital Experience Overhaul

## 1. CINEMATIC ONBOARDING (Awwwards Grade)
- **Preloader v2**: Enhance `Preloader.tsx` with a high-fidelity loading sequence. Use a "masking" technique where the logo reveals behind the percentage. Add architectural metadata (coordinates, project phases) appearing as subtle glitches.
- **Intro Sequence**: Transition from preloader to hero using a multi-layer "shutter" effect.

## 2. HERO: THE MONUMENTAL ARCHITECT
- **Motion System**: Implement a mouse-reactive architectural grid that distorts slightly based on cursor velocity.
- **Lighting**: Add a "God Ray" or "Light Sweep" effect across the main title `DAVID MAIKANDI`.
- **Progressive Reveal**: Text should reveal using a "clip-path" or "mask" animation rather than simple opacity.

## 3. SIGNATURE PHILOSOPHY (Storytelling)
- **New Component `Signature.tsx`**: A full-screen high-contrast section. Large, bold serif typography. As the user scrolls, the letters should "morph" or "breathe".
- **Quote**: “Construire plus qu’un bâtiment. Concevoir des fondations pour l’avenir.”

## 4. PORTFOLIO: THE FLUID JOURNEY
- **Horizontal Refinement**: Refine the horizontal scroll in `Portfolio.tsx`. Add "Smooth Scroll" logic for the horizontal movement.
- **Image Masking**: Images should reveal with a "pan and zoom" effect inside a clip-path that opens as it enters the screen.
- **Metric Overlay**: Interactive floating technical data that "sticks" to the cursor when hovering a project.

## 5. EXPERTISE & PROCESS: ARCHITECTURAL PRECISION
- **Expertise Blocks**: Use a "Blueprint" aesthetic. Lines that draw themselves as you hover.
- **Interactive Methodology**: A timeline where the background color or "lighting" shifts as you progress through steps (Analysis -> Design -> Engineering -> Oversight).

## 6. ULTRA-PREMIUM CONTACT
- **Minimalist Form**: Interactive fields that glow or change border-style on focus.
- **Success Feedback**: A cinematic "Success" overlay instead of a simple toast.

## 7. GLOBAL INTERACTIONS
- **Custom Cursor v2**: A multi-state cursor. "Drag" for portfolio, "View" for images, "Link" for buttons. Add a trailing "light shadow" effect.
- **Typography**: Refined hierarchy with `font-serif` for titles and `font-sans` for technical data. Use #C9A227 (Gold) as a surgical accent.
