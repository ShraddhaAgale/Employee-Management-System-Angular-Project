import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  userName = '';
  password = '';

  constructor(private router: Router) {}

  // onLogin() {
  //   if (this.userName === "admin" && this.password === "admin123") {
  //     localStorage.setItem('isLoggedIn', 'true');
  //     this.router.navigate(['/home']);
  //   } else {
  //     alert('Invalid credentials!!')
  //   }
  // }

}
