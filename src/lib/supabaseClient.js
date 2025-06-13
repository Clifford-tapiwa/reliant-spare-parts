import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jwbmmhaddgynqcliyasj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3Ym1taGFkZGd5bnFjbGl5YXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3NTMwODcsImV4cCI6MjA2NTMyOTA4N30.7EKRlGFgmGEneugie8dc1zGHg8ec1caHR7BNjpKi8z4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

