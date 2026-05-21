import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./Routes/contactRoute";
import careerRoute from "./Routes/careerRoute";
import keepAliveRoute from "./Routes/keepAliveRoute";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", contactRoute);
app.use("/api", careerRoute);
app.use("/api", keepAliveRoute);

if (process.env.NODE_ENV !== "production" && !process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
}

export = app;
