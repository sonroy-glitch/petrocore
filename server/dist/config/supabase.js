"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_js_1 = require("@supabase/supabase-js");
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
let supabase;
if (supabaseUrl && supabaseKey) {
    supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
}
else {
    console.warn("Supabase environment variables (SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY) are missing. Supabase client will be initialized as a placeholder proxy.");
    supabase = new Proxy({}, {
        get(target, prop) {
            return () => {
                throw new Error("Supabase client operation failed: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing from environment variables.");
            };
        }
    });
}
exports.default = supabase;
