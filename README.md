# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Acerca de la API

La api incluida en este proeycto es una api rest, construida desde la plataforma supabase.com, toda la base de datos y gestios de permiso y storage esta en la api.

## Como Compilar el proyecto ?

1. En tu consola escribe 'npm run build'
2. se creara una carpeta con el nombre 'dist', ahi dentro esta todo
3. dentro de esa carpeta esta un archivo llamada index.html, duplicamos ese archivo y al nuevo le ponesmo el nombre de 200.html

## Como subir el proyecto a internet?

1. el servicio de host que usaba para subir el archivo era surge.sh, si deseas subir al misma web.
2. en tu consola dirigete  a la ubicacion de la carpeta dist y ejecuta este comando surge(debe esta instalado el paquete surge previamente, mas info en su pagina oficial)
3. completas los datos que te pide, le das un nombre a tu subdominio ya listo te deberia devolver pos consola el link de tu pagina web.
