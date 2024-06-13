import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userEmail:string = '';
  password:string = '';
  loginMessage:string = '';

  constructor(private router: Router, private shared: SharedService) {

  }

  doLogin():void {
    if (!this.userEmail || !this.password) {
      this.loginMessage = "Por favor, preencha todos os campos.";
      return
    }

    if (this.userEmail == 'admin@admin.com' && this.password == '123') {
      this.shared.setUsername(this.userEmail)
      this.router.navigate(['home'])
    } else {
      this.loginMessage = 'Usuário ou senha incorretos.'
    }
  }
}
