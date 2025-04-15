
import { Routes, provideRouter } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// import { HOME_ROUTES } from './home/home.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'add-employee', component: AddEmployeeComponent},
    
    {path: '**', redirectTo: ''}
];

export const appRouting = provideRouter(routes);
