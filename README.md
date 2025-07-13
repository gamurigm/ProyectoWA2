# 🚀 TechSolutions Pro - Sitio Web Corporativo

[![Angular](https://img.shields.io/badge/Angular-19-red?style=flat&logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-3.0-pink?style=flat&logo=sass)](https://sass-lang.com/)

## 📋 Descripción del Proyecto

**TechSolutions Pro** es un sitio web corporativo desarrollado en **Angular 19** siguiendo la metodología de las **5 capas de Jesse James Garrett**. Representa una empresa ficticia de desarrollo de software que presenta información detallada de su equipo de desarrollo profesional.

Este proyecto implementa conceptos avanzados de arquitectura web moderna, componentes standalone, routing dinámico y presentación de datos estructurados.

## 🎯 Objetivos Cumplidos

✅ **Implementación completa de Angular 19 con standalone components**  
✅ **Aplicación rigurosa de la metodología Jesse James Garrett (5 capas)**  
✅ **Sistema de datos hardcoded con información del equipo**  
✅ **Arquitectura de componentes reutilizables y escalables**  
✅ **Diseño responsive y accesible**  
✅ **Formularios reactivos con validación**  

## 🏗️ Arquitectura - Metodología Jesse James Garrett

### 1. **ESTRATEGIA** - Objetivos de Negocio y Usuario
- **Objetivo**: Presentar TechSolutions Pro como empresa líder en desarrollo de software
- **Audiencia**: Clientes potenciales, partners tecnológicos, talentos para reclutamiento
- **Valor agregado**: Experiencia, especialización técnica, equipo calificado

### 2. **ALCANCE** - Funcionalidades y Contenido
- **Páginas principales**: Home, About, Team, Team Detail, Contact
- **Funcionalidades**: Navegación intuitiva, perfiles detallados, formulario de contacto
- **Contenido**: Información corporativa, servicios, equipo técnico, medios de contacto

### 3. **ESTRUCTURA** - Arquitectura de Información
```
src/app/
├── components/           # Componentes reutilizables
│   ├── header/          # Navegación principal
│   └── footer/          # Pie de página con enlaces
├── pages/               # Páginas principales
│   ├── home/           # Página de inicio
│   ├── about/          # Información corporativa
│   ├── team/           # Lista del equipo
│   ├── team-detail/    # Perfil individual
│   └── contact/        # Formulario de contacto
├── models/             # Interfaces TypeScript
├── services/           # Servicios de datos
└── routing/           # Configuración de rutas
```

### 4. **ESQUELETO** - Diseño de Interfaz
- **Layout responsive**: Mobile-first con breakpoints adaptativos
- **Navegación**: Header fijo con menú hamburguesa en móviles
- **Grid system**: CSS Grid y Flexbox para layouts flexibles
- **Componentes**: Cards, botones, formularios con estados interactivos

### 5. **SUPERFICIE** - Diseño Visual
- **Paleta de colores**: Gradientes profesionales (púrpura-azul)
- **Tipografía**: Inter font family para legibilidad óptima
- **Animaciones**: Transiciones suaves y micro-interacciones
- **Iconografía**: Font Awesome para consistencia visual

## 🛠️ Tecnologías Implementadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Angular** | 19.x | Framework principal |
| **TypeScript** | 5.x | Tipado estático |
| **SCSS** | 3.x | Estilos avanzados |
| **RxJS** | 7.x | Programación reactiva |
| **Angular Router** | 19.x | Navegación SPA |
| **Reactive Forms** | 19.x | Formularios dinámicos |

## 📁 Estructura del Proyecto

```
ProyectoWA2/
├── proyecto-empresa/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── header/header.component.ts
│   │   │   │   └── footer/footer.component.ts
│   │   │   ├── pages/
│   │   │   │   ├── home/home.component.ts
│   │   │   │   ├── about/about.component.ts
│   │   │   │   ├── team/team.component.ts
│   │   │   │   ├── team-detail/team-detail.component.ts
│   │   │   │   └── contact/contact.component.ts
│   │   │   ├── models/
│   │   │   │   ├── team-member.model.ts
│   │   │   │   └── company.model.ts
│   │   │   ├── services/
│   │   │   │   └── data.service.ts
│   │   │   ├── app.routes.ts
│   │   │   └── app.component.ts
│   │   ├── assets/images/
│   │   └── styles.scss
│   ├── angular.json
│   └── package.json
├── metodologia-jg.md
├── IMPLEMENTACION.md
└── README.md
```

## 👥 Equipo de Desarrollo (Datos Demo)

### **Ana García** - Frontend Lead
- **Tecnologías**: Angular, React, Vue.js, TypeScript
- **Experiencia**: 5 años en desarrollo frontend
- **Especialización**: UX/UI, Performance Optimization

### **Carlos Rodríguez** - Backend Architect  
- **Tecnologías**: Node.js, Python, Java, PostgreSQL
- **Experiencia**: 7 años en arquitectura backend
- **Especialización**: Microservicios, DevOps, Cloud

### **María López** - Full Stack Developer
- **Tecnologías**: Angular, .NET, Azure, MongoDB
- **Experiencia**: 4 años desarrollo full stack
- **Especialización**: Integración de sistemas, APIs REST

## 🚀 Instalación y Ejecución

### Prerrequisitos
```bash
node --version  # v18.x o superior
npm --version   # v9.x o superior
```

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/gamurigm/ProyectoWA2.git

# Navegar al proyecto
cd ProyectoWA2/proyecto-empresa

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
ng serve

# Abrir en navegador
http://localhost:4200
```

### Scripts Disponibles
```bash
npm start          # Servidor de desarrollo
npm run build      # Build de producción  
npm run test       # Ejecutar tests
npm run lint       # Verificar código
```

## 🌐 Páginas Implementadas

| Página | Ruta | Descripción |
|--------|------|-------------|
| **Home** | `/` | Landing page con hero section y servicios |
| **About** | `/about` | Historia, misión, visión y valores |
| **Team** | `/team` | Lista de integrantes del equipo |
| **Team Detail** | `/team/:id` | Perfil detallado de cada desarrollador |
| **Contact** | `/contact` | Formulario reactivo y información de contacto |

## 📱 Características Técnicas

### **Responsive Design**
- ✅ Mobile First approach
- ✅ Breakpoints: 480px, 768px, 1200px
- ✅ Navegación adaptativa
- ✅ Imágenes optimizadas

### **Performance**
- ✅ Lazy loading de rutas
- ✅ Standalone components
- ✅ Tree shaking automático
- ✅ Bundle optimization

### **Accesibilidad**
- ✅ Semantic HTML5
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Color contrast compliance

### **SEO Ready**
- ✅ Meta tags estructurados
- ✅ Open Graph protocol
- ✅ Structured data markup
- ✅ URL amigables

## 🎨 Sistema de Diseño

### **Colores Principales**
```scss
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--secondary-gradient: linear-gradient(45deg, #ff6b6b, #ee5a24);
--text-primary: #2d3748;
--text-secondary: #718096;
```

### **Tipografía**
```scss
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### **Espaciado**
```scss
--spacing-sm: 0.5rem;
--spacing-md: 1rem; 
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
```

## 📝 Validaciones y Formularios

### **Formulario de Contacto**
- ✅ Validación de email
- ✅ Campos requeridos
- ✅ Mensajes de error dinámicos
- ✅ Estados de loading
- ✅ Feedback visual

## 🧪 Testing

```bash
# Tests unitarios
ng test

# Tests e2e
ng e2e

# Coverage report
ng test --code-coverage
```

## 🚀 Deployment

### **Build de Producción**
```bash
ng build --configuration production
```

### **Análisis de Bundle**
```bash
ng build --stats-json
npx webpack-bundle-analyzer dist/stats.json
```

## 📊 Métricas del Proyecto

- **Líneas de código**: ~2,500+
- **Componentes**: 7 componentes standalone
- **Páginas**: 5 páginas principales  
- **Servicios**: 1 servicio de datos
- **Modelos**: 2 interfaces TypeScript
- **Bundle size**: ~287KB (inicial)

## 📚 Documentación Adicional

- [`metodologia-jg.md`](./metodologia-jg.md) - Detalle de implementación metodológica
- [`IMPLEMENTACION.md`](./IMPLEMENTACION.md) - Guía técnica de desarrollo
- [`proyecto-empresa/README.md`](./proyecto-empresa/README.md) - Documentación técnica Angular

## 🤝 Contribución

Este proyecto fue desarrollado como parte del curso de Aplicaciones Web, siguiendo las mejores prácticas de desarrollo frontend moderno y metodologías UX profesionales.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🎓 Institución Académica

**Universidad de las Fuerzas Armadas ESPE**  
**Carrera**: Ingeniería en Sistemas e Informática  
**Materia**: Aplicaciones Web  
**Nivel**: V Nivel  
**Período**: 2025-I

---

⭐ **Desarrollado con Angular 19 y metodología Jesse James Garrett** ⭐