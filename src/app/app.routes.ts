import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./components/layout/layout.component'),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./pages/dashboard/dashboard.component')
            },
            {
                path: 'profile',
                loadComponent: () => import('./pages/profile/profile.component')
            },
            {
                path: 'tables',
                loadComponent: () => import('./pages/tables/tables.component')
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]       
        
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }

];
