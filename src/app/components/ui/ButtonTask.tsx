"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import TaskModalExample from "./Model";

interface TaskCardBtnProps {
  sectionTitle: "To Do" | "In Progress" | "Done";
  taskCount: number;
}

export default function TaskCardBtn({
  sectionTitle,
  taskCount,
}: TaskCardBtnProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between mb-[16px]">
        <div className="text-[14px] text-[#1C1D2280] dark:text-[#FFFFFF80]">
          {sectionTitle} ({taskCount})
        </div>
        <div className="flex items-center gap-[6px] cursor-pointer" onClick={() => setIsModalOpen(true)}>
          <div className="w-[18px] h-[18px] bg-[#1C1D2214] flex items-center justify-center rounded-full dark:bg-[#FFFFFF1A]">
            <FaPlus size={8} className="text-[#1C1D22] dark:text-white" />
          </div>
          <p className="text-sm text-[#1C1D22] font-semibold dark:text-white">
            Add new task
          </p>
        </div>
      </div>

      <TaskModalExample isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
