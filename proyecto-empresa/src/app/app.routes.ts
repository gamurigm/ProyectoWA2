import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/inicio', 
    pathMatch: 'full' 
  },
  { 
    path: 'inicio', 
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  { 
    path: 'empresa', 
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  { 
    path: 'equipo', 
    loadComponent: () => import('./pages/team/team.component').then(m => m.TeamComponent)
  },
  { 
    path: 'equipo/:id', 
    loadComponent: () => import('./pages/team-detail/team-detail.component').then(m => m.TeamDetailComponent)
  },
  { 
    path: 'contacto', 
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  { 
    path: '**', 
    redirectTo: '/inicio' 
  }
];
