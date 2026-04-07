# Portafolio

Aplicación web de portafolio desarrollada con Angular 21 para mostrar proyectos, tecnologías y demos.

## Demo


```text
https://logronoj-portfolio.netlify.app/
```

## Tecnologías

- Angular 21 (standalone components)
- TypeScript
- Tailwind CSS 4 + DaisyUI
- Swiper
- RxJS
- Vitest (tests unitarios)

## Funcionalidades

- Página principal con animación de carga y texto dinámico.
- Sección de proyectos con vista de detalle.
- Navegación por rutas:
	- `/` -> página principal
	- `/proyectos` -> listado/detalle de proyectos
- Fallback de rutas desconocidas hacia la principal.
- Datos de proyectos gestionados desde un servicio local.

## Estructura del proyecto

```text
src/
	app/
		portafolio/
			components/
				footer/
				nav-bar/
				Proyect-detail/
				proyects-selector/
			interfaces/
			pages/
				main-page/
				proyects/
			services/
```

## Requisitos

- Node.js 20+
- npm 10+

## Instalación

```bash
npm install
```

## Scripts disponibles

```bash
# Desarrollo
npm start

# Build de producción
npm run build

# Build en modo watch
npm run watch

# Tests unitarios
npm test
```

La app de desarrollo queda disponible en:

```text
http://localhost:4200
```

## Build y despliegue

Genera el build con:

```bash
npm run build
```

Los artefactos se generan en la carpeta de salida configurada por Angular para producción.

## Testing

El proyecto usa el runner unitario de Angular con Vitest:

```bash
npm test
```

## Próximas mejoras

- Internacionalización (ES/EN).
- Filtros por tecnología en la sección de proyectos.
- Migración de datos a un backend o CMS.
- SEO técnico (meta tags dinámicos y Open Graph).

## Autor

Portafolio creado por Jesus.
