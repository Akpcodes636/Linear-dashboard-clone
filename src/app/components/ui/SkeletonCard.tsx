"use client";
export default function SkeletonCard() {
    return (
      <div className="w-[320px] min-h-[178px] animate-pulse bg-gray-200 dark:bg-gray-700 rounded-[12px] p-[20px] space-y-4">
        <div className="h-4 bg-gray-400 rounded w-3/4"></div>
        <div className="h-3 bg-gray-400 rounded w-1/2"></div>
        <div className="h-3 bg-gray-400 rounded w-full mt-6"></div>
        <div className="flex gap-2 mt-4">
          <div className="h-3 bg-gray-400 rounded w-1/4"></div>
          <div className="h-3 bg-gray-400 rounded w-1/4"></div>
          <div className="h-3 bg-gray-400 rounded w-1/4"></div>
        </div>
      </div>
    );
  }
  