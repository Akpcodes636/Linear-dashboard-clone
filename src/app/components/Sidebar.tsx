"use client";

import Image from "next/image";
import Logo from "./ui/Logo";
import { icons } from "@/app/utils/content/dashboard";

export default function Sidebar() {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-[35px] px-[21px] h-full">
        {/* Dots at top */}
        <div className="flex gap-[8px] mb-6 ">
          <div className="w-[6px] h-[6px] rounded-full bg-[#FFFFFF]" />
          <div className="w-[6px] h-[6px] rounded-full bg-[#FFFFFF66]" />
          <div className="w-[6px] h-[6px] rounded-full bg-[#FFFFFF33]" />
        </div>

        {/* Logo */}
        <Logo />

        {/* Icon Group */}
        <div className="flex flex-col gap-[27px] items-center mt-4">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="group w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-white/10 cursor-pointer"
              data-active={index === 0} // You can use this with `data-active="true"` for first one
            >
              <Image
                src={icon.icons}
                alt="icon"
                width={24}
                height={24}
                className="w-[24px] h-[24px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
