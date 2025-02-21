import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app-components/home-page/home-page.component').then(com => com.HomePageComponent)
  }
];
