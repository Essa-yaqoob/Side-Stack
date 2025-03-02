import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    setIsAuthenticated: false,
  },
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.setIsAuthenticated = action.payload;
    },
  },
});

export const { setIsAuthenticated} = userSlice.actions;
export default userSlice.reducer;
