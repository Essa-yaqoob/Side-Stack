import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./src/routes/user.routes.js";
import todoRouter from "./src/routes/todo.routes.js";
import { isAuthCheck } from "./src/controllers/user.controller.js";

const app = express();

//* middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(
  cors({
    // origin: process.env.FRONTEND_URL,
    origin : "http://localhost:5173",
    credentials: true,
  })
);

//* routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/todo", todoRouter);

//*

app.get("/api/v1/auth/check", isAuthCheck)

export default app;
