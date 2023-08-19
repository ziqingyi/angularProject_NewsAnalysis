import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default.component';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { AlarmComponent } from './alarm/alarm.component';

import { loginGuard } from 'src/app/service/login.guard';
import { PositiveReportComponent } from './positive-report/positive-report.component';
import { NegativeReportComponent } from './negative-report/negative-report.component';

const routes: Routes = [
  {
    path:"", 
    component:DefaultComponent,
    canActivate:[loginGuard],//--only check once in default
    children:[
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"report",
        component:ReportComponent,
        canActivate:[loginGuard]// check in report component
      },
      {
        path:"positive-report",
        component:PositiveReportComponent,
        canActivate:[loginGuard]// check in report component
      },
      {
        path:"negative-report",
        component:NegativeReportComponent,
        canActivate:[loginGuard]// check in report component
      },
      {
        path:"keywords",
        component:KeywordsComponent
      },
      {
        path:"alarm",
        component:AlarmComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
