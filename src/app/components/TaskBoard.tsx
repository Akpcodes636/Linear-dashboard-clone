"use client";

import { useEffect, useState } from "react";
import TaskColumn from "./TaskColumn";
import {
  DndContext,
  closestCenter,
  DragEndEvent,
} from "@dnd-kit/core";

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

export default function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch tasks from the server
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("/api/task");

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

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

  // Handle drag and drop
  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const taskId = active.id.toString();
    const newStatus = over.id.toString();

    // Optimistically update UI
    setTasks((prev) =>
      prev.map((task) =>
        task._id === taskId ? { ...task, status: newStatus } : task
      )
    );

    // Persist change to server
    try {
      await fetch(`/api/task/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });
    } catch (error) {
      console.error("Failed to update task on server:", error);
    }
  };

  const todo = tasks.filter((task) => task.status === "To Do");
  const inProgress = tasks.filter((task) => task.status === "In Progress");
  const done = tasks.filter((task) => task.status === "Done");

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="flex gap-4 w-max">
        <TaskColumn title="To Do" tasks={todo} loading={loading} />
        <TaskColumn title="In Progress" tasks={inProgress} loading={loading} />
        <TaskColumn title="Done" tasks={done} loading={loading} />
      </div>
    </DndContext>
  );
}
