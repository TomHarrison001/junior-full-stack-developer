import mongoose from "mongoose";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs-react";
import isaac from "isaac";
import User from "./user.model.js";

dotenv.config();
bcrypt.setRandomFallback((len) => {
	const buff = new Uint8Array(len);
	return buff.map(() => Math.floor(isaac.random() * 256));
});

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

// GET by specific username request: retrieve a single user
export const getUser = async (req, res) => {
  if (req.session.authorization) {
    let token = req.session.authorization["accessToken"]; // jwt access token

    // verify jwt token for user auth
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (!err) {
        req.user = user; // set authenticated user data on the req object
      } else {
        return res
          .status(403)
          .json({ success: false, message: "User not authenticated" });
      }
    });
  }

  const { id } = req.params;

  // check id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Error: Invalid _id." });
  }

  // check if email exists
  const existingUser = await User.findById(id);
  if (existingUser == "") {
    return res.status(400).json({ success: false, message: "User not found." });
  }

  try {
    res.status(200).json({ success: true, username: existingUser.username, email: existingUser.email });
  } catch (error) {
    console.error("Error fetching user:", error.message);
    res.status(500).json({ success: false, message: "Server Error." });
  }
};

// POST request: create a new user
export const createUser = async (req, res) => {
  const user = req.body;

  // check if username exists
  const existingUsername = await User.find({ username: user.username });
  if (existingUsername != "") {
    return res
      .status(400)
      .json({ success: false, message: "Username already exists." });
  }

  // check if email exists
  const existingEmail = await User.find({ email: user.email });
  if (existingEmail != "") {
    return res
      .status(400)
      .json({ success: false, message: "Email already used." });
  }

  // jwt token
  let accessToken = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: 60 * 10,
  }); // 10 min expiry

  // store access token in session
  req.session.authorization = {
    accessToken,
  };

  try {
    const encryptedPassword = bcrypt.hashSync(user.password, 10)
    user.password = encryptedPassword;
    const newUser = new User(user);
    await newUser.save();
    res.status(201).json({ success: true, _id: newUser._id });
  } catch (error) {
    console.error("Error creating new user:", error.message);
    res.status(500).json({ success: false, message: "Server Error." });
  }
};

// POST request: create a new user
export const loginUser = async (req, res) => {
  const user = req.body;

  // check if email exists
  const existingEmail = await User.find({ email: user.email });
  if (existingEmail == "") {
    return res
      .status(400)
      .json({ success: false, message: "Email or password is incorrect." });
  }

  // jwt token
  let accessToken = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: 60 * 10,
  }); // 10 min expiry

  // store access token in session
  req.session.authorization = {
    accessToken,
  };

  try {
    const passwordMatch = bcrypt.compareSync(user.password, existingEmail[0].password);
    if (passwordMatch)
      res.status(200).json({ success: true, _id: existingEmail[0]._id });
    else
      res
        .status(400)
        .json({ success: false, message: "Email or password is incorrect." });
  } catch (error) {
    console.error("Error logging in:", error.message);
    res.status(500).json({ success: false, message: "Server Error." });
  }
};

// PUT request: update the details of a user by id
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;

  // check id is valid
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

  // check id is valid
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
