import { CanActivateFn } from '@angular/router';

import { StorageService } from './storage.service';

import { Router } from '@angular/router';
import { inject, Injectable } from '@angular/core';

Injectable({
  providedIn:'root'
})

export const loginGuard: CanActivateFn = (route, state) => {
  //get user information from storage
  // inject(StorageService)
   const storage = new StorageService();
  let userinfo = storage.get("userinfo");
  console.log("get userinfor from storage: ");
  console.log(userinfo);


  if(userinfo && userinfo.username)
  {
    return true
  }
  inject(Router).navigate(["/login"]);
  return false;
};
