import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { StorageService } from 'src/app/service/storage.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent {
    alarm={
      phone:"",
      email:""
    }
    userinfo:any;
    constructor(private http:HttpService,private storage:StorageService,private message:NzMessageService){
      this.userinfo = this.storage.get("userinfo");
      console.log(this.userinfo);
    }
  
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.getAlarm();
    }
    //success, error, marning
    createMessage(type:string, msg:string):void{
      this.message.create(type,msg+  `this is a message of ${type}`);
    }

    getAlarm(){
      var api = "/api/alarmList";
        this.http.getWithConfig(api,{
          auth:{
            username:this.userinfo.token,
            password:""
          }
        }).then((response:any)=>{
          console.log("response from alarmList: ");
          console.log(response);
          if(response.data.success == true){
            this.alarm.phone=response.data.result.tel;
            this.alarm.email=response.data.result.email;
          }
          
        })
    }

    setAlarm(){

      var api = "/api/editAlarm";

      this.http.postWithConfig(api,this.alarm,{
        auth:{
          username:this.userinfo.token,
          password:''
        }
      }).then((response:any)=>{
        console.log("response from handleEdit: ");
        console.log(response);
       if(response.data.success == true){
        this.createMessage("success","modify success");
       }
       else{
        this.createMessage("error","modify failed");
       }
      })


    }







}
