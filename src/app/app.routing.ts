import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesAppComponent } from './heroes-app/heroes-app.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { HeroeDetailComponent } from './heroe-detail/heroe-detail.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },

    {
        path: 'heroes',
        component: HeroesAppComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponentComponent
    },
    {
        path: 'detail/:id',
        component: HeroeDetailComponent
    },


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

