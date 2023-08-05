import { Component } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';

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
    pageSize = 5;
    pageIndex = 1;

    listOfData = [
      {
        id:1,
        title: 'profit increase',
        urL:"http://www.news.com",
        type: 'positive',
        keyword: 'profit',
        site: "news.com",
        update_time:'2022-06-06',
        add_time:"2022-06-06",
  
      },
      {
        id:2,
        title: 'cost increase',
        urL:"https://abc.com/",
        type: 'negative',
        keyword: 'cost',
        site: "abc.com",
        update_time:'2023-12-01',
        add_time:"2023-12-01",
  
      }, 
      {
        id:3,
        title: 'sales increase',
        urL:"https://edition.cnn.com/",
        type: 'positive',
        keyword: 'sales',
        site: "CNN",
        update_time:'2022-12-30',
        add_time:"2022-12-30",
  
      },
      {
        id:4,
        title: 'number of retailers increase',
        urL:"http://www.news.com",
        type: 'positive',
        keyword: 'profit',
        site: "news.com",
        update_time:'2022-06-06',
        add_time:"2022-06-06",
  
      },
      {
        id:5,
        title: 'product fault rate',
        urL:"https://abc.com/",
        type: 'negative',
        keyword: 'cost',
        site: "abc.com",
        update_time:'2023-12-01',
        add_time:"2023-12-01",
  
      }, 
      {
        id:6,
        title: 'high quality ',
        urL:"https://edition.cnn.com/",
        type: 'positive',
        keyword: 'sales',
        site: "CNN",
        update_time:'2022-12-30',
        add_time:"2022-12-30",
      },
      {
        id:7,
        title: 'customer satisfaction high ',
        urL:"https://edition.cnn.com/",
        type: 'positive',
        keyword: 'sales',
        site: "CNN",
        update_time:'2022-12-30',
        add_time:"2022-12-30",
      }
    ];
    constructor(){
      //update total num of data
      this.total = this.listOfData.length;
    }
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      
    }

    onQueryParamsChange(params: NzTableQueryParams):void
    {
      console.log(params);
    }
}
