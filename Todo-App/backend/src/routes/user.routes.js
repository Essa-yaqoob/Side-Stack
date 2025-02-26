import {Router} from "express"
import {register, login, logout} from "../controllers/user.controller.js"


const userRouter = Router()

userRouter.route("/register").post(register)
userRouter.route("/login").post(login)

userRouter.route("/logout").post(logout)

export default userRouter;