"use client";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string) => void;
}

export default function AddViewModal({ isOpen, onClose, onSubmit }: Props) {
  const [columnName, setColumnName] = useState("");

  const handleSubmit = () => {
    if (columnName.trim()) {
      onSubmit(columnName.trim());
      setColumnName("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#24262C] p-6 rounded-lg w-80">
        <h2 className="text-lg font-semibold mb-4 text-[#1C1D22] dark:text-white">
          Add New View
        </h2>
        <input
          type="text"
          className="w-full p-2 border rounded mb-4 dark:bg-[#1C1D22] dark:text-white"
          placeholder="Enter column name"
          value={columnName}
          onChange={(e) => setColumnName(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 text-sm text-gray-500">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm bg-[#1C1D22] text-white rounded dark:bg-[#4B69FF]"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
