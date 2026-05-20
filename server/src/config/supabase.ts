import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

let supabase: any;

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
} else {
  console.warn("Supabase environment variables (SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY) are missing. Supabase client will be initialized as a placeholder proxy.");
  supabase = new Proxy({}, {
    get(target, prop) {
      return () => {
        throw new Error(
          "Supabase client operation failed: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing from environment variables."
        );
      };
    }
  });
}

export default supabase;
