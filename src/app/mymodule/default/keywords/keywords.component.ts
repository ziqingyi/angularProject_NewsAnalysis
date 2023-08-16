import { Component } from '@angular/core';
import { HttpService } from '../../../service/http.service';
import { StorageService } from '../../../service/storage.service';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss']
})
export class KeywordsComponent {

  isAddVisible = false;
  isEditVisible = false;
  isOkAddLoading= false;//Whether to apply loading visual effect for OK button or not
  isOkEditLoading= false;//Whether to apply loading visual effect for OK button or not


  userinfo:any;


  inputAddData={
    keyword:"",
    may_keyword:"",
    nokeyword:"",
    frequency:""
  }
  inputEditData={
    keyword:"",
    may_keyword:"",
    nokeyword:"",
    frequency:""
  }
  listOfData = [
    {
      id:1,
      keyword: 'cost',
      may_keyword: 'profit',
      nokeyword: 'sales',
      frequency: '100'
    },
    {
      id:2,
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
    this.isAddVisible = true;
  }

  handleAdd(): void {
    // this.isOkLoading = true;
    // setTimeout(() => {
    //   this.isVisible = false;
    //   this.isOkLoading = false;
    // }, 3000);
    this.isOkAddLoading = true;
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
        this.isAddVisible = false;
        this.isOkAddLoading = false;
    })


  }
  

  handleCancel(): void {
    this.isAddVisible = false;
    this.isEditVisible= false;
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


  showEditModel(id:any)
  {
    this.isEditVisible = true;
    console.log(id);

    var api = "/api/oneKeywordsList?id="+id;

    this.http.getWithConfig(api,{
      auth:{
        username:this.userinfo.token,
        password:''
      }
    }).then((response:any)=>{
      console.log("response from keywordsList: ");
      console.log(response);
     if(response.data.success == true){
      //  this.inputEditData.keyword=response.data.result.keyword;
      //  this.inputEditData.may_keyword=response.data.result.may_keyword;
      //  this.inputEditData.nokeyword=response.data.result.nokeyword;
      //  this.inputEditData.frequency=response.data.result.frequency;
      this.inputEditData=response.data.result;
     }
    })
  }

  
  handleEdit(){
    this.isOkEditLoading = true;


    var api = "/api/editKeywords";

    this.http.postWithConfig(api,this.inputEditData,{
      auth:{
        username:this.userinfo.token,
        password:''
      }
    }).then((response:any)=>{
      console.log("response from handleEdit: ");
      console.log(response);
     if(response.data.success == true){
      this.getkeywords();
      this.isEditVisible = false;
      this.isOkEditLoading = false;
     }
    })
  }

  deleteKeywords(id:any) 
  {
    var flag=confirm("confirm delete?");
    if (flag){
      var api = "/api/deleteKeywords?id="+id;
      this.http.getWithConfig(api,{
        auth:{
          username:this.userinfo.token,
          password:''
        }
      }).then((response:any)=>{
        this.getkeywords();
      })
    }
  }


}
