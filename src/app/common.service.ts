import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeBoard } from './dashboard/dashboard.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  apiUrl = "http://localhost:3000/employees";

  selectedEmployee = new BehaviorSubject<EmployeeBoard | null>(null);


  constructor(private http: HttpClient) { }

  

// To fetch all employee list 
  getAllEmployeeList() {
    return this.http.get<EmployeeBoard[]>(this.apiUrl);
  }

   // To add new employee to the list
  addEmployee (data: any) {
    return this.http.post<EmployeeBoard[]>(this.apiUrl, data);

  }

  // To fetch the existing employee data
  // fetchEmployeeData(id: number) {
  //   return this.http.get<EmployeeBoard[]>(`${this.apiUrl}/${id}`);
  // }

   // To update employee in list
  updateEmployee (id: number, data: EmployeeBoard): Observable<EmployeeBoard> {
    return this.http.put<EmployeeBoard>(`${this.apiUrl}/${id}`, data);

  }

  // To delete employee from list
  deleteEmployee (id: number){
    return this.http.delete<EmployeeBoard[]>(`${this.apiUrl}/${id}`);
  }


  setSelectedEmployee(emp: EmployeeBoard | null) {
    this.selectedEmployee.next(emp);
  }
  

  getSelectedEmployee(): Observable<EmployeeBoard | null> {
    return this.selectedEmployee.asObservable();
  }

  // clearSelectedEmployee() {
  //   this.selectedEmployee = null;
  // }
}
