# Script para build y push a Docker Hub

param(
    [Parameter(Mandatory=$true)]
    [string]$Tag = "latest"
)

Write-Host "=== BUILD Y PUSH A DOCKER HUB ===" -ForegroundColor Cyan
Write-Host ""

# Variables
$ImageName = "ryuzakizeitan/wap2"
$FullImageName = "${ImageName}:${Tag}"

Write-Host "Imagen a crear: $FullImageName" -ForegroundColor Yellow
Write-Host ""

# Paso 1: Verificar que Docker esté corriendo
Write-Host "1. Verificando Docker..." -ForegroundColor Yellow
try {
    docker info | Out-Null
    Write-Host "✅ Docker está corriendo" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker no está corriendo. Por favor, inicia Docker Desktop." -ForegroundColor Red
    exit 1
}

# Paso 2: Hacer build de la aplicación Angular
Write-Host "2. Construyendo aplicación Angular..." -ForegroundColor Yellow
try {
    npm run build
    Write-Host "✅ Build de Angular completado" -ForegroundColor Green
} catch {
    Write-Host "❌ Error en el build de Angular" -ForegroundColor Red
    exit 1
}

# Paso 3: Construir imagen Docker
Write-Host "3. Construyendo imagen Docker..." -ForegroundColor Yellow
try {
    docker build -t $FullImageName .
    Write-Host "✅ Imagen Docker construida: $FullImageName" -ForegroundColor Green
} catch {
    Write-Host "❌ Error construyendo la imagen Docker" -ForegroundColor Red
    exit 1
}

# Paso 4: Verificar login en Docker Hub
Write-Host "4. Verificando autenticación en Docker Hub..." -ForegroundColor Yellow
$loginCheck = docker info 2>&1 | Select-String "Username"
if (-not $loginCheck) {
    Write-Host "⚠️  No estás logueado en Docker Hub. Iniciando login..." -ForegroundColor Yellow
    docker login
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Error en el login de Docker Hub" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "✅ Ya estás autenticado en Docker Hub" -ForegroundColor Green
}

# Paso 5: Hacer push de la imagen
Write-Host "5. Subiendo imagen a Docker Hub..." -ForegroundColor Yellow
try {
    docker push $FullImageName
    Write-Host "✅ Imagen subida exitosamente a Docker Hub: $FullImageName" -ForegroundColor Green
} catch {
    Write-Host "❌ Error subiendo la imagen a Docker Hub" -ForegroundColor Red
    exit 1
}

# Paso 6: También crear y subir tag 'latest' si no es el tag especificado
if ($Tag -ne "latest") {
    Write-Host "6. Creando y subiendo tag 'latest'..." -ForegroundColor Yellow
    try {
        docker tag $FullImageName "${ImageName}:latest"
        docker push "${ImageName}:latest"
        Write-Host "✅ Tag 'latest' también subido" -ForegroundColor Green
    } catch {
        Write-Host "⚠️  Error subiendo tag 'latest', pero el tag $Tag se subió correctamente" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "=== PROCESO COMPLETADO ===" -ForegroundColor Cyan
Write-Host "Imagen disponible en: https://hub.docker.com/r/$ImageName" -ForegroundColor Green
Write-Host ""
Write-Host "Para usar la imagen:" -ForegroundColor Yellow
Write-Host "docker pull $FullImageName" -ForegroundColor White
Write-Host "docker run -p 80:80 $FullImageName" -ForegroundColor White
Write-Host ""
Write-Host "Tags disponibles:" -ForegroundColor Yellow
Write-Host "• $FullImageName" -ForegroundColor White
if ($Tag -ne "latest") {
    Write-Host "• ${ImageName}:latest" -ForegroundColor White
}
