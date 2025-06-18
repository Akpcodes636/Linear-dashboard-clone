"use client";
import { useState } from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Projects, Tasks } from "../utils/content/dashboard";
import ThemeToggle from "./ui/ThemeToggle";

export default function LeftSideBar() {
  const [activeProject, setActiveProject] = useState<string>("Design system");
  const [showProjects, setShowProjects] = useState(true);
  const [showTasks, setShowTasks] = useState(true);

  return (
    <div className="w-full h-full px-[28px] py-[20px] overflow-y-auto scrollbar-hide">
      {/* Header */}
      <div className="flex items-center justify-between mb-[38px]">
        <h1 className="text-[30px] text-secondary font-bold">Projects</h1>
        <div className="w-[28px] h-[28px] rounded-full bg-[#1C1D2214] flex items-center justify-center cursor-pointer dark:bg-white">
          <FaPlus className="text-[#1C1D22] " size={12} />
        </div>
      </div>

      {/* Team */}
      <div className="flex items-center justify-between mb-[28px]">
        <p className="text-[16px] text-[#1C1D2280] dark:text-white">Team</p>
        <IoIosArrowForward className="text-[#1C1D2280] dark:text-white" />
      </div>

      {/* Projects Section Header */}
      <div
        className="flex items-center justify-between mb-[20px] cursor-pointer"
        onClick={() => setShowProjects((prev) => !prev)}
      >
        <p className="text-[16px] font-bold text-[#1C1D22] dark:text-white">Projects</p>
        <IoIosArrowForward
          className={`text-[#1C1D2280] transition-transform duration-300 dark:text-white ${
            showProjects ? "rotate-90" : "rotate-0"
          }`}
        />
      </div>

      {/* Projects Items */}
      {showProjects && (
        <div className="flex gap-[8px] items-start mb-[28px]">
          {/* Vertical Line Image */}
          <div className="text-white">
            <Image
              src="/images/Lines-1.svg"
              width={12}
              height={174}
              alt="lines"
              className="w-[15px] h-full object-cover dark:invert"
            />
          </div>

          {/* Items */}
          <div className="flex flex-col gap-[8px]">
            {Projects.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveProject(item.text)}
                className={`w-[145px] h-[36px] px-[10px] flex items-center justify-start text-[15px] rounded-[8px] cursor-pointer transition
                  text-[#999999] hover:rounded-[18px] hover:bg-[#1C1D220A] hover:text-[#1C1D22] dark:text-white dark:hover:bg-[#FFFFFF1A] dark:hover:text-white
                  ${
                    activeProject === item.text
                      ? "bg-[#FFFFFF1A] text-[#1C1D22] font-medium dark:text-white"
                      : ""
                  }`}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tasks Section Header */}
      <div
        className="flex items-center justify-between mb-[20px] cursor-pointer"
        onClick={() => setShowTasks((prev) => !prev)}
      >
        <p className="text-[16px] font-bold text-[#1C1D22] dark:text-white">Tasks</p>
        <IoIosArrowForward
          className={`text-[#1C1D2280] transition-transform duration-300 ${
            showTasks ? "rotate-90" : "rotate-0"
          }`}
        />
      </div>

      {/* Tasks Items */}
      {showTasks && (
        <div className="flex gap-[8px] items-start mb-[28px]">
          <div>
            <Image
              src="/images/Lines-1.svg"
              width={12}
              height={174}
              alt="lines"
              className="w-[15px] h-full object-cover dark:invert"
            />
          </div>

          <div className="flex flex-col gap-[8px]">
            {Tasks.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveProject(item.text)}
                className={`w-[145px] h-[36px] px-[10px] flex items-center justify-start text-[15px] rounded-[8px] cursor-pointer transition
                  text-[#999999] hover:rounded-[18px] hover:bg-[#1C1D220A] hover:text-[#1C1D22] dark:text-white   dark:hover:bg-[#FFFFFF1A] dark:hover:text-white
                  ${
                    activeProject === item.text
                      ? "bg-[#FFFFFF1A] text-[#1C1D22] font-medium"
                      : ""
                  }`}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer Items */}
      <div className="flex items-center justify-between mb-[28px]">
        <p className="text-[16px] text-[#1C1D2280] dark:text-white">Reminders</p>
        <IoIosArrowForward className="text-[#1C1D2280] dark:text-white" />
      </div>

      <div className="flex items-center justify-between mb-[28px] ">
        <p className="text-[16px] text-[#1C1D2280] dark:text-white">Messengers</p>
        <IoIosArrowForward className="text-[#1C1D2280] dark:text-white" />
      </div>
      {/* <div className="w-[262px] h-[42px] rounded-full bg-[#1C1D220A] p-4 items-center flex justify-center">
        <div className="w-[127px] h-[34px] flex items-center gap-[6px] bg-white rounded-full  justify-center">
          <AiOutlineSun color="#1C1D22" />
          <span className="text-[#1C1D22]">Light</span>
        </div>
        <div className="w-[127px] h-[34px] flex items-center gap-[6px]  rounded-full  justify-center">
          <IoMoonOutline color="#1C1D22" />
          <span className="text-[#1C1D2280]">Dark</span>
        </div>
      </div> */}
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
}
