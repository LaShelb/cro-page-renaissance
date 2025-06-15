
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const examples = [
  "I want to run a marathon",
  "I want to start a business", 
  "I want to learn piano",
  "I want to get in shape",
  "I want to learn Spanish"
];

export function HeroInput() {
  const [value, setValue] = useState("");
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState<'typing' | 'waiting' | 'deleting'>('typing');

  const currentExample = examples[currentExampleIndex];

  useEffect(() => {
    if (value) return; // Don't show animation if user is typing

    let timeout: NodeJS.Timeout;

    switch (phase) {
      case 'typing':
        if (displayedText.length < currentExample.length) {
          timeout = setTimeout(() => {
            setDisplayedText(currentExample.slice(0, displayedText.length + 1));
          }, 80);
        } else {
          timeout = setTimeout(() => setPhase('waiting'), 1000);
        }
        break;

      case 'waiting':
        timeout = setTimeout(() => setPhase('deleting'), 2000);
        break;

      case 'deleting':
        if (displayedText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayedText(displayedText.slice(0, -1));
          }, 50);
        } else {
          setCurrentExampleIndex((prev) => (prev + 1) % examples.length);
          setPhase('typing');
        }
        break;
    }

    return () => clearTimeout(timeout);
  }, [displayedText, currentExample, phase, currentExampleIndex, value]);

  return (
    <form 
      className="mx-auto w-full max-w-xl md:max-w-2xl flex flex-col items-center animate-fade-in" 
      onSubmit={e => {
        e.preventDefault();
        // Trigger your main action here
      }} 
      aria-label="Ask MYA"
    >
      <div className="flex w-full items-center bg-[#f8f6f3] shadow-lg rounded-2xl px-6 py-4 relative gap-3 border border-input">
        <input 
          className="flex-1 bg-transparent focus:outline-none text-lg md:text-xl font-normal text-gray-700 placeholder-gray-500" 
          placeholder={value ? "Ask MYA to create a plan about..." : displayedText}
          value={value} 
          onChange={e => setValue(e.target.value)} 
          aria-label="Main prompt" 
          autoFocus 
        />
        
        <button 
          type="submit" 
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-white w-9 h-9 flex items-center justify-center rounded-full transition duration-150 shadow-md focus:outline-none" 
          aria-label="Submit"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </form>
  );
}
