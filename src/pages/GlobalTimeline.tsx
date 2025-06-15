
import React from "react";
import { MYALogo } from "@/components/MYALogo";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, Calendar, Edit2, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const phases = [
  {
    id: 1,
    title: "Define the Foundation",
    duration: "1 month",
    month: "September",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    id: 2,
    title: "Build Core Skills", 
    duration: "2 months",
    month: "October",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    id: 3,
    title: "Advanced Practice",
    duration: "4 months", 
    month: "December",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  }
];

const GlobalTimeline = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate("/")}
              className="h-10 w-10 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft size={18} />
            </Button>
            <MYALogo size={28} />
          </div>
          <Button variant="outline" className="rounded-full px-6">
            Sign in
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Your Learning Journey
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A structured path designed to help you achieve your goal efficiently
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-gray-600">
            <Calendar size={16} />
            <span className="text-sm font-medium">8 months timeline</span>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Timeline Overview</h2>
            <p className="text-gray-500">Click phases to customize • Drag to reorder</p>
          </div>

          {/* Phase Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {phases.map((phase) => (
              <div key={phase.id} className="group">
                {/* Phase Card */}
                <div className={`relative ${phase.bgColor} ${phase.borderColor} border-2 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${phase.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {phase.id}
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-8 h-8 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all">
                        <Edit2 size={14} className="text-gray-600" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all">
                        <Trash2 size={14} className="text-red-500" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {phase.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full">
                          {phase.duration}
                        </span>
                        <span className="text-sm text-gray-500">
                          Starting {phase.month}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Progress indicator */}
                  <div className="mt-6">
                    <div className="w-full bg-white rounded-full h-2">
                      <div className={`bg-gradient-to-r ${phase.color} h-2 rounded-full`} style={{width: '0%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Add Phase Card */}
            <div className="group">
              <div className="border-2 border-dashed border-gray-300 rounded-3xl p-8 h-full flex flex-col items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-all duration-300 cursor-pointer min-h-[280px]">
                <div className="w-12 h-12 rounded-2xl border-2 border-current flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Plus size={24} />
                </div>
                <span className="font-semibold">Add New Phase</span>
                <span className="text-sm mt-1">Customize your journey</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/")}
              className="rounded-full px-8 py-6 text-base font-semibold"
            >
              Back to Home
            </Button>
            <Button 
              size="lg"
              className="rounded-full px-8 py-6 text-base font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Continue Journey
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GlobalTimeline;
