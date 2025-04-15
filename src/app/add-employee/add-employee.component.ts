import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-employee',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {

  userForm!: FormGroup;
  employeePayload = {
    id: '',
    name: '',
    jobTitle: '',
    department: '',
    email: '',
    mobile: ''
  }
  isEdit: boolean = false;
  subcriptionData: Subscription = new Subscription;


  constructor(private fb: FormBuilder, private commonService: CommonService, private router: Router) { }

  ngOnInit() {
    // this.initializeForm(); 

    this.subcriptionData = this.commonService.getSelectedEmployee().subscribe((emp: any) => {
      if (emp) {
        id: +this.employeePayload.id
        this.employeePayload = { ...emp };
        this.isEdit = true;
      }
    })
  }

  ngOnDestroy() {
    if (this.subcriptionData) {
      this.subcriptionData.unsubscribe();
    }
  }



  initializeForm() {
    this.userForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      jobTitle: ['', Validators.required],
      department: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      mobile: ['', Validators.required]
    })
  }

  
  // On click of submit button form values will be added or updated
  onSubmit() {
    if (this.isEdit) {
      const updatedEmp = {
        ...this.employeePayload,
        id: +this.employeePayload.id // convert string to number
      };
      // To update existing employee data
      this.commonService.updateEmployee(updatedEmp.id, updatedEmp).subscribe((res: any) => {
        alert('Employee updated!');
        this.router.navigate(['/dashboard']);
      })
    } else {
      // To add new employee to the list
      this.commonService.addEmployee(this.employeePayload).subscribe((res: any) => {
        alert('Employee added successfully!');
        this.router.navigate(['/dashboard']);
      })
    }

  }

  // To rest form values
  resetForm() {
    this.employeePayload = {
      id: '',
      name: '',
      jobTitle: '',
      department: '',
      email: '',
      mobile: ''
    };
    this.isEdit = false;
  }

}
