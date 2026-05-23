"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = __importDefault(require("../config/prisma"));
const router = express_1.default.Router();
router.get("/keepalive", async (req, res) => {
    try {
        await prisma_1.default.$queryRaw `SELECT 1`;
        res.status(200).json({
            success: true,
            message: "Database keepalive successful",
            timestamp: new Date().toISOString(),
        });
    }
    catch (error) {
        console.error("Keepalive error:", error);
        res.status(500).json({
            success: false,
            message: "Database keepalive failed",
        });
    }
});
exports.default = router;
