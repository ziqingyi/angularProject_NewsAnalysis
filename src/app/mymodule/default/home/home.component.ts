import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
      text: 'piechart'
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
    series: [{
      type:"pie",   //must have type
      name: '人口数',
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
  };

  chartOptions2: Highcharts.Options={
    chart: {
      type: 'column'
    },
    title: {
      text: 'column'
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
    series: [{
      type:"column",
      name: 'Positive',
      data: [439, 715, 104, 1292, 144, 176.0]
    }, {
      name: 'Negative',
      type:"column",
      data: [299, 104, 106.4, 129.2, 144.0, 176.0]
    }]
  }

  constructor(){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }



}
