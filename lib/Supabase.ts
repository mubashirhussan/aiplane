import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bttfowkfbsxfdzyzgglu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0dGZvd2tmYnN4ZmR6eXpnZ2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxMzEzMzQsImV4cCI6MjA2MDcwNzMzNH0.iPInnj5ALavSQK6Dnldl3Sr8QnXwNUZWtAnunlzSpmI';

export const supabase = createClient(supabaseUrl, supabaseKey);
