import { X } from "lucide-react";
import { useEffect, useState } from "react";
import Form from "../Form";

interface TaskModalExampleProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TaskModalExample({
  isOpen,
  onClose,
}: TaskModalExampleProps) {

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div
        className="relative z-10 w-full max-w-md bg-white dark:bg-[#1C1D22] rounded-lg p-6 shadow-lg cursor-pointer"
        onClick={(e) => e.stopPropagation()} // Prevent close on modal click
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-[#1C1D22] dark:text-white">
            Add New Task
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 dark:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

       <Form />
      </div>

      {/* Overlay click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>
    </div>
  );
}
