"use client";

import { useState } from "react";
import { Task } from "../TaskBoard";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: Partial<Pick<Task, "status" | "project">>) => void;
}

export default function FilterModal({ isOpen, onClose, onApply }: FilterModalProps) {
  const [status, setStatus] = useState<string>("");
  const [project, setProject] = useState<string>("");

  const handleApply = () => {
    onApply({ status, project });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[320px] bg-white dark:bg-[#1c1d22] rounded-lg p-4 shadow-lg">
        <h2 className="text-lg font-bold mb-4 text-[#1c1d22] dark:text-white">Filter Tasks</h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-[#1c1d22] dark:text-white">Status</label>
          <select
            className="w-full border px-3 py-2 rounded"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">All</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-[#1c1d22] dark:text-white">Project</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g. Marketing App"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded text-sm bg-gray-200 dark:bg-gray-700 dark:text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
            className="px-4 py-2 rounded text-sm bg-blue-600 text-white"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
