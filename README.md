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
| **Angular Router** | 19.x | Navegación SPA |
| **Reactive Forms** | 19.x | Formularios dinámicos |

## 🧩 Recursos de Angular Usados en el Proyecto

| Recurso Angular         | Archivo(s) donde se usa                                                                 |
|------------------------|----------------------------------------------------------------------------------------|
| **Component**              | Todos los archivos `*.component.ts`                                                    |
| **Injectable**             | `src/app/services/data.service.ts`                                                     |
| **signal, WritableSignal** | `src/app/services/data.service.ts`                                                     |
| **computed**               | `src/app/services/data.service.ts`                                                     |
| **CommonModule**           | Todos los componentes standalone (`*.component.ts`)                                    |
| **\*ngIf, \*ngFor**        | Plantillas de componentes (`team.component.ts`, `team-detail.component.ts`, etc.)      |
| **RouterLink, Router...**  | Plantillas de componentes de navegación y páginas                                      |
| **ActivatedRoute**         | `src/app/pages/team-detail/team-detail.component.ts`                                   |
| **FormGroup, FormControl** | `src/app/pages/contact/contact.component.ts`                                           |
| **Validators**             | `src/app/pages/contact/contact.component.ts`                                           |
| **standalone: true**       | Todos los archivos `*.component.ts`                                                    |
| **SCSS**                   | Archivos de estilos globales y de componentes                                         |
| **Font Awesome**           | Plantillas de componentes                                                              |
| **Google Fonts (Inter)**   | Estilos globales (`src/styles.scss`)                                                   |

---

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

## 🐳 Docker - Containerización y Despliegue

Este proyecto incluye una implementación completa de Docker para facilitar el despliegue y distribución de la aplicación Angular. La imagen está disponible públicamente en Docker Hub.

### 📦 Imagen Docker Oficial

**Imagen**: [`ryuzakizeitan/wap2:latest`](https://hub.docker.com/r/ryuzakizeitan/wap2)  
**Registry**: Docker Hub  
**Tamaño**: ~50MB (optimizada con nginx:alpine)  
**Arquitectura**: Multi-stage build para optimización de producción

### 🏗️ Arquitectura Docker

#### **Dockerfile Multi-Stage**
```dockerfile
# Stage 1: Build Angular Application
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
RUN npm install -g @angular/cli@19.2.15
COPY . .
RUN ng build --configuration production

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/proyecto-empresa/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### **Configuración Nginx (nginx.conf)**
```nginx
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;
    
    # Configuración optimizada para Angular SPA
    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;
        
        # Soporte para rutas de Angular (SPA)
        location / {
            try_files $uri $uri/ /index.html;
        }
        
        # Headers de seguridad
        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header X-XSS-Protection "1; mode=block" always;
        
        # Compresión gzip
        gzip on;
        gzip_vary on;
        gzip_min_length 1024;
        gzip_proxied expired no-cache no-store private auth;
        gzip_types text/plain text/css text/xml text/javascript
                   application/javascript application/xml+rss application/json;
    }
}
```

### 🚀 Uso Rápido - Ejecutar desde Docker Hub

#### **Opción 1: Comando directo**
```bash
docker run -d -p 8080:80 --name techsolutions-app ryuzakizeitan/wap2:latest
```

#### **Opción 2: Con Docker Compose**
```yaml
# docker-compose.yml
version: '3.8'
services:
  app:
    image: ryuzakizeitan/wap2:latest
    ports:
      - "8080:80"
    restart: unless-stopped
    container_name: techsolutions-pro
```

```bash
docker-compose up -d
```

### 📋 Comandos Docker Esenciales

#### **Descargar y Ejecutar**
```bash
# Descargar la imagen
docker pull ryuzakizeitan/wap2:latest

# Ejecutar contenedor
docker run -d -p 8080:80 --name techsolutions ryuzakizeitan/wap2:latest

# Verificar que está corriendo
docker ps

# Ver logs del contenedor
docker logs techsolutions

# Acceder a la aplicación
# http://localhost:8080
```

#### **Gestión de Contenedores**
```bash
# Detener contenedor
docker stop techsolutions

# Iniciar contenedor existente
docker start techsolutions

# Reiniciar contenedor
docker restart techsolutions

# Eliminar contenedor
docker rm techsolutions

# Eliminar imagen local
docker rmi ryuzakizeitan/wap2:latest
```

### 🛠️ Desarrollo Local con Docker

#### **Construcción Local**
```bash
# Navegar al directorio del proyecto
cd proyecto-empresa

# Construir imagen localmente
docker build -t techsolutions-local .

# Ejecutar imagen local
docker run -d -p 8080:80 --name techsolutions-dev techsolutions-local
```

#### **Script de Automatización (build-and-push.ps1)**
```powershell
# Ejecutar script completo (build + push)
.\build-and-push.ps1 -Tag "latest"

# Solo build local
.\build-and-push.ps1 -Tag "dev" -LocalOnly
```

### 📊 Información de la Imagen

| Característica | Detalle |
|----------------|---------|
| **Base Image** | `nginx:alpine` |
| **Build Image** | `node:20-alpine` |
| **Tamaño Final** | ~50MB |
| **Puerto Expuesto** | 80 |
| **Servidor Web** | Nginx |
| **Compresión** | Gzip habilitado |
| **SSL Ready** | Sí (requiere configuración) |

### 🔧 Configuración Avanzada

#### **Variables de Entorno**
```bash
# Ejecutar con variables personalizadas
docker run -d -p 8080:80 \
  -e NGINX_HOST=localhost \
  -e NGINX_PORT=80 \
  --name techsolutions \
  ryuzakizeitan/wap2:latest
```

#### **Volúmenes para Logs**
```bash
# Montar volumen para logs
docker run -d -p 8080:80 \
  -v $(pwd)/logs:/var/log/nginx \
  --name techsolutions \
  ryuzakizeitan/wap2:latest
```

#### **Red Personalizada**
```bash
# Crear red
docker network create techsolutions-network

# Ejecutar en red personalizada
docker run -d -p 8080:80 \
  --network techsolutions-network \
  --name techsolutions \
  ryuzakizeitan/wap2:latest
```

### 🌐 Despliegue en Producción

#### **Docker Swarm**
```bash
# Inicializar swarm
docker swarm init

# Desplegar stack
docker stack deploy -c docker-compose.yml techsolutions-stack
```

#### **Kubernetes (k8s)**
```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: techsolutions-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: techsolutions
  template:
    metadata:
      labels:
        app: techsolutions
    spec:
      containers:
      - name: techsolutions
        image: ryuzakizeitan/wap2:latest
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: techsolutions-service
spec:
  selector:
    app: techsolutions
  ports:
  - port: 80
    targetPort: 80
  type: LoadBalancer
```

### 🔍 Troubleshooting

#### **Problemas Comunes**
```bash
# Error de puerto ocupado
docker run -d -p 3000:80 --name techsolutions ryuzakizeitan/wap2:latest

# Ver logs detallados
docker logs -f techsolutions

# Acceder al contenedor
docker exec -it techsolutions sh

# Verificar archivos dentro del contenedor
docker exec techsolutions ls -la /usr/share/nginx/html

# Verificar configuración nginx
docker exec techsolutions nginx -t
```

#### **Health Check**
```bash
# Verificar salud del contenedor
docker inspect techsolutions | grep -i health

# Health check manual
curl -f http://localhost:8080 || echo "Aplicación no disponible"
```

### 📈 Monitoreo y Logs

#### **Logs en Tiempo Real**
```bash
# Seguir logs
docker logs -f techsolutions

# Logs con timestamp
docker logs -t techsolutions

# Últimas 100 líneas
docker logs --tail 100 techsolutions
```

#### **Métricas del Contenedor**
```bash
# Estadísticas en tiempo real
docker stats techsolutions

# Información detallada
docker inspect techsolutions
```

### 🚢 Proceso Completo: De Desarrollo a Producción

#### **1. Desarrollo Local**
```bash
# Clonar repositorio
git clone https://github.com/gamurigm/ProyectoWA2.git
cd ProyectoWA2/proyecto-empresa

# Desarrollo tradicional
npm install
ng serve  # http://localhost:4200
```

#### **2. Construcción Docker**
```bash
# Build imagen local
docker build -t techsolutions-local .

# Test local
docker run -d -p 8080:80 --name test-local techsolutions-local
```

#### **3. Push a Registry**
```bash
# Tag para Docker Hub
docker tag techsolutions-local ryuzakizeitan/wap2:v1.0.0

# Push a Docker Hub
docker push ryuzakizeitan/wap2:v1.0.0
```

#### **4. Despliegue en Servidor**
```bash
# En servidor de producción
docker pull ryuzakizeitan/wap2:latest
docker run -d -p 80:80 --name techsolutions-prod ryuzakizeitan/wap2:latest
```

### 📚 Recursos Adicionales

- **Docker Hub**: [ryuzakizeitan/wap2](https://hub.docker.com/r/ryuzakizeitan/wap2)
- **Dockerfile**: [`proyecto-empresa/Dockerfile`](./proyecto-empresa/Dockerfile)
- **Docker Compose**: [`proyecto-empresa/docker-compose.yml`](./proyecto-empresa/docker-compose.yml)
- **Nginx Config**: [`proyecto-empresa/nginx.conf`](./proyecto-empresa/nginx.conf)
- **Build Script**: [`proyecto-empresa/build-and-push.ps1`](./proyecto-empresa/build-and-push.ps1)

### 🎯 Comandos de Un Solo Click

```bash
# 🚀 EJECUTAR APLICACIÓN (opción más rápida)
docker run -d -p 8080:80 --name techsolutions ryuzakizeitan/wap2:latest && echo "✅ Aplicación disponible en http://localhost:8080"

# 🛑 DETENER TODO
docker stop techsolutions && docker rm techsolutions

# 🔄 ACTUALIZAR A ÚLTIMA VERSIÓN
docker pull ryuzakizeitan/wap2:latest && docker stop techsolutions && docker rm techsolutions && docker run -d -p 8080:80 --name techsolutions ryuzakizeitan/wap2:latest
```

---

### 📋 Checklist de Verificación Docker

- ✅ Imagen disponible en Docker Hub: `ryuzakizeitan/wap2:latest`
- ✅ Dockerfile optimizado con multi-stage build
- ✅ Nginx configurado para Angular SPA
- ✅ Scripts de automatización PowerShell
- ✅ Docker Compose para orquestación
- ✅ Documentación completa de uso
- ✅ Health checks implementados
- ✅ Logs y monitoreo configurado
- ✅ Troubleshooting documentado

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