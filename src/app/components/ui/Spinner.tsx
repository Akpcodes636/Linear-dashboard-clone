import { Loader } from "lucide-react";
import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <Loader className="animate-spin" size={20} />
    </div>
  );
};

export default Spinner;
