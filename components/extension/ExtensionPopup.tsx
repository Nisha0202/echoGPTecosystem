"use client";
import { useState } from "react";
import { Settings, Sparkles } from "lucide-react";
import { MODELS } from "@/lib/data";
import { IconButton } from "@/components/ui/IconButton";
import { Tooltip } from "@/components/ui/Tooltip";
import { Workspace } from "@/components/workspace/Workspace";

/** Fixed 400x600 popup shell — same Workspace, no sidebar, a compact model strip instead. */
export function ExtensionPopup() {
  const [active, setActive] = useState("gpt");
  return (
    <div className="flex h-[600px] w-[400px] flex-col overflow-hidden rounded-2xl border border-border bg-bg text-fg shadow-xl">
      <header className="flex items-center gap-2 border-b border-border px-3 py-2.5">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-accent-fg"><Sparkles size={14} /></span>
        <span className="text-sm font-bold">EchoGPT</span>
        <span className="flex-1" />
        <Tooltip label="Settings"><IconButton label="Settings" size="sm"><Settings size={15} /></IconButton></Tooltip>
      </header>
      <div className="flex gap-1.5 overflow-x-auto border-b border-border px-3 py-2 no-scrollbar">
        {MODELS.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setActive(m.id)}
            className={`flex h-7 shrink-0 items-center gap-1 rounded-full border px-2.5 text-xs font-medium ${
              active === m.id ? "border-accent bg-accent/10 text-accent" : "border-border text-muted"
            }`}
          >
            {m.emoji} {m.name}
          </button>
        ))}
      </div>
      <Workspace compact />
    </div>
  );
}
