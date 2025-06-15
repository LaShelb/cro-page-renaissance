
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Phase {
  id: number;
  title: string;
  duration: string;
  month: string;
  color: string;
  bgColor: string;
}

interface PhaseCustomizationModalProps {
  phase: Phase | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (phase: Phase) => void;
  onDelete?: (phaseId: number) => void;
}

const colorOptions = [
  { color: "bg-blue-500", bgColor: "bg-blue-50", name: "Blue" },
  { color: "bg-green-500", bgColor: "bg-green-50", name: "Green" },
  { color: "bg-purple-500", bgColor: "bg-purple-50", name: "Purple" },
  { color: "bg-red-500", bgColor: "bg-red-50", name: "Red" },
  { color: "bg-yellow-500", bgColor: "bg-yellow-50", name: "Yellow" },
  { color: "bg-pink-500", bgColor: "bg-pink-50", name: "Pink" },
];

const monthOptions = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const PhaseCustomizationModal = ({ 
  phase, 
  isOpen, 
  onClose, 
  onSave, 
  onDelete 
}: PhaseCustomizationModalProps) => {
  const [title, setTitle] = useState(phase?.title || "");
  const [duration, setDuration] = useState(phase?.duration || "");
  const [month, setMonth] = useState(phase?.month || "");
  const [selectedColor, setSelectedColor] = useState(
    colorOptions.find(c => c.color === phase?.color) || colorOptions[0]
  );

  const handleSave = () => {
    if (!title.trim() || !duration.trim() || !month.trim()) return;

    const updatedPhase: Phase = {
      id: phase?.id || Date.now(),
      title: title.trim(),
      duration: duration.trim(),
      month: month.trim(),
      color: selectedColor.color,
      bgColor: selectedColor.bgColor,
    };

    onSave(updatedPhase);
    onClose();
  };

  const handleDelete = () => {
    if (phase && onDelete) {
      onDelete(phase.id);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {phase ? "Edit Phase" : "Add New Phase"}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Phase Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Build Core Skills"
            />
          </div>

          <div>
            <Label htmlFor="duration">Duration</Label>
            <Input
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="e.g., 2 months"
            />
          </div>

          <div>
            <Label htmlFor="month">Starting Month</Label>
            <select
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-full h-10 px-3 py-2 text-sm border border-input bg-background rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">Select month</option>
              {monthOptions.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          <div>
            <Label>Color</Label>
            <div className="flex gap-2 mt-2">
              {colorOptions.map((option) => (
                <button
                  key={option.color}
                  onClick={() => setSelectedColor(option)}
                  className={`w-8 h-8 rounded-full ${option.color} border-2 ${
                    selectedColor.color === option.color 
                      ? 'border-gray-900' 
                      : 'border-gray-200'
                  }`}
                  title={option.name}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            {phase && onDelete && (
              <Button 
                variant="destructive" 
                onClick={handleDelete}
                className="flex-1"
              >
                Delete
              </Button>
            )}
            <Button 
              variant="outline" 
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSave}
              disabled={!title.trim() || !duration.trim() || !month.trim()}
              className="flex-1"
            >
              {phase ? "Update" : "Add"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
