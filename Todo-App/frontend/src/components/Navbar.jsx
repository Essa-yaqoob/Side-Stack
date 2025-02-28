import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white border-b-white border-b flex justify-between items-center px-5 py-4">
      <h1 className="text-2xl font-extrabold">All todos</h1>
      <div className="flex items-center gap-4">

        <h1 className="font-bold">Essa Yaqoob</h1>
        <button className="bg-[#ae7aff] p-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
          Logout
        </button>
      </div>
      
    </div>
  );
};

export default Navbar;
