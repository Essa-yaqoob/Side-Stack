import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./src/routes/user.routes.js";
import todoRouter from "./src/routes/todo.routes.js";

const app = express();


//* middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(cors());


//* routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/todo", todoRouter)

export default app;
