import { Checkbox } from "./ui/checkbox";
import { DeleteIcon, Pencil } from "lucide-react";
import React from "react";

const Todo = ({
  todo,
  setIsId,
  setIsEdit,
  setContent,
  deleteTodo,
  handleTodoIsComplete,
}) => {
  return (
    <div className="flex items-center justify-between border-b border-white p-3 gap-2">
      <div className="flex items-center gap-1 overflow-y-auto scrollBar">
        <Checkbox
          onClick={() => handleTodoIsComplete(todo._id)}
          checked={todo.isComplete}
          className="border-white border"
        />
        <p className={`${todo.isComplete ?"line-through text-gray-500" :"text-white"}`}>{todo.content}</p>
      </div>

      <div className="flex items-center gap-2 text-xs">
        <p className=" border-white text-white border hidden sm:block h-6 w-20 p-1">
          10 Aug 2023
        </p>
        <DeleteIcon
          onClick={() => {
            deleteTodo(todo._id);
          }}
          className=" border-white hover:cursor-pointer bg-red-600 text-white border p-1"
        />
        <Pencil
          onClick={() => {
            setIsId(todo._id);
            setContent(todo.content);
            setIsEdit(true);
          }}
          className=" border-white hover:cursor-pointer bg-blue-600 text-white border p-1"
        />
      </div>
    </div>
  );
};

export default Todo;
