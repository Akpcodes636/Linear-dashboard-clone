"use client";
import { AiOutlineSun } from "react-icons/ai";
import { IoMoonOutline } from "react-icons/io5";
import clsx from "clsx";
import { useTheme } from "@/app/context/ThemeContext";

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="w-[262px] h-[42px] rounded-full p-1 flex items-center justify-between">
      <button
        onClick={() => toggleTheme("light")}
        className={clsx(
          "w-[127px] h-[34px] flex items-center gap-[6px] justify-center rounded-full cursor-pointer transition-all duration-300",
          !isDarkMode ? "bg-white text-[#1C1D22]" : "text-[#FFFFFF]"
        )}
      >
        <AiOutlineSun />
        <span>Light</span>
      </button>
      <button
        onClick={() => toggleTheme("dark")}
        className={clsx(
          "w-[127px] h-[34px] flex items-center gap-[6px] justify-center rounded-full cursor-pointer transition-all duration-300",
          isDarkMode ? "bg-white text-[#1C1D22]" : "text-[#1C1D2280]"
        )}
      >
        <IoMoonOutline />
        <span>Dark</span>
      </button>
    </div>
  );
}
