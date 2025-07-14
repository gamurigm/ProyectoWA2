# Scripts para Docker

## Scripts para PowerShell (Windows)

### Desarrollo
Write-Host "Construyendo imagen de desarrollo..." -ForegroundColor Green
docker-compose build proyecto-empresa-dev

Write-Host "Iniciando contenedor de desarrollo..." -ForegroundColor Green
docker-compose up proyecto-empresa-dev

### Producción  
Write-Host "Construyendo imagen de producción..." -ForegroundColor Green
docker-compose build proyecto-empresa-prod

Write-Host "Iniciando contenedor de producción..." -ForegroundColor Green
docker-compose up -d proyecto-empresa-prod

### Limpieza
Write-Host "Deteniendo contenedores..." -ForegroundColor Yellow
docker-compose down

Write-Host "Eliminando imágenes..." -ForegroundColor Yellow
docker-compose down --rmi all --volumes --remove-orphans
