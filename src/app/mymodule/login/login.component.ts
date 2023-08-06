import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  captchaData={
    svgImg:""   
  }
  loginData={
    username:"",
    password:"",
    verify:"",
    svgKey:""
  }

  constructor(){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

getCaptcha(){

}
  doLogin(){

  }


}
