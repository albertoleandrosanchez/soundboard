"use server";
import { connectDB } from "@/lib/mongodb";
import User from "../mongodb/models/User";
import bcrypt from "bcryptjs";

export const register = async (values: any) => {
  const { email, password, name } = values;

  try {
    await connectDB();
    const userFound = await User.findOne({ email });
    if (userFound) {
      return {
        error: "Email already exists!",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    const savedUser = await user.save();
    return savedUser;
  } catch (e) {
    console.log(e);
  }
};
