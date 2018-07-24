import { RouterModule, Routes } from '@angular/router'; 
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DynamicMenuComponent } from './dynamic-menu/dynamic-menu.component';
import { AuthGuard } from './_guards/auth.guard';
import { ExpensecategoryComponent } from './expensecategory/expensecategory.component';
import {MasterLayoutComponent} from './master-layout/master-layout.component'


        export const appRoutes:Routes = [
            { path: '', component:LoginComponent },
            { path: 'expensecat', component:ExpensecategoryComponent,outlet:'LayoutOutlet'},
            { path: 'home', component:HomeComponent, canActivate:[AuthGuard]},
            { path: '**', redirectTo:'/'}
        ];
    