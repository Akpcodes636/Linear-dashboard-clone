"use client";

import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
// import FilterModal from "../TaskFilter/FilterModel";

// interface Task {
//     status: string;
//     project: string;
// }

export default function File(){
    return (
        <h1>Hello World!!</h1>
    )
}

// interface FilterBarProps {
//     onApply: (filters: Partial<Pick<Task, "status" | "project">>) => void;
// }

// interface FilterModalProps {
// //     isOpen: boolean;
// //     onClose: () => void;
// //     onApply: (filters: Record<string, any>) => void;
// // }

// export default function FilterBar({ onApply }: FilterBarProps) {
//     const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//     return (
//         <>
//             <div className="flex items-center gap-4">
//                 <p
//                     className="text-base font-semibold text-[#1C1D22] cursor-pointer dark:text-white"
//                     onClick={() => setIsModalOpen(true)}
//                 >
//                     Filter
//                 </p>
//                 <p className="text-base font-semibold text-[#1C1D2280] dark:text-[#FFFFFF80]">
//                     Sort
//                 </p>
//                 <div className="w-[26px] h-[26px] border border-[#1C1D221A] rounded-full flex items-center justify-center dark:border-[#FFFFFF80]">
//                     <BsThreeDots className="text-[#1C1D22] dark:text-white" />
//                 </div>
//                 <button className="w-[140px] h-[38px] rounded-full bg-[#1C1D22] text-sm font-semibold text-white dark:bg-[#4B69FF]">
//                     New template
//                 </button>
//             </div>

//             {/* <FilterModal
//                 isOpen={isModalOpen}
//                 onClose={() => setIsModalOpen(false)}
//                 onApply={onApply}
//             /> */}
//         </>
//     );
// }
