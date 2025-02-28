import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Delete, DeleteIcon, Pencil, PlusIcon } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

const Home = () => {
  return (
    <div className="bg-gray-800 flex flex-col items-center min-h-screen">
      <div className="mt-3 flex gap-5">
        <Button>All Todos</Button>
        <Button>Pending</Button>
        <Button>Completed</Button>
      </div>

      <div className="border-white border w-[80%] mt-3">
        <div className="w-full flex">
          <Input
            placeholder="Type to add a new todo..."
            className="text-white rounded-none  p-5 focus-visible:ring-0"
          />
          <Button className="bg-green-500 rounded-none p-5">
            <PlusIcon className="bg-black rounded-full" />
          </Button>
        </div>
        

        <div className="mt-2">
            
          <div className="flex items-center justify-between border-b border-white p-3 gap-2">
            <div className="flex items-center gap-1 overflow-y-auto">
              <Checkbox className="border-white border" />
              <p className="text-white">Complete coding challenge sdkvsdkvmsdkmvdskmsdvkmsvkmvsdkmskvmsdkvmsdkvmsdkvmsdkvmsdkvmdskvmdksvdmk</p>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <p className=" border-white text-white border hidden sm:block p-1">10 Aug 2023</p>
              <DeleteIcon className=" border-white bg-red-600 text-white border p-1" />
              <Pencil className=" border-white bg-blue-600 text-white border p-1" />
            </div>
          </div>

        </div>


      </div>
    </div>
  );
};

export default Home;
