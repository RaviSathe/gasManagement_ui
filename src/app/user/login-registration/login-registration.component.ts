import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent {

  login:boolean = true
  loginForm!:FormGroup
  registrationForm!:FormGroup

  constructor(private _userService:UserService, private router:Router, private fb: FormBuilder){}

  ngOnInit(){
    this.loginForm = new FormGroup({
      'email':new FormControl(''),
      'password':new FormControl(''),
    })

    this.registrationForm = new FormGroup({
      'firstName':new FormControl('',Validators.required),
      'lastName':new FormControl('',Validators.required),
      'mobileNo':new FormControl('',Validators.required),
      'email':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required),
    })

    this.loginForm = this.fb.group({
      email: ['', Validators.required], // Adding required validator
      password: ['', Validators.required],
    });

    if(localStorage.getItem('user')){
      this.router.navigate(['dashboard'])
    }
  }

  get email(){
    return this.loginForm.get('email')?.value
  }

  areInputEmpty() {
    const controls = this.loginForm.controls
    return Object.keys(controls).some(controlName => controls[controlName].value === '')
  }

  onLogin(){
    this._userService.login(this.loginForm.value).subscribe((res)=>{
      if(res != null){
        alert("Welcome ")
        localStorage.setItem('user', JSON.stringify(this.loginForm.value))
        this.router.navigate(['dashboard'])
      }else{
        alert("User Not Found !!!")
      }
    })
  }

  onRegistration(){
    this._userService.registerUser(this.registrationForm.value).subscribe((res)=>{
      if(res != null){ 
        console.log(res);
        this.login = true
        return
      }else{
        alert("Please Try again after sometime")
      }

    })
  }

  aTag(){
    this.login = !this.login
  }

}
