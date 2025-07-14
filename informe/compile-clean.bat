@echo off
echo Compilando documento LaTeX con archivos temporales en carpeta separada...

:: Crear carpeta para archivos temporales si no existe
if not exist "temp" mkdir temp

:: Compilar LaTeX con archivos auxiliares en carpeta temp
pdflatex -aux-directory=temp -output-directory=. IPLeiriaMain.tex

:: Ejecutar biber si es necesario (con archivos en temp)
if exist "temp\IPLeiriaMain.bcf" (
    echo Ejecutando Biber...
    biber --input-directory=temp --output-directory=temp IPLeiriaMain
)

:: Segunda compilación para referencias cruzadas
echo Segunda compilación para referencias...
pdflatex -aux-directory=temp -output-directory=. IPLeiriaMain.tex

:: Tercera compilación para asegurar todas las referencias
echo Tercera compilación final...
pdflatex -aux-directory=temp -output-directory=. IPLeiriaMain.tex

echo.
echo Compilación completada!
echo PDF generado: IPLeiriaMain.pdf
echo Archivos temporales en: temp\
echo.
pause
