"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import AddViewModal from "./ui/AddViewModal";

export default function AddViewButton({ onAdd }: { onAdd: (name: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-[18px] h-[18px] bg-[#1C1D2214] flex items-center justify-center rounded-full dark:bg-white">
          <FaPlus size={8} className="text-[#1C1D22]" />
        </div>
        <p className="text-base font-semibold text-[#1C1D2280] dark:text-white">
          Add view
        </p>
      </div>

      <AddViewModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={onAdd}
      />
    </>
  );
}
