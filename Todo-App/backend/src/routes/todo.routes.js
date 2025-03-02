import { Router } from "express";
import { addTodo, deleteTodo, getAllTodos, getCompleteTodos, getPendingTodos, todoIsComplete, updateTodo } from "../controllers/todo.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const todoRouter = Router()


//* applied for all routes
todoRouter.use(isAuthenticated)

todoRouter.route("/get-todos").get(getAllTodos)

todoRouter.route("/create-todo").post(addTodo)

todoRouter.route("/update-todo/:todoId").put(updateTodo)

todoRouter.route("/toggle/:todoId").patch(todoIsComplete)

todoRouter.route("/delete-todo/:todoId").delete(deleteTodo)

todoRouter.route("/pending-todos").get(getPendingTodos)

todoRouter.route("/completed-todos").get(getCompleteTodos)

export default todoRouter
