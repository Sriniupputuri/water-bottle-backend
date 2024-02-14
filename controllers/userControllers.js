import UserModel from "../models/UserModel.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res) => {
  let users;
  try {
    users = await UserModel.find();
  } catch (err) {
    return console.log(err);
  }
  if (!users) {
    res.status(400).json({ message: "User not exist" });
  }
  res.status(200).json({ users });
};

export const signup = async (req, res) => {
  let { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await UserModel.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    res.status(400).json({ message: "User already exist" });
  }
  let hashedPass = bcrypt.hashSync(password);
  let user = new UserModel({
    name,
    email,
    password: hashedPass,
  });
  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }
  res.status(200).json({ message: "signed up successfully" });
};
