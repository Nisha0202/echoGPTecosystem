"use client";
import { MessagesSquare, PanelsTopLeft, Zap, ShieldCheck, type LucideIcon } from "lucide-react";
import { FEATURES } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

const ICONS: Record<string, LucideIcon> = { MessagesSquare, PanelsTopLeft, Zap, ShieldCheck };

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal className="mb-10 text-center">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Less clicking. More answers.</h2>
      </Reveal>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {FEATURES.map((f, i) => {
          const Icon = ICONS[f.icon];
          return (
            <Reveal key={f.title} delay={i * 0.06} className="rounded-2xl border border-border bg-surface p-6 text-center">
              <span className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-accent/10 text-accent">
                <Icon size={20} />
              </span>
              <h3 className="text-sm font-semibold">{f.title}</h3>
              <p className="mt-1 text-xs text-muted">{f.text}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
