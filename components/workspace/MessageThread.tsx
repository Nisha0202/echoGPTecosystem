"use client";
import { AnimatePresence } from "framer-motion";
import { MessageBubble } from "./MessageBubble";
import { SkeletonMessage } from "./SkeletonMessage";
import { MODELS } from "@/lib/data";
import type { Message } from "@/lib/types";

export function MessageThread({ messages, pendingModelIds }: { messages: Message[]; pendingModelIds: string[] }) {
  return (
    <div className="mx-auto w-full max-w-2xl flex-1 space-y-5 overflow-y-auto px-4 py-6 no-scrollbar">
      <AnimatePresence initial={false}>
        {messages.map((m) => <MessageBubble key={m.id} message={m} />)}
      </AnimatePresence>
      {pendingModelIds.map((id) => {
        const model = MODELS.find((m) => m.id === id)!;
        return <SkeletonMessage key={id} model={model} />;
      })}
    </div>
  );
}
