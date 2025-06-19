"use client";
import { BsChatSquareText, BsThreeDots } from "react-icons/bs";
import { useDraggable } from "@dnd-kit/core";
import { GoPaperclip } from "react-icons/go";
import ProgressBar from "./ProgressBar";
import { Task } from "../TaskBoard";

export default function TaskCard({ task }: { task: Task }) {
  const { attributes, listeners, setNodeRef, transform,isDragging } = useDraggable({
    id: task._id, // this becomes `active.id` on drag
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    cursor: isDragging ? "grabbing" : "grab", // 👈 change the cursor here
    opacity: isDragging ? 0.6 : 1, // optional: visual feedback
    transition: "opacity 0.2s ease",
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="w-[320px] min-h-[178px] border-[2px] border-[#1C1D220F] dark:bg-[#292B31] rounded-[12px] card"
    >
      <div className="p-[20px]">
        <div className="flex items-center justify-between mb-[22px]">
          <div>
            <p className="text-[16px] font-bold text-[#1C1D22] dark:text-[#FFFFFF]">
              {task?.title}
            </p>
            <p className="text-[14px] text-[#1C1D2280] dark:text-[#FFFFFF80]">
              {task?.project}
            </p>
          </div>
          <div className="w-[26px] h-[26px] border border-[#1C1D221A] dark:border-[#FFFFFF1A] rounded-full flex items-center justify-center">
            <BsThreeDots className="text-[#1C1D22] dark:text-[#FFFFFF80]" />
          </div>
        </div>

        <div className="mb-[20px]">
          <ProgressBar
            completedTasks={task?.completedSubtasks}
            totalTasks={task?.totalSubtasks}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="bg-[#888DA71A] rounded-[17px] px-[16px] py-[8px]">
            <p className="text-[14px] text-[#888DA7] dark:text-[#FFFFFF80]">
              {new Date(task?.dueDate).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="flex items-center gap-[4px]">
            <BsChatSquareText className="text-[#1C1D2280] dark:text-[#FFFFFF80]" />
            <span className="text-[14px] dark:text-[#FFFFFF80]">
              {task?.comments?.split(" ").length || 0}
            </span>
          </div>
          <div className="flex items-center">
            <GoPaperclip className="text-[#1C1D2280] dark:text-[#FFFFFF80]" />
            <span className="text-[14px] dark:text-[#FFFFFF80]">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
