// import necessary dependencies
import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";


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

// define a route handler for the default home page
app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello!" });
});

// start the Express server
app.listen(PORT, () => {
  console.log(`API server running on port http://localhost:${PORT}/test`);
});