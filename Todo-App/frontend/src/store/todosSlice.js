import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    removeTodos: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo._id !== action.payload._id
      );
    },
    addNewTodos: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    updateTodos: (state, action) => {
      // console.log(action.payload)
      state.todos = state.todos.map((todo) =>
        todo._id === action.payload._id ? { ...action.payload } : { ...todo }
      );
    },
    setTodoIsCompleted : (state, action) => {
        state.todos = state.todos.map((todo) => (
            todo._id === action.payload._id ? {...action.payload} : {...todo}
        ))
    }

    //? these action for pending or completed todos
    
  },
});

export const { setTodos, removeTodos, updateTodos, addNewTodos, setTodoIsCompleted } =
  todosSlice.actions;
export default todosSlice.reducer;
