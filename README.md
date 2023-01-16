# TB028-Ejercicio

### EJERCICIO - API REST con Express - FILMS

1. Crea una aplicación de películas para hacer una API REST con Express. Para ello usa la API de pelis que te proporcionamos
- [OMDB api](http://www.omdbapi.com/)

OJO!: Crea desde cero un repositorio en GitHub para hacer el ejercicio

Rutas:
- [GET] `http://localhost:3000/api/film/:title` Retorna un JSON con los detalles de la peli en concreto buscada. Payload  `{titulo:"Titanic", autor:"James Cameron", descripción:"xxx", src:"titanic.png",etc...}`
- [POST] `http://localhost:3000/api/film/` Se envía por POST los datos de la película a crear y retorna un status 200. Payload `{message: "Se ha guardado Titanic"}`
- [PUT] `http://localhost:3000/api/film/` Actualiza los datos de una película y retorna un status 200. Payload {id:"0", message: "Se ha actualizado Titanic"}
- [DELETE] `http://localhost:3000/api/film/` Borra una película y retorna un status 200. Payload `{id: "0", message: "Se ha borrado Titanic"}`
- En caso de ruta no encontrada o error, devolver un mensaje de error. Especificar si ha sido un 404, 500, etc...
 - [error-handling](https://expressjs.com/es/guide/error-handling.html)
 - [how-to-handle-404-and-500-errors-on-expressjs](https://davidburgos.blog/how-to-handle-404-and-500-errors-on-expressjs/)

Estructura del proyecto:
- Guarda en otro módulo dentro de la carpeta `utils` (hay que crearla) el código para hacer fetch de la peli. Importa dicho módulo para usarlo en el sitio adecuado...
- ¿Cansado de publicar tus API_KEY privadas al mundo exterior cuando subes tu código a GitHub? Prueba a crearte un fichero `.env` en el que pongas tus claves privadas y añade a `.gitignore` la directriz para ignorar el fichero `.env` al subir a GitHub.
- [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)
- [environment-variables](https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786)
