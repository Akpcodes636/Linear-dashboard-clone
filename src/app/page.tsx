"use client";
import { useState } from "react";
import Header from "./components/Header";
import TaskBoard from "./components/TaskBoard";
import FilterBar from "./components/TaskFilter/FilterBar";
import AddViewButton from "./components/AddViewButton";
import { Task } from "./components/TaskBoard";
import Image from "next/image";

export default function Page() {
  const [filters, setFilters] = useState<Partial<Pick<Task, "status" | "project">>>({});
  const [customColumns, setCustomColumns] = useState<string[]>([]);

  const handleApplyFilters = (newFilters: Partial<Pick<Task, "status" | "project">>) => {
    setFilters(newFilters);
  };

  const handleAddColumn = (name: string) => {
    if (!customColumns.includes(name)) {
      setCustomColumns((prev) => [...prev, name]);
    }
  };

  return (
    <div className="w-full px-[32px]">
      <Header />
      {/* Controls */}
      <div className="lg:flex items-center justify-between h-[50px] mb-5 border-b border-[#1C1D2214] dark:border-white hidden">
        {/* Left: Views */}
        <div className="flex items-center h-full gap-4">
          {/* Board View */}
          <div className="flex items-center gap-2 h-full border-b-2 border-[#1C1D22]">
            <div className="w-[18px] h-[18px]">
              <Image
                src="/icons/Icon-10.svg"
                width={18}
                height={18}
                alt="Board icon"
                className="w-full h-full object-cover dark:invert"
              />
            </div>
            <p className="text-base font-semibold text-[#1C1D22] dark:text-white">
              Board view
            </p>
          </div>
          <AddViewButton onAdd={handleAddColumn} />
        </div>
        {/* <FilterBar onApply={handleApplyFilters} /> */}
      </div>
      <div className="overflow-x-auto scrollbar-hide pb-4 card mt-[20px]">
        <TaskBoard customColumns={customColumns} filters={filters} />
      </div>
    </div>
  );
}