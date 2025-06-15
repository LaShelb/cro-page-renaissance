import React, { useState } from "react";
import { ArrowUp, Plus } from "lucide-react";
export function HeroInput() {
  const [value, setValue] = useState("");
  return <form className="mx-auto w-full max-w-xl md:max-w-2xl flex flex-col items-center animate-fade-in" onSubmit={e => {
    e.preventDefault();
    // Trigger your main action here
  }} aria-label="Ask Lovable">
      <div className="flex w-full items-center bg-[#f8f6f3] shadow-lg rounded-2xl px-6 py-4 relative gap-3 border border-input">
        <input className="flex-1 bg-transparent focus:outline-none text-lg md:text-xl font-normal text-gray-700 placeholder-gray-500" placeholder="Ask Lovable to create a blog about..." value={value} onChange={e => setValue(e.target.value)} aria-label="Main prompt" autoFocus />
        
        <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-white w-9 h-9 flex items-center justify-center rounded-full transition duration-150 shadow-md focus:outline-none" aria-label="Submit">
          <ArrowUp size={20} />
        </button>
      </div>
    </form>;
}