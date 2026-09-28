export type Role = "user" | "assistant";
export type Message = { id: string; role: Role; modelId?: string; content: string; streaming?: boolean };
export type Model = { id: string; name: string; color: string; emoji: string; tags: string[]; blurb: string };
export type HistoryItem = { id: string; title: string; time: string };
export type StarterCard = { id: string; title: string; desc: string };
export type NavLink = { label: string; href: string };
export type Feature = { icon: string; title: string; text: string };
export type FaqItem = { q: string; a: string };
