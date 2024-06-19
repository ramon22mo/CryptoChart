# Proyecto Crypto Chart

Este proyecto es una aplicación web que permite a los usuarios ver información detallada sobre NFTs y criptomonedas seleccionadas. Fue desarrollado utilizando React y TypeScript.

## Tecnologías

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## API

La información de NFTs y criptomonedas se obtiene de la [Coingecko API](https://coingecko.com/api).

## Instalación

1. Clona el repositorio: `git clone https://github.com/yourusername/your-repo-name.git`
2. Navega hasta el directorio del proyecto: `cd your-repo-name`
3. Instala las dependencias: `npm install`
4. Crea un archivo `.env.local` en la raíz del proyecto y añade las siguientes variables de entorno: `VITE_API_URL=https://api.coingecko.com/api/v3`
   > Nota: No subiré el archivo `.env` al repositorio por razones de seguridad. Deberás crear tu propio archivo `.env.local` y añadir tus propias variables de entorno.
5. Inicia el servidor de desarrollo: `npm run dev`

Ahora deberías poder ver la aplicación corriendo en `http://localhost:3000`.

## Licencia

Este proyecto está licenciado bajo la licencia MIT.