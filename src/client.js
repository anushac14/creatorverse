import { createClient } from '@supabase/supabase-js';
const URL = 'https://ykzgchjivrmxfdshhtcl.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlremdjaGppdnJteGZkc2hodGNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA3Njc0MTgsImV4cCI6MjAzNjM0MzQxOH0.TxdE0yQ9vhqXqjQtZuSobuXmFAGAiNFsOxp7PjsEgh0';

export const supabase = createClient(URL, API_KEY);
