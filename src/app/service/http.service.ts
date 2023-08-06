import { Injectable } from '@angular/core';
import axios from "axios"

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() {

  }


  get(apiUrl: string) {

    return new Promise((resolve, reject) => {

      // Make a request for a user with a given ID
      axios.get(apiUrl)
        .then(function (response) {
          // handle success
          // console.log(response);
          resolve(response);
        })
        .catch(function (error) {
          // handle error
          // console.log(error);
          reject(error);
        })
        .finally(function () {
          // always executed
        });

    })



  }

  post(apiUrl: string, params:any){
    return new Promise( (resolve, reject)=>{
      axios.post(apiUrl,params)
           .then(function (response) {
            // handle success
            // console.log(response);
            resolve(response);
          })
           .catch(function (error) {
            // handle error
            // console.log(error);
            reject(error);
          });



    }  );
  }



}
