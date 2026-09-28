"use client";
import { motion } from "framer-motion";
import type { Model } from "@/lib/types";

export function SkeletonMessage({ model }: { model: Model }) {
  return (
    <div className="flex gap-3">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border bg-surface text-sm">{model.emoji}</span>
      <div className="flex-1 space-y-2 pt-1.5">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold" style={{ color: model.color }}>{model.name}</span>
          <span className="flex gap-0.5">
            {[0, 1, 2].map((i) => (
              <motion.span key={i} className="h-1 w-1 rounded-full bg-muted" animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.15 }} />
            ))}
          </span>
        </div>
        {[ "w-11/12", "w-4/5", "w-2/3" ].map((w, i) => (
          <div key={i} className={`h-3 ${w} animate-pulse rounded-full bg-border`} />
        ))}
      </div>
    </div>
  );
}
