import { Injectable, signal, WritableSignal } from '@angular/core';
import { Proyect } from '../interfaces/Proyect.interface';


const proyects: Proyect[] = [
  {
    id:0,
    title: 'E‑commerce',
    description: 'Aplicación e‑commerce desarrollada con Angular 19 que incluye autenticación de usuarios, catálogo de productos y un panel de administración para gestionar el inventario. Permite añadir, editar y eliminar productos mediante una interfaz intuitiva y segura.',
    img: 'https://picsum.photos/400/300?random=1',
    video: 'videos/tesloShopVd.mp4',
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
        title: "Carrito de compras",
        caracteristic: [
          "Añadir y eliminar productos del carrito",
          "Actualización automática de cantidades",
          "Cálculo del total en tiempo real",
          "Carrito persistente por usuario"
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
    id:1,
    title: "E‑commerce de Ropa Urbana",
    description:
      "Aplicación de comercio electrónico enfocada en moda urbana. Incluye autenticación de usuarios, carrito persistente y un panel de administración para gestionar productos, inventario e imágenes.",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    video: '',
    caracteristics: [
      {
        title: "Autenticación de usuarios",
        caracteristic: [
          "Registro y login con validación",
          "Protección de rutas mediante JWT",
          "Gestión de sesiones persistentes",
          "Recuperación de contraseña"
        ]
      },
      {
        title: "Catálogo de productos",
        caracteristic: [
          "Listado dinámico con filtros por categoría",
          "Búsqueda en tiempo real",
          "Página de detalle con imágenes y tallas",
          "Actualización automática del stock"
        ]
      },
      {
        title: "Panel de administración",
        caracteristic: [
          "Crear, editar y eliminar productos",
          "Subida de imágenes",
          "Gestión de inventario",
          "Control de precios y descuentos"
        ]
      }
    ],
    tecnologies: [
      { name: "Angular", img: "https://angular.io/assets/images/logos/angular/angular.svg" },
      { name: "TailwindCSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { name: "Node.js", img: "https://nodejs.org/static/images/logo.svg" },
      { name: "MongoDB", img: "https://www.svgrepo.com/show/331488/mongodb.svg" },
      { name: "JWT", img: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg" }
    ]
  },
  {
    id:2,
    title: "Dashboard de Gestión de Proyectos",
    description:
      "Plataforma para gestionar proyectos, tareas y equipos. Incluye autenticación, roles de usuario y un panel avanzado con estadísticas y gráficos.",
    img: "https://images.unsplash.com/photo-1556155092-8707de31f9c4",
    video: '',
    caracteristics: [
      {
        title: "Autenticación de usuarios",
        caracteristic: [
          "Login con roles (admin / usuario)",
          "Protección de rutas",
          "Sesiones seguras con JWT",
          "Gestión de permisos"
        ]
      },
      {
        title: "Gestión de proyectos",
        caracteristic: [
          "Crear y editar proyectos",
          "Asignar tareas a miembros del equipo",
          "Seguimiento del progreso",
          "Historial de actividad"
        ]
      },
      {
        title: "Panel de administración",
        caracteristic: [
          "Gestión de usuarios",
          "Control de roles y permisos",
          "Dashboard con estadísticas",
          "Gráficos dinámicos"
        ]
      }
    ],
    tecnologies: [
      { name: "Angular", img: "https://angular.io/assets/images/logos/angular/angular.svg" },
      { name: "TypeScript", img: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
      { name: "Express", img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
      { name: "MySQL", img: "https://www.svgrepo.com/show/303251/mysql-logo.svg" },
      { name: "Git", img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg" }
    ]
  }
];



@Injectable({ providedIn: 'root' })
export class ProyectsService {

  private proyects = signal<Proyect[]>([]);
  readonly proyects$ =  this.proyects.asReadonly(); // público pero inmutable

  constructor() {
    this.proyects.set(proyects)
  }




}


