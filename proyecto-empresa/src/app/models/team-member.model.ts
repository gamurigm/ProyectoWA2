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
  instagram?: string;
  facebook?: string;
  twitter?: string;
  experience: number; // años de experiencia
  fullBio?: string; // biografía completa para la página de detalle
  specialization?: string; // especialización principal
  achievements?: string[]; // logros principales
}
