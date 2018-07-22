import { RouterModule, Routes } from '@angular/router'; 
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DynamicMenuComponent } from './dynamic-menu/dynamic-menu.component';
import { AuthGuard } from './_guards/auth.guard';


        export const appRoutes:Routes = [
            { path: '', component:LoginComponent },
            { path: 'home', component:HomeComponent, canActivate:[AuthGuard]},
           // { path: 'MyMenu', component:DynamicMenuComponent},
            { path: '**', redirectTo:'/'}
        ];
    