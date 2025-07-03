
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  loginObj = { email: '', password: '' };

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  login() {
    // Simule une connexion réussie
    this.userService.setToken('monTokenTest');
    this.router.navigate(['/about']);
  }
}