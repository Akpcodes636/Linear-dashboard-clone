"use client";

import { useEffect, useState } from "react";
import TaskColumn from "./TaskColumn";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";


export interface Task {
  _id: string;
  title: string;
  project: string;
  totalSubtasks: number;
  completedSubtasks: number;
  dueDate: string;
  comments: string;
  status: string;
}

interface TaskBoardProps {
  customColumns: string[];
  filters: Partial<Pick<Task, "status" | "project">>;
}

export default function TaskBoard({ customColumns = [] }: { customColumns: string[] }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  // const [filters, setFilters] = useState<Partial<Pick<Task, "status" | "project">>>({});

  // const [customColumns, setCustomColumns] = useState<string[]>([]);

  
  // Fetch tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("/api/task");
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Handle drag & drop
  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const taskId = active.id.toString();
    const newStatus = over.id.toString();

    setTasks((prev) =>
      prev.map((task) =>
        task._id === taskId ? { ...task, status: newStatus } : task
      )
    );

    try {
      await fetch(`/api/task/${taskId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  // Add new column
  // const handleAddColumn = (name: string) => {
  //   if (!customColumns.includes(name)) {
  //     setCustomColumns((prev) => {
  //       const updated = [...prev, name];
  //       console.log("Updated columns:", updated); // 🧪 Check if this logs
  //       return updated;
  //     });
  //   }
  // };

  // const groupedCustom = customColumns.map((col) => ({
  //   name: col,
  //   tasks: tasks.filter((task) => task.status === col),
  // }));
  

  // Group tasks by default + custom statuses
  const todo = tasks.filter((task) => task.status === "To Do");
  const inProgress = tasks.filter((task) => task.status === "In Progress");
  const done = tasks.filter((task) => task.status === "Done");
  const groupedCustom = customColumns.map((col) => ({
    name: col,
    tasks: tasks.filter((task) => task.status === col),
    // handleAddCulumn: handleAddColumn,
  }));

   console.log(groupedCustom);
  return (
    <>
      <div className="flex items-center justify-between mb-4 px-4">
        {/* <h2 className="text-xl font-semibold text-[#1C1D22] dark:text-white">Task Board</h2>
        <AddViewButton onAdd={handleAddColumn} /> */}
      </div>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="flex gap-4 w-max overflow-x-auto px-4 pb-4 scrollbar-hide">
          <TaskColumn title="To Do" tasks={todo} loading={loading} />
          <TaskColumn title="In Progress" tasks={inProgress} loading={loading} />
          <TaskColumn title="Done" tasks={done} loading={loading} />

          {groupedCustom.map(({ name, tasks }) => (
            <TaskColumn key={name} title={name} tasks={tasks} loading={loading} />
          ))}
        </div>
      </DndContext>
    </>
  );
}
