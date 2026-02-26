import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
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
    {
        path: 'home',
        loadComponent: () => import('./peges/layout/loyout/loyout').then(m => m.Loyout),
        canActivate: [authGuard],
        children: [
            {
                path: '',
                loadComponent: () => import('./peges/home/home').then(m => m.Home),
            },
        ],
    },
];
