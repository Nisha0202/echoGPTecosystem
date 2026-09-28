"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { MODELS } from "@/lib/data";

type Props = { value: string[]; onChange: (ids: string[]) => void; multi?: boolean };

export function ModelSelector({ value, onChange, multi = true }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const toggle = (id: string) => onChange(multi ? (value.includes(id) ? value.filter((v) => v !== id) : [...value, id]) : [id]);
  const label = value.length === 1 ? MODELS.find((m) => m.id === value[0])?.name : `${value.length} models`;

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex h-9 items-center gap-1.5 rounded-full border border-border bg-surface pl-2 pr-3 text-sm font-medium text-fg hover:border-accent/50"
      >
        <span className="flex -space-x-1.5">
          {value.slice(0, 3).map((id) => (
            <span key={id} className="grid h-6 w-6 place-items-center rounded-full border border-surface bg-bg text-xs">
              {MODELS.find((m) => m.id === id)?.emoji}
            </span>
          ))}
        </span>
        {label}
        <ChevronDown size={14} className="text-muted" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full z-40 mb-2 w-56 rounded-2xl border border-border bg-surface p-1.5 shadow-lg"
          >
            {MODELS.map((m) => {
              const on = value.includes(m.id);
              return (
                <li key={m.id}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={on}
                    onClick={() => toggle(m.id)}
                    className="flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm hover:bg-bg"
                  >
                    <span className="text-base">{m.emoji}</span>
                    <span className="flex-1">{m.name}</span>
                    {on && <Check size={15} className="text-accent" />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
