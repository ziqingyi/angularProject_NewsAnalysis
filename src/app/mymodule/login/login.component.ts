import { Component } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  captchaData = {
    svgImg: "",
    // svgKey:""
  }
  loginData = {
    username: "",
    password: "",
    verify: "",
    svgKey: ""
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.getCaptcha();
  }
  constructor(private http: HttpService, 
              private router:Router,
              private storage:StorageService) {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   
  }

  getCaptcha() {
    console.log('getCaptcha()');
    var api = "http://yuqing.itying.com/api/captcha";
    this.http.get(api).then((response: any) => {
      console.log('response:');
      console.log(response);

      this.captchaData.svgImg = response.data.svgImg;
      this.loginData.svgKey = response.data.svgKey;
      
      console.log('captchaData and loginData in getCaptcha');
      console.log(this.captchaData);
      console.log(this.loginData);

      const svgImgDom:HTMLElement|null = document.querySelector("#svgImg");
      console.log('svgImgDom:');
      console.log(svgImgDom);
      if(svgImgDom){
        svgImgDom.innerHTML = this.captchaData.svgImg;
      }
    }
    );
  }
  //admin 123456
  doLogin() {
    console.log('doLogin()');

    console.log('captchaData and loginData in login');
    console.log(this.captchaData);
    console.log(this.loginData);

    var api="http://yuqing.itying.com/api/doLogin";

    this.http.post(api,this.loginData)
             .then((response:any)=>{
                      console.log('response from login server');
                      console.log(response);

                      if(response.data.success)
                      {
                        //save user information
                        this.storage.set("userinfo", response.data.result);
                        
                        //router to default module
                        this.router.navigate(['/default']);// inject angular router service
                      }
                      else{
                        alert(response.data.message)
                      }
                   });
  }


}
