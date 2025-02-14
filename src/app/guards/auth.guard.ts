import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('access_token')){
    return true;
  }
  alert('you have no permission to enter this page')
  return false;
};
