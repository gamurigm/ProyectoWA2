import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="header">
      <nav class="navbar">
        <div class="nav-container">
          <div class="nav-logo">
            <a routerLink="/inicio" class="logo-link">
              <img src="assets/images/logo.svg" alt="TechSolutions Pro" class="logo-img">
              <span class="logo-text">TechSolutions Pro</span>
            </a>
          </div>
          
          <div class="nav-menu" [class.nav-menu-active]="isMenuOpen">
            <a routerLink="/inicio" 
               routerLinkActive="nav-link-active" 
               class="nav-link"
               (click)="closeMenu()">
              Inicio
            </a>
            <a routerLink="/empresa" 
               routerLinkActive="nav-link-active" 
               class="nav-link"
               (click)="closeMenu()">
              Empresa
            </a>
            <a routerLink="/equipo" 
               routerLinkActive="nav-link-active" 
               class="nav-link"
               (click)="closeMenu()">
              Nuestro Equipo
            </a>
            <a routerLink="/contacto" 
               routerLinkActive="nav-link-active" 
               class="nav-link nav-link-cta"
               (click)="closeMenu()">
              Contacto
            </a>
          </div>
          
          <div class="nav-toggle" (click)="toggleMenu()">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      box-shadow: 0 2px 20px rgba(0,0,0,0.1);
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
      transition: all 0.3s ease;
    }

    .navbar {
      padding: 0;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-logo {
      display: flex;
      align-items: center;
    }

    .logo-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: white;
      font-weight: 700;
      font-size: 1.5rem;
      transition: transform 0.3s ease;
    }

    .logo-link:hover {
      transform: translateY(-2px);
    }

    .logo-img {
      height: 40px;
      margin-right: 0.5rem;
    }

    .logo-text {
      background: linear-gradient(45deg, #fff, #f0f8ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .nav-menu {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .nav-link {
      color: white;
      text-decoration: none;
      font-weight: 500;
      font-size: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 25px;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .nav-link::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.5s;
    }

    .nav-link:hover::before {
      left: 100%;
    }

    .nav-link:hover {
      background: rgba(255,255,255,0.1);
      transform: translateY(-2px);
    }

    .nav-link-active {
      background: rgba(255,255,255,0.2);
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }

    .nav-link-cta {
      background: linear-gradient(45deg, #ff6b6b, #ee5a24);
      font-weight: 600;
      box-shadow: 0 4px 15px rgba(238, 90, 36, 0.3);
    }

    .nav-link-cta:hover {
      background: linear-gradient(45deg, #ee5a24, #ff6b6b);
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(238, 90, 36, 0.4);
    }

    .nav-toggle {
      display: none;
      flex-direction: column;
      cursor: pointer;
      padding: 0.5rem;
    }

    .bar {
      width: 25px;
      height: 3px;
      background: white;
      margin: 3px 0;
      transition: 0.3s;
      border-radius: 2px;
    }

    @media screen and (max-width: 768px) {
      .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0,0,0,0.05);
        padding: 2rem 0;
        gap: 1rem;
      }

      .nav-menu-active {
        left: 0;
      }

      .nav-toggle {
        display: flex;
      }

      .nav-toggle.active .bar:nth-child(2) {
        opacity: 0;
      }

      .nav-toggle.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }

      .nav-toggle.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
