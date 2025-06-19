"use client";
import Image from "next/image";
import Header from "./components/Header";
import { FaPlus } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import TaskBoard from "./components/TaskBoard";

export default function Page() {
  return (
    <div className="w-full px-[32px]">
      {/* Header */}
      <Header />

      {/* Top Controls */}
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

          {/* Add View */}
          <div className="flex items-center gap-2">
            <div className="w-[18px] h-[18px] bg-[#1C1D2214] flex items-center justify-center rounded-full dark:bg-white">
              <FaPlus size={8} className="text-[#1C1D22]" />
            </div>
            <p className="text-base font-semibold text-[#1C1D2280] dark:text-white">
              Add view
            </p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <p className="text-base font-semibold text-[#1C1D22] dark:text-white">
            Filter
          </p>
          <p className="text-base font-semibold text-[#1C1D2280] dark:text-[#FFFFFF80]">
            Sort
          </p>
          <div className="w-[26px] h-[26px] border border-[#1C1D221A] rounded-full flex items-center justify-center dark:border-[#FFFFFF80]">
            <BsThreeDots className="text-[#1C1D22] dark:text-white" />
          </div>
          <button className="w-[140px] h-[38px] rounded-full bg-[#1C1D22] text-sm font-semibold text-white dark:bg-[#4B69FF]">
            New template
          </button>
        </div>
      </div>

      {/* Board View */}
      <div className="overflow-x-auto scrollbar-hide pb-4 card mt-[20px] ">
        <TaskBoard />
      </div>
    </div>
  );
}
