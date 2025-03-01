import { useEffect } from "react";
import Todo from "./Todo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsAuthenticated } from "@/store/userSlice";

const btnObj = [
  {
    name: "All Todo",
    path: "/",
  },
  {
    name: "Pending",
    path: "/pending",
  },
  {
    name: "Completed",
    path: "/completed",
  },
];

const Home = () => {

  const disPatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/check`,{withCredentials : true})
    .then(() => {
      disPatch(setIsAuthenticated(true))
    })
    .catch(() => {
      disPatch(setIsAuthenticated(false))
      navigate("/login")
    })
  },[])
  return (
    <div className="bg-gray-800 flex flex-col items-center min-h-screen">
      <div className="mt-3 flex gap-5">
        {btnObj.map((btn) => (
          <Button>{btn.name}</Button>
        ))}
      </div>

      <div className="border-white border w-[95%] sm:w-[80%] mt-3">
        <div className="w-full flex">
          <Input
            placeholder="Type to add a new todo..."
            className="text-white rounded-none  p-5 focus-visible:ring-0"
          />
          <Button className="bg-green-500 border-white border-b rounded-none p-5">
            {/* <PlusIcon className="bg-black rounded-full" /> */}
            Add Todo
          </Button>
        </div>

        <div className="mt-2">
          <Todo />
        </div>
      </div>
    </div>
  );
};

export default Home;
