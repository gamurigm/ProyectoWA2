import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { CompanyInfo } from '../../models/company.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-page">
      <!-- Hero Section -->
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1>{{ companyInfo.name }}</h1>
            <p class="hero-subtitle">{{ companyInfo.description }}</p>
          </div>
        </div>
      </section>

      <!-- Mission & Vision -->
      <section class="mission-vision">
        <div class="container">
          <div class="mv-grid">
            <div class="mv-card">
              <div class="mv-icon">
                <i class="fas fa-bullseye"></i>
              </div>
              <h3>Nuestra Misión</h3>
              <p>{{ companyInfo.mission }}</p>
            </div>
            <div class="mv-card">
              <div class="mv-icon">
                <i class="fas fa-eye"></i>
              </div>
              <h3>Nuestra Visión</h3>
              <p>{{ companyInfo.vision }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Values -->
      <section class="values">
        <div class="container">
          <div class="section-header">
            <h2>Nuestros Valores</h2>
            <p>Los principios que guían nuestro trabajo y relaciones</p>
          </div>
          <div class="values-grid">
            <div class="value-card" *ngFor="let value of companyInfo.values; let i = index">
              <div class="value-icon">
                <i [class]="getValueIcon(i)"></i>
              </div>
              <h4>{{ value }}</h4>
            </div>
          </div>
        </div>
      </section>

      <!-- Company Stats -->
      <section class="company-stats">
        <div class="container">
          <div class="section-header">
            <h2>TechSolutions en Números</h2>
            <p>Datos que reflejan nuestro compromiso y crecimiento</p>
          </div>
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fas fa-calendar-alt"></i>
              </div>
              <div class="stat-number">{{ companyInfo.established }}</div>
              <div class="stat-label">Año de Fundación</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fas fa-users"></i>
              </div>
              <div class="stat-number">{{ companyInfo.employees }}+</div>
              <div class="stat-label">Empleados Talentosos</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fas fa-project-diagram"></i>
              </div>
              <div class="stat-number">{{ companyInfo.projects }}+</div>
              <div class="stat-label">Proyectos Completados</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <div class="stat-number">{{ companyInfo.clients }}+</div>
              <div class="stat-label">Clientes Satisfechos</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Story -->
      <section class="our-story">
        <div class="container">
          <div class="story-content">
            <div class="story-text">
              <h2>Nuestra Historia</h2>
              <div class="story-timeline">
                <div class="timeline-item" *ngFor="let milestone of milestones">
                  <div class="timeline-marker"></div>
                  <div class="timeline-content">
                    <h4>{{ milestone.year }}</h4>
                    <h5>{{ milestone.title }}</h5>
                    <p>{{ milestone.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="story-image">
              <div class="image-placeholder">
                <i class="fas fa-building"></i>
                <p>Oficinas TechSolutions Pro</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Technology Stack -->
      <section class="tech-stack">
        <div class="container">
          <div class="section-header">
            <h2>Nuestro Stack Tecnológico</h2>
            <p>Trabajamos con las tecnologías más avanzadas y confiables del mercado</p>
          </div>
          <div class="tech-categories">
            <div class="tech-category" *ngFor="let category of techStack">
              <h3>{{ category.name }}</h3>
              <div class="tech-items">
                <div class="tech-item" *ngFor="let tech of category.technologies">
                  <i [class]="tech.icon" [style.color]="tech.color"></i>
                  <span>{{ tech.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .about-page {
      padding-top: 80px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .section-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .section-header h2 {
      font-size: 2.5rem;
      color: #2d3748;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .section-header p {
      font-size: 1.1rem;
      color: #718096;
      max-width: 600px;
      margin: 0 auto;
    }

    /* Hero Section */
    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 4rem 0;
      color: white;
      text-align: center;
    }

    .hero-content h1 {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
    }

    .hero-subtitle {
      font-size: 1.3rem;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto;
      opacity: 0.9;
    }

    /* Mission & Vision */
    .mission-vision {
      padding: 5rem 0;
      background: #f8fafc;
    }

    .mv-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 3rem;
    }

    .mv-card {
      background: white;
      padding: 3rem;
      border-radius: 15px;
      box-shadow: 0 4px 25px rgba(0,0,0,0.1);
      text-align: center;
      transition: transform 0.3s ease;
    }

    .mv-card:hover {
      transform: translateY(-5px);
    }

    .mv-icon {
      width: 80px;
      height: 80px;
      background: linear-gradient(45deg, #667eea, #764ba2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      color: white;
      font-size: 2rem;
    }

    .mv-card h3 {
      font-size: 1.8rem;
      color: #2d3748;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .mv-card p {
      color: #718096;
      line-height: 1.6;
      font-size: 1.1rem;
    }

    /* Values */
    .values {
      padding: 5rem 0;
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .value-card {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 2px 15px rgba(0,0,0,0.1);
      text-align: center;
      transition: transform 0.3s ease;
      border: 2px solid transparent;
    }

    .value-card:hover {
      transform: translateY(-3px);
      border-color: #667eea;
    }

    .value-icon {
      font-size: 2.5rem;
      color: #667eea;
      margin-bottom: 1rem;
    }

    .value-card h4 {
      color: #2d3748;
      font-weight: 600;
      font-size: 1.1rem;
    }

    /* Company Stats */
    .company-stats {
      padding: 5rem 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .company-stats .section-header h2,
    .company-stats .section-header p {
      color: white;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .stat-card {
      text-align: center;
      padding: 2rem;
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      border-radius: 15px;
      border: 1px solid rgba(255,255,255,0.2);
    }

    .stat-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      opacity: 0.8;
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      font-size: 1.1rem;
      opacity: 0.9;
    }

    /* Our Story */
    .our-story {
      padding: 5rem 0;
      background: #f8fafc;
    }

    .story-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .story-text h2 {
      font-size: 2.5rem;
      color: #2d3748;
      margin-bottom: 2rem;
      font-weight: 700;
    }

    .story-timeline {
      position: relative;
    }

    .story-timeline::before {
      content: '';
      position: absolute;
      left: 15px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: #667eea;
    }

    .timeline-item {
      position: relative;
      padding-left: 3rem;
      margin-bottom: 2rem;
    }

    .timeline-marker {
      position: absolute;
      left: 10px;
      top: 0;
      width: 10px;
      height: 10px;
      background: #667eea;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 0 0 3px #667eea;
    }

    .timeline-content h4 {
      color: #667eea;
      font-weight: 700;
      font-size: 1.2rem;
      margin-bottom: 0.3rem;
    }

    .timeline-content h5 {
      color: #2d3748;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .timeline-content p {
      color: #718096;
      line-height: 1.6;
    }

    .story-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image-placeholder {
      width: 300px;
      height: 300px;
      background: white;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 25px rgba(0,0,0,0.1);
      color: #667eea;
    }

    .image-placeholder i {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .image-placeholder p {
      color: #718096;
      font-weight: 500;
    }

    /* Technology Stack */
    .tech-stack {
      padding: 5rem 0;
    }

    .tech-categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 3rem;
    }

    .tech-category {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 4px 25px rgba(0,0,0,0.1);
    }

    .tech-category h3 {
      color: #2d3748;
      font-weight: 600;
      margin-bottom: 1.5rem;
      text-align: center;
      font-size: 1.3rem;
    }

    .tech-items {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1rem;
    }

    .tech-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem;
      background: #f8fafc;
      border-radius: 10px;
      transition: transform 0.3s ease;
    }

    .tech-item:hover {
      transform: translateY(-3px);
    }

    .tech-item i {
      font-size: 2rem;
    }

    .tech-item span {
      font-size: 0.9rem;
      color: #4a5568;
      font-weight: 500;
      text-align: center;
    }

    /* Responsive */
    @media screen and (max-width: 768px) {
      .hero-content h1 {
        font-size: 2.5rem;
      }

      .mv-grid {
        grid-template-columns: 1fr;
      }

      .story-content {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .story-timeline::before {
        display: none;
      }

      .timeline-item {
        padding-left: 0;
        text-align: center;
      }

      .timeline-marker {
        display: none;
      }
    }
  `]
})
export class AboutComponent implements OnInit {
  companyInfo!: CompanyInfo;

  milestones = [
    {
      year: '2018',
      title: 'Fundación de TechSolutions',
      description: 'Iniciamos nuestro viaje con un equipo de 5 desarrolladores apasionados por la tecnología.'
    },
    {
      year: '2020',
      title: 'Expansión de Servicios',
      description: 'Incorporamos servicios de DevOps y consultoría en arquitectura cloud.'
    },
    {
      year: '2022',
      title: 'Certificación AWS',
      description: 'Nos convertimos en AWS Advanced Consulting Partner.'
    },
    {
      year: '2024',
      title: 'Crecimiento Internacional',
      description: 'Expandimos nuestros servicios a clientes en Latinoamérica y Estados Unidos.'
    }
  ];

  techStack = [
    {
      name: 'Frontend',
      technologies: [
        { name: 'Angular', icon: 'fab fa-angular', color: '#dd1b16' },
        { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
        { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#4fc08d' },
        { name: 'TypeScript', icon: 'fab fa-js-square', color: '#3178c6' }
      ]
    },
    {
      name: 'Backend',
      technologies: [
        { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
        { name: 'Python', icon: 'fab fa-python', color: '#3776ab' },
        { name: 'Java', icon: 'fab fa-java', color: '#ed8b00' },
        { name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791' }
      ]
    },
    {
      name: 'DevOps & Cloud',
      technologies: [
        { name: 'AWS', icon: 'fab fa-aws', color: '#ff9900' },
        { name: 'Docker', icon: 'fab fa-docker', color: '#2496ed' },
        { name: 'Kubernetes', icon: 'fas fa-dharmachakra', color: '#326ce5' },
        { name: 'Jenkins', icon: 'fab fa-jenkins', color: '#d33833' }
      ]
    }
  ];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.companyInfo = this.dataService.getCompanyInfo();
  }

  getValueIcon(index: number): string {
    const icons = [
      'fas fa-lightbulb',
      'fas fa-star',
      'fas fa-handshake',
      'fas fa-shield-alt',
      'fas fa-heart',
      'fas fa-seedling'
    ];
    return icons[index] || 'fas fa-check-circle';
  }
}
