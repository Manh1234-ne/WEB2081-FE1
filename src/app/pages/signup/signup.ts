import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  Signup: FormGroup;


  constructor(private fb: FormBuilder){
    this.Signup = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  get username() {
  return this.Signup.get('username');
}
  get email() {
  return this.Signup.get('email');
}
  get password() {
  return this.Signup.get('password');
}

  submitForm(){
    console.log(this.Signup.value);
    
  }
}
