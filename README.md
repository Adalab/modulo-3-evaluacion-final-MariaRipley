# PÁGINA CON PERSONAJES DE RICK AND MORTY

## Descripción del proyecto

Este proyecto de ejemplo utiliza React para crear una aplicación web que muestra un listado de personajes de la serie "Rick and Morty". La aplicación permite filtrar y ordenar los personajes según diferentes criterios.

## Funcionalidades principales

- Mostrar una lista de personajes de la serie "Rick and Morty".
- Filtrar los personajes por nombre y especie.
- Ordenar los personajes por orden alfabético.
- Mostrar los detalles de un personaje específico al hacer clic en su nombre.

## Tecnologías utilizadas

- React: Se utiliza la biblioteca de React para construir la interfaz de usuario de la aplicación.
- React Router: Se utiliza React Router para manejar las rutas y la navegación entre las diferentes vistas de la aplicación.
- LocalStorage: Se utiliza LocalStorage para almacenar y recuperar los datos de la lista de personajes en el navegador del usuario.
- Servicios API: Se utiliza una API externa para obtener los datos de los personajes de la serie "Rick and Morty".

## Instalación

1. Clona el repositorio en tu máquina local.
2. Navega hasta el directorio del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias: npm install
4. Una vez finalizada la instalación, ejecuta el siguiente comando para iniciar la aplicación: npm start
5. Abre tu navegador web y accede a la dirección <http://localhost:3000> para ver la aplicación en funcionamiento.

## Estructura del proyecto

- App.js: Componente principal que contiene la lógica principal y renderiza los componentes de la aplicación.
- CharacterDetail.js: Componente que muestra los detalles de un personaje específico.
- Landing.js: Componente que muestra la página principal de la aplicación con la lista de personajes y los filtros.
- SearchCharacter.js: Componente de búsqueda de personajes por nombre.
- SearchSpecies.js: Componente de búsqueda de personajes por especie.
- services/: Carpeta que contiene los servicios de la API y el almacenamiento local.
- styles/: Carpeta que contiene los estilos CSS de la aplicación.
- images/: Carpeta que contiene las imágenes utilizadas en la aplicación.
