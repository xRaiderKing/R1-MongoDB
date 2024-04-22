
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: "Home",
    loadComponent: () => import("./components/home/home.component")
  },
 {
    path: 'register',
    title: "Registrar",
    loadComponent: () => import("./components/form-mantenimiento/form-mantenimiento.component")
  },
  {
    path: 'listado',
    title: "Listado",
    loadComponent: () => import("./components/listado-mantenimiento/listado-mantenimiento.component")
  },
  {
    path: 'listadopersonal',
    title: "Listadopersonal",
    loadComponent: () => import("./components/listado-personal/listado-personal.component")
  },
  {
    path: 'personal',
    title: "Personal",
    loadComponent: () => import("./components/registro-personal/registro-personal.component")
  },
  {
    path: '', redirectTo: "home", pathMatch: 'full'
  }
];
