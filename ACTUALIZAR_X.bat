@echo off
set rutaExp=ruta\aGenerar\html\
set rutaJson=ruta\ubicado\json\
set puertoSrv=
set visualizacion=
set video=

curl -G "http://localhost:%puertoSrv%/articulos" --data-urlencode "visualizacion=%visualizacion%" --data-urlencode "fullPath=%rutaJson%data.json"
cd /d %rutaJson%
node ./generar.js %rutaExp% %video%
echo Puede cerrar la ventana
pause