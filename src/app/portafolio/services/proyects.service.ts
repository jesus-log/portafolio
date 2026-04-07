import { Injectable, signal, WritableSignal } from '@angular/core';
import { Proyect } from '../interfaces/Proyect.interface';


const proyects: Proyect[] = [
  {
    id: 0,
    title: 'E‑commerce',
    description: 'Aplicación e‑commerce desarrollada con Angular 19 que incluye autenticación de usuarios, catálogo de productos y un panel de administración para gestionar el inventario. Permite añadir, editar y eliminar productos mediante una interfaz intuitiva y segura.',
    img: 'https://picsum.photos/400/300?random=1',
    video: 'videos/tesloShopVd.mp4',
    enlace:'https://tesloshopfront-1.netlify.app/',
    caracteristics: [

      {
        title: "Autenticación de usuarios",
        caracteristic: [
          "Registro de nuevos usuarios con validación de datos",
          "Inicio de sesión seguro con protección de rutas",
          "Gestión de sesiones y persistencia del usuario",
          "Recuperación de contraseña mediante correo electrónico"
        ]
      },
      {
        title: "Catálogo de productos",
        caracteristic: [
          "Listado dinámico de productos con imágenes y precios",
          "Filtros por categoría, precio y disponibilidad",
          "Búsqueda en tiempo real",
          "Página de detalle con descripción completa"
        ]
      },
      {
        title: "Panel de administración",
        caracteristic: [
          "Acceso exclusivo para administradores",
          "Crear nuevos productos con imágenes y descripciones",
          "Editar productos existentes",
          "Eliminar productos del catálogo",
          "Gestión del inventario y precios"
        ]
      },
      {
        title: "Seguridad",
        caracteristic: [
          "Autenticación mediante JWT",
          "Protección de rutas sensibles",
          "Validación de formularios en frontend y backend",
          "Roles diferenciados entre usuario y administrador"
        ]
      }
    ],
    tecnologies: [
      {
        name: "Angular",
        img: "https://angular.io/assets/images/logos/angular/angular.svg"
      },
      {
        name: "TailwindCSS",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
      },
      {
        name: "TypeScript",
        img: "https://cdn.worldvectorlogo.com/logos/typescript.svg"
      },
      {
        name: "Node.js",
        img: "https://nodejs.org/static/images/logo.svg"
      },
      {
        name: "Express",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
      },
      {
        name: "MongoDB",
        img: "https://www.svgrepo.com/show/331488/mongodb.svg"
      },
      {
        name: "JWT",
        img: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg"
      },
      {
        name: "Git",
        img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg"
      }
    ],
  },
  {
    id: 1,
    title: "Market tracking app",
    description:
      "Aplicación para consultar criptomonedas en tiempo real y visualizar su evolución. Puedes ver su valor en diferentes divisas y filtrar por nombre o precio.",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    video: 'videos/bitcoinVd.mp4',
    enlace:'https://coinmarket-bit.netlify.app/',
    caracteristics: [
      {
        title: "Listado de criptomonedas",
        caracteristic: [
          "Listado de las principales criptomonedas por capitalización de mercado",
          "Visualización de precios en distintas divisas como USD, EUR, GBP y JPY",
          "Filtro por nombre o símbolo de la moneda",
          "Filtro por precio mínimo",
          "Tabla con precio actual, variación en 24h y volumen total"
        ]
      },
      {
        title: "Detalle de moneda",
        caracteristic: [
          "Vista detallada de cada criptomoneda en un modal",
          "Gráfica histórica de precio con rangos de 7, 30 y 90 días",
          "Indicadores económicos como market cap, volumen 24h, ATH y ATL",
          "Datos de oferta circulante y oferta máxima",
          "Cambio porcentual acumulado en 7 y 30 días"
        ]
      }
    ],
    tecnologies: [
      { name: "Angular", img: "https://angular.io/assets/images/logos/angular/angular.svg" },
      { name: "TypeScript", img: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg" },
      { name: "Bootstrap", img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
      { name: "Chart.js", img: "https://www.chartjs.org/media/logo-title.svg" },
      { name: "RxJS", img: "https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png" },
      { name: "CoinGecko API", img: "https://static.coingecko.com/s/coingecko-logo-343e5d5f7faf0d239cc5e37f2bf9d137c3a30f2b6d6f8b5b6cdbf8b0b2c1f6f7.png" }
    ]
  },
  {
    id: 2,
    title: "Dashboard geográfico",
    description:
      "Aplicación para buscar y explorar países por capital, nombre o región. Incluye una vista detallada de cada país, un mapa interactivo con Mapbox y una interfaz responsive adaptada a móvil y escritorio.",
    img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
    video: "videos/findAtlasVd.mp4",
    enlace:'https://find-atlas.netlify.app/',
    caracteristics: [
      {
        title: "Búsqueda de países",
        caracteristic: [
          "Búsqueda por capital",
          "Búsqueda por nombre del país",
          "Filtro por región",
          "Mensajes de error y estados de carga"
        ]
      },
      {
        title: "Vista de detalle",
        caracteristic: [
          "Información principal de cada país",
          "Bandera, población, región y zona horaria",
          "Código identificador del país",
          "Acceso directo a visualización en mapa"
        ]
      },
      {
        title: "Mapa interactivo",
        caracteristic: [
          "Visualización de la ubicación del país en Mapbox",
          "Marcador sobre coordenadas del país",
          "Ruta dinámica con parámetros",
          "Diseño ajustado al espacio disponible en pantalla"
        ]
      },
      {
        title: "Interfaz responsive",
        caracteristic: [
          "Menú responsive con versión móvil desplegable",
          "Tabla en escritorio y tarjetas en móvil",
          "Diseño adaptable a distintas resoluciones",
          "Navegación optimizada para móvil y desktop"
        ]
      }
    ],
    tecnologies: [
      { name: "Angular", img: "https://angular.io/assets/images/logos/angular/angular.svg" },
      { name: "TypeScript", img: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
      { name: "Tailwind CSS", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
      { name: "DaisyUI", img: "https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo-4.svg" },
      { name: "Mapbox", img: "https://upload.wikimedia.org/wikipedia/commons/1/17/Mapbox_logo_2019.svg" },
      { name: "RxJS", img: "https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png" },
      { name: "Git", img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg" }
    ]
  }
];



@Injectable({ providedIn: 'root' })
export class ProyectsService {

  private proyects = signal<Proyect[]>([]);
  readonly proyects$ = this.proyects.asReadonly(); // público pero inmutable

  constructor() {
    this.proyects.set(proyects)
  }




}


