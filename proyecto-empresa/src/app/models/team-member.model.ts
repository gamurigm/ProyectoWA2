export interface TeamMember {
  id: number;
  name: string;
  role: string;
  technologies: string[];
  photo: string;
  description: string;
  email: string;
  linkedin?: string;
  github?: string;
  experience: number; // años de experiencia
}
