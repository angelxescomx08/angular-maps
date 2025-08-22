import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'fullscreen',
    loadComponent: () =>
      import(
        './pages/full-screen-map-page/full-screen-map-page.component'
      ).then((m) => m.FullScreenMapPageComponent),
    title: 'Full Screen Map',
  },
  {
    path: 'markers',
    loadComponent: () =>
      import('./pages/markers-page/markers-page.component').then(
        (m) => m.MarkersPageComponent
      ),
    title: 'Markers',
  },
  {
    path: 'houses',
    loadComponent: () =>
      import('./pages/house-page/house-page.component').then(
        (m) => m.HousePageComponent
      ),
    title: 'Houses',
  },
  {
    path: '**',
    redirectTo: 'fullscreen',
  },
];
