import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { EmployeeBoard } from './dashboard.interface'; 
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  employeeList: EmployeeBoard [] = [];
  filteredEmployees: EmployeeBoard[] = [];
  searchEmployee : string = '';
  
  constructor(private commonService : CommonService, private router: Router ) {

  }

  ngOnInit(): void {
    this.fetchAllEmployeeList();

  }

  
  
  public onSearch() {
    //  this.filteredEmployees = this.employeeList.filter(item => item.name.toLowerCase().includes(this.searchEmployee.toLowerCase()))
    this.filteredEmployees = this.employeeList.filter(emp =>
      emp.name.toLowerCase().includes(this.searchEmployee.toLowerCase())
    );
    console.log('aaaaaaaaaa', this.searchEmployee);
  }
   
  // To fetch all employee list 
  public fetchAllEmployeeList(): void {
    this.commonService.getAllEmployeeList().subscribe((res: any) => {
      this.employeeList = res;
      this.filteredEmployees = res;
      // console.log('data',this.employeeList);
    })

  }


  // To set payload on click of edit
  public fetchExistingEmployeeData(emp: EmployeeBoard) {
    this.commonService.setSelectedEmployee(emp);
    this.router.navigate(['/add-employee']);
    // this.commonService.fetchEmployeeData(id).subscribe((res: any) => {
    // })
  }


  // To delete employee from list
  public deleteEmployeeData(id: number): void {
    if (confirm('Are you sure to delete?')) {
      this.commonService.deleteEmployee(id).subscribe(() => {
        alert('Deleted successfully');
        this.fetchAllEmployeeList();
      });
    }
  }

}
