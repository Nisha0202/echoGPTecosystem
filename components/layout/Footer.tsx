import { Github, Twitter, MessageCircle } from "lucide-react";
import { APP_URL } from "@/lib/data";

const LEGAL = [["Privacy", "#"], ["Terms", "#"], ["Security", "#"]];
const SOCIAL = [["Twitter", Twitter, "#"], ["GitHub", Github, "#"], ["Discord", MessageCircle, "#"]] as const;

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 EchoGPT.</span>
        <nav className="flex flex-wrap gap-4" aria-label="Legal">
          <a href={APP_URL}>Web app</a>
          {LEGAL.map(([l, h]) => <a key={l} href={h}>{l}</a>)}
        </nav>
        <div className="flex gap-3">
          {SOCIAL.map(([label, Icon, href]) => (
            <a key={label} href={href} aria-label={label} className="grid h-9 w-9 place-items-center rounded-full border border-border hover:text-fg">
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
