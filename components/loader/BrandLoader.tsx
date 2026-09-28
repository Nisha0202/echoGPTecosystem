"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const LABEL = "EchoGPT";

/** Full-screen brand entry: pulsing mark, letter-by-letter reveal, progress bar, then calls onDone. */
export function BrandLoader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1600;
    let raf: number;
    const tick = (t: number) => {
      const pct = Math.min(1, (t - start) / duration);
      setProgress(pct);
      if (pct < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setExiting(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="grid h-16 w-16 place-items-center rounded-full bg-accent text-accent-fg"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles size={26} />
          </motion.span>

          <div className="flex text-2xl font-extrabold tracking-tight" aria-label={LABEL}>
            {LABEL.split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.05, duration: 0.35 }}
              >
                {ch}
              </motion.span>
            ))}
          </div>

          <div className="h-1 w-40 overflow-hidden rounded-full bg-border" role="progressbar" aria-valuenow={Math.round(progress * 100)} aria-valuemin={0} aria-valuemax={100}>
            <motion.div className="h-full rounded-full bg-accent" style={{ width: `${progress * 100}%` }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
