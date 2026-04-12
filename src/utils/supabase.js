import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://fqcnunxyylevjlfsgefg.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxY251bnh5eWxldmpsZnNnZWZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5NTA1OTcsImV4cCI6MjA5MTUyNjU5N30.o3mfWcEQcBrQ11-rM5BCstqmArqpr28vlfYxg2VVZKI'
);

export default supabase;
