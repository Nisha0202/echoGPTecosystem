"use client";
import { useState } from "react";
import { EmptyState } from "./EmptyState";
import { MessageThread } from "./MessageThread";
import { PromptBar } from "./PromptBar";
import { DEMO_REPLIES } from "@/lib/data";
import type { Message } from "@/lib/types";

/** Owns conversation state. Replace `send()`'s setTimeout with a real API call. */
export function Workspace({ compact = false }: { compact?: boolean }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [draft, setDraft] = useState("");
  const [models, setModels] = useState<string[]>(["gpt", "cl"]);
  const [pending, setPending] = useState<string[]>([]);

  const send = (text?: string) => {
    const content = (text ?? draft).trim();
    if (!content) return;
    setMessages((m) => [...m, { id: crypto.randomUUID(), role: "user", content }]);
    setDraft("");
    setPending(models);
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        ...models.map((id) => ({ id: crypto.randomUUID(), role: "assistant" as const, modelId: id, content: DEMO_REPLIES[id] })),
      ]);
      setPending([]);
    }, 1400);
  };

  return (
    <div className="flex h-full min-w-0 flex-1 flex-col">
      {messages.length === 0 && pending.length === 0 ? (
        <EmptyState onPick={(t) => send(t)} />
      ) : (
        <MessageThread messages={messages} pendingModelIds={pending} />
      )}
      <PromptBar value={draft} onChange={setDraft} models={models} onModelsChange={setModels} onSend={() => send()} compact={compact} />
    </div>
  );
}
