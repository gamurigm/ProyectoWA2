export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

export interface CompanyInfo {
  name: string;
  description: string;
  mission: string;
  vision: string;
  values: string[];
  established: number;
  employees: number;
  projects: number;
  clients: number;
}
