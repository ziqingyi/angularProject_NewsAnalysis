import { Component } from '@angular/core';
import { HttpService } from '../../../service/http.service';
import { StorageService } from '../../../service/storage.service';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss']
})
export class KeywordsComponent {

  isVisible = false;
  isOkLoading= false;//Whether to apply loading visual effect for OK button or not


  userinfo:any;


  inputAddData={
    keyword:"",
    may_keyword:"",
    nokeyword:"",
    frequency:""
  }
  
  listOfData = [
    {
      keyword: 'cost',
      may_keyword: 'profit',
      nokeyword: 'sales',
      frequency: '100'
    },
    {
      keyword: 'sales',
      may_keyword: 'increase',
      nokeyword: 'decrease',
      frequency: '100'
    },
  ];

  constructor(private http:HttpService,private storage:StorageService){
    this.userinfo = this.storage.get("userinfo");
    console.log(this.userinfo);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getkeywords();
  }

   showModal(): void {
    this.isVisible = true;
  }

  handleAdd(): void {
    // this.isOkLoading = true;
    // setTimeout(() => {
    //   this.isVisible = false;
    //   this.isOkLoading = false;
    // }, 3000);
    this.isOkLoading = true;
    console.log("handleAdd() inputAddData");
    console.log(this.inputAddData);

    var api = "/api/addKeywords";
    this.http.postWithConfig(api,this.inputAddData,{
      auth:{
        username:this.userinfo.token,
        password:''
      }
    }).then((response:any)=>{
        this.getkeywords();
        this.isVisible = false;
        this.isOkLoading = false;
    })


  }
  
  handleCancel(): void {
    this.isVisible = false;
  }

  getkeywords(){
     var api = "/api/keywordsList";
    this.http.getWithConfig(api,{
      auth:{
        username:this.userinfo.token,
        password:""
      }
    }).then((response:any)=>{
      console.log("response from keywordsList: ");
       console.log(response);
      if(response.data.success == true){
        this.listOfData=response.data.result;
      }
      
    })



  }


}
