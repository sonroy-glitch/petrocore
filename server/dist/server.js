"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const contactRoute_1 = __importDefault(require("./Routes/contactRoute"));
const careerRoute_1 = __importDefault(require("./Routes/careerRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", contactRoute_1.default);
app.use("/api", careerRoute_1.default);
if (process.env.NODE_ENV !== "production" && !process.env.VERCEL) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
    });
}
module.exports = app;
