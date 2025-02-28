import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import bgImg from "../../assets/bgImg.jpeg";

const Login = () => {
  return (
    <div className="flex bg-gray-800 min-h-screen">
      {/* Left Section - Form */}
      <div className="sm:w-1/2 w-full flex flex-col justify-center gap-2 p-10">
        <h1 className="text-2xl font-extrabold text-white">Log in</h1>
        <p className="text-gray-400 text-xs">
          Before we start, please log into your account
        </p>
        <form className="text-white flex flex-col gap-3">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              className="bg-black text-white focus-visible:ring-0 h-10"
              placeholder="Enter an email..."
              id="email"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              className="bg-black text-white focus-visible:ring-0 h-10"
              placeholder="Enter a password..."
              id="password"
            />
          </div>

          <button className="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
            Log in
          </button>
        </form>
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

export default Login;
