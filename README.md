# FSV-ReactJS

Este proyecto es una aplicación pequeña construida con React y Vite para practicar la renderización de componentes, el manejo de listas y la manipulación de objetos en JavaScript.

## Descripción

La aplicación muestra una lista de tarjetas con información personal y también presenta un ejemplo de uso de funciones para:

- extraer propiedades de objetos,
- renombrar variables al desestructurar,
- leer, actualizar y eliminar propiedades de un objeto,
- combinar objetos usando spread y `Object.assign()`.

## Requisitos

Antes de comenzar, asegúrate de tener instalado:

- Node.js 18 o superior
- npm o pnpm

## Instalación

   Clona el repositorio:

   ```bash
   git clone https://github.com/nolan457/FSV-ReactJS
   cd FSV-ReactJS
   npm install
   ```

## Uso en desarrollo

Para iniciar el servidor de desarrollo de Vite:

```bash
npm run dev
```

Después de ejecutar ese comando, Vite te mostrará una URL local (por ejemplo, `http://localhost:5173`) para visualizar la aplicación en tu navegador.

## Compilar para producción

Para generar una versión lista para despliegue:

```bash
npm run build
```

La salida quedará en la carpeta `dist/`.

## Vista previa de producción

Puedes previsualizar la compilación generada con:

```bash
npm run preview
```

## Scripts disponibles

En el archivo `package.json` se incluyen estos comandos:

- `npm run dev`: inicia el entorno de desarrollo.
- `npm run build`: compila la aplicación para producción.
- `npm run preview`: sirve la versión compilada localmente.
- `npm run lint`: ejecuta ESLint para revisar el código.

## Estructura del proyecto

```text
src/
├── app/              # Entrada principal de la aplicación
├── components/       # Componentes reutilizables
├── helpers/          # Utilidades para manejo de objetos
├── styles/           # Estilos globales
└── assets/           # Recursos estáticos
```

## Componentes principales

- `Card`: renderiza una tarjeta con dos bloques de información.
- `CardList`: recibe una lista y muestra varias `Card`.
- `Button` y `Input`: componentes de interfaz reutilizables.

## Nota

Este proyecto está pensado como ejemplo de aprendizaje y práctica con React, JSX y manipulación de estructuras de datos en JavaScript.
