import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="contact-page page-content">
      <!-- Hero Section -->
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1>Contacta con Nosotros</h1>
            <p class="hero-subtitle">
              ¿Tienes un proyecto en mente? Nos encantaría escuchar sobre tu idea 
              y ayudarte a convertirla en realidad.
            </p>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section">
        <div class="container">
          <div class="contact-grid">
            <!-- Contact Form -->
            <div class="contact-form-container">
              <h2>Envíanos un Mensaje</h2>
              <p>Completa el formulario y nos pondremos en contacto contigo pronto.</p>
              
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
                <div class="form-row">
                  <div class="form-group">
                    <label for="name">Nombre Completo *</label>
                    <input 
                      type="text" 
                      id="name" 
                      formControlName="name" 
                      class="form-control"
                      [class.error]="isFieldInvalid('name')">
                    <div class="error-message" *ngIf="isFieldInvalid('name')">
                      El nombre es requerido
                    </div>
                  </div>
                  
                  <div class="form-group">
                    <label for="email">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      formControlName="email" 
                      class="form-control"
                      [class.error]="isFieldInvalid('email')">
                    <div class="error-message" *ngIf="isFieldInvalid('email')">
                      <span *ngIf="contactForm.get('email')?.errors?.['required']">
                        El email es requerido
                      </span>
                      <span *ngIf="contactForm.get('email')?.errors?.['email']">
                        Ingresa un email válido
                      </span>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label for="company">Empresa</label>
                  <input 
                    type="text" 
                    id="company" 
                    formControlName="company" 
                    class="form-control">
                </div>

                <div class="form-group">
                  <label for="subject">Asunto *</label>
                  <select 
                    id="subject" 
                    formControlName="subject" 
                    class="form-control"
                    [class.error]="isFieldInvalid('subject')">
                    <option value="">Selecciona un asunto</option>
                    <option value="desarrollo-web">Desarrollo Web</option>
                    <option value="app-movil">Aplicación Móvil</option>
                    <option value="consultoria">Consultoría IT</option>
                    <option value="devops">DevOps y Cloud</option>
                    <option value="otro">Otro</option>
                  </select>
                  <div class="error-message" *ngIf="isFieldInvalid('subject')">
                    Selecciona un asunto
                  </div>
                </div>

                <div class="form-group">
                  <label for="message">Mensaje *</label>
                  <textarea 
                    id="message" 
                    formControlName="message" 
                    rows="6" 
                    class="form-control"
                    [class.error]="isFieldInvalid('message')"
                    placeholder="Cuéntanos sobre tu proyecto, objetivos y cualquier detalle relevante..."></textarea>
                  <div class="error-message" *ngIf="isFieldInvalid('message')">
                    El mensaje es requerido
                  </div>
                </div>

                <button 
                  type="submit" 
                  class="submit-btn"
                  [disabled]="contactForm.invalid || isSubmitting"
                  [class.loading]="isSubmitting">
                  <span *ngIf="!isSubmitting">
                    <i class="fas fa-paper-plane"></i>
                    Enviar Mensaje
                  </span>
                  <span *ngIf="isSubmitting">
                    <i class="fas fa-spinner fa-spin"></i>
                    Enviando...
                  </span>
                </button>
              </form>

              <!-- Success Message -->
              <div class="success-message" *ngIf="showSuccessMessage">
                <i class="fas fa-check-circle"></i>
                <h3>¡Mensaje Enviado!</h3>
                <p>Gracias por contactarnos. Te responderemos en un plazo de 24 horas.</p>
              </div>
            </div>

            <!-- Contact Info -->
            <div class="contact-info">
              <h2>Información de Contacto</h2>
              <p>También puedes contactarnos directamente através de estos medios:</p>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-details">
                  <h4>Email</h4>
                  <p>info&#64;techsolutions.com</p>
                  <p>ventas&#64;techsolutions.com</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="contact-details">
                  <h4>Teléfono</h4>
                  <p>+593 99 123 4567</p>
                  <p>+593 98 765 4321</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="contact-details">
                  <h4>Oficina</h4>
                  <p>Av. República del Salvador N34-183</p>
                  <p>Quito, Ecuador</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="contact-details">
                  <h4>Horarios</h4>
                  <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                  <p>Sábados: 9:00 AM - 1:00 PM</p>
                </div>
              </div>

              <!-- Social Links -->
              <div class="social-section">
                <h4>Síguenos</h4>
                <div class="social-links">
                  <a href="https://ec.linkedin.com/company/techsolutions" class="social-link linkedin" target="_blank">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://github.com/techsolutions-pro" class="social-link github" target="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="http://x.com/techsolutionsde" class="social-link twitter" target="_blank">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/techsolutionscr/" class="social-link instagram" target="_blank">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section">
        <div class="container">
          <div class="section-header">
            <h2>Preguntas Frecuentes</h2>
            <p>Respuestas a las consultas más comunes sobre nuestros servicios</p>
          </div>
          
          <div class="faq-grid">
            <div class="faq-item" *ngFor="let faq of faqs">
              <h4>{{ faq.question }}</h4>
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta">
        <div class="container">
          <div class="cta-content">
            <h2>¿Listo para Comenzar?</h2>
            <p>Transformemos juntos tu idea en una solución digital exitosa</p>
            <div class="cta-stats">
              <div class="stat">
                <span class="stat-number">24h</span>
                <span class="stat-label">Tiempo de Respuesta</span>
              </div>
              <div class="stat">
                <span class="stat-number">150+</span>
                <span class="stat-label">Proyectos Exitosos</span>
              </div>
              <div class="stat">
                <span class="stat-number">85+</span>
                <span class="stat-label">Clientes Satisfechos</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .contact-page {
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

    /* Contact Section */
    .contact-section {
      padding: 5rem 0;
      background: #f8fafc;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 4rem;
      align-items: start;
    }

    /* Contact Form */
    .contact-form-container {
      background: white;
      padding: 3rem;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    }

    .contact-form-container h2 {
      font-size: 2rem;
      color: #2d3748;
      margin-bottom: 0.5rem;
      font-weight: 700;
    }

    .contact-form-container > p {
      color: #718096;
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    .form-group label {
      color: #2d3748;
      font-weight: 600;
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
    }

    .form-control {
      padding: 1rem;
      border: 2px solid #e2e8f0;
      border-radius: 10px;
      font-size: 1rem;
      transition: all 0.3s ease;
      background: white;
    }

    .form-control:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .form-control.error {
      border-color: #e53e3e;
    }

    .error-message {
      color: #e53e3e;
      font-size: 0.875rem;
      margin-top: 0.5rem;
    }

    select.form-control {
      cursor: pointer;
    }

    textarea.form-control {
      resize: vertical;
      min-height: 120px;
    }

    .submit-btn {
      background: linear-gradient(45deg, #667eea, #764ba2);
      color: white;
      border: none;
      padding: 1.2rem 2rem;
      border-radius: 10px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1rem;
    }

    .submit-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
    }

    .submit-btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none;
    }

    .submit-btn.loading {
      background: #718096;
    }

    /* Success Message */
    .success-message {
      text-align: center;
      padding: 2rem;
      background: linear-gradient(45deg, #48bb78, #38a169);
      color: white;
      border-radius: 15px;
      margin-top: 2rem;
    }

    .success-message i {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .success-message h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      font-weight: 700;
    }

    .success-message p {
      font-size: 1.1rem;
      opacity: 0.9;
    }

    /* Contact Info */
    .contact-info {
      background: white;
      padding: 3rem;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.1);
      height: fit-content;
    }

    .contact-info h2 {
      font-size: 1.8rem;
      color: #2d3748;
      margin-bottom: 0.5rem;
      font-weight: 700;
    }

    .contact-info > p {
      color: #718096;
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .contact-item {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid #e2e8f0;
    }

    .contact-item:last-of-type {
      border-bottom: none;
      margin-bottom: 2rem;
    }

    .contact-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(45deg, #667eea, #764ba2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.2rem;
      flex-shrink: 0;
    }

    .contact-details h4 {
      color: #2d3748;
      font-weight: 600;
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
    }

    .contact-details p {
      color: #718096;
      margin-bottom: 0.3rem;
      font-size: 0.95rem;
    }

    /* Social Section */
    .social-section {
      text-align: center;
    }

    .social-section h4 {
      color: #2d3748;
      font-weight: 600;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
      font-size: 1.2rem;
    }

    .social-link:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }

    .social-link.linkedin { background: #0077b5; }
    .social-link.github { background: #333; }
    .social-link.twitter { background: #1da1f2; }
    .social-link.instagram { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }

    /* FAQ Section */
    .faq-section {
      padding: 5rem 0;
    }

    .faq-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .faq-item {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 4px 25px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .faq-item:hover {
      transform: translateY(-3px);
    }

    .faq-item h4 {
      color: #2d3748;
      font-weight: 600;
      margin-bottom: 1rem;
      font-size: 1.1rem;
      line-height: 1.4;
    }

    .faq-item p {
      color: #718096;
      line-height: 1.6;
      font-size: 0.95rem;
    }

    /* CTA Section */
    .cta {
      padding: 4rem 0;
      background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
      color: white;
      text-align: center;
    }

    .cta-content h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .cta-content > p {
      font-size: 1.2rem;
      margin-bottom: 3rem;
      opacity: 0.9;
    }

    .cta-stats {
      display: flex;
      justify-content: center;
      gap: 3rem;
      flex-wrap: wrap;
    }

    .stat {
      text-align: center;
    }

    .stat-number {
      display: block;
      font-size: 2.5rem;
      font-weight: 700;
      color: #ffd700;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      color: rgba(255,255,255,0.8);
      font-size: 1rem;
    }

    /* Responsive */
    @media screen and (max-width: 768px) {
      .hero-content h1 {
        font-size: 2.5rem;
      }

      .contact-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .form-row {
        grid-template-columns: 1fr;
      }

      .contact-form-container,
      .contact-info {
        padding: 2rem;
      }

      .cta-stats {
        gap: 2rem;
      }

      .faq-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;

  faqs = [
    {
      question: '¿Cuánto tiempo toma desarrollar un proyecto?',
      answer: 'El tiempo depende de la complejidad del proyecto. Un sitio web simple puede tomar 2-4 semanas, mientras que aplicaciones más complejas pueden requerir 3-6 meses.'
    },
    {
      question: '¿Ofrecen soporte post-lanzamiento?',
      answer: 'Sí, ofrecemos planes de soporte y mantenimiento para asegurar que tu aplicación funcione correctamente y se mantenga actualizada.'
    },
    {
      question: '¿Trabajan con clientes internacionales?',
      answer: 'Absolutamente. Tenemos experiencia trabajando con clientes en Latinoamérica, Estados Unidos y Europa, adaptándonos a diferentes zonas horarias.'
    },
    {
      question: '¿Qué tecnologías utilizan?',
      answer: 'Trabajamos con tecnologías modernas como Angular, React, Node.js, Python, AWS, y muchas más. Seleccionamos la mejor tecnología para cada proyecto.'
    },
    {
      question: '¿Proporcionan estimaciones de costo?',
      answer: 'Sí, después de entender tus requerimientos, proporcionamos una cotización detallada sin compromiso.'
    },
    {
      question: '¿Incluyen diseño UX/UI?',
      answer: 'Sí, nuestro equipo incluye especialistas en UX/UI que crean interfaces intuitivas y atractivas para tus usuarios.'
    }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? field.invalid && field.touched : false;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.showSuccessMessage = true;
        this.contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
        
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}
