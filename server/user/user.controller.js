import mongoose from "mongoose";
import User from "./user.model.js";

// GET request: retrieve all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.log("Error fetching users: ", error.message);
    res.status(500).json({ success: false, message: "Server Error." });
  }
};

// GET by specific _id request: retrieve a single user
export const getUser = async (req, res) => {
  const { id } = req.params;

  // check user exists
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Error: Invalid _id." });
  }

  try {
    const user = await User.findById(id);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log("Error fetching user: ", error.message);
    res.status(500).json({ success: false, message: "Server Error." });
  }
};

// POST request: create a new user
export const createUser = async (req, res) => {
  const user = req.body;

  // check for empty fields`
  if (
    !user.username ||
    !user.email ||
    !user.password ||
    !user.confirmPassword
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields." });
  }
  if (user.password != user.confirmPassword) {
    return res
      .status(400)
      .json({ success: false, message: "Passwords don't match." });
  }
  if (user.password.length < 8) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 8 characters.",
    });
  }

  // check if username exists
  const existingUser = await User.find({ username: user.username });
  if (existingUser != "") {
    return res
      .status(400)
      .json({ success: false, message: "Username exists." });
  }

  const newUser = new User(user);

  try {
    await newUser.save();
    res.status(201).json({ success: true, message: "User created." });
  } catch (error) {
    console.error("Error creating new user:", error.message);
    res.status(500).json({ success: false, message: "Server Error." });
  }
};

// PUT request: update the details of a user by id
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;

  // check user exists
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Error: Invalid _id." });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error.message);
    res.status(500).json({ success: false, message: "Server Error." });
  }
};

// DELETE request: delete a user by id
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  // check user exists
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Error: Invalid _id." });
  }

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "User deleted." });
  } catch (error) {
    console.error("Error deleting user:", error.message);
    res.status(500).json({ success: false, message: "Server Error." });
  }
};
