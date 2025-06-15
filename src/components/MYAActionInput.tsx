
import React, { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

export function MYAActionInput() {
  const [goal, setGoal] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [flashPlan, setFlashPlan] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Simulated action breakdown (replace with actual in future)
  const instantBreakdown = (val: string) =>
    val
      ? `1. Define mini-goal · 2. Set a tiny task · 3. Celebrate progress`
      : null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsFocused(false);
    setFlashPlan(instantBreakdown(goal));
    setTimeout(() => setFlashPlan(null), 3000);
    setGoal("");
    if (inputRef.current) inputRef.current.blur();
  }

  return (
    <div className="w-full flex flex-col gap-5 items-center">
      <form
        className={`
          w-full max-w-md md:max-w-lg flex gap-2 items-center bg-white shadow-xl rounded-xl px-5 py-3 
          border border-input transition-all duration-200
          ${isFocused ? "ring-2 ring-orange-400 shadow-2xl scale-105" : ""}
        `}
        style={{marginBottom: 0}}
        onSubmit={handleSubmit}
        aria-label="Describe your goal"
        autoComplete="off"
        tabIndex={0}
      >
        <Input
          ref={inputRef}
          type="text"
          className={`flex-1 bg-transparent border-transparent focus:outline-none text-lg md:text-xl font-medium placeholder:text-gray-400 transition-none`}
          placeholder="Turn my idea into action…"
          value={goal}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={e => {
            setGoal(e.target.value);
            setFlashPlan(null);
          }}
          aria-label="Describe your goal"
          autoFocus
          maxLength={120}
        />
        <button
          type="submit"
          className={`
            flex items-center justify-center rounded-full bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-500 
            text-white shadow-md hover:scale-105 transition-transform w-12 h-12 md:w-12 md:h-12 text-lg font-bold duration-150
            outline-none focus-visible:ring-2 focus-visible:ring-pink-400
            active:scale-95
          `}
          aria-label="Break down now"
        >
          <ArrowRight size={25} />
        </button>
      </form>
      {/* Animated feedback on submit */}
      <div
        className={`h-7 min-h-7 relative transition-all text-center w-full max-w-md`}
        aria-live="polite"
      >
        {flashPlan && (
          <div className="absolute inset-0 z-10 bg-white/80 rounded-xl shadow-lg p-3 text-base md:text-lg font-semibold text-gray-900 animate-fade-in">
            {flashPlan}
          </div>
        )}
      </div>
    </div>
  );
}
