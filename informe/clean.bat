@echo off
echo Limpiando archivos temporales...

:: Eliminar archivos temporales del directorio principal
del /Q *.aux *.log *.out *.toc *.lof *.lot *.bbl *.blg *.bcf *.run.xml *.fls *.fdb_latexmk *.synctex.gz *.glo *.gls *.glg *.acr *.acn *.alg 2>nul

:: Eliminar carpetas de archivos temporales
if exist "temp" (
    echo Eliminando carpeta temp\...
    rmdir /S /Q temp
)

if exist "build" (
    echo Eliminando carpeta build\...
    rmdir /S /Q build
)

:: Limpiar archivos temporales en subcarpetas
for /r %%i in (*.aux) do del "%%i" 2>nul
for /r %%i in (*.log) do del "%%i" 2>nul

echo.
echo Limpieza completada!
echo Solo quedan los archivos fuente (.tex) y el PDF final.
echo.
pause
