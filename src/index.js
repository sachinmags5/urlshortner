import express from "express";
import { configDotenv } from "dotenv";

configDotenv();
const PORT = process.env.PORT;
const app = express();

//middlewares
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.status(200).json({ success: "true", message: "server running !" });
});

//listen to server
app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
