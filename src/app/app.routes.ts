import { Routes } from '@angular/router';
import { MainPage } from './portafolio/pages/main-page/main-page';
import { Proyects } from './portafolio/pages/proyects/proyects';

export const routes: Routes = [

{
  path:'',
  component: MainPage,
},
{
  path:'proyectos',
  loadComponent: () => import('./portafolio/pages/proyects/proyects').then(m => m.Proyects)
},
{
  path:'**',
  component: MainPage,
},


];
