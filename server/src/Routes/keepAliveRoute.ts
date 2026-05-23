import express from "express";
import prisma from "../config/prisma";

const router = express.Router();

router.get("/keepalive", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.status(200).json({
      success: true,
      message: "Database keepalive successful",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Keepalive error:", error);

    res.status(500).json({
      success: false,
      message: "Database keepalive failed",
    });
  }
});

export default router;
