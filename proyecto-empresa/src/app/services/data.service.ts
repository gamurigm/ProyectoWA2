import { Injectable } from '@angular/core';
import { TeamMember } from '../models/team-member.model';
import { CompanyInfo } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Ana María González',
      role: 'Full Stack Developer & Team Lead',
      technologies: ['Angular', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'],
      photo: 'assets/images/team/ana-gonzalez.jpg',
      description: 'Desarrolladora Full Stack con más de 7 años de experiencia en tecnologías web modernas. Especializada en arquitecturas escalables y liderazgo de equipos ágiles.',
      email: 'ana.gonzalez@techsolutions.com',
      linkedin: 'https://linkedin.com/in/ana-maria-gonzalez',
      github: 'https://github.com/ana-gonzalez',
      experience: 7
    },
    {
      id: 2,
      name: 'Carlos Eduardo Ramírez',
      role: 'Frontend Developer & UX/UI Specialist',
      technologies: ['React', 'Vue.js', 'Angular', 'Figma', 'CSS3', 'JavaScript'],
      photo: 'assets/images/team/carlos-ramirez.jpg',
      description: 'Especialista en desarrollo frontend y experiencia de usuario. Apasionado por crear interfaces intuitivas y accesibles que mejoren la experiencia del usuario.',
      email: 'carlos.ramirez@techsolutions.com',
      linkedin: 'https://linkedin.com/in/carlos-eduardo-ramirez',
      github: 'https://github.com/carlos-ramirez',
      experience: 5
    },
    {
      id: 3,
      name: 'María José Herrera',
      role: 'Backend Developer & DevOps Engineer',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Docker', 'Kubernetes', 'Jenkins'],
      photo: 'assets/images/team/maria-herrera.jpg',
      description: 'Ingeniera de software especializada en desarrollo backend y operaciones. Experta en automatización de procesos y implementación de arquitecturas cloud-native.',
      email: 'maria.herrera@techsolutions.com',
      linkedin: 'https://linkedin.com/in/maria-jose-herrera',
      github: 'https://github.com/maria-herrera',
      experience: 6
    }
  ];

  private companyInfo: CompanyInfo = {
    name: 'TechSolutions Pro',
    description: 'Somos una empresa innovadora de desarrollo de software especializada en crear soluciones tecnológicas de vanguardia para empresas de todos los tamaños.',
    mission: 'Transformar ideas en soluciones digitales innovadoras que impulsen el crecimiento y éxito de nuestros clientes.',
    vision: 'Ser reconocidos como líderes en desarrollo de software, estableciendo nuevos estándares de calidad e innovación en la industria tecnológica.',
    values: [
      'Innovación continua',
      'Calidad excepcional',
      'Colaboración efectiva',
      'Transparencia',
      'Compromiso con el cliente',
      'Crecimiento sostenible'
    ],
    established: 2018,
    employees: 25,
    projects: 150,
    clients: 85
  };

  getTeamMembers(): TeamMember[] {
    return this.teamMembers;
  }

  getTeamMemberById(id: number): TeamMember | undefined {
    return this.teamMembers.find(member => member.id === id);
  }

  getCompanyInfo(): CompanyInfo {
    return this.companyInfo;
  }
}
