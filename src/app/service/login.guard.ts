import { CanActivateFn } from '@angular/router';

import { StorageService } from './storage.service';

import { Router } from '@angular/router';
import { inject, Injectable } from '@angular/core';

import { HttpService } from './http.service';


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

  const http = new HttpService();

  if(userinfo && userinfo.username)
  {
            //---------------validate token
            var api = "/api/validateToken";
            http.getWithConfig(api,{
              auth:{
                username:userinfo.token,
                password:""
              }
            }).then((response:any)=>{
              console.log("response from validateToken: ");
              console.log(response);
              // if(response.data.success == true){

              // }             
            })
            //------------------
    return true
  }
  inject(Router).navigate(["/login"]);
  return false;
};
