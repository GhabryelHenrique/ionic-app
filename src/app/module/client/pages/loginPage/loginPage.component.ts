import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from './../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.scss']
})
export class LoginPageComponent implements OnInit {

  login = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.login(this.login.value).subscribe(() => console.log('foi'));
  }
}
