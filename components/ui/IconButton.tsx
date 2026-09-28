"use client";
import { forwardRef, type ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { label: string; active?: boolean; size?: "sm" | "md" };

export const IconButton = forwardRef<HTMLButtonElement, Props>(function IconButton(
  { label, active, size = "md", className = "", children, ...rest },
  ref
) {
  const dim = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  return (
    <button
      ref={ref}
      type="button"
      aria-label={label}
      title={label}
      className={`${dim} grid place-items-center rounded-full border transition-colors ${
        active ? "border-accent bg-accent/10 text-accent" : "border-transparent text-muted hover:border-border hover:text-fg hover:bg-surface"
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
});
