"use client";
import { useId, useState, type ReactNode } from "react";

export function Tooltip({ label, children, side = "right" }: { label: string; children: ReactNode; side?: "right" | "top" | "bottom" }) {
  const [show, setShow] = useState(false);
  const id = useId();
  const pos = side === "right" ? "left-full top-1/2 -translate-y-1/2 ml-2" : side === "top" ? "bottom-full left-1/2 -translate-x-1/2 mb-2" : "top-full left-1/2 -translate-x-1/2 mt-2";
  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      <span
        role="tooltip"
        id={id}
        className={`pointer-events-none absolute ${pos} whitespace-nowrap rounded-md border border-border bg-surface px-2 py-1 text-xs text-fg shadow-sm transition-opacity duration-150 z-50 ${show ? "opacity-100" : "opacity-0"}`}
      >
        {label}
      </span>
    </span>
  );
}
