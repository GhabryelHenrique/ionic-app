import { AuthService } from './../../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  register: any = this.fb.group({
    nome: ['', Validators.required],
    email: ['', Validators.required],
    cpf: ['', Validators.required],
    senha: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
    private authService: AuthService) {}

  ngOnInit() {
  }

  onSubmit(){
    this.authService.getAll(JSON.parse(this.register)).subscribe(() => console.log('foi'));
  }
}
