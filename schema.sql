-- Create visitor analytics table
create table public.page_views (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  path text not null,
  referrer text,
  user_agent text,
  screen_width integer,
  language text
);

-- Enable Row Level Security (RLS)
alter table public.page_views enable row level security;

-- Create policy to allow anonymous inserts from the frontend
create policy "Allow public inserts" on public.page_views 
  for insert 
  with check (true);

-- Create policy to prevent anonymous reads (only database admin/dashboard can read)
create policy "Disable public reads" on public.page_views 
  for select 
  using (false);
