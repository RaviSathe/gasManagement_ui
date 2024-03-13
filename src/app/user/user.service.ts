import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:9090/api/user/register'

  constructor(private http:HttpClient) { }

  public registerUser(user:any){
    return this.http.post(this.apiUrl,user)
  }

  public login(data:any){
    return this.http.post('http://localhost:9090/api/user/login',data)
  }

  public buyProduct(email:string){
    return this.http.post('http://localhost:9090/api/user/byProduct',email)
  }
}
