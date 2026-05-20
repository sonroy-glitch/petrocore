import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./Routes/contactRoute";
import careerRoute from "./Routes/careerRoute";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", contactRoute);
app.use("/api", careerRoute);

if (process.env.NODE_ENV !== "production" && !process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
}

export = app;
