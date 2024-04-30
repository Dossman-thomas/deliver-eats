import express, { Request, Response } from "express"; 
import cors from "cors"; 
import "dotenv/config";

const PORT = process.env.PORT || 3001; 
const app = express(); 

app.use(express.json())
app.use(cors())

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello!" });
});

app.listen(PORT, () => {
  console.log(`API server running on port http://localhost:${PORT}`);
});