"use client";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import EditTaskModal from "./EditTaskModal";

interface Task {
  _id: string;
  title: string; // Add the title property
  project: string; // Add the project property
  // Add other properties of the task object here as needed
}

export default function TaskActionsMenu({
  task,
  onTaskDeleted,
  onTaskUpdated,
}: {
  task: Task;
  onTaskDeleted?: () => void;
  onTaskUpdated?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this task?");
    if (!confirmed) return;

    try {
      await fetch(`/api/task/${task._id}`, {
        method: "DELETE",
      });
      onTaskDeleted?.();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <>
      <div className="relative">
        <div
          className="w-[26px] h-[26px] border border-[#1C1D221A] dark:border-[#FFFFFF1A] rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsThreeDots className="text-[#1C1D22] dark:text-[#FFFFFF80]" />
        </div>

        {isOpen && (
          <div className="absolute right-0 top-8 w-[120px] bg-white dark:bg-[#1C1D22] shadow rounded z-50">
            <button
              onClick={() => {
                setShowEditModal(true);
                setIsOpen(false);
              }}
              className="w-full px-3 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              ✏️ Edit
            </button>
            <button
              onClick={handleDelete}
              className="w-full px-3 py-2 text-sm text-left text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              🗑️ Delete
            </button>
          </div>
        )}
      </div>

      {showEditModal && (
        <EditTaskModal
          task={task}
          onClose={() => setShowEditModal(false)}
          onSave={onTaskUpdated}
        />
      )}
    </>
  );
}
