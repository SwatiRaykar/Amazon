import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../APIServices/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  return true;

  //use of CanActivateFn ==> Authentication
// implement isloggedIn() for authentication 


  // const authService = inject(AuthService);
  // const router = inject(Router);

  // if (authService.isLoggedIn()) {
  //   return true;
  // } else {
  //   router.navigate(['/login']);
  //   return false;
  // }
};
