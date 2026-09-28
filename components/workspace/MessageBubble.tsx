"use client";
import { motion } from "framer-motion";
import { Copy, RefreshCw, GitBranch, Share2, Pencil } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";
import { MODELS } from "@/lib/data";
import type { Message } from "@/lib/types";

const ACTIONS_USER = [["Edit", Pencil], ["Copy", Copy]] as const;
const ACTIONS_AI = [["Copy", Copy], ["Retry", RefreshCw], ["Branch", GitBranch], ["Share", Share2]] as const;

export function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";
  const model = message.modelId ? MODELS.find((m) => m.id === message.modelId) : undefined;
  const actions = isUser ? ACTIONS_USER : ACTIONS_AI;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`group flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}
    >
      <span
        className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-sm"
        style={{ background: isUser ? "var(--accent)" : "var(--surface)", color: isUser ? "var(--accent-fg)" : undefined }}
      >
        {isUser ? "you" : model?.emoji ?? "✦"}
      </span>
      <div className={`max-w-[75%] ${isUser ? "items-end" : "items-start"} flex flex-col`}>
        {model && <span className="mb-1 text-xs font-semibold" style={{ color: model.color }}>{model.name}</span>}
        <div className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${isUser ? "bg-accent text-accent-fg" : "border border-border bg-surface"}`}>
          {message.content}
        </div>
        <div className={`mt-1 flex gap-0.5 opacity-0 transition-opacity group-hover:opacity-100 ${isUser ? "flex-row-reverse" : ""}`}>
          {actions.map(([label, Icon]) => (
            <IconButton key={label} label={label} size="sm"><Icon size={13} /></IconButton>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
