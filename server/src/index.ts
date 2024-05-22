// import necessary dependencies
import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

// connect to deliverEats MongoDB
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => {
    console.log("Connected to MongoDB");
  })

// set up the express app
const PORT = process.env.PORT || 7000;
const app = express();

// add middleware to parse JSON and urlencoded request bodies
app.use(express.json())
app.use(cors())

// define a route handler for the user page
app.use("/api/my/user", myUserRoute)

// start the Express server
app.listen(PORT, () => {
  console.log(`API server running on port http://localhost:${PORT}`);
});