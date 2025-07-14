@echo off
echo Compilando con Latexmk (recomendado)...

:: Crear carpeta para archivos temporales
if not exist "build" mkdir build

:: Usar latexmk para compilación automática con archivos temporales en build/
latexmk -pdf -pdflatex="pdflatex -interaction=nonstopmode" -aux-directory=build -output-directory=. IPLeiriaMain.tex

echo.
echo Compilación completada con Latexmk!
echo PDF generado: IPLeiriaMain.pdf  
echo Archivos temporales en: build\
echo.
pause
