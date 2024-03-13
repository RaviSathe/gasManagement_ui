import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)

  if(localStorage.getItem('user')){
    return true
  }else{
    alert("Access Denied")
    router.navigate(['login-registration'])
    return false;
  }
};
