import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./peges/landig/landig').then(m => m.Landig),
    },
    {
        path: 'login',
        loadComponent: () => import('./peges/auth/login/login').then(m => m.Login),
    },
    {
        path: 'register',
        loadComponent: () => import('./peges/auth/register/register').then(m => m.Register),
    },
];
