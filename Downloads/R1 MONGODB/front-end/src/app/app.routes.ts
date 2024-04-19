
import { Routes } from '@angular/router';

export const routes: Routes = [
 {
    path: 'register',
    title: "Registrar",
    loadComponent: () => import("./components/form-mantenimiento/form-mantenimiento.component")
  },
  {
    path: 'listado',
    title: "Listado",
    loadComponent: () => import("./components/listado-mantenimiento/listado-mantenimiento.component")
  }
];
