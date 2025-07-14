# Proyecto Angular Dockerizado

Este proyecto Angular ha sido configurado para ejecutarse en contenedores Docker tanto para desarrollo como para producción.

## Estructura de Archivos Docker

- `Dockerfile` - Imagen de producción optimizada con Nginx
- `Dockerfile.dev` - Imagen de desarrollo con hot reload
- `docker-compose.yml` - Configuración de servicios
- `nginx.conf` - Configuración de Nginx para producción
- `.dockerignore` - Archivos a ignorar durante el build
- `docker-scripts.ps1` - Scripts de PowerShell para facilitar el uso

**Nota importante**: Angular 19 genera los archivos en `dist/proyecto-empresa/browser/`, el Dockerfile está configurado para copiar desde esta ubicación correcta.

## Comandos Básicos

### Desarrollo (con hot reload)

```powershell
# Construir y ejecutar en modo desarrollo
docker-compose up proyecto-empresa-dev

# O usar el build separado
docker-compose build proyecto-empresa-dev
docker-compose up proyecto-empresa-dev
```

La aplicación estará disponible en: http://localhost:4200

### Producción

```powershell
# Construir y ejecutar en modo producción
docker-compose up -d proyecto-empresa-prod

# O usar el build separado
docker-compose build proyecto-empresa-prod
docker-compose up -d proyecto-empresa-prod
```

La aplicación estará disponible en: http://localhost:80

### Docker Hub

**Build y Push automático:**
```powershell
# Script interactivo
.\docker-hub.ps1

# Build y push con tag personalizado
.\build-and-push.ps1 -Tag "v1.0.0"

# Build y push con tag latest
.\build-and-push.ps1 -Tag "latest"
```

**Comandos manuales:**
```powershell
# Build local
docker build -t ryuzakizeitan/wap2:latest .

# Push a Docker Hub
docker push ryuzakizeitan/wap2:latest

# Pull desde Docker Hub
docker pull ryuzakizeitan/wap2:latest

# Ejecutar desde Docker Hub
docker run -p 80:80 ryuzakizeitan/wap2:latest
```

### Comandos Útiles

```powershell
# Ver logs del contenedor
docker-compose logs proyecto-empresa-dev
docker-compose logs proyecto-empresa-prod

# Detener contenedores
docker-compose down

# Detener y limpiar todo
docker-compose down --rmi all --volumes --remove-orphans

# Ejecutar comandos dentro del contenedor
docker-compose exec proyecto-empresa-dev sh
```

### Usando los Scripts de PowerShell

```powershell
# Hacer ejecutable el script
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Ejecutar el script
.\docker-scripts.ps1
```

## Características

### Desarrollo
- **Hot Reload**: Los cambios en el código se reflejan automáticamente
- **Puerto 4200**: Acceso estándar de Angular CLI
- **Volúmenes**: Sincronización de código en tiempo real

### Producción
- **Multi-stage Build**: Optimización del tamaño de imagen
- **Nginx**: Servidor web eficiente para archivos estáticos
- **Compresión**: Gzip habilitado para mejor rendimiento
- **Seguridad**: Headers de seguridad configurados
- **SPA Support**: Configuración para Single Page Applications

## Requisitos

- Docker Desktop para Windows
- PowerShell (incluido en Windows)

## Troubleshooting

### Error de permisos en PowerShell
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Puerto en uso
```powershell
# Cambiar puertos en docker-compose.yml
# Para desarrollo: "4201:4200"
# Para producción: "8080:80"
```

### Limpiar caché de Docker
```powershell
docker system prune -a
```

## Variables de Entorno

Puedes crear un archivo `.env` en la raíz del proyecto para configurar variables:

```env
# .env
NODE_ENV=development
API_URL=http://localhost:3000
```

## Optimizaciones Aplicadas

1. **Multi-stage builds** para reducir el tamaño de la imagen final
2. **Nginx optimizado** con compresión y cache
3. **Security headers** para mejorar la seguridad
4. **Hot reload** para desarrollo eficiente
5. **Volumes** para sincronización de código
6. **.dockerignore** para builds más rápidos
