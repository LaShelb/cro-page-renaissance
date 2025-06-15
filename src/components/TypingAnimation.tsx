
import React, { useState, useEffect } from "react";

const examples = [
  {
    goal: "I want to run a marathon",
    actions: [
      "Pick a race date",
      "Buy running shoes", 
      "Follow a 16-week plan",
      "Do your first training run"
    ]
  },
  {
    goal: "I want to start a business",
    actions: [
      "Define your business idea",
      "Research your target market",
      "Create a simple business plan",
      "Register your business name"
    ]
  },
  {
    goal: "I want to learn piano",
    actions: [
      "Find a piano or keyboard",
      "Download a learning app",
      "Practice 15 minutes daily",
      "Learn your first song"
    ]
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
          setCurrentExampleIndex((prev) => (prev + 1) % examples.length);
          setPhase('typing');
        }
        break;
    }

    return () => clearTimeout(timeout);
  }, [displayedText, fullText, phase, currentExampleIndex]);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-8">
      <div className="mb-6">
        <div className="text-lg font-medium text-gray-700 mb-1">
          <span className="text-gray-400">&gt; </span>
          <span className="text-gray-900">{displayedText}</span>
          <span className="animate-pulse">|</span>
        </div>
      </div>
      
      <div className={`space-y-3 transition-all duration-300 ${showActions ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'}`}>
        {currentExample.actions.map((action, index) => (
          <div 
            key={`${currentExampleIndex}-${index}`}
            className={`flex items-center text-gray-600 transition-all duration-300 delay-${index * 100}`}
            style={{
              transitionDelay: showActions ? `${index * 100}ms` : '0ms'
            }}
          >
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
            <span>{action}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
