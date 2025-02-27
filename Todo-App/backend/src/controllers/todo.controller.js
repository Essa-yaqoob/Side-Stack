import { isValidObjectId } from "mongoose";
import { Todo } from "../models/todo.model.js";
import { User } from "../models/user.model.js";

const getAllTodos = async (req, res) => {
  try {
    const userId = req.user;

    const todos = await Todo.find({ createdBy: userId });

    return res.status(200).json({
      success: true,
      message: "todos fetched successfully",
      todos,
    });
  } catch (error) {
    console.log(`Error while getting all todos : ${error}`);
  }
};

const addTodo = async (req, res) => {
  try {
    const { content } = req.body;
    const userId = req.user;

    if (!content || content?.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Required all fields",
      });
    }

    const todo = await Todo.create({
      content,
      createdBy: userId,
    });

    await User.findByIdAndUpdate(userId, { $push: { todos: todo._id } });

    if (!todo) {
      return res.status(500).json({
        success: false,
        message: "something went wrong please try again",
      });
    }

    return res.status(201).json({
      success: true,
      message: "todo created successfully",
    });
  } catch (error) {
    console.log(`Error while creating todo : ${error}`);
  }
};

const updateTodo = async (req, res) => {
  try {
    const { content } = req.body;
    const { todoId } = req.params;

    if (!isValidObjectId(todoId)) {
      return res.status(400).json({
        success: false,
        message: "Todo not exisit",
      });
    }

    if (!content || content?.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Required all fields",
      });
    }

    const updateTodo = await Todo.findByIdAndUpdate(todoId, {
      content,
    });

    if (!updateTodo) {
      return res.status(500).json({
        success: false,
        message: "something went wrong please try again",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Todo updated successfully",
    });
  } catch (error) {
    console.log(`Error while updating todo : ${error}`);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const userId = req.user;
    const { todoId } = req.params;

    if (!isValidObjectId(todoId)) {
      return res.status(400).json({
        success: false,
        message: "Todo not exist",
      });
    }

    const todo = await Todo.findByIdAndDelete(todoId);

    await User.findByIdAndUpdate(userId, { $pull: { todos: todo._id } });

    return res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    console.log(`Error while deleting todo : ${error}`);
  }
};

const todoIsComplete = async (req, res) => {
  try {
    const { todoId } = req.params;

    if (!isValidObjectId(todoId)) {
      return res.status(400).json({
        success: false,
        message: "Todo not exist",
      });
    }

    const todo = await Todo.findByIdAndUpdate(
      todoId,
      [{ $set: { isComplete: { $not: "$isComplete" } } }],
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: `Todo toggle successfully : ${todo.isComplete}`,
    });
  } catch (error) {
    console.log(`Error while toggle todo : ${error}`);
  }
};

export { getAllTodos, addTodo, updateTodo, deleteTodo, todoIsComplete };
