import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jzeavpnqehbmlqewjgac.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6ZWF2cG5xZWhibWxxZXdqZ2FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk5MjA0NzksImV4cCI6MjAyNTQ5NjQ3OX0.2JdBvM1f7HedDzPT0_YNJaa_44rXbXPkyDLrQWU6Kh0";

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;