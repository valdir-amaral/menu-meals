import { Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './shared/auth-guard.service';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }, 
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: MenuComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: NotfoundComponent,
    }
];
