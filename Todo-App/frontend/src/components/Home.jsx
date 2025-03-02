import { useEffect, useState } from "react";
import Todo from "./Todo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsAuthenticated } from "@/store/userSlice";
import {
  addNewTodos,
  removeTodos,
  setTodoIsCompleted,
  setTodos,
  updateTodos,
} from "@/store/todosSlice";
import toast from "react-hot-toast";

const Home = () => {
  const disPatch = useDispatch();
  const navigate = useNavigate();

  const { todos } = useSelector((state) => state.todos);
  const [content, setContent] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isId, setIsId] = useState(null);

  const getTodo = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/todo/get-todos`,
        { withCredentials: true }
      );
      disPatch(setTodos(res.data.todos));
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/todo/create-todo`,
        { content },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      disPatch(addNewTodos(res.data.todo));
      setContent("");
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodo = async () => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/todo/update-todo/${isId}`,
        { content },
        { withCredentials: true }
      );

      disPatch(updateTodos(res.data.todo));

      setContent("");
      setIsEdit(false);
      setIsId(null);

      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/todo/delete-todo/${id}`,
        { withCredentials: true }
      );
      console.log(res);
      disPatch(removeTodos(res.data.todo));
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTodoIsComplete = async (id) => {
    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/todo/toggle/${id}`,
        {},
        { withCredentials: true }
      );
      console.log(res);
      disPatch(setTodoIsCompleted(res.data.todo));
    } catch (error) {
      console.log(error);
    }
  };

  const getAllTodos = async () => {
    getTodo();
  };

  const getPendingTodo = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/todo/pending-todos`,
        { withCredentials: true }
      );
      disPatch(setTodos(res.data.todos));
    } catch (error) {
      console.log(error);
    }
  };

  const getCompleteTodo = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/todo/completed-todos`,
        { withCredentials: true }
      );
      disPatch(setTodos(res.data.todos));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/auth/check`, {
        withCredentials: true,
      })
      .then(() => {
        disPatch(setIsAuthenticated(true));
        getTodo();
      })
      .catch(() => {
        disPatch(setIsAuthenticated(false));
        navigate("/login");
      });
  }, []);

  return (
    <div className="bg-gray-800 flex flex-col items-center min-h-screen">
      <div className="mt-3 flex gap-5">
        <Button onClick={getAllTodos}>All Todo</Button>
        <Button onClick={getPendingTodo}>Pending</Button>
        <Button onClick={getCompleteTodo}>Completed</Button>
      </div>

      <div className="border-white border w-[95%] sm:w-[80%] mt-3">
        <div className="w-full flex">
          <Input
            placeholder="Type to add a new todo..."
            className="text-white rounded-none  p-5 focus-visible:ring-0"
            type="text"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            onClick={isEdit ? updateTodo : addTodo}
            className="bg-green-500 border-white border-b rounded-none p-5"
          >
            {/* <PlusIcon className="bg-black rounded-full" /> */}
            {isEdit ? "Update Todo" : "Add Todo"}
          </Button>
        </div>

        <div className="mt-2">
          {todos?.map((todo) => (
            <Todo
              todo={todo}
              setIsId={setIsId}
              setIsEdit={setIsEdit}
              setContent={setContent}
              key={todo._id}
              deleteTodo={deleteTodo}
              handleTodoIsComplete={handleTodoIsComplete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
