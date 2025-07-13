import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { TeamMember } from '../../models/team-member.model';

@Component({
  selector: 'app-team-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="team-detail-page" *ngIf="member">
      <!-- Hero Section -->
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <div class="member-image">
              <img [src]="member.photo" [alt]="member.name" 
                   onerror="this.src='assets/images/placeholder-avatar.jpg'">
            </div>
            <div class="member-info">
              <h1>{{ member.name }}</h1>
              <h2 class="role">{{ member.role }}</h2>
              <div class="experience">
                <i class="fas fa-briefcase"></i>
                <span>{{ member.experience }} años de experiencia</span>
              </div>
              <div class="contact-links">
                <a [href]="'mailto:' + member.email" class="contact-btn email">
                  <i class="fas fa-envelope"></i>
                  Contactar
                </a>
                <a [href]="member.linkedin" *ngIf="member.linkedin" target="_blank" class="contact-btn linkedin">
                  <i class="fab fa-linkedin-in"></i>
                  LinkedIn
                </a>
                <a [href]="member.github" *ngIf="member.github" target="_blank" class="contact-btn github">
                  <i class="fab fa-github"></i>
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <a routerLink="/equipo" class="back-btn">
            <i class="fas fa-arrow-left"></i>
            Volver al Equipo
          </a>
        </div>
      </section>

      <!-- About Section -->
      <section class="about-member">
        <div class="container">
          <div class="section-content">
            <h3>Acerca de {{ member.name.split(' ')[0] }}</h3>
            <p class="description">{{ member.description }}</p>
            
            <div class="details-grid">
              <div class="detail-card">
                <h4>Especialización</h4>
                <p>{{ getSpecialization() }}</p>
              </div>
              <div class="detail-card">
                <h4>Años de Experiencia</h4>
                <p>{{ member.experience }} años</p>
              </div>
              <div class="detail-card">
                <h4>Email</h4>
                <p>{{ member.email }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Technologies Section -->
      <section class="technologies">
        <div class="container">
          <h3>Tecnologías y Herramientas</h3>
          <div class="tech-grid">
            <div class="tech-item" *ngFor="let tech of member.technologies">
              <div class="tech-icon">
                <i [class]="getTechIcon(tech)"></i>
              </div>
              <span>{{ tech }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section class="experience-section">
        <div class="container">
          <h3>Experiencia y Proyectos</h3>
          <div class="experience-content">
            <div class="timeline">
              <div class="timeline-item" *ngFor="let project of mockProjects">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h4>{{ project.title }}</h4>
                  <p class="project-period">{{ project.period }}</p>
                  <p class="project-description">{{ project.description }}</p>
                  <div class="project-tech">
                    <span class="tech-tag" *ngFor="let tech of project.technologies">{{ tech }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="skills">
        <div class="container">
          <h3>Habilidades y Competencias</h3>
          <div class="skills-grid">
            <div class="skill-category" *ngFor="let category of skillCategories">
              <h4>{{ category.name }}</h4>
              <div class="skill-list">
                <div class="skill-item" *ngFor="let skill of category.skills">
                  <div class="skill-name">{{ skill.name }}</div>
                  <div class="skill-bar">
                    <div class="skill-progress" [style.width.%]="skill.level"></div>
                  </div>
                  <div class="skill-level">{{ skill.level }}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta">
        <div class="container">
          <div class="cta-content">
            <h3>¿Interesado en trabajar con {{ member.name.split(' ')[0] }}?</h3>
            <p>Contacta directamente o envía una consulta a nuestro equipo</p>
            <div class="cta-buttons">
              <a [href]="'mailto:' + member.email" class="btn btn-primary">
                Contactar Directamente
              </a>
              <a routerLink="/contacto" class="btn btn-secondary">
                Consulta General
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Not Found -->
    <div class="not-found" *ngIf="!member && !loading">
      <div class="container">
        <h1>Miembro no encontrado</h1>
        <p>El miembro del equipo que buscas no existe o ha sido removido.</p>
        <a routerLink="/equipo" class="btn btn-primary">Volver al Equipo</a>
      </div>
    </div>
  `,
  styles: [`
    .team-detail-page {
      padding-top: 80px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* Hero Section */
    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 4rem 0;
      color: white;
      position: relative;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 3rem;
      align-items: center;
    }

    .member-image {
      position: relative;
    }

    .member-image img {
      width: 100%;
      height: 350px;
      object-fit: cover;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }

    .member-info h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .role {
      font-size: 1.5rem;
      font-weight: 500;
      color: #ffd700;
      margin-bottom: 1rem;
    }

    .experience {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.1rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .experience i {
      color: #ffd700;
    }

    .contact-links {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .contact-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.8rem 1.5rem;
      background: rgba(255,255,255,0.1);
      color: white;
      text-decoration: none;
      border-radius: 25px;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.2);
    }

    .contact-btn:hover {
      background: rgba(255,255,255,0.2);
      transform: translateY(-2px);
    }

    .contact-btn.email:hover { background: #ea4335; }
    .contact-btn.linkedin:hover { background: #0077b5; }
    .contact-btn.github:hover { background: #333; }

    .back-btn {
      position: absolute;
      top: 2rem;
      left: 2rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      background: rgba(255,255,255,0.1);
      border-radius: 20px;
      transition: all 0.3s ease;
    }

    .back-btn:hover {
      background: rgba(255,255,255,0.2);
      transform: translateX(-3px);
    }

    /* About Section */
    .about-member {
      padding: 5rem 0;
      background: #f8fafc;
    }

    .section-content h3 {
      font-size: 2.5rem;
      color: #2d3748;
      margin-bottom: 1.5rem;
      font-weight: 700;
      text-align: center;
    }

    .description {
      font-size: 1.2rem;
      line-height: 1.8;
      color: #4a5568;
      max-width: 800px;
      margin: 0 auto 3rem;
      text-align: center;
    }

    .details-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .detail-card {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 4px 25px rgba(0,0,0,0.1);
      text-align: center;
    }

    .detail-card h4 {
      color: #667eea;
      font-weight: 600;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    .detail-card p {
      color: #4a5568;
      font-size: 1.1rem;
    }

    /* Technologies Section */
    .technologies {
      padding: 5rem 0;
    }

    .technologies h3 {
      font-size: 2.5rem;
      color: #2d3748;
      margin-bottom: 3rem;
      font-weight: 700;
      text-align: center;
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 2rem;
    }

    .tech-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 2rem;
      background: white;
      border-radius: 15px;
      box-shadow: 0 4px 25px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .tech-item:hover {
      transform: translateY(-5px);
    }

    .tech-icon {
      font-size: 3rem;
      color: #667eea;
    }

    .tech-item span {
      font-weight: 600;
      color: #2d3748;
      text-align: center;
    }

    /* Experience Section */
    .experience-section {
      padding: 5rem 0;
      background: #f8fafc;
    }

    .experience-section h3 {
      font-size: 2.5rem;
      color: #2d3748;
      margin-bottom: 3rem;
      font-weight: 700;
      text-align: center;
    }

    .timeline {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 30px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: #667eea;
    }

    .timeline-item {
      position: relative;
      padding-left: 4rem;
      margin-bottom: 3rem;
    }

    .timeline-marker {
      position: absolute;
      left: 25px;
      top: 0;
      width: 12px;
      height: 12px;
      background: #667eea;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 0 0 3px #667eea;
    }

    .timeline-content h4 {
      color: #2d3748;
      font-weight: 600;
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
    }

    .project-period {
      color: #667eea;
      font-weight: 500;
      margin-bottom: 1rem;
    }

    .project-description {
      color: #4a5568;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tech-tag {
      background: #667eea;
      color: white;
      padding: 0.3rem 0.8rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    /* Skills Section */
    .skills {
      padding: 5rem 0;
    }

    .skills h3 {
      font-size: 2.5rem;
      color: #2d3748;
      margin-bottom: 3rem;
      font-weight: 700;
      text-align: center;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 3rem;
    }

    .skill-category {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 4px 25px rgba(0,0,0,0.1);
    }

    .skill-category h4 {
      color: #667eea;
      font-weight: 600;
      margin-bottom: 1.5rem;
      font-size: 1.3rem;
      text-align: center;
    }

    .skill-item {
      display: grid;
      grid-template-columns: 1fr 1fr 50px;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .skill-name {
      color: #2d3748;
      font-weight: 500;
    }

    .skill-bar {
      height: 8px;
      background: #e2e8f0;
      border-radius: 4px;
      overflow: hidden;
    }

    .skill-progress {
      height: 100%;
      background: linear-gradient(45deg, #667eea, #764ba2);
      border-radius: 4px;
      transition: width 1s ease;
    }

    .skill-level {
      color: #667eea;
      font-weight: 600;
      text-align: right;
      font-size: 0.9rem;
    }

    /* CTA Section */
    .cta {
      padding: 4rem 0;
      background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
      color: white;
      text-align: center;
    }

    .cta-content h3 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .cta-content p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      padding: 1rem 2rem;
      border-radius: 30px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-block;
    }

    .btn-primary {
      background: linear-gradient(45deg, #ff6b6b, #ee5a24);
      color: white;
      box-shadow: 0 4px 15px rgba(238, 90, 36, 0.3);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(238, 90, 36, 0.4);
    }

    .btn-secondary {
      background: transparent;
      color: white;
      border: 2px solid rgba(255,255,255,0.3);
    }

    .btn-secondary:hover {
      background: rgba(255,255,255,0.1);
      transform: translateY(-2px);
    }

    /* Not Found */
    .not-found {
      padding: 5rem 0;
      text-align: center;
    }

    .not-found h1 {
      font-size: 3rem;
      color: #2d3748;
      margin-bottom: 1rem;
    }

    .not-found p {
      font-size: 1.2rem;
      color: #718096;
      margin-bottom: 2rem;
    }

    /* Responsive */
    @media screen and (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 2rem;
      }

      .member-image img {
        height: 250px;
      }

      .member-info h1 {
        font-size: 2rem;
      }

      .contact-links {
        justify-content: center;
      }

      .skills-grid {
        grid-template-columns: 1fr;
      }

      .timeline::before {
        display: none;
      }

      .timeline-item {
        padding-left: 0;
      }

      .timeline-marker {
        display: none;
      }
    }
  `]
})
export class TeamDetailComponent implements OnInit {
  member: TeamMember | undefined;
  loading = true;

  mockProjects = [
    {
      title: 'Sistema de Gestión Empresarial',
      period: '2023 - 2024',
      description: 'Desarrollo de una aplicación web completa para gestión de inventarios, facturación y CRM.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'AWS']
    },
    {
      title: 'App Móvil de E-commerce',
      period: '2022 - 2023',
      description: 'Aplicación móvil híbrida para plataforma de comercio electrónico con integración de pagos.',
      technologies: ['React Native', 'TypeScript', 'MongoDB', 'Stripe']
    },
    {
      title: 'Plataforma de Análisis de Datos',
      period: '2021 - 2022',
      description: 'Dashboard interactivo para análisis de big data con visualizaciones en tiempo real.',
      technologies: ['Python', 'Django', 'D3.js', 'Docker']
    }
  ];

  skillCategories = [
    {
      name: 'Desarrollo Frontend',
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'CSS/SCSS', level: 85 },
        { name: 'JavaScript', level: 90 }
      ]
    },
    {
      name: 'Desarrollo Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 82 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 }
      ]
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.member = this.dataService.getTeamMemberById(id);
    this.loading = false;

    if (!this.member) {
      setTimeout(() => {
        this.router.navigate(['/equipo']);
      }, 3000);
    }
  }

  getSpecialization(): string {
    if (!this.member) return '';
    
    if (this.member.role.includes('Full Stack')) return 'Desarrollo Full Stack';
    if (this.member.role.includes('Frontend')) return 'Desarrollo Frontend';
    if (this.member.role.includes('Backend')) return 'Desarrollo Backend';
    if (this.member.role.includes('DevOps')) return 'DevOps y Cloud';
    return 'Desarrollo de Software';
  }

  getTechIcon(tech: string): string {
    const icons: { [key: string]: string } = {
      'Angular': 'fab fa-angular',
      'React': 'fab fa-react',
      'Vue.js': 'fab fa-vuejs',
      'Node.js': 'fab fa-node-js',
      'Python': 'fab fa-python',
      'TypeScript': 'fab fa-js-square',
      'JavaScript': 'fab fa-js-square',
      'MongoDB': 'fas fa-database',
      'PostgreSQL': 'fas fa-database',
      'AWS': 'fab fa-aws',
      'Docker': 'fab fa-docker',
      'Kubernetes': 'fas fa-dharmachakra',
      'Jenkins': 'fab fa-jenkins',
      'Figma': 'fab fa-figma',
      'CSS3': 'fab fa-css3-alt'
    };
    
    return icons[tech] || 'fas fa-code';
  }
}
