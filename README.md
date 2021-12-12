# simple_server
Repositorio destinado para el curso nivelador FullStack 

## Instalacion de dependencias
Para realizar la instalacion de dependecias debe ejecutar el siguiente comando
`$ npm install `
De esta manera se instalaran las depencias necesarias para ejecutar el proyecto

## Ejecuión del proyecto
Para ejecutar el projecto de manera local debe ejecutar el siguiente comando
`$ npm start `
De esta manera se levantara un serivdor http local en el puerto 8080

## Ejecución en docker

# Creación de la imagen
 docker build . -t <image_name>

# Correr solución en docker
 docker run -p <public_port>:<private_port> -d <image_name>

## Licencia
GNU GENERAL PUBLIC LICENSE