import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database.js";
import router from "./user/user.routes.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Use JSON parsing middleware and user routes
app.use(express.json());
app.use(cors());
app.use("/users", router);

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
