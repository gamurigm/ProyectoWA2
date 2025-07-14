import { Injectable, signal, WritableSignal, computed } from '@angular/core';
import { TeamMember } from '../models/team-member.model';
import { CompanyInfo } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly _teamMembers = signal<TeamMember[]>([
    {
      id: 1,
      name: 'Alvina Antar',
      role: 'CEO & Chief Executive Officer',
      technologies: ['AI Strategy', 'Digital Transformation', 'Business Development', 'Customer Relations', 'Enterprise Technology'],
      photo: '/alvina_antar.jpeg',
      description: 'CEO visionaria en AI y estrategia empresarial. Consejera de Couchbase y cofundadora de Red de Mujeres CIO.',
      email: 'alvina.antar@techsolutions.com',
      linkedin: 'https://ec.linkedin.com/company/techsolutions',
      github: 'https://github.com/techsolutions-pro',
      instagram: 'https://www.instagram.com/techsolutionscr/',
      facebook: 'https://www.facebook.com/TechSolutionsIncDE',
      twitter: 'http://x.com/techsolutionsde',
      experience: 25,
      fullBio: 'Alvina Antar es la CEO y fundadora de TechSolutions Pro, donde lidera la transformación digital de la empresa e impulsa su evolución hacia una compañía que prioriza los datos y la inteligencia artificial. Con más de 25 años de experiencia, es una líder visionaria conocida por crear equipos diversos y de alto rendimiento, centrados en la innovación a través de tecnologías disruptivas. Antes de fundar TechSolutions Pro, Alvina pasó cuatro años como CIO en Okta, donde defendió la seguridad basada en la identidad y ayudó a escalar el negocio. Anteriormente, se desempeñó como la primera CIO de Zuora, donde construyó una moderna organización de tecnología empresarial y guió a la empresa a través de una exitosa IPO. Comenzó su carrera como ingeniera de software en Dell, donde pasó 17 años liderando la integración de fusiones y adquisiciones. Como líder impulsada por un propósito, Alvina crea relaciones significativas como voz del cliente, combinando la agilidad de una startup con la escala empresarial. Asesora a varias empresas emergentes de inteligencia artificial y seguridad (SGNL, SquareX y Olakai) y forma parte del consejo directivo de Couchbase. También está profundamente comprometida con el avance de las mujeres en la tecnología y el empoderamiento de los jóvenes con escasos recursos. Alvina cofundó la Red de Mujeres CIO de Silicon Valley y forma parte del consejo asesor de BUILD. Es licenciada en Ciencias de la Computación por la Universidad de Houston.',
      specialization: 'Transformación Digital y Estrategia de IA',
      achievements: [
        'CEO y Fundadora de TechSolutions Pro',
        'Ex-CIO de Okta por 4 años',
        'Primera CIO de Zuora, guió IPO exitosa',
        '17 años en Dell liderando M&A',
        'Consejera de Couchbase',
        'Cofundadora Red de Mujeres CIO Silicon Valley',
        'Asesora de empresas de IA: SGNL, SquareX, Olakai'
      ]
    },
    {
      id: 2,
      name: 'Gabriel Murillo',
      role: 'CTO & Chief Technology Officer',
      technologies: ['Cloud Architecture', 'Microservices', 'AI/ML', 'DevOps', 'System Design', 'Angular', 'Node.js'],
      photo: '/gabriel.jpeg',
      description: 'Visionario tecnológico con 12 años de experiencia en arquitectura de software y liderazgo técnico. Especializado en transformación digital, AI/ML y soluciones cloud-native escalables.',
      email: 'gabriel.murillo@techsolutions.com',
      linkedin: 'https://ec.linkedin.com/company/techsolutions',
      github: 'https://github.com/techsolutions-pro',
      instagram: 'https://www.instagram.com/techsolutionscr/',
      facebook: 'https://www.facebook.com/TechSolutionsIncDE',
      twitter: 'http://x.com/techsolutionsde',
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
      linkedin: 'https://ec.linkedin.com/company/techsolutions',
      github: 'https://github.com/techsolutions-pro',
      instagram: 'https://www.instagram.com/techsolutionscr/',
      facebook: 'https://www.facebook.com/TechSolutionsIncDE',
      twitter: 'http://x.com/techsolutionsde',
      experience: 10
    }
  ]);

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


  getTeamMembersSignal() {
    return this._teamMembers.asReadonly();
  }


  getTeamMemberByIdSignal(id: number) {
    return computed(() => this._teamMembers().find(member => member.id === id));
  }

  getCompanyInfo(): CompanyInfo {
    return this.companyInfo;
  }
}
