"use client";
import { useEffect, useRef, useState } from "react";
import { Paperclip, LayoutTemplate, Globe, ArrowUp, Mic } from "lucide-react";
import { ModelSelector } from "@/components/ui/ModelSelector";
import { IconButton } from "@/components/ui/IconButton";
import { Tooltip } from "@/components/ui/Tooltip";

type Props = {
  value: string;
  onChange: (v: string) => void;
  models: string[];
  onModelsChange: (ids: string[]) => void;
  onSend: () => void;
  compact?: boolean;
};

export function PromptBar({ value, onChange, models, onModelsChange, onSend, compact = false }: Props) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [webSearch, setWebSearch] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "0px";
    el.style.height = Math.min(el.scrollHeight, compact ? 120 : 220) + "px";
  }, [value, compact]);

  const send = () => { if (value.trim()) onSend(); };

  return (
    <div className="mx-auto w-full max-w-2xl px-4 pb-4">
      <div className="rounded-2xl border border-border bg-surface shadow-sm focus-within:border-accent/50">
        <textarea
          ref={ref}
          rows={1}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => { if ((e.metaKey || e.ctrlKey) && e.key === "Enter") { e.preventDefault(); send(); } }}
          placeholder="Ask a question…"
          aria-label="Prompt"
          className="max-h-[220px] w-full resize-none bg-transparent px-4 pt-3.5 text-sm leading-relaxed outline-none placeholder:text-muted"
        />
        <div className="flex items-center gap-1.5 px-2.5 pb-2.5 pt-1">
          <ModelSelector value={models} onChange={onModelsChange} />
          <Tooltip label="Attach file"><IconButton label="Attach file" size="sm"><Paperclip size={15} /></IconButton></Tooltip>
          <Tooltip label="Prompt templates"><IconButton label="Prompt templates" size="sm"><LayoutTemplate size={15} /></IconButton></Tooltip>
          <Tooltip label={webSearch ? "Web search on" : "Web search off"}>
            <IconButton label="Toggle web search" size="sm" active={webSearch} onClick={() => setWebSearch((s) => !s)}>
              <Globe size={15} />
            </IconButton>
          </Tooltip>
          <span className="flex-1" />
          <Tooltip label="Voice input"><IconButton label="Voice input" size="sm"><Mic size={15} /></IconButton></Tooltip>
          <button
            type="button"
            onClick={send}
            disabled={!value.trim()}
            aria-label="Send"
            className="grid h-9 w-9 place-items-center rounded-full bg-accent text-accent-fg disabled:opacity-40"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
      {!compact && <p className="mt-2 text-center text-[11px] text-muted">Ctrl/⌘ + Enter to send · EchoGPT can be wrong, verify important answers.</p>}
    </div>
  );
}
