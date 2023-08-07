import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { 

  }

  set(key:string, value:any){
    localStorage.setItem(key,JSON.stringify(value));
  }

  get(key:string){
    return JSON.parse(localStorage.getItem(key)??"{}"); // Use an empty object as a default value if dataFromLocalStorage is null
  }

  remove(key:string){
    localStorage.removeItem(key);
  }

}
