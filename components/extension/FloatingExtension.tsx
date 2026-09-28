"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Puzzle, X } from "lucide-react";
import { ExtensionPopup } from "./ExtensionPopup";

/** Fixed-position launcher that opens the 400x600 popup as a floating panel, like a real toolbar extension. */
export function FloatingExtension() {
  const [open, setOpen] = useState(false);

  return (
    <div id="extension" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="origin-bottom-right"
          >
            <div className="mb-2 flex justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close extension preview"
                className="grid h-8 w-8 place-items-center rounded-full border border-border bg-surface text-muted hover:text-fg"
              >
                <X size={14} />
              </button>
            </div>
            <ExtensionPopup />
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close extension preview" : "Open extension preview"}
        aria-expanded={open}
        className="grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-fg shadow-lg transition-transform hover:scale-105"
      >
        <Puzzle size={20} />
      </button>
    </div>
  );
}
