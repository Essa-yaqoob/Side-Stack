import { Checkbox } from "./ui/checkbox";
import { DeleteIcon, Pencil } from "lucide-react";
import React from "react";

const Todo = () => {
  return (
    <div className="flex items-center justify-between border-b border-white p-3 gap-2">
      <div className="flex items-center gap-1 overflow-y-auto scrollBar">
        <Checkbox className="border-white border" />
        <p className="text-white ">Complete coding challenge</p>
      </div>

      <div className="flex items-center gap-2 text-xs">
        <p className=" border-white text-white border hidden sm:block h-6 w-20 p-1">
          10 Aug 2023
        </p>
        <DeleteIcon className=" border-white hover:cursor-pointer bg-red-600 text-white border p-1" />
        <Pencil className=" border-white hover:cursor-pointer bg-blue-600 text-white border p-1" />
      </div>
    </div>
  );
};

export default Todo;
