import TaskCard from "./ui/TaskCard";
import SkeletonCard from "../components/ui/SkeletonCard";
import { Task } from "../components/TaskBoard";

interface Props {
  title: string;
  tasks: Task[];
  loading: boolean;
}

export default function TaskColumn({ title, tasks, loading }: Props) {
  return (
    <div className="flex-1 min-w-[320px]">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">{title}</h2>
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
