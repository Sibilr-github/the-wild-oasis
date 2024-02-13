import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://jqfhapzpmpthwzjvemen.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxZmhhcHpwbXB0aHd6anZlbWVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4MDc0NjAsImV4cCI6MjAyMDM4MzQ2MH0.WVjc_3GCDP1cY-fwW05ojBB7pPvPJElpqw8gzqy6Mqw"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;