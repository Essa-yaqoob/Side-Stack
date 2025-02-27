import { User } from "../models/user.model.js";
import { verifyJwt } from "../utils/jwt.js";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "You are not authenticated for this action",
      });
    }
    
    const decodedToken = await verifyJwt(token);

    if (!decodedToken) {
      return res.status(400).json({
        success: false,
        message: "Invalid Token",
      });
    }

    const userId = decodedToken.id

    const isUserExisit = await User.findById(userId);

    if (!isUserExisit) {
      return res.status(400).json({
        success: false,
        message: "Please login",
      });
    }

    req.user = userId

    next();
  } catch (error) {
    console.log(`Error while authication user : ${error}`);
  }
};

export default isAuthenticated;
