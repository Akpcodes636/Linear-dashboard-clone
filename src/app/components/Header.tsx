"use client";
import Image from "next/image";
import { FiCalendar } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { VscBellDot } from "react-icons/vsc";

export default function Header() {
  return (
    <header className="h-auto py-4 px-1 border-b border-[#1C1D2214] dark:border-[#FFFFFF14]">
      <div className="flex  justify-between items-start sm:items-center gap-4">
        {/* Left Section */}
        <h1 className="text-[20px] text-[#1C1D22] font-bold dark:text-white">
          Welcome back, Vincent 👋
        </h1>

        {/* Right Section */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-[22px]">
          <GoSearch size={22} className="text-[#1C1D22]  dark:text-white hidden lg:block" />
          <VscBellDot size={22} className="text-[#1C1D22] dark:text-white hidden lg:block" />
          <FiCalendar size={22} className="text-[#1C1D22] dark:text-white hidden lg:block" />

          <p className="text-[16px] text-[#1C1D2280] font-semibold dark:text-white hidden lg:block">
            19 May 2022
          </p>

          <div className="w-[36px] h-[36px] rounded-full overflow-hidden">
            <Image
              src="/images/profile.png"
              width={500}
              height={500}
              alt="profile picture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
