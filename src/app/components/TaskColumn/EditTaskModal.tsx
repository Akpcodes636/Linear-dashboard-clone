"use client";
import { useState } from "react";

interface Task {
  _id: string;
  title: string;
  project: string;
}

export default function EditTaskModal({ task, onClose, onSave }: { task: Task; onClose: () => void; onSave?: () => void }) {
  const [title, setTitle] = useState(task.title);
  const [project, setProject] = useState(task.project);

  const handleSave = async () => {
    try {
      await fetch(`/api/task/${task._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, project }),
      });
      onSave?.();
      onClose();
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-[#1C1D22] p-4 rounded shadow w-[320px]">
        <h2 className="text-lg font-bold mb-4 dark:text-white">Edit Task</h2>
        <input
          className="w-full border px-3 py-2 rounded mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="w-full border px-3 py-2 rounded mb-4"
          value={project}
          onChange={(e) => setProject(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-300 px-3 py-1 rounded">
            Cancel
          </button>
          <button onClick={handleSave} className="bg-blue-600 text-white px-3 py-1 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
