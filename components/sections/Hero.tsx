"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { APP_URL, INSTALL_URL, MODELS } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:pt-28">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
          className="text-4xl font-extrabold tracking-tight sm:text-6xl"
        >
          Interact with EchoGPT
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}
          className="mx-auto mt-5 max-w-md text-muted"
        >
          GPT-4, Claude, Gemini, Grok and DeepSeek — answering side by side, right from your browser.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href={INSTALL_URL} className="h-12 rounded-full bg-accent px-6 text-sm font-semibold text-accent-fg leading-[3rem]">Install Chrome Extension</a>
          <a href={APP_URL} className="h-12 rounded-full border border-border px-6 text-sm font-semibold leading-[3rem] hover:border-accent/50">Try Web App</a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }}
        className="group relative mx-auto mt-16 aspect-video max-w-4xl cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface"
      >
        <div className="flex h-full items-center justify-center gap-6 px-6">
          {MODELS.map((m, i) => (
            <motion.span
              key={m.id}
              className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-border bg-bg text-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
            >
              {m.emoji}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0 grid place-items-center bg-fg/0 transition-colors group-hover:bg-fg/5">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-accent text-accent-fg shadow-lg transition-transform group-hover:scale-105">
            <Play size={22} fill="currentColor" />
          </span>
        </div>
        <span className="absolute bottom-4 left-4 rounded-full bg-surface/90 px-3 py-1 text-xs text-muted">See it in action — 0:32</span>
      </motion.div>
    </section>
  );
}
