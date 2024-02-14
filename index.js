import express from "express";
import router from "./routes/userRoutes.js";
const app = express();
import mongoose from "mongoose";

app.use(express.json())

mongoose.connect(
  "mongodb+srv://srinivasupputuri0626:srinivasupputuri0626@cluster0.lhuwfpa.mongodb.net/?retryWrites=true&w=majority"
);

app.use("/api/users",router)

app.listen(5000, () => {
  console.log("Successfully running");
});
