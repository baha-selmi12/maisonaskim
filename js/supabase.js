/* ============================================
   Supabase Configuration
   ============================================
   This file sets up the connection to Supabase.
   All other JS files will use the `supabase` variable
   created here to interact with the database.
   ============================================ */

// TODO: Replace these with your actual Supabase project credentials
// You can find them at: https://supabase.com → Your Project → Settings → API
const SUPABASE_URL = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY_HERE';

// TODO: Import the Supabase client library
// Option 1 - via CDN (add this script tag in your HTML BEFORE this file):
//   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
//
// Option 2 - via ES module (if using type="module" in your script tags):
//   import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// TODO: Create the Supabase client
// const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


/* ============================================
   Supabase Database Tables to Create
   ============================================
   Go to your Supabase dashboard → SQL Editor, and create these tables:

   -- Products table
   CREATE TABLE products (
       id SERIAL PRIMARY KEY,
       name TEXT NOT NULL,
       description TEXT,
       price DECIMAL(10, 2) NOT NULL,
       image_url TEXT,
       category TEXT,
       is_popular BOOLEAN DEFAULT false,
       is_on_sale BOOLEAN DEFAULT false,
       sale_price DECIMAL(10, 2),
       created_at TIMESTAMP DEFAULT NOW()
   );

   -- Rendez-vous table
   CREATE TABLE rendezvous (
       id SERIAL PRIMARY KEY,
       full_name TEXT NOT NULL,
       phone TEXT NOT NULL,
       email TEXT,
       preferred_date DATE,
       message TEXT,
       created_at TIMESTAMP DEFAULT NOW()
   );

   ============================================ */
