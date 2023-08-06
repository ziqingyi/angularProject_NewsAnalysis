import { Component } from '@angular/core';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  captchaData = {
    svgImg: "",
    svgKey:""
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
  constructor(private http: HttpService) {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   
  }

  getCaptcha() {

    var api = "http://yuqing.itying.com/api/captcha";
    this.http.get(api).then((response: any) => {
      console.log(response);
      this.captchaData.svgImg = response.data.svgImg;
      this.captchaData.svgKey = response.data.svgKey;
      
      const svgImgDom:HTMLElement|null = document.querySelector("#svgImg");
      console.log(svgImgDom);
      if(svgImgDom){
        svgImgDom.innerHTML = this.captchaData.svgImg;
      }
    }
    );
  }
  doLogin() {

  }


}
