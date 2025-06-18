"use client";
import Image from "next/image";

export default function ProgressBar({
  completedTasks = 7,
  totalTasks = 10,
}: {
  completedTasks: number;
  totalTasks: number;
}) {
  const progress = (completedTasks / totalTasks) * 100;

  // Determine the progress color
  let progressColor = "#FFA048"; // --color-muted
  if (progress >= 100) {
    progressColor = "#78D700"; // --color-secondary
  } else if (progress >= 50) {
    progressColor = "#FF7979"; // --color-progress-bar / --color-accent
  } else if( progress >= 25){
    progressColor = "#FF7979"
  }

  return (
    <div className="flex flex-col gap-[6px]">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[6px]">
          <div className="w-[16px] h-[16px]">
            <Image
              src="/images/List.png"
              width={16}
              height={16}
              alt="list icon"
              className="w-full h-full object-cover dark:invert"
            />
          </div>
          <p className="text-[14px] font-semibold text-[#1C1D2280] dark:text-[#FFFFFF80]">Progress</p>
        </div>
        <p className="text-[14px] text-[#1C1D22] font-semibold dark:text-[#FFFFFF80]">
          {completedTasks}/{totalTasks}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-[6px] bg-[#F5F5F5] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            width: `${progress}%`,
            backgroundColor: progressColor,
          }}
        ></div>
      </div>
    </div>
  );
}
