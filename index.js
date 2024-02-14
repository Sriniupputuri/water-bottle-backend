import express from "express";
import router from "./routes/userRoutes.js";
const app = express();
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URL);

app.use("/api/users", router);

const Port = 5500;

app.listen(Port, () => {
  console.log(Port);
});
