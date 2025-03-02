import { setIsAuthenticated } from "@/store/userSlice";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const disPatch = useDispatch();
  const navigate = useNavigate();

  const userName = JSON.parse(localStorage.getItem("user"));

  const onLogoutHandler = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/logout`,
        {},
        { withCredentials: true }
      );
      toast.success(res.data.success);
      disPatch(setIsAuthenticated(false));
      localStorage.clear()
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-gray-800 text-white border-b-white border-b flex justify-between items-center px-5 py-4">
      <h1 className="text-2xl font-extrabold">All todos</h1>
      <div className="flex items-center gap-4">
        <h1 className="font-bold capitalize">{userName ? userName : ""}</h1>
        <button
          onClick={onLogoutHandler}
          className="bg-[#ae7aff] p-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
