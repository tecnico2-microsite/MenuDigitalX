
# MenuDigitalX

Generador de HTML para carta digital con CartaAvtomat


## Instalación y configuración



#### Prerequisitos:
* Sistema operativo recomendado: Windows 10 / Windows Server 2016 o superior
* Node 22 (recomendado) o superior
* NPM 10 (recomendado) o superior
* [ServicioCartaAvtomat](https://github.com/tecnico2-microsite/ServidorCartaAvtomat) instalado y corriendo en un puerto conocido

#### Instalar dependencias:
```bash
  cd /d ruta\Completa\Al\Proyecto\
  npm i
```

#### Configuración:
Abrir el archivo "ACTUALIZAR_X.bat" y editar las primeras líneas


```bash
@echo off
set rutaExp= Ruta del directorio donde se generará el archivo index.html
set rutaJson= Ruta del directorio donde se genera el archivo data.json
set puertoSrv= Puerto de escucha del ServicioCartaAvtomat
set visualizacion= Nombre de las columnas campo libre a filtrar separado por comas sin espacios*
set video= MINUTOS entre cada video publicitario, puede dejarse vacío en caso de no utilizar esta función
```

**Importante:** las rutas **deben** terminar en contrabarra \\
No deben utilizarse comillas.

Por último, ejecutamos el archivo "ACTUALIZAR_X.bat", podemos crear una tarea programada para ejecutarse automáticamente cada X tiempo, se deja un [archivo](https://github.com/tecnico2-microsite/MenuDigitalX/blob/master/doc/ACTUALIZAR_X.xml) para importar la tarea (solo debe cambiarse la ruta al archivo como se ve en la imagen)

![Programador de tareas](https://github.com/tecnico2-microsite/MenuDigitalX/blob/master/doc/task.png)



## Ejemplos de configuración/uso

Configuración para mostrar publicidad cada 1 minuto, mostrar los artículos que tengan tildado en campos libres las opciones "CARTA_TV1" **O** "CARTA_TV2"

```bash
set rutaExp=D:\Programas\Xampp\htdocs\bar\
set rutaJson=D:\Programas\MenuDigital\MenuDigitalChanceBar\
set puertoSrv=44423
set visualizacion=CARTA_TV1,CARTA_TV2
set video=1
```

Configuración para filtrar los artículos que tengan el tilde de "CARTA_RESTO" en campos libres, sin publicidad


```bash
set rutaExp=D:\Programas\Xampp\htdocs\resto\
set rutaJson=D:\Programas\MenuDigital\MenuDigitalChanceResto\
set puertoSrv=2121
set visualizacion=CARTA_RESTO
set video=
```

Al activarse el modo video se tomarán todos los archivos .mp4 en el directorio "static", dentro de la carpeta donde se genera el archivo index.html, por lo que una estructura normal de archivos debería verse tal que:

    ..htdocs/resto
    ├── index.html
    ├── styles.css
    └── static
        ├── video1.mp4
        ├── video2.mp4
        ├── video3.mp4
        └── logo.png


## Troubleshooting

*o errores comunes...*


    curl: (7) Failed to connect to localhost port (puerto) after 2260 ms: Couldn't connect to server

ServicioCartaAvtomat no está corriendo en el puerto indicado, ¿está corriendo en primer lugar?

    {"error":{"message":"No hay visualizacion especificada","code":500}}
DEBE especificarse una visualización en la configuración del archivo.

    {"error":{"message":"error sql!","code":500}}
Muy probablemente la visualización no está bien definida, DEBE iniciar con la cadena CARTA_ seguido de cualquier cantidad de carácteres alfanuméricos o barras bajas exclusivamente.