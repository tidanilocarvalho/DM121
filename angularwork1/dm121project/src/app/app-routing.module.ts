import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {
        path: '', component: null
    },
    { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) }
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ],
    providers: []
})

export class AppRouterModule{}