import { CanActivateFn } from '@angular/router';

import { StorageService } from './storage.service';

import { Router } from '@angular/router';


export const loginGuard: CanActivateFn = (route, state) => {
  //get user information from storage
  const storage = new StorageService();
  let userinfo = storage.get("userinfo");
  console.log("get userinfor from storage: ");
  console.log(userinfo);

  //use router to redirect
  const router= new Router();

  if (!userinfo || !userinfo.username) {
    // return false;
    router.navigate(["/login"]);
  }
  return true;
};
