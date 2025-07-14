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
      name: 'Alvina Antar',
      role: 'CEO & Chief Executive Officer',
      technologies: ['AI Strategy', 'Business Development', 'Customer Relations', 'Startup Advisory', 'Digital Transformation'],
      photo: '/alvina_antar.jpeg',
      description: 'Líder visionaria especializada en estrategia de AI y relaciones con clientes. Asesora empresas emergentes de IA y seguridad, miembro del consejo de Couchbase. Cofundadora de la Red de Mujeres CIO de Silicon Valley.',
      email: 'alvina.antar@techsolutions.com',
      linkedin: 'https://linkedin.com/in/alvina-antar',
      github: 'https://github.com/alvina-antar',
      experience: 15
    },
    {
      id: 2,
      name: 'Gabriel Murillo',
      role: 'CTO & Chief Technology Officer',
      technologies: ['Cloud Architecture', 'Microservices', 'AI/ML', 'DevOps', 'System Design', 'Angular', 'Node.js'],
      photo: '/gabriel.jpeg',
      description: 'Visionario tecnológico con 12 años de experiencia en arquitectura de software y liderazgo técnico. Especializado en transformación digital, AI/ML y soluciones cloud-native escalables.',
      email: 'gabriel.murillo@techsolutions.com',
      linkedin: 'https://linkedin.com/in/gabriel-murillo',
      github: 'https://github.com/gabriel-murillo',
      experience: 12
    },
    {
      id: 3,
      name: 'Pablo Zurita',
      role: 'COO & Chief Operating Officer',
      technologies: ['Operations Management', 'Agile Methodologies', 'Project Management', 'Business Intelligence', 'Process Optimization'],
      photo: '/pablo.jpeg',
      description: 'Ejecutivo dinámico especializado en operaciones y gestión empresarial. Experto en optimización de procesos, metodologías ágiles y transformación de operaciones tecnológicas.',
      email: 'pablo.zurita@techsolutions.com',
      linkedin: 'https://linkedin.com/in/pablo-zurita',
      github: 'https://github.com/pablo-zurita',
      experience: 10
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
