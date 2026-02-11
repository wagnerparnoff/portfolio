export interface Project {
  id: string;
  name: string;
  description_pt: string;
  description_en: string;
  tech: string[];
  link?: string;
  repo_link?: string;
  image_url?: string;
  created_at?: string;
}
