import mongoose, { Schema } from "mongoose";

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

export const User = mongoose.model("User", userSchema);
