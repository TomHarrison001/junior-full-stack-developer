import express from "express";
import {
  getUsers,
  getUser,
  createUser,
  loginUser,
  updateUser,
  deleteUser,
} from "./user.controller.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/register", createUser);
router.post("/login", loginUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
