import { User } from "../models/user.model.js";
import { v4 as uuidv4, v4 } from "uuid";
import { generateJwt } from "../utils/jwt.js";

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Required all fields",
      });
    }

    const isUserExisit = await User.findOne({ email });

    if (isUserExisit) {
      return res.status(400).json({
        success: false,
        message: "User exisit",
      });
    }

    const uuid = await v4().slice(0, 5);

    const userName = `${firstName}${uuid}`;

    const user = await User.create({
      firstName,
      lastName,
      userName,
      email,
      password,
    });

    return res.status(200).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.log(`Error while registering user : ${error}`);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Required all field",
      });
    }

    const isUserExisit = await User.findOne({ email });

    if (!isUserExisit) {
      return res.status(400).json({
        success: false,
        message: "User not exist",
      });
    }

    const isPasswordValid = await isUserExisit.verifyPassword(password);

    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Password invalid",
      });
    }

    const token = generateJwt(isUserExisit._id);

    const user = isUserExisit;

    return res
      .cookie("token", token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true })
      .status(200)
      .json({
        success: true,
        message: "Login successfully",
        user: {
          user: user._id,
          email: user.email,
          userName: user.userName,
        },
      });
  } catch (error) {
    console.log(`Error while login user : ${error}`);
  }
};

const logout = async (req, res) => {
  try {
    return res.status(200).clearCookie("token").json({
      success : true,
      message : "Logout succesfullt"
    })
  } catch (error) {
    console.log(`Error while logout : ${error}`)
  }
}

export {
  register,
  login,
  logout
};
