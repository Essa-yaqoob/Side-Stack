import express from "express"
import cookiePaser from "cookie-parse"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extends : true}))

app.use(cookiePaser())
app.use(cors())





export default app;