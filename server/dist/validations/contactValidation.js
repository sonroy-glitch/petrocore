"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const z = __importStar(require("zod"));
const contactSchema = z.object({
    fullName: z
        .string()
        .trim()
        .min(3, "Fullname too short")
        .max(30, "Fullname too long"),
    email: z.string().trim().toLowerCase().pipe(z.email("Invalid email address")),
    phone: z
        .string()
        .trim()
        .regex(/^\+91\s?[6-9]\d{9}$/, "Invalid phone number")
        .optional()
        .or(z.literal("")),
    company: z
        .string()
        .trim()
        .max(50, "Company name too long")
        .optional()
        .or(z.literal("")),
    service: z.enum([
        "Project Management Consultancy",
        "Well Engineering",
        "Execution & Operational Support",
        "Workforce Solutions",
        "Other",
    ]),
    message: z
        .string()
        .trim()
        .min(10, "Message too short")
        .max(1500, "Message too long"),
});
exports.default = contactSchema;
