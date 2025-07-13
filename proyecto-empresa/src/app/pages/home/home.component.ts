import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home-page">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-container">
          <div class="hero-content">
            <h1 class="hero-title">
              Transformamos <span class="highlight">Ideas</span> en 
              <span class="highlight">Soluciones Digitales</span>
            </h1>
            <p class="hero-subtitle">
              Desarrollamos software innovador que impulsa el crecimiento de tu empresa. 
              Tecnología de vanguardia, diseño centrado en el usuario y resultados excepcionales.
            </p>
            <div class="hero-buttons">
              <a routerLink="/contacto" class="btn btn-primary">Comencemos tu Proyecto</a>
              <a routerLink="/empresa" class="btn btn-secondary">Conoce Más</a>
            </div>
          </div>
          <div class="hero-image">
            <div class="floating-cards">
              <div class="card card-1">
                <i class="fas fa-code"></i>
                <span>Desarrollo Web</span>
              </div>
              <div class="card card-2">
                <i class="fas fa-mobile-alt"></i>
                <span>Apps Móviles</span>
              </div>
              <div class="card card-3">
                <i class="fas fa-cloud"></i>
                <span>Cloud Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="services">
        <div class="container">
          <div class="section-header">
            <h2>Nuestros Servicios</h2>
            <p>Ofrecemos soluciones completas para todas tus necesidades tecnológicas</p>
          </div>
          <div class="services-grid">
            <div class="service-card" *ngFor="let service of services">
              <div class="service-icon">
                <i [class]="service.icon"></i>
              </div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <ul class="service-features">
                <li *ngFor="let feature of service.features">{{ feature }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="stats">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-item" *ngFor="let stat of stats">
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Technologies Section -->
      <section class="technologies">
        <div class="container">
          <div class="section-header">
            <h2>Tecnologías que Dominamos</h2>
            <p>Trabajamos con las últimas tecnologías del mercado</p>
          </div>
          <div class="tech-grid">
            <div class="tech-item" *ngFor="let tech of technologies">
              <div class="tech-icon">
                <i [class]="tech.icon" [style.color]="tech.color"></i>
              </div>
              <span>{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta">
        <div class="container">
          <div class="cta-content">
            <h2>¿Listo para Transformar tu Negocio?</h2>
            <p>Contacta con nosotros y descubre cómo podemos ayudarte a alcanzar tus objetivos</p>
            <a routerLink="/contacto" class="btn btn-white">Hablemos de tu Proyecto</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-page {
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
      overflow: hidden;
    }

    .hero-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
      min-height: 500px;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1.5rem;
    }

    .highlight {
      background: linear-gradient(45deg, #ffd700, #ff6b6b);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: 1.2rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn {
      padding: 1rem 2rem;
      border-radius: 30px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-block;
      text-align: center;
      border: 2px solid transparent;
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

    .btn-white {
      background: white;
      color: #667eea;
      border: 2px solid white;
    }

    .btn-white:hover {
      background: transparent;
      color: white;
      transform: translateY(-2px);
    }

    /* Floating Cards */
    .hero-image {
      position: relative;
      height: 400px;
    }

    .floating-cards {
      position: relative;
      height: 100%;
    }

    .card {
      position: absolute;
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      border-radius: 15px;
      padding: 1.5rem;
      color: white;
      box-shadow: 0 8px 32px rgba(0,0,0,0.1);
      border: 1px solid rgba(255,255,255,0.2);
      animation: float 6s ease-in-out infinite;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .card i {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    .card-1 {
      top: 10%;
      left: 10%;
      animation-delay: 0s;
    }

    .card-2 {
      top: 40%;
      right: 20%;
      animation-delay: 2s;
    }

    .card-3 {
      bottom: 20%;
      left: 20%;
      animation-delay: 4s;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }

    /* Services Section */
    .services {
      padding: 5rem 0;
      background: #f8fafc;
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

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .service-card {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 4px 25px rgba(0,0,0,0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-align: center;
    }

    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 40px rgba(0,0,0,0.15);
    }

    .service-icon {
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

    .service-card h3 {
      font-size: 1.5rem;
      color: #2d3748;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .service-card p {
      color: #718096;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .service-features {
      list-style: none;
      padding: 0;
      text-align: left;
    }

    .service-features li {
      color: #4a5568;
      margin-bottom: 0.5rem;
      position: relative;
      padding-left: 1.5rem;
    }

    .service-features li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #48bb78;
      font-weight: bold;
    }

    /* Stats Section */
    .stats {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 4rem 0;
      color: white;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      text-align: center;
    }

    .stat-number {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      font-size: 1.1rem;
      opacity: 0.9;
    }

    /* Technologies Section */
    .technologies {
      padding: 5rem 0;
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
      padding: 1.5rem;
      background: white;
      border-radius: 10px;
      box-shadow: 0 2px 15px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .tech-item:hover {
      transform: translateY(-3px);
    }

    .tech-icon {
      font-size: 3rem;
    }

    /* CTA Section */
    .cta {
      background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
      padding: 4rem 0;
      color: white;
      text-align: center;
    }

    .cta-content h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .cta-content p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    /* Responsive */
    @media screen and (max-width: 768px) {
      .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 2rem;
      }

      .hero-title {
        font-size: 2rem;
      }

      .hero-buttons {
        justify-content: center;
      }

      .floating-cards {
        display: none;
      }

      .section-header h2 {
        font-size: 2rem;
      }
    }
  `]
})
export class HomeComponent {
  services = [
    {
      title: 'Desarrollo Web',
      description: 'Creamos aplicaciones web modernas, responsivas y escalables usando las últimas tecnologías.',
      icon: 'fas fa-code',
      features: [
        'Aplicaciones SPA con Angular/React',
        'APIs RESTful y GraphQL',
        'Diseño responsive',
        'Optimización SEO'
      ]
    },
    {
      title: 'Aplicaciones Móviles',
      description: 'Desarrollamos apps nativas e híbridas para iOS y Android con excelente UX/UI.',
      icon: 'fas fa-mobile-alt',
      features: [
        'Apps nativas iOS/Android',
        'Desarrollo híbrido',
        'UI/UX optimizada',
        'Integración con APIs'
      ]
    },
    {
      title: 'Consultoría DevOps',
      description: 'Optimizamos tus procesos de desarrollo y despliegue con prácticas DevOps modernas.',
      icon: 'fas fa-cogs',
      features: [
        'CI/CD pipelines',
        'Containerización Docker',
        'Orquestación Kubernetes',
        'Monitoreo y logging'
      ]
    }
  ];

  stats = [
    { number: '150+', label: 'Proyectos Completados' },
    { number: '85+', label: 'Clientes Satisfechos' },
    { number: '7+', label: 'Años de Experiencia' },
    { number: '25+', label: 'Desarrolladores Expertos' }
  ];

  technologies = [
    { name: 'Angular', icon: 'fab fa-angular', color: '#dd1b16' },
    { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
    { name: 'Python', icon: 'fab fa-python', color: '#3776ab' },
    { name: 'AWS', icon: 'fab fa-aws', color: '#ff9900' },
    { name: 'Docker', icon: 'fab fa-docker', color: '#2496ed' }
  ];
}
