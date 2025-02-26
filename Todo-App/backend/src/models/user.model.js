import mongoose, { Schema } from "mongoose";
import argon2 from "argon2";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    userName: {
      type: String,
      trim: true,
      unique: true,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: [8, "Password must be atleast 8 digits"],
    },
    todos: {
      type: Schema.Types.ObjectId,
      ref: "Todo",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = await argon2.hash(this.password);
  } catch (error) {
    console.log(`Error while hasing password : ${error}`);
  }
});

userSchema.methods.verifyPassword = async function (password) {
  try {
    const isVerify = await argon2.verify(this.password, password);
    return isVerify;
  } catch (error) {
    console.log(`Error while verifying password : ${error}`);
  }
};

export const User = mongoose.model("User", userSchema);
