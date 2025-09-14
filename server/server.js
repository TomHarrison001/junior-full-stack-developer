import express from "express";
import { connectDB } from "./database.js";
import router from "./user/user.routes.js";

const app = express();
const PORT = 5000;

// Use JSON parsing middleware and user routes
app.use(express.json());
app.use("/users", router);

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
