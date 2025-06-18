"use client";
import { useEffect, useState } from "react";
import TaskColumn from "./TaskColumn";
import SkeletonCard from "../components/ui/SkeletonCard";

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

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("/api/task");
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

  const todo = tasks.filter((task) => task.status === "To Do");
  const inProgress = tasks.filter((task) => task.status === "In Progress");
  const done = tasks.filter((task) => task.status === "Done");

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-6">
      <TaskColumn title="To Do" tasks={todo} loading={loading} />
      <TaskColumn title="In Progress" tasks={inProgress} loading={loading} />
      <TaskColumn title="Done" tasks={done} loading={loading} />
    </div>
  );
}
