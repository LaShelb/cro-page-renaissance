
import React, { useState } from "react";
import { MYALogo } from "@/components/MYALogo";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PhaseCustomizationModal } from "@/components/PhaseCustomizationModal";

interface Phase {
  id: number;
  title: string;
  duration: string;
  month: string;
  color: string;
  bgColor: string;
}

const initialPhases: Phase[] = [
  {
    id: 1,
    title: "Define the Foundation",
    duration: "1 month",
    month: "September",
    color: "bg-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    title: "Build Core Skills", 
    duration: "2 months",
    month: "October",
    color: "bg-green-500",
    bgColor: "bg-green-50",
  },
  {
    id: 3,
    title: "Advanced Practice",
    duration: "4 months", 
    month: "December",
    color: "bg-purple-500",
    bgColor: "bg-purple-50",
  }
];

const GlobalTimeline = () => {
  const navigate = useNavigate();
  const [phases, setPhases] = useState<Phase[]>(initialPhases);
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const handlePhaseClick = (phase: Phase) => {
    setSelectedPhase(phase);
    setIsAddingNew(false);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setSelectedPhase(null);
    setIsAddingNew(true);
    setIsModalOpen(true);
  };

  const handleSavePhase = (updatedPhase: Phase) => {
    if (isAddingNew) {
      setPhases(prev => [...prev, updatedPhase]);
    } else {
      setPhases(prev => 
        prev.map(phase => 
          phase.id === updatedPhase.id ? updatedPhase : phase
        )
      );
    }
  };

  const handleDeletePhase = (phaseId: number) => {
    setPhases(prev => prev.filter(phase => phase.id !== phaseId));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPhase(null);
    setIsAddingNew(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/")}
            className="rounded-full"
          >
            <ArrowLeft size={20} />
          </Button>
          <MYALogo size={32} />
        </div>
        <Button variant="ghost" className="text-gray-600">
          Sign in
        </Button>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Learning Journey
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            A structured path designed to help you achieve your goal efficiently
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-gray-600 text-sm">
            <Calendar size={14} />
            <span>{phases.reduce((total, phase) => {
              const months = parseInt(phase.duration.split(' ')[0]) || 1;
              return total + months;
            }, 0)} months timeline</span>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Timeline Overview</h2>
            <p className="text-sm text-gray-500">Click phases to customize • Drag to reorder</p>
          </div>

          {/* Phase Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {phases.map((phase) => (
              <div 
                key={phase.id} 
                onClick={() => handlePhaseClick(phase)}
                className={`${phase.bgColor} rounded-2xl p-6 border-2 border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-105`}
              >
                {/* Phase Number */}
                <div className={`w-10 h-10 ${phase.color} rounded-xl flex items-center justify-center text-white font-semibold text-sm mb-4`}>
                  {phase.id}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {phase.title}
                  </h3>
                  <div className="space-y-1">
                    <div className="text-sm font-medium text-gray-700">
                      {phase.duration}
                    </div>
                    <div className="text-xs text-gray-500">
                      Starting {phase.month}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Add Phase Card */}
            <div 
              onClick={handleAddNew}
              className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-gray-300 transition-colors cursor-pointer min-h-[160px] hover:scale-105"
            >
              <div className="w-10 h-10 border-2 border-gray-300 rounded-xl flex items-center justify-center mb-3">
                <Plus size={16} className="text-gray-400" />
              </div>
              <div className="text-sm font-medium text-gray-600 mb-1">Add New Phase</div>
              <div className="text-xs text-gray-400">Customize your journey</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-3">
          <Button 
            variant="outline" 
            onClick={() => navigate("/")}
            className="px-6"
          >
            Back to Home
          </Button>
          <Button className="px-6 bg-blue-600 hover:bg-blue-700">
            Continue Journey
          </Button>
        </div>
      </main>

      {/* Customization Modal */}
      <PhaseCustomizationModal
        phase={selectedPhase}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSavePhase}
        onDelete={!isAddingNew ? handleDeletePhase : undefined}
      />
    </div>
  );
};

export default GlobalTimeline;
