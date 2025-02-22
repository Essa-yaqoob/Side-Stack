import app from "./app.js";
import dbConnect from "./src/db/dbConnect.js";
import dotenv from "dotenv"

dotenv.config({
    path : "./.env"
})

const PORT = process.env.PORT || 3000;

dbConnect()
  .then(() => {
    console.log("DB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server started at port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`DB connection failed : ${error}`);
  });
