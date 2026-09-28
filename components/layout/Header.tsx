"use client";
import { useState } from "react";
import { Menu, Moon, Sparkles, Sun, X } from "lucide-react";
import { NAV_LINKS, INSTALL_URL } from "@/lib/data";

export function Header() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5">
        <a href="#top" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-accent-fg"><Sparkles size={16} /></span>
          EchoGPT
        </a>
        <nav className="ml-auto hidden gap-6 text-sm text-muted md:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => <a key={l.href} href={l.href} className="hover:text-fg">{l.label}</a>)}
        </nav>
        <button type="button" onClick={toggleTheme} aria-label="Toggle dark mode" className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted hover:text-fg">
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <a href={INSTALL_URL} className="hidden h-10 items-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-fg sm:flex">Add to Chrome</a>
        <button type="button" className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-5 py-3 md:hidden" aria-label="Primary mobile">
          {NAV_LINKS.map((l) => <a key={l.href} href={l.href} className="py-2 text-sm" onClick={() => setOpen(false)}>{l.label}</a>)}
        </nav>
      )}
    </header>
  );
}
