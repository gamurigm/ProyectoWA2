# Scripts rápidos para Docker Hub

# Build y push con tag personalizado
Write-Host "=== COMANDOS DISPONIBLES ===" -ForegroundColor Cyan
Write-Host ""

Write-Host "1. Build y push con tag personalizado:" -ForegroundColor Yellow
Write-Host "   .\build-and-push.ps1 -Tag 'v1.0.0'" -ForegroundColor White
Write-Host ""

Write-Host "2. Build y push solo latest:" -ForegroundColor Yellow
Write-Host "   .\build-and-push.ps1 -Tag 'latest'" -ForegroundColor White
Write-Host ""

Write-Host "3. Solo build local (sin push):" -ForegroundColor Yellow
Write-Host "   docker build -t ryuzakizeitan/wap2:local ." -ForegroundColor White
Write-Host ""

Write-Host "4. Solo push (si ya tienes la imagen):" -ForegroundColor Yellow
Write-Host "   docker push ryuzakizeitan/wap2:tagname" -ForegroundColor White
Write-Host ""

Write-Host "5. Pull desde Docker Hub:" -ForegroundColor Yellow
Write-Host "   docker pull ryuzakizeitan/wap2:latest" -ForegroundColor White
Write-Host ""

Write-Host "6. Ejecutar imagen desde Docker Hub:" -ForegroundColor Yellow
Write-Host "   docker run -p 80:80 ryuzakizeitan/wap2:latest" -ForegroundColor White
Write-Host ""

# Preguntar al usuario qué quiere hacer
Write-Host "¿Qué quieres hacer?" -ForegroundColor Green
Write-Host "[1] Build y push con tag personalizado"
Write-Host "[2] Build y push con tag 'latest'"
Write-Host "[3] Solo mostrar comandos"
Write-Host ""

$choice = Read-Host "Selecciona una opción (1-3)"

switch ($choice) {
    "1" {
        $customTag = Read-Host "Ingresa el tag personalizado (ej: v1.0.0, beta, dev)"
        if ($customTag) {
            .\build-and-push.ps1 -Tag $customTag
        } else {
            Write-Host "❌ Tag no válido" -ForegroundColor Red
        }
    }
    "2" {
        .\build-and-push.ps1 -Tag "latest"
    }
    "3" {
        Write-Host "Comandos listados arriba ☝️" -ForegroundColor Green
    }
    default {
        Write-Host "Opción no válida" -ForegroundColor Red
    }
}
