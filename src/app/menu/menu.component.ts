import { Component } from '@angular/core';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { Router, Routes, RouterOutlet, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CommonService } from '../common.service';

const routes: Routes = [
  { path: '', component: LoginComponent },  // default route
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-employee', component: AddEmployeeComponent } // Route for Add Employee
];

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule], 
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(private router: Router, private commonService: CommonService ) {}


  ngOnInit() {
    
  }

  onAddEmployee() {
    this.commonService.setSelectedEmployee(null); 

  }

  onLogout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/';
  }
  
  

}
