import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import bgImg from "../../assets/bgImg.jpeg";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "@/store/userSlice";

const Register = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const disPatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/register`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast(res.data.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
      disPatch(setIsAuthenticated(false)); //for safety purpose
      console.log(error);
    }
  };

  return (
    <div className="flex bg-gray-800 min-h-screen">
      {/* Left Section - Form */}
      <div className="sm:w-1/2 w-full flex flex-col justify-center gap-2 p-10">
        <h1 className="text-2xl font-extrabold text-white">Register</h1>
        <p className="text-gray-400 text-xs">
          Before we start, please create your account
        </p>
        <form
          onSubmit={submitHandler}
          className="text-white flex flex-col gap-3"
        >
          <div>
            <Label htmlFor="firstname">First name</Label>
            <Input
              className="bg-black text-white focus-visible:ring-0 h-10"
              placeholder="Enter a first name..."
              id="firstname"
              name="firstname"
              type="text"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, firstName: e.target.value }))
              }
            />
          </div>
          <div>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              className="bg-black text-white focus-visible:ring-0 h-10"
              placeholder="Enter a last name..."
              id="lastname"
              name="lastname"
              text="text"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, lastName: e.target.value }))
              }
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              className="bg-black text-white focus-visible:ring-0 h-10"
              placeholder="Enter an email..."
              id="email"
              type="email"
              name="email"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              className="bg-black text-white focus-visible:ring-0 h-10"
              placeholder="Enter a password..."
              id="password"
              type="password"
              name="password"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
          >
            Create Account
          </button>
        </form>
        <p className="mt-3 text-white">
          Already have an account{" "}
          <Link to={"/login"} className="hover:underline">
            Login
          </Link>
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="w-1/2 hidden sm:block">
        <img
          src={bgImg}
          alt="Background"
          className="w-full max-h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
