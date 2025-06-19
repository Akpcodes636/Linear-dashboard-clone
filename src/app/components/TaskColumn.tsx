"use client";
import TaskCard from "./ui/TaskCard";
import SkeletonCard from "../components/ui/SkeletonCard";
import { Task } from "../components/TaskBoard";
import TaskCardBtn from "./ui/ButtonTask";
import { useDroppable } from "@dnd-kit/core";


interface Props {
  title: "To Do" | "In Progress" | "Done";
  tasks: Task[];
  loading: boolean;
}

export default function TaskColumn({ title, tasks, loading }: Props) {
  const { setNodeRef } = useDroppable({
    id: title, // this id becomes `over.id` when dropped
  });

  return (
    <div ref={setNodeRef} className="max-w-[360px] min-h-[826px] border-2 border-dashed border-[#1C1D2214] rounded-[12px] flex-shrink-0 bg-white dark:bg-[#24262C] px-[16px] py-[22px]">
     <TaskCardBtn sectionTitle={title} taskCount={tasks.length} />
      <div className="flex flex-col gap-4">
        {loading
          ? Array(3)
              .fill(null)
              .map((_, idx) => <SkeletonCard key={idx} />)
          : tasks.map((task) => <TaskCard key={task._id} task={task} />)}
      </div>
    </div>
  );
}
