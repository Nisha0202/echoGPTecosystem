"use client";
import { motion } from "framer-motion";
import { STARTERS } from "@/lib/data";

export function EmptyState({ onPick }: { onPick: (text: string) => void }) {
  return (
    <div className="mx-auto flex max-w-2xl flex-1 flex-col items-center justify-center px-4 text-center">
      <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        Hello there! 👋
      </motion.h1>
      <p className="mt-2 max-w-sm text-muted">Your personal AI assistant is ready — ask me anything, anytime.</p>
      <div className="mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
        {STARTERS.map((s, i) => (
          <motion.button
            key={s.id}
            type="button"
            onClick={() => onPick(s.title)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="rounded-2xl border border-border bg-surface p-4 text-left transition-colors hover:border-accent/50"
          >
            <p className="text-sm font-semibold">{s.title}</p>
            <p className="mt-1 text-xs text-muted line-clamp-2">{s.desc}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
