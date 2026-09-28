"use client";

/** Two soft blurred orbs drifting behind the whole app. Purely decorative. */
export function MotionBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-1/4 -top-1/4 h-[55vw] w-[55vw] rounded-full bg-accent/20 blur-[100px] animate-drift" />
      <div
        className="absolute right-[-15%] top-1/3 h-[45vw] w-[45vw] rounded-full bg-blue-400/15 blur-[100px] animate-drift"
        style={{ animationDelay: "-8s", animationDuration: "32s" }}
      />
    </div>
  );
}
