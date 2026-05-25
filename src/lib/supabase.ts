import { createClient } from "@supabase/supabase-js";


const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error(
    "Supabase env variables missing. Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in .env",
  );
}

export const supabase = createClient(SUPABASE_URL ?? "", SUPABASE_ANON_KEY ?? "");

export default supabase;
