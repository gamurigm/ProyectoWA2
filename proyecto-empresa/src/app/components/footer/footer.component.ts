import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-logo">
              <h3>TechSolutions Pro</h3>
              <p>Transformando ideas en soluciones digitales innovadoras</p>
            </div>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="social-link" aria-label="GitHub">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>Navegación</h4>
            <ul class="footer-links">
              <li><a routerLink="/inicio">Inicio</a></li>
              <li><a routerLink="/empresa">Empresa</a></li>
              <li><a routerLink="/equipo">Nuestro Equipo</a></li>
              <li><a routerLink="/contacto">Contacto</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Servicios</h4>
            <ul class="footer-links">
              <li><a href="#">Desarrollo Web</a></li>
              <li><a href="#">Aplicaciones Móviles</a></li>
              <li><a href="#">Consultoría IT</a></li>
              <li><a href="#">DevOps</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Contacto</h4>
            <div class="contact-info">
              <p><i class="fas fa-envelope"></i> info&#64;techsolutions.com</p>
              <p><i class="fas fa-phone"></i> +593 99 123 4567</p>
              <p><i class="fas fa-map-marker-alt"></i> Quito, Ecuador</p>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p>&copy; {{ currentYear }} TechSolutions Pro. Todos los derechos reservados.</p>
            <div class="footer-bottom-links">
              <a href="#">Política de Privacidad</a>
              <a href="#">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
      color: #ecf0f1;
      margin-top: auto;
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      padding: 3rem 0 2rem;
    }

    .footer-section h3 {
      color: #3498db;
      margin-bottom: 1rem;
      font-size: 1.5rem;
      font-weight: 700;
    }

    .footer-section h4 {
      color: #3498db;
      margin-bottom: 1rem;
      font-size: 1.1rem;
      font-weight: 600;
    }

    .footer-section p {
      color: #bdc3c7;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 1.5rem;
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: linear-gradient(45deg, #3498db, #2980b9);
      color: white;
      text-decoration: none;
      border-radius: 50%;
      transition: all 0.3s ease;
      font-size: 1.1rem;
    }

    .social-link:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: 0.5rem;
    }

    .footer-links a {
      color: #bdc3c7;
      text-decoration: none;
      transition: color 0.3s ease;
      display: inline-block;
      position: relative;
    }

    .footer-links a::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -2px;
      left: 0;
      background: #3498db;
      transition: width 0.3s ease;
    }

    .footer-links a:hover {
      color: #3498db;
    }

    .footer-links a:hover::after {
      width: 100%;
    }

    .contact-info p {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.8rem;
      color: #bdc3c7;
    }

    .contact-info i {
      color: #3498db;
      width: 16px;
    }

    .footer-bottom {
      border-top: 1px solid #34495e;
      padding: 1.5rem 0;
    }

    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .footer-bottom p {
      margin: 0;
      color: #95a5a6;
      font-size: 0.9rem;
    }

    .footer-bottom-links {
      display: flex;
      gap: 1.5rem;
    }

    .footer-bottom-links a {
      color: #95a5a6;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .footer-bottom-links a:hover {
      color: #3498db;
    }

    @media screen and (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .footer-bottom-content {
        flex-direction: column;
        text-align: center;
      }

      .social-links {
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
