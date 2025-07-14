import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { TeamMember } from '../../models/team-member.model';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="team-page page-content">
      <!-- Hero Section -->
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1>Nuestro Equipo</h1>
            <p class="hero-subtitle">
              Conoce a los expertos que hacen posible nuestras soluciones innovadoras. 
              Un equipo diverso y talentoso comprometido con la excelencia.
            </p>
          </div>
        </div>
      </section>

      <!-- Team Members -->
      <section class="team-members">
        <div class="container">
          <div class="team-grid">
            <div class="team-card" *ngFor="let member of teamMembers">
              <div class="card-inner">
                <!-- Front of card -->
                <div class="card-front">
                  <div class="member-image">
                    <img [src]="member.photo" [alt]="member.name" 
                         onerror="this.src='/placeholder.svg'; console.error('Error loading image:', this.src)"
                         onload="console.log('Image loaded successfully:', this.src)">
                    <div class="image-overlay">
                      <div class="social-links">
                        <a [href]="member.linkedin" *ngIf="member.linkedin" target="_blank" aria-label="LinkedIn">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a [href]="member.github" *ngIf="member.github" target="_blank" aria-label="GitHub">
                          <i class="fab fa-github"></i>
                        </a>
                        <a [href]="member.instagram" *ngIf="member.instagram" target="_blank" aria-label="Instagram">
                          <i class="fab fa-instagram"></i>
                        </a>
                        <a [href]="member.facebook" *ngIf="member.facebook" target="_blank" aria-label="Facebook">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a [href]="member.twitter" *ngIf="member.twitter" target="_blank" aria-label="Twitter/X">
                          <i class="fab fa-x-twitter"></i>
                        </a>
                        <a [href]="'mailto:' + member.email" aria-label="Email">
                          <i class="fas fa-envelope"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="member-info">
                    <h3>{{ member.name }}</h3>
                    <p class="role">{{ member.role }}</p>
                    <div class="experience">
                      <i class="fas fa-clock"></i>
                      <span>{{ member.experience }} años de experiencia</span>
                    </div>
                  </div>
                </div>

                <!-- Back of card -->
                <div class="card-back">
                  <div class="member-details">
                    <h3>{{ member.name }}</h3>
                    <p class="description">{{ member.description }}</p>
                    <div class="technologies">
                      <h4>Tecnologías</h4>
                      <div class="tech-tags">
                        <span class="tech-tag" *ngFor="let tech of member.technologies">
                          {{ tech }}
                        </span>
                      </div>
                    </div>
                    <a [routerLink]="['/equipo', member.id]" class="view-profile-btn">
                      Ver Perfil Completo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Stats -->
      <section class="team-stats">
        <div class="container">
          <div class="section-header">
            <h2>Nuestro Equipo en Números</h2>
            <p>La experiencia y diversidad que nos caracteriza</p>
          </div>
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-icon">
                <i class="fas fa-users"></i>
              </div>
              <div class="stat-number">{{ teamStats.totalMembers }}+</div>
              <div class="stat-label">Desarrolladores</div>
            </div>
            <div class="stat-item">
              <div class="stat-icon">
                <i class="fas fa-code"></i>
              </div>
              <div class="stat-number">{{ teamStats.technologies }}+</div>
              <div class="stat-label">Tecnologías</div>
            </div>
            <div class="stat-item">
              <div class="stat-icon">
                <i class="fas fa-certificate"></i>
              </div>
              <div class="stat-number">{{ teamStats.certifications }}+</div>
              <div class="stat-label">Certificaciones</div>
            </div>
            <div class="stat-item">
              <div class="stat-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div class="stat-number">{{ teamStats.avgExperience }}</div>
              <div class="stat-label">Años Promedio Exp.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Join Team CTA -->
      <section class="join-team">
        <div class="container">
          <div class="cta-content">
            <h2>¿Quieres Formar Parte de Nuestro Equipo?</h2>
            <p>Estamos siempre buscando talento excepcional para unirse a nuestra familia</p>
            <a routerLink="/contacto" class="btn btn-primary">Envía tu CV</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .team-page {
      /* padding-top removed - now handled by .page-content */
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

    /* Team Members */
    .team-members {
      padding: 5rem 0;
      background: #f8fafc;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      perspective: 1000px;
    }

    .team-card {
      height: 400px;
      position: relative;
      cursor: pointer;
    }

    .card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.6s;
      transform-style: preserve-3d;
      border-radius: 15px;
    }

    .team-card:hover .card-inner {
      transform: rotateY(180deg);
    }

    .card-front, .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 15px;
      box-shadow: 0 4px 25px rgba(0,0,0,0.1);
    }

    .card-front {
      background: white;
      display: flex;
      flex-direction: column;
    }

    .card-back {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      transform: rotateY(180deg);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    .member-image {
      position: relative;
      height: 250px;
      overflow: hidden;
      border-radius: 15px 15px 0 0;
      background: #f8f9fa;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .member-image img {
      width: 90%;
      height: 90%;
      object-fit: contain;
      transition: transform 0.3s ease;
      border-radius: 10px;
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(102, 126, 234, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .member-image:hover .image-overlay {
      opacity: 1;
    }

    .social-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.8rem;
      max-width: 200px;
    }

    .social-links a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: white;
      color: #667eea;
      border-radius: 50%;
      text-decoration: none;
      transition: transform 0.3s ease;
    }

    .social-links a:hover {
      transform: scale(1.1);
    }

    .member-info {
      padding: 1.5rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .member-info h3 {
      font-size: 1.3rem;
      color: #2d3748;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    .role {
      color: #667eea;
      font-weight: 500;
      margin-bottom: 1rem;
      font-size: 0.95rem;
    }

    .experience {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      color: #718096;
      font-size: 0.9rem;
    }

    .experience i {
      color: #667eea;
    }

    /* Card Back */
    .member-details h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .description {
      font-size: 0.95rem;
      line-height: 1.5;
      margin-bottom: 1.5rem;
      opacity: 0.9;
    }

    .technologies h4 {
      font-size: 1rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
      justify-content: center;
    }

    .tech-tag {
      background: rgba(255,255,255,0.2);
      padding: 0.3rem 0.8rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .view-profile-btn {
      background: white;
      color: #667eea;
      padding: 0.8rem 1.5rem;
      border-radius: 25px;
      text-decoration: none;
      font-weight: 600;
      transition: transform 0.3s ease;
      display: inline-block;
    }

    .view-profile-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }

    /* Team Stats */
    .team-stats {
      padding: 5rem 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .team-stats .section-header h2,
    .team-stats .section-header p {
      color: white;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }

    .stat-item {
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
      font-size: 1rem;
      opacity: 0.9;
    }

    /* Join Team CTA */
    .join-team {
      padding: 4rem 0;
      background: #2d3748;
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

    /* Responsive */
    @media screen and (max-width: 768px) {
      .hero-content h1 {
        font-size: 2.5rem;
      }

      .team-grid {
        grid-template-columns: 1fr;
      }

      .team-card:hover .card-inner {
        transform: none;
      }

      .card-back {
        position: static;
        transform: none;
        margin-top: 1rem;
        border-radius: 15px;
      }
    }
  `]
})
export class TeamComponent implements OnInit {
  teamMembers: TeamMember[] = [];
  teamStats = {
    totalMembers: 25,
    technologies: 20,
    certifications: 45,
    avgExperience: 6
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.teamMembers = this.dataService.getTeamMembers();
  }
}
