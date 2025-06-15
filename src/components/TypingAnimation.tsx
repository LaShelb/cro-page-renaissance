
import React, { useState, useEffect } from "react";

const examples = [
  {
    goal: "I want to run a marathon",
    actions: ["Pick a race date", "Buy running shoes", "Follow a 16-week plan", "Do your first training run"]
  },
  {
    goal: "I want to start a business", 
    actions: ["Define your business idea", "Research your target market", "Create a simple business plan", "Register your business name"]
  },
  {
    goal: "I want to learn piano",
    actions: ["Find a piano or keyboard", "Download a learning app", "Practice 15 minutes daily", "Learn your first song"]
  }
];

export function TypingAnimation() {
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showActions, setShowActions] = useState(false);
  const [phase, setPhase] = useState<'typing' | 'showing-actions' | 'waiting' | 'deleting'>('typing');

  const currentExample = examples[currentExampleIndex];
  const fullText = currentExample.goal;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    switch (phase) {
      case 'typing':
        if (displayedText.length < fullText.length) {
          timeout = setTimeout(() => {
            setDisplayedText(fullText.slice(0, displayedText.length + 1));
          }, 50);
        } else {
          timeout = setTimeout(() => setPhase('showing-actions'), 300);
        }
        break;

      case 'showing-actions':
        setShowActions(true);
        timeout = setTimeout(() => setPhase('waiting'), 300);
        break;

      case 'waiting':
        timeout = setTimeout(() => setPhase('deleting'), 2000);
        break;

      case 'deleting':
        setShowActions(false);
        if (displayedText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayedText(displayedText.slice(0, -1));
          }, 30);
        } else {
          setCurrentExampleIndex(prev => (prev + 1) % examples.length);
          setPhase('typing');
        }
        break;
    }

    return () => clearTimeout(timeout);
  }, [displayedText, fullText, phase, currentExampleIndex]);

  return (
    <div className="mt-8 max-w-2xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        
        <div className="space-y-3">
          <div className="text-gray-900 font-medium">
            {displayedText}
            <span className="animate-pulse">|</span>
          </div>
          
          {showActions && (
            <div className="space-y-2 animate-fade-in">
              {currentExample.actions.map((action, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  {action}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
