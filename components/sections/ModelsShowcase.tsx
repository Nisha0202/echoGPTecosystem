"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MODELS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function ModelsShowcase() {
  const [active, setActive] = useState(MODELS[0].id);
  const model = MODELS.find((m) => m.id === active)!;

  return (
    <section id="models" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal className="mb-10 text-center">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Your favourite models, together</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm text-muted">Pick one to see how it tends to answer.</p>
      </Reveal>
      <Reveal className="flex flex-wrap justify-center gap-2">
        {MODELS.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setActive(m.id)}
            className={`flex h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors ${
              active === m.id ? "border-accent bg-accent/10 text-accent" : "border-border text-muted hover:text-fg"
            }`}
          >
            <span>{m.emoji}</span>{m.name}
          </button>
        ))}
      </Reveal>
      <div className="relative mt-6 min-h-[168px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={model.id}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
            className="mx-auto max-w-xl rounded-2xl border border-border bg-surface p-8 text-center"
          >
            <span className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full text-2xl" style={{ background: `${model.color}22` }}>
              {model.emoji}
            </span>
            <h3 className="text-lg font-bold" style={{ color: model.color }}>{model.name}</h3>
            <p className="mt-2 text-sm text-muted">{model.blurb}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {model.tags.map((t) => (
                <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted">{t}</span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
