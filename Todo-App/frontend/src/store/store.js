import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../store/userSlice"
import todosSlice from "../store/todosSlice";

const store = configureStore({
    reducer : {
        user : userSlice,
        todos : todosSlice
    }
})

export default store;