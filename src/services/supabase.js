
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://wpglwmlcqrrpdyixdkic.supabase.co'

const supabaseKey = process.env.SUPABASE_KEY;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwZ2x3bWxjcXJycGR5aXhka2ljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgxMTczOTAsImV4cCI6MjA0MzY5MzM5MH0.xNkBvJfcETXDuwDhyRu02uMdeARSK5YDYrQ2aHoEnSQ

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;