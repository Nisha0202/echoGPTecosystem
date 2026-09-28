"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  PenSquare, MessageSquareText, Settings, User, Sun, Moon,
  PanelLeftClose, PanelLeftOpen, Sparkles,
} from "lucide-react";
import { HISTORY } from "@/lib/data";
import { Tooltip } from "@/components/ui/Tooltip";
import { IconButton } from "@/components/ui/IconButton";

export function Sidebar({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(!compact);
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };

  return (
    <motion.aside
      animate={{ width: open ? (compact ? 208 : 268) : 72 }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      className="relative flex h-full shrink-0 flex-col border-r border-border bg-surface/70 backdrop-blur-sm"
    >
      <div className={`flex items-center gap-2 px-4 pt-4 ${open ? "" : "justify-center px-0"}`}>
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent text-accent-fg">
          <Sparkles size={16} />
        </span>
        {open && <span className="truncate text-[15px] font-bold tracking-tight">EchoGPT</span>}
      </div>

      <div className="px-3 pt-4">
        <Tooltip label="New chat" side="right">
          <button
            type="button"
            className={`flex h-11 w-full items-center gap-2 rounded-full bg-accent text-accent-fg font-medium text-sm hover:opacity-90 ${open ? "justify-start px-4" : "justify-center"}`}
          >
            <PenSquare size={16} />
            {open && "New chat"}
          </button>
        </Tooltip>
      </div>

      <nav className="mt-4 flex-1 overflow-y-auto px-3 no-scrollbar" aria-label="Conversation history">
        {open ? (
          <>
            <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-wider text-muted">History</p>
            <ul className="space-y-0.5">
              {HISTORY.map((h) => (
                <li key={h.id}>
                  <button type="button" className="flex w-full flex-col items-start rounded-xl px-2.5 py-2 text-left hover:bg-bg">
                    <span className="w-full truncate text-sm">{h.title}</span>
                    <span className="text-[11px] text-muted">{h.time}</span>
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="flex flex-col items-center gap-1">
            <Tooltip label="History"><IconButton label="History" size="sm"><MessageSquareText size={16} /></IconButton></Tooltip>
          </div>
        )}
      </nav>

      <div className={`flex items-center gap-1 border-t border-border p-3 ${open ? "justify-between" : "flex-col"}`}>
        <Tooltip label={dark ? "Light mode" : "Dark mode"}>
          <IconButton label="Toggle theme" onClick={toggleTheme} size="sm">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </IconButton>
        </Tooltip>
        <Tooltip label="Settings">
          <IconButton label="Settings" size="sm"><Settings size={16} /></IconButton>
        </Tooltip>
        <Tooltip label="Account">
          <IconButton label="Account" size="sm"><User size={16} /></IconButton>
        </Tooltip>
        <Tooltip label={open ? "Collapse" : "Expand"}>
          <IconButton label="Toggle sidebar" onClick={() => setOpen((o) => !o)} size="sm">
            {open ? <PanelLeftClose size={16} /> : <PanelLeftOpen size={16} />}
          </IconButton>
        </Tooltip>
      </div>
    </motion.aside>
  );
}
