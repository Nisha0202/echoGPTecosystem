import type { Feature, FaqItem, HistoryItem, Model, NavLink, StarterCard } from "./types";

export const INSTALL_URL = "https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj";
export const APP_URL = "https://echogpt.live/";

export const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Models", href: "#models" },
  { label: "Workspace", href: "#workspace" },
  { label: "Extension", href: "#extension" },
  { label: "FAQ", href: "#faq" },
];

export const FEATURES: Feature[] = [
  { icon: "MessagesSquare", title: "Multi-AI chat", text: "One prompt, every model answers at once." },
  { icon: "PanelsTopLeft", title: "Browser-native", text: "Lives in a sidebar, works on any page you're reading." },
  { icon: "Zap", title: "Built for speed", text: "Answers stream in parallel, not one tab at a time." },
  { icon: "ShieldCheck", title: "Private by default", text: "History stays on your device unless you say otherwise." },
];

export const MODELS: Model[] = [
  { id: "gpt", name: "GPT-4", color: "#10a37f", emoji: "🟢", tags: ["Reasoning", "Coding"], blurb: "Structured, step-by-step answers with a clear summary." },
  { id: "cl", name: "Claude", color: "#d97757", emoji: "🟠", tags: ["Writing", "Nuance"], blurb: "Careful and thorough, good at flagging trade-offs." },
  { id: "gm", name: "Gemini", color: "#4285f4", emoji: "🔵", tags: ["Research", "Multimodal"], blurb: "Broad context with related angles worth exploring." },
  { id: "gk", name: "Grok", color: "#78716c", emoji: "⚪", tags: ["Speed", "Concise"], blurb: "Fast, conversational, straight to the point." },
  { id: "ds", name: "DeepSeek", color: "#4d6bfe", emoji: "🔷", tags: ["Reasoning", "Open"], blurb: "Shows its reasoning before landing on an answer." },
];

export const HISTORY: HistoryItem[] = [
  { id: "h1", title: "Unlock your creative flow", time: "2h ago" },
  { id: "h2", title: "Resume for product design role", time: "Yesterday" },
  { id: "h3", title: "Debug a React hook", time: "2 days ago" },
  { id: "h4", title: "Trip plan: Lisbon", time: "Last week" },
];

export const STARTERS: StarterCard[] = [
  { id: "s1", title: "Unlock your creative flow", desc: "Custom prompts that push past writer's block and spark new ideas." },
  { id: "s2", title: "Build a resume that shines", desc: "Tailor your experience to the exact job you're chasing." },
  { id: "s3", title: "Set a challenge that transforms you", desc: "A personalised goal, sized to push your comfort zone." },
  { id: "s4", title: "Write irresistible social content", desc: "Catchy captions that actually get engagement." },
];

export const DEMO_REPLIES: Record<string, string> = {
  gpt: "Here's a structured take, step by step, with a short summary at the end.",
  cl: "Worth noting a couple of trade-offs here before you decide.",
  gm: "A broad view of this, plus a few related angles worth exploring.",
  gk: "Short version: here's the straight answer.",
  ds: "Walking through the reasoning first, then the answer.",
};

export const FAQ: FaqItem[] = [
  { q: "Is EchoGPT free to use?", a: "Yes — the Free plan covers two models per prompt with no time limit. Upgrades unlock every model at once." },
  { q: "Which browsers are supported?", a: "The extension targets Chrome today. The web app works in any modern browser, on any device." },
  { q: "Do I need my own accounts for each AI?", a: "That depends on the provider. Some models are included, others ask you to sign in with your own account." },
  { q: "Where is my conversation history stored?", a: "On your device by default. You can turn on sync in Settings if you want history across devices." },
];
