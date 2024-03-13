import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  login:boolean = false

  constructor(private _router:Router){}

  ngOnInit(){
    if(localStorage.getItem('user')){
      this.login = true
    }
  }

  logOut(){
    if(confirm("Do You want to LogOut ?")){
      localStorage.clear()
      this.login = true
      this._router.navigate(['/login-registration'])
    }
  }

}
