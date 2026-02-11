-- Create projects table
create table public.projects (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  description_pt text not null,
  description_en text not null,
  tech text[] not null,
  link text,
  repo_link text,
  image_url text
);

-- Enable RLS
alter table public.projects enable row level security;

-- Create policies (modify as needed for security, currently allowing public read)
create policy "Enable read access for all users" on public.projects
  for select using (true);

-- Allow insert/update/delete for now (In production, you should restrict this to authenticated users only)
create policy "Enable insert for all users" on public.projects
  for insert with check (true);

create policy "Enable update for all users" on public.projects
  for update using (true);

create policy "Enable delete for all users" on public.projects
  for delete using (true);
