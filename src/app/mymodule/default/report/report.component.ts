import { Component } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { HttpService } from 'src/app/service/http.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {

    start_date = "";
    end_date = "";
 
    loading = false;
    total = 1;
    pageSize = 5;//number of records per page
    pageIndex = 1;//current page

    userinfo:any;//user information
    listOfData:any = [
      {
        id:1,
        title: 'profit increase',
        url:"http://www.news.com",
        type: 1,
        keywords: 'profit',
        site: "news.com",
        update_time:0 ,//'2022-06-06',
        add_time:0 ,//"2022-06-06",
  
      },
      {
        id:2,
        title: 'cost increase',
        url:"https://abc.com/",
        type: -1,
        keywords: 'cost',
        site: "abc.com",
        update_time:0 ,//'2023-12-01',
        add_time:0 ,//"2023-12-01",
  
      }, 
      {
        id:3,
        title: 'sales increase',
        url:"https://edition.cnn.com/",
        type: 1,
        keywords: 'sales',
        site: "CNN",
        update_time:0 ,//'2022-12-30',
        add_time:0 ,//"2022-12-30",
  
      },
      {
        id:4,
        title: 'number of retailers increase',
        url:"http://www.news.com",
        type: 1,
        keywords: 'profit',
        site: "news.com",
        update_time:0 ,//'2022-06-06',
        add_time:0 ,//"2022-06-06",
  
      },
      {
        id:5,
        title: 'product fault rate',
        url:"https://abc.com/",
        type: -1,
        keywords: 'cost',
        site: "abc.com",
        update_time:0 ,//'2023-12-01',
        add_time:0 ,//"2023-12-01",
  
      }, 
      {
        id:6,
        title: 'high quality ',
        url:"https://edition.cnn.com/",
        type: 1,
        keywords: 'sales',
        site: "CNN",
        update_time:0 ,//'2022-12-30',
        add_time:0 ,//"2022-12-30",
      },
      {
        id:7,
        title: 'customer satisfaction high ',
        url:"https://edition.cnn.com/",
        type: 1,
        keywords: 'sales',
        site: "CNN",
        update_time:0 ,//'2022-12-30',
        add_time:0 ,//"2022-12-30",
      }
    ];//report information

    constructor(private http:HttpService,private storage:StorageService){
      //update total num of data
      console.log("ReportTotal in constructor:");
      this.total = this.listOfData.length;
      console.log(this.total);
      console.log("ReportComponent");
      this.userinfo = this.storage.get("userinfo");
      console.log(this.userinfo);
    }
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.getReportList();
    }

    getReportList():void{
      this.loading = true;//loading not finished
      var api = `/api/reportList?page=${this.pageIndex}&pageSize=${this.pageSize}`;
      this.http.getWithConfig(api,{
        auth:{
          username:this.userinfo.token,
          password:""
        }
      }).then((response:any)=>{
        console.log("response from reportList: ");
        console.log(response);
        if(response.data.success == true){
          this.listOfData=response.data.result;
          console.log("ReportTotal after ngOnInit() getReportList()");
          this.total = response.data.total;
          console.log(this.total);
          this.loading = false; //loading is finished, hide the loading 
        }
        
      })
    }

    onQueryParamsChange(params: NzTableQueryParams):void
    {
      console.log("onQueryParamsChange: ");
      console.log(params);
      this.pageIndex = params.pageIndex;
      this.getReportList();
    }



}
