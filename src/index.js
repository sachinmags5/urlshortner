import express from "express";
import { configDotenv } from "dotenv";
import urlRouter from "./routes/url.js";
import connectDb from "./connection/connect.js";
import URL from "./model/url.js";

configDotenv();
const PORT = process.env.PORT;
const app = express();

//connect Db
connectDb();

//middlewares
app.use(express.json());

//routes
app.use("/api/url", urlRouter);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry?.redirectURL);
});

//listen to server
app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
