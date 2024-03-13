import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Email } from '../rmail.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  user:any
  emails:Email[] = [{email:'', subject:'', body:''}]

  constructor(private _router:Router, private _ser:UserService){}

  ngOnInit(){
    if(localStorage.getItem('user')){
      let getUser = localStorage.getItem('user')
      let Jus = JSON.parse(JSON.stringify(getUser))
      this.user = JSON.parse(Jus)
      console.log(this.user);
    }else{
      this._router.navigate(['login-registration'])
    }

  }
  
  gasStation = [
    {gasImage:'./assets/gas1.png', name:'LPG', availability:'yes', price:'900'},
    {gasImage:'./assets/gas2.png', name:'HP', availability:'yes', price:'920'},
    {gasImage:'./assets/gas2.png', name:'HP Lite', availability:'NO', price:'890'},
    {gasImage:'./assets/gas3.png', name:'Bharat', availability:'yes', price:'900'},
    {gasImage:'./assets/gas4.png', name:'Indane', availability:'yes', price:'910'},
    {gasImage:'./assets/gas4.png', name:'Indane Lite', availability:'NO', price:'880'},
    {gasImage:'./assets/gas4.png', name:'Indane Prime', availability:'yes', price:'940'}
  ]
  
  buyNow(i:any){
    // console.log(JSON.parse(this.user.email));
    // this._ser.buyProduct(JSON.parse(this.user.email)).subscribe((res)=>{
    //   console.log(res);
    // })
    if(confirm('Do You want to Buy this Product ?')){
        alert("Thankyou For Buying this Product")
    }
  }


}
