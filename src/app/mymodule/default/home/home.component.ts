import { Component, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpService } from '../../../service/http.service';
import { StorageService } from '../../../service/storage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  @ViewChild("pieChart") pieChart:any;
  @ViewChild("columnChart") columnChart:any;

  userinfo:any;

  Highcharts: typeof Highcharts = Highcharts;
  
  chartOptions1: Highcharts.Options =  {
    chart: {
      // plotBackgroundColor: null,
      // plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      backgroundColor: "#eee"
    },
    credits:{
      enabled:false   //remove credit
    },
    title: {
      text: 'news anaylsis pie chart'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color:  'black'
          }
        }
      }
    },
    series:[]
    // series: [{
    //   type:"pie",   //must have type
    //   name: 'population',
    //   colorByPoint: true,
    //   data: [{
    //     name: 'option1',
    //     y: 6111111,
    //     sliced: true,
    //     selected: true
    //   }, {
    //     name: 'option2',
    //     y: 8312421
    //   }, {
    //     name: 'option3',
    //     y: 5312421
    //   }, {
    //     name: 'option4',
    //     y: 4532421
    //   },]
    // }]
  };

  chartOptions2: Highcharts.Options={
    chart: {
      type: 'column'
    },
    title: {
      text: 'news analysis column table'
    },
    subtitle: {
      text: 'data source:xxxxx'
    },
    xAxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'April', 'May', 'June'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'amount'
      }
    },
    tooltip: {
      // head +  each  point + footer = table
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        borderWidth: 0
      }
    },
    // https://api.highcharts.com/highcharts/plotOptions.column
    series:[]
    // series: [{
    //   type:"column",
    //   name: 'Positive',
    //   data: [439, 715, 104, 1292, 144, 176.0]
    // }, {
    //   name: 'Negative',
    //   type:"column",
    //   data: [299, 104, 106.4, 129.2, 144.0, 176.0]
    // }]
  }

  constructor(private http:HttpService,private storage:StorageService){
      this.userinfo = this.storage.get("userinfo");
      console.log(this.userinfo);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getPieData();
    this.getColumnData();
  }

  getPieData() {
    var api = "/api/areaOptions";
    this.http.getWithConfig(api, {
      auth: {
        username: this.userinfo.token,
        password: ""
      }
    }).then((response: any) => 
    {
      console.log("response from getPieData: ");
      console.log(response);

      console.log("this.pieChart object:");
      console.log(this.pieChart);

      if (response.data.success == true) {
          let tempArr = [];
          var pieData = response.data;
          for (let i = 0; i < pieData.result.length; i++) 
          {
            if (i == 0) {
              tempArr.push({
                name: pieData.result[i].title,
                y: pieData.result[i].count,
                slice: true,
                selected: true
              }
              )
            }

            tempArr.push({
              name: pieData.result[i].title,
              y: pieData.result[i].count
            })
          }

          // add to #pieChart
          this.pieChart.chart.addSeries({
            type: "pie",
            name: "news analysis",
            colorByPoint: true,
            data: tempArr
          })
      }
      else// if (response.data.success == true)
      {
        console.log("update chart when response is failed: ");

        // add default to #pieChart
        this.pieChart.chart.addSeries({
          type: "pie",
          name: "news analysis",
          colorByPoint: true,
          data: []
        })
        //update pie chart
        this.pieChart.chart.update(
          {
            series: [{
              type: "pie",   //must have type
                name: 'nes analysis',
                colorByPoint: true,
                data: [{
                  name: 'option1',
                  y: 6111111,
                  sliced: true,
                  selected: true
                }, {
                  name: 'option2',
                  y: 8312421
                }, {
                  name: 'option3',
                  y: 5312421
                }, {
                  name: 'option4',
                  y: 4532421
                },]
              }]    
          }
          );
      }

    });

  }

  getColumnData(){
    var api = "/api/columnOptions";
    this.http.getWithConfig(api,{
      auth:{
        username:this.userinfo.token,
        password:""
      }
    }).then((response:any)=>{
      console.log("response from getColumnData: ");
      console.log(response);

      if(response.data.success == true){

        var columnData = response.data.result;

        for (let i = 0; i <columnData.length; i++) 
        {
            this.columnChart.chart.addSeries({
              name:columnData[i].title,
              data:columnData[i].data,
              type:"column"
            })
        }
        //update one column data
        this.columnChart.chart.series[0].update(
          {
            data:[1229.9, 71.5, 306.4, 429.2, 144.0, 176.0, 135.6, 248.5, 216.4, 194.1, 95.6, 54.4]
          }
        )
      }
     else //if (response.data.success == true) 
     {
          console.log("update chart when response is failed: ");
          // add default to #columnChart
          this.columnChart.chart.addSeries({
                type:"column",
                name: 'Positive',
                data:[]
              })
         //update column chart              
          this.columnChart.chart.update(
            {
              series: [{
                type: "column",
                name: 'Positive',
                data: [439, 715, 104, 1292, 144, 176.0]
              }, {
                name: 'Negative',
                type: "column",
                data: [299, 104, 106.4, 129.2, 144.0, 176.0]
              }]
            }
          );

     }

    });

  }

}
