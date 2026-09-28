"use client";
import { Sidebar } from "@/components/layout/Sidebar";
import { Workspace } from "@/components/workspace/Workspace";
import { Reveal } from "@/components/ui/Reveal";

/** The real Sidebar + Workspace components, embedded in a framed "browser window" for review. */
export function WorkspaceShowcase() {
  return (
    <section id="workspace" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal className="mb-8 text-center">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">The web app, live</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm text-muted">Fully interactive — type a prompt, pick models, watch it stream.</p>
      </Reveal>
      <Reveal delay={0.1} className="overflow-hidden rounded-2xl border border-border shadow-sm">
        <div className="flex h-9 items-center gap-1.5 border-b border-border bg-surface px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </div>
        <div className="flex h-[620px] bg-bg">
          <Sidebar compact />
          <Workspace />
        </div>
      </Reveal>
    </section>
  );
}
