# EchoGPT Showcase (Next.js + TypeScript + Tailwind + Framer Motion)

One continuous single-page review experience: brand loader → landing page →
live embedded web-app workspace → floating Chrome-extension preview.

# Technologies used
- Next.js 15 (App Router), React 19, TypeScript (strict)
- Tailwind CSS 3 with CSS-variable design tokens
- Framer Motion for the loader, scroll reveals, tab and accordion transitions, sidebar collapse
- Lucide React for icons
- Raleway via next/font/google

# Setup
- Requires Node.js 18.18 or newer.

    npm install
    npm run dev      # http://localhost:3000

## Flow
1. `components/loader/BrandLoader.tsx` — full-screen pulse + letter reveal +
   progress bar, then fades out and unmounts (`app/page.tsx` swaps it for the
   real page in an `AnimatePresence`).
2. `components/sections/Hero.tsx` … `CtaBanner.tsx` — the marketing sections,
   each fading in on scroll via `components/ui/Reveal.tsx` (`whileInView`).
3. `components/sections/WorkspaceShowcase.tsx` — the *actual* `Sidebar` +
   `Workspace` components (collapsible sidebar, auto-resize prompt bar with
   model/upload/templates/web-search icons, empty state, skeleton streaming,
   hover message actions) embedded in a browser-chrome frame, fully usable.
4. `components/extension/FloatingExtension.tsx` — a fixed bottom-right launcher
   that opens the same `ExtensionPopup` (400×600, model switcher, quick
   actions, settings) as a floating panel, exactly as it would sit as a real
   toolbar extension.

## Structure
- `app/` — root layout (Raleway via `next/font`, theme script) and the single page.
- `components/layout` — `Header`, `Footer`, `Sidebar`, `MotionBackground` (ambient drifting orbs).
- `components/sections` — landing sections + `WorkspaceShowcase`.
- `components/workspace` — `Workspace`, `PromptBar`, `EmptyState`, `MessageThread`,
  `MessageBubble`, `SkeletonMessage` — the reusable chat engine, shared by both
  the embedded web app and the extension popup.
- `components/extension` — `ExtensionPopup`, `FloatingExtension`.
- `components/ui` — `Reveal`, `Tooltip`, `IconButton`, `ModelSelector`.
- `lib/data.ts` / `lib/types.ts` — every model, feature, FAQ entry and demo
  reply. Edit here; `Workspace.tsx`'s `send()` fakes a 1.4s delay before
  appending demo replies — swap that for a real API call.

Dark mode, palette and font are all CSS variables in `app/globals.css`, mapped
into Tailwind via `tailwind.config.ts`.
