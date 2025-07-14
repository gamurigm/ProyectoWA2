# Script de prueba rápida para Docker

Write-Host "=== PRUEBA DE CONFIGURACIÓN DOCKER ===" -ForegroundColor Cyan
Write-Host ""

# Verificar que Docker esté instalado
Write-Host "1. Verificando Docker..." -ForegroundColor Yellow
try {
    $dockerVersion = docker --version
    Write-Host "✅ Docker encontrado: $dockerVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker no está instalado o no está en el PATH" -ForegroundColor Red
    exit 1
}

# Verificar que Docker Compose esté disponible
Write-Host "2. Verificando Docker Compose..." -ForegroundColor Yellow
try {
    $composeVersion = docker compose version
    Write-Host "✅ Docker Compose encontrado: $composeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker Compose no está disponible" -ForegroundColor Red
    exit 1
}

# Verificar archivos Docker
Write-Host "3. Verificando archivos Docker..." -ForegroundColor Yellow
$files = @("Dockerfile", "Dockerfile.dev", "docker-compose.yml", "nginx.conf", ".dockerignore")
foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "✅ $file encontrado" -ForegroundColor Green
    } else {
        Write-Host "❌ $file no encontrado" -ForegroundColor Red
    }
}

# Verificar que el build local funcione
Write-Host "4. Verificando build local de Angular..." -ForegroundColor Yellow
if (Test-Path "dist") {
    Write-Host "✅ Directorio dist encontrado" -ForegroundColor Green
} else {
    Write-Host "⚠️  Directorio dist no encontrado, ejecutando build..." -ForegroundColor Yellow
    npm run build
}

# Verificar estructura de archivos después del build
Write-Host "5. Verificando estructura del build..." -ForegroundColor Yellow
if (Test-Path "dist\proyecto-empresa\browser\index.html") {
    Write-Host "✅ index.html encontrado en dist\proyecto-empresa\browser\" -ForegroundColor Green
} else {
    Write-Host "❌ index.html no encontrado en la ubicación esperada" -ForegroundColor Red
}

Write-Host ""
Write-Host "=== RESUMEN ===" -ForegroundColor Cyan
Write-Host "Docker está configurado correctamente para:" -ForegroundColor Green
Write-Host "• Desarrollo: docker-compose up proyecto-empresa-dev" -ForegroundColor White
Write-Host "• Producción: docker-compose up -d proyecto-empresa-prod" -ForegroundColor White
Write-Host ""
Write-Host "Puertos:" -ForegroundColor Green
Write-Host "• Desarrollo: http://localhost:4200" -ForegroundColor White
Write-Host "• Producción: http://localhost:80" -ForegroundColor White
